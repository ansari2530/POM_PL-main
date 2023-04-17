import { test, expect } from '@playwright/test';
import {SignUpPage1} from '../pages/Signup1'
import {OtpPage} from '../pages/OtpPage'
import {SignUpPage2} from '../pages/Signup2'
import { SignUpPage3 } from '../pages/Signup3';


test('account creation', async ({ page }) => {

  await page.goto('https://beta.yocket.com/login');

  const a = new SignUpPage1(page);
  await a.SignUp ('9557221566')

  const b = new OtpPage(page);
  await b.OTP()

  const c = new SignUpPage2 (page);
  await c.SignUp2 ('salman', 'ansari', 'gjhfjfg@yopmail.com')


  const d = new SignUpPage3 (page);
   await d.SignUp3()

    
  
  });