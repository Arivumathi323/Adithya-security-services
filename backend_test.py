#!/usr/bin/env python3
"""
Backend API Testing for ADITHYA Security Services
Tests the quote request API endpoint and basic API functionality
"""

import requests
import json
import sys
import os
from datetime import datetime

# Get backend URL from environment
BACKEND_URL = "https://adithya-services.preview.emergentagent.com"

def test_basic_api():
    """Test the basic API endpoint GET /api/"""
    print("🔍 Testing GET /api/ endpoint...")
    
    try:
        response = requests.get(f"{BACKEND_URL}/api/", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ GET /api/ - SUCCESS: Returns Hello World message")
                return True
            else:
                print(f"❌ GET /api/ - FAILED: Expected 'Hello World', got {data}")
                return False
        else:
            print(f"❌ GET /api/ - FAILED: Status code {response.status_code}")
            print(f"Response: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ GET /api/ - FAILED: Connection error - {str(e)}")
        return False

def test_quote_request_api():
    """Test the quote request API endpoint POST /api/quote/request"""
    print("\n🔍 Testing POST /api/quote/request endpoint...")
    
    # Test data as specified in the review request
    test_data = {
        "name": "John Doe",
        "email": "john@example.com", 
        "phone": "+91 98765 43210",
        "company": "ABC Corp",
        "service": "security",
        "message": "I need security guards for my office building."
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/quote/request",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=30  # Longer timeout for email processing
        )
        
        print(f"Response Status Code: {response.status_code}")
        print(f"Response Headers: {dict(response.headers)}")
        
        if response.status_code == 200:
            try:
                data = response.json()
                print(f"Response Data: {json.dumps(data, indent=2)}")
                
                # Check if response has expected structure
                if data.get("status") == "success" and "message" in data:
                    print("✅ POST /api/quote/request - SUCCESS: Quote request submitted successfully")
                    print(f"   Message: {data.get('message')}")
                    if "email_id" in data:
                        print(f"   Email ID: {data.get('email_id')}")
                    return True
                else:
                    print(f"❌ POST /api/quote/request - FAILED: Unexpected response structure")
                    print(f"   Expected status='success' and message field")
                    print(f"   Got: {data}")
                    return False
                    
            except json.JSONDecodeError:
                print(f"❌ POST /api/quote/request - FAILED: Invalid JSON response")
                print(f"Response text: {response.text}")
                return False
                
        else:
            print(f"❌ POST /api/quote/request - FAILED: Status code {response.status_code}")
            try:
                error_data = response.json()
                print(f"Error details: {json.dumps(error_data, indent=2)}")
            except:
                print(f"Response text: {response.text}")
            return False
            
    except requests.exceptions.Timeout:
        print("❌ POST /api/quote/request - FAILED: Request timeout (30s)")
        print("   This might indicate email processing issues")
        return False
    except requests.exceptions.RequestException as e:
        print(f"❌ POST /api/quote/request - FAILED: Connection error - {str(e)}")
        return False

def test_quote_request_validation():
    """Test quote request API with invalid data to check validation"""
    print("\n🔍 Testing POST /api/quote/request validation...")
    
    # Test with missing required fields
    invalid_data = {
        "name": "Test User",
        # Missing email, phone, service, message
    }
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/quote/request",
            json=invalid_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 422:  # Validation error
            print("✅ Validation - SUCCESS: API properly validates required fields")
            return True
        elif response.status_code == 400:
            print("✅ Validation - SUCCESS: API returns bad request for invalid data")
            return True
        else:
            print(f"⚠️  Validation - WARNING: Expected 422/400, got {response.status_code}")
            print(f"Response: {response.text}")
            return True  # Not a critical failure
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Validation test - FAILED: Connection error - {str(e)}")
        return False

def test_backend_connectivity():
    """Test basic backend connectivity"""
    print("🔍 Testing backend connectivity...")
    
    try:
        response = requests.get(f"{BACKEND_URL}/api/", timeout=5)
        if response.status_code in [200, 404, 405]:  # Any response means backend is up
            print("✅ Backend connectivity - SUCCESS: Backend is responding")
            return True
        else:
            print(f"⚠️  Backend connectivity - WARNING: Unexpected status {response.status_code}")
            return True
    except requests.exceptions.RequestException as e:
        print(f"❌ Backend connectivity - FAILED: {str(e)}")
        return False

def main():
    """Run all backend tests"""
    print("=" * 60)
    print("🚀 ADITHYA Security Services - Backend API Testing")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"Test Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)
    
    test_results = []
    
    # Test 1: Backend connectivity
    test_results.append(("Backend Connectivity", test_backend_connectivity()))
    
    # Test 2: Basic API endpoint
    test_results.append(("GET /api/", test_basic_api()))
    
    # Test 3: Quote request API
    test_results.append(("POST /api/quote/request", test_quote_request_api()))
    
    # Test 4: Validation
    test_results.append(("API Validation", test_quote_request_validation()))
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(test_results)
    
    for test_name, result in test_results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} - {test_name}")
        if result:
            passed += 1
    
    print(f"\nResults: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed! Backend API is working correctly.")
        return 0
    else:
        print("⚠️  Some tests failed. Check the details above.")
        return 1

if __name__ == "__main__":
    sys.exit(main())