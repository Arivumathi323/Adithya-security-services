import os
import asyncio
import logging
import resend
import base64
from io import BytesIO
from datetime import datetime
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from typing import Optional
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image
from reportlab.lib.enums import TA_CENTER, TA_LEFT

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/quote", tags=["Quote"])

# Initialize Resend
resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'adithyashs@gmail.com')

class QuoteRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    company: Optional[str] = None
    service: str
    message: str

def generate_quote_pdf(quote_data: QuoteRequest) -> bytes:
    """Generate a professional PDF for the quote request"""
    buffer = BytesIO()
    doc = SimpleDocTemplate(
        buffer,
        pagesize=A4,
        rightMargin=50,
        leftMargin=50,
        topMargin=50,
        bottomMargin=50
    )
    
    styles = getSampleStyleSheet()
    
    # Custom styles
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=24,
        textColor=colors.HexColor('#1a1c1b'),
        spaceAfter=20,
        alignment=TA_CENTER
    )
    
    header_style = ParagraphStyle(
        'CustomHeader',
        parent=styles['Heading2'],
        fontSize=14,
        textColor=colors.HexColor('#3f4816'),
        spaceBefore=15,
        spaceAfter=10
    )
    
    normal_style = ParagraphStyle(
        'CustomNormal',
        parent=styles['Normal'],
        fontSize=11,
        textColor=colors.HexColor('#302f2c'),
        spaceAfter=8
    )
    
    elements = []
    
    # Header with company branding
    header_data = [
        [Paragraph("<b>ADITHYA Security Services</b>", ParagraphStyle('Brand', fontSize=18, textColor=colors.HexColor('#1a1c1b'))),
         Paragraph(f"Quote Request<br/><font size=10>{datetime.now().strftime('%d %B %Y, %I:%M %p')}</font>", 
                   ParagraphStyle('Date', fontSize=12, alignment=TA_CENTER, textColor=colors.HexColor('#888680')))]
    ]
    
    header_table = Table(header_data, colWidths=[3.5*inch, 3*inch])
    header_table.setStyle(TableStyle([
        ('ALIGN', (0, 0), (0, 0), 'LEFT'),
        ('ALIGN', (1, 0), (1, 0), 'RIGHT'),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 20),
    ]))
    elements.append(header_table)
    
    # Divider line
    divider_data = [['']]
    divider_table = Table(divider_data, colWidths=[6.5*inch])
    divider_table.setStyle(TableStyle([
        ('LINEBELOW', (0, 0), (-1, -1), 2, colors.HexColor('#d9fb06')),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 15),
    ]))
    elements.append(divider_table)
    elements.append(Spacer(1, 20))
    
    # Title
    elements.append(Paragraph("SERVICE QUOTE REQUEST", title_style))
    elements.append(Spacer(1, 20))
    
    # Client Information Section
    elements.append(Paragraph("CLIENT INFORMATION", header_style))
    
    client_data = [
        ['Name:', quote_data.name],
        ['Email:', quote_data.email],
        ['Phone:', quote_data.phone],
        ['Company:', quote_data.company or 'Not specified'],
    ]
    
    client_table = Table(client_data, colWidths=[1.5*inch, 5*inch])
    client_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (0, -1), colors.HexColor('#f5f5f0')),
        ('TEXTCOLOR', (0, 0), (0, -1), colors.HexColor('#3f4816')),
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 11),
        ('PADDING', (0, 0), (-1, -1), 10),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#dfddd6')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    elements.append(client_table)
    elements.append(Spacer(1, 25))
    
    # Service Information Section
    elements.append(Paragraph("SERVICE DETAILS", header_style))
    
    service_names = {
        'security': 'Security Services',
        'housekeeping': 'Housekeeping Services',
        'manpower': 'Trained Manpower',
        'custom': 'Custom Solutions'
    }
    
    service_data = [
        ['Service Required:', service_names.get(quote_data.service, quote_data.service)],
    ]
    
    service_table = Table(service_data, colWidths=[1.5*inch, 5*inch])
    service_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (0, -1), colors.HexColor('#f5f5f0')),
        ('BACKGROUND', (1, 0), (1, -1), colors.HexColor('#d9fb06')),
        ('TEXTCOLOR', (0, 0), (0, -1), colors.HexColor('#3f4816')),
        ('TEXTCOLOR', (1, 0), (1, -1), colors.HexColor('#1a1c1b')),
        ('FONTNAME', (0, 0), (-1, -1), 'Helvetica-Bold'),
        ('FONTSIZE', (0, 0), (-1, -1), 12),
        ('PADDING', (0, 0), (-1, -1), 12),
        ('GRID', (0, 0), (-1, -1), 0.5, colors.HexColor('#dfddd6')),
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
    ]))
    elements.append(service_table)
    elements.append(Spacer(1, 25))
    
    # Message Section
    elements.append(Paragraph("CLIENT MESSAGE", header_style))
    
    message_style = ParagraphStyle(
        'Message',
        parent=styles['Normal'],
        fontSize=11,
        textColor=colors.HexColor('#302f2c'),
        leading=16,
        borderPadding=10,
    )
    
    message_data = [[Paragraph(quote_data.message, message_style)]]
    message_table = Table(message_data, colWidths=[6.5*inch])
    message_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#fafaf8')),
        ('PADDING', (0, 0), (-1, -1), 15),
        ('BOX', (0, 0), (-1, -1), 1, colors.HexColor('#dfddd6')),
    ]))
    elements.append(message_table)
    elements.append(Spacer(1, 40))
    
    # Footer
    footer_style = ParagraphStyle(
        'Footer',
        parent=styles['Normal'],
        fontSize=9,
        textColor=colors.HexColor('#888680'),
        alignment=TA_CENTER
    )
    
    footer_text = """
    <b>ADITHYA Security Services</b><br/>
    2/16 Subramanian Street, Chepauk, Chennai - 600005, Tamil Nadu<br/>
    Phone: +91 82489 50799 | +91 90941 60520<br/>
    Email: adithyashs@gmail.com
    """
    elements.append(Paragraph(footer_text, footer_style))
    
    doc.build(elements)
    buffer.seek(0)
    return buffer.getvalue()

def generate_email_html(quote_data: QuoteRequest) -> str:
    """Generate HTML email content"""
    service_names = {
        'security': 'Security Services',
        'housekeeping': 'Housekeeping Services',
        'manpower': 'Trained Manpower',
        'custom': 'Custom Solutions'
    }
    
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f5f5f0; margin: 0; padding: 20px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <!-- Header -->
            <tr>
                <td style="background-color: #1a1c1b; padding: 30px; text-align: center;">
                    <h1 style="color: #d9fb06; margin: 0; font-size: 24px;">ADITHYA Security Services</h1>
                    <p style="color: #888680; margin: 10px 0 0; font-size: 14px;">New Quote Request Received</p>
                </td>
            </tr>
            
            <!-- Content -->
            <tr>
                <td style="padding: 30px;">
                    <h2 style="color: #1a1c1b; font-size: 18px; margin: 0 0 20px; border-bottom: 2px solid #d9fb06; padding-bottom: 10px;">Client Information</h2>
                    
                    <table width="100%" cellpadding="8" cellspacing="0" style="margin-bottom: 25px;">
                        <tr>
                            <td style="width: 120px; font-weight: bold; color: #3f4816;">Name:</td>
                            <td style="color: #302f2c;">{quote_data.name}</td>
                        </tr>
                        <tr style="background-color: #fafaf8;">
                            <td style="font-weight: bold; color: #3f4816;">Email:</td>
                            <td style="color: #302f2c;"><a href="mailto:{quote_data.email}" style="color: #3f4816;">{quote_data.email}</a></td>
                        </tr>
                        <tr>
                            <td style="font-weight: bold; color: #3f4816;">Phone:</td>
                            <td style="color: #302f2c;"><a href="tel:{quote_data.phone}" style="color: #3f4816;">{quote_data.phone}</a></td>
                        </tr>
                        <tr style="background-color: #fafaf8;">
                            <td style="font-weight: bold; color: #3f4816;">Company:</td>
                            <td style="color: #302f2c;">{quote_data.company or 'Not specified'}</td>
                        </tr>
                    </table>
                    
                    <h2 style="color: #1a1c1b; font-size: 18px; margin: 0 0 15px; border-bottom: 2px solid #d9fb06; padding-bottom: 10px;">Service Required</h2>
                    <p style="background-color: #d9fb06; color: #1a1c1b; padding: 12px 20px; border-radius: 20px; display: inline-block; font-weight: bold; margin: 0 0 25px;">
                        {service_names.get(quote_data.service, quote_data.service)}
                    </p>
                    
                    <h2 style="color: #1a1c1b; font-size: 18px; margin: 0 0 15px; border-bottom: 2px solid #d9fb06; padding-bottom: 10px;">Message</h2>
                    <div style="background-color: #fafaf8; padding: 20px; border-radius: 8px; border-left: 4px solid #d9fb06;">
                        <p style="color: #302f2c; margin: 0; line-height: 1.6;">{quote_data.message}</p>
                    </div>
                </td>
            </tr>
            
            <!-- Footer -->
            <tr>
                <td style="background-color: #302f2c; padding: 20px; text-align: center;">
                    <p style="color: #888680; margin: 0; font-size: 12px;">
                        This quote request was submitted on {datetime.now().strftime('%d %B %Y at %I:%M %p')}<br/>
                        PDF attachment included with full details.
                    </p>
                </td>
            </tr>
        </table>
    </body>
    </html>
    """

@router.post("/request")
async def submit_quote_request(quote: QuoteRequest):
    """Submit a quote request and send email with PDF attachment"""
    try:
        # Generate PDF
        pdf_bytes = generate_quote_pdf(quote)
        pdf_base64 = base64.b64encode(pdf_bytes).decode('utf-8')
        
        # Generate email HTML
        html_content = generate_email_html(quote)
        
        # Prepare email with attachment
        params = {
            "from": SENDER_EMAIL,
            "to": [RECIPIENT_EMAIL],
            "subject": f"New Quote Request - {quote.name} ({quote.service.title()})",
            "html": html_content,
            "attachments": [
                {
                    "filename": f"Quote_Request_{quote.name.replace(' ', '_')}_{datetime.now().strftime('%Y%m%d')}.pdf",
                    "content": pdf_base64,
                    "content_type": "application/pdf"
                }
            ]
        }
        
        # Send email asynchronously
        email_response = await asyncio.to_thread(resend.Emails.send, params)
        
        logger.info(f"Quote request email sent successfully: {email_response}")
        
        return {
            "status": "success",
            "message": "Your quote request has been submitted successfully. We will contact you within 24 hours.",
            "email_id": email_response.get("id") if isinstance(email_response, dict) else str(email_response)
        }
        
    except Exception as e:
        logger.error(f"Failed to process quote request: {str(e)}")
        raise HTTPException(
            status_code=500, 
            detail=f"Failed to submit quote request. Please try again or contact us directly at +91 82489 50799"
        )
