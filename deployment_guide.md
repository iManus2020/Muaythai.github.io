# คู่มือการ Deploy เกมการ์ดนักมวยไทย Forex บน GitHub Pages

คู่มือนี้จะแนะนำวิธีการ deploy เกมการ์ดนักมวยไทย Forex บน GitHub Pages อย่างละเอียด

## ขั้นตอนที่ 1: เตรียมไฟล์สำหรับ GitHub Pages

1. ดาวน์โหลดไฟล์ที่เตรียมไว้สำหรับ GitHub Pages จากลิงค์ที่แนบมาให้
2. แตกไฟล์ ZIP และเตรียมไฟล์ทั้งหมดไว้ในโฟลเดอร์ที่ต้องการ

## ขั้นตอนที่ 2: สร้าง GitHub Repository

1. ล็อกอินเข้าบัญชี GitHub ของคุณ
2. คลิกที่ปุ่ม "New" เพื่อสร้าง repository ใหม่
3. ตั้งชื่อ repository ตามที่ต้องการ (เช่น "muaythai-forex-game")
4. เลือกให้ repository เป็นแบบ Public
5. คลิก "Create repository"

## ขั้นตอนที่ 3: แก้ไขไฟล์ next.config.js (สำคัญมาก)

1. เปิดไฟล์ `next.config.js` ในโฟลเดอร์ของโปรเจค
2. แก้ไขบรรทัดที่มี `basePath` และ `assetPrefix` โดยใส่ชื่อ repository ของคุณ:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // แก้ไขบรรทัดด้านล่างนี้ โดยเปลี่ยน 'your-repo-name' เป็นชื่อ repository ของคุณ
  basePath: '/muaythai-forex-game', // เปลี่ยนเป็นชื่อ repository ของคุณ
  assetPrefix: '/muaythai-forex-game/', // เปลี่ยนเป็นชื่อ repository ของคุณ
  trailingSlash: true,
};

module.exports = nextConfig;
```

3. บันทึกไฟล์

## ขั้นตอนที่ 4: Build โปรเจคใหม่

1. เปิด Terminal หรือ Command Prompt ในโฟลเดอร์ของโปรเจค
2. รันคำสั่งต่อไปนี้:

```bash
npm run build
```

3. หลังจาก build เสร็จ จะได้โฟลเดอร์ `out` ที่มีไฟล์ static ทั้งหมด

## ขั้นตอนที่ 5: สร้างไฟล์ .nojekyll

1. สร้างไฟล์ชื่อ `.nojekyll` (ไม่มีนามสกุล) ในโฟลเดอร์ `out`
2. ไฟล์นี้เป็นไฟล์เปล่า ไม่ต้องมีเนื้อหาใดๆ
3. ไฟล์นี้จะบอก GitHub Pages ไม่ให้ใช้ Jekyll ในการประมวลผลไฟล์ของคุณ

## ขั้นตอนที่ 6: อัพโหลดไฟล์ไปยัง GitHub

### วิธีที่ 1: ใช้ Git Command Line

1. เปิด Terminal หรือ Command Prompt ในโฟลเดอร์ `out`
2. รันคำสั่งต่อไปนี้:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/muaythai-forex-game.git
git push -u origin main
```

(แทนที่ `username` ด้วยชื่อผู้ใช้ GitHub ของคุณ และ `muaythai-forex-game` ด้วยชื่อ repository ของคุณ)

### วิธีที่ 2: ใช้ GitHub Desktop

1. ดาวน์โหลดและติดตั้ง [GitHub Desktop](https://desktop.github.com/)
2. ล็อกอินด้วยบัญชี GitHub ของคุณ
3. เลือก "Add an Existing Repository from your Hard Drive"
4. เลือกโฟลเดอร์ `out`
5. คลิก "Publish repository"
6. ตั้งชื่อ repository ให้ตรงกับที่สร้างไว้ในขั้นตอนที่ 2
7. คลิก "Publish repository"

## ขั้นตอนที่ 7: ตั้งค่า GitHub Pages

1. ไปที่หน้า repository ของคุณบน GitHub
2. คลิกที่แท็บ "Settings"
3. เลื่อนลงไปที่ส่วน "GitHub Pages"
4. ในส่วน "Source" เลือก "main" branch
5. คลิก "Save"
6. รอสักครู่ (อาจใช้เวลา 5-10 นาที) ให้ GitHub Pages deploy เว็บไซต์ของคุณ

## ขั้นตอนที่ 8: เข้าถึงเว็บไซต์ของคุณ

1. หลังจาก deploy เสร็จสิ้น คุณจะเห็นข้อความ "Your site is published at https://username.github.io/muaythai-forex-game/"
2. คลิกที่ลิงค์นี้เพื่อเข้าชมเว็บไซต์ของคุณ

## การแก้ไขปัญหาที่พบบ่อย

### ปัญหา: เว็บไซต์แสดง 404 File not found

**สาเหตุที่เป็นไปได้:**
1. ไม่ได้สร้างไฟล์ `.nojekyll`
2. ตั้งค่า `basePath` และ `assetPrefix` ไม่ถูกต้อง
3. ยังไม่ได้รอให้ GitHub Pages deploy เสร็จสมบูรณ์

**วิธีแก้ไข:**
1. ตรวจสอบว่ามีไฟล์ `.nojekyll` ในโฟลเดอร์ `out`
2. ตรวจสอบว่าตั้งค่า `basePath` และ `assetPrefix` ถูกต้องตามชื่อ repository ของคุณ
3. รอประมาณ 5-10 นาทีให้ GitHub Pages deploy เสร็จสมบูรณ์

### ปัญหา: รูปภาพหรือ CSS ไม่โหลด

**สาเหตุที่เป็นไปได้:**
1. ตั้งค่า `assetPrefix` ไม่ถูกต้อง
2. ไม่ได้ตั้งค่า `images: { unoptimized: true }`

**วิธีแก้ไข:**
1. ตรวจสอบว่าตั้งค่า `assetPrefix` ถูกต้องตามชื่อ repository ของคุณ
2. ตรวจสอบว่ามีการตั้งค่า `images: { unoptimized: true }` ในไฟล์ `next.config.js`

## หมายเหตุสำคัญ

- ทุกครั้งที่มีการแก้ไขโค้ด คุณต้อง build โปรเจคใหม่และอัพโหลดไฟล์ไปยัง GitHub อีกครั้ง
- หากคุณเปลี่ยนชื่อ repository ในภายหลัง คุณต้องแก้ไข `basePath` และ `assetPrefix` ในไฟล์ `next.config.js` ให้ตรงกับชื่อใหม่
- GitHub Pages อาจใช้เวลาสักครู่ในการอัพเดตเว็บไซต์หลังจากที่คุณ push การเปลี่ยนแปลงใหม่
