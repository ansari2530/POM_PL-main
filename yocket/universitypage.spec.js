import { test, expect } from '@playwright/test';
import { OtpPage } from '../pages/OtpPage';
import {SignUpPage1} from '../pages/Signup1';
import {header} from '../pages/header';
import {connect} from '../pages/connect';
import {visiprof} from '../pages/visiprof';
import {myprof} from '../pages/myprof';

test.beforeEach(async ({ page }) => {

 
  await page.goto('https://beta.yocket.com/login');

  const a = new SignUpPage1(page);
  await a.SignUp ('9456167217')

  const b = new OtpPage (page);
  await b.OTP ()

})



test('university page navigation from explore', async ({ page }) => {

  const c = new header (page);
  await c.exploreclick()

  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'Georgia Institute of Technology' }).click()
  ]);
});


test('university page navigation from visitors profile', async ({ page }) => {


  const c = new header (page);
  await c.connectclick ()

  const d = new connect (page);
  await d.otheruserclick ()

  const e = new visiprof (page);
  await e.tabsclick ()

  await e.univer


});


test('university page navigation from My Profile', async ({ page }) => {

  const c = new header (page)
  await c.profileclick ()

  const f = new myprof (page)
  await f.MPapplicationclick ()
  await f.univnameclick()

  


});