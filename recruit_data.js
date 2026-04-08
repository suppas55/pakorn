// Applicant Data from Google Sheets - A1 ข้อมูลผู้สมัครทั้งหมด
// Retrieved: 2026-04-08

const APPLICANTS = [
  {no:1, id:2476, status:"จ้างงาน", date:"26/04/2017", prefix:"นาย", firstName:"อรุณ", lastName:"เค้าทอง", phone:"1220700047375", position1:"สมาชิกที่ปรึกษางานบริการ(ช่างยนต์)", position2:"สมาชิกที่ปรึกษางานบริการ(ช่างยนต์)", salary:"8,001-10,000 บาท", nickname:"แจ๊บ", age:20, address:"108/5", edu:"ปวส.", major:"เทคนิคเครื่องกล", gpa:3.51},
  {no:2, id:4074, status:"จ้างงาน", date:"07/02/2018", prefix:"นาย", firstName:"อนุวัฒน์", lastName:"แก้วรอด", phone:"1220700025258", position1:"สมาชิกช่างกรุ๊ปรถเล็ก-สาขาสอยดาว", position2:"สมาชิกซ่อมบำรุง", salary:"10,001-12,000 บาท", nickname:"วัฒน์", age:0, address:"115/5หมู่11", edu:"ปวส.", major:"เครื่องกล", gpa:3.36},
  {no:3, id:7596, status:"จ้างงาน", date:"17/10/2020", prefix:"นาย", firstName:"ทรงยุทธ", lastName:"เมฆมี", phone:"1240900057072", position1:"สมาชิกทีมสานสันพันธ์", position2:"สมาชิกช่างกรุ๊ปรถเล็ก-สาขาสอยดาว", salary:"12,001-15,000 บาท", nickname:"อาร์ม", age:22, address:"444/144", edu:"ปวส.", major:"ช่างยนต์-เทคนิคเครื่องกล", gpa:3.09},
  {no:4, id:7779, status:"ใบสมัครซ้ำ", date:"04/01/2021", prefix:"นางสาว", firstName:"รัชดาภรณ์", lastName:"ขอจัดกลาง", phone:"1301000075104", position1:"สมาชิกประเมินราคาและบริการลูกค้า", position2:"สมาชิกบริการลูกค้าสินเชื่อ สาขาราชบุรี", salary:"15,000 บาทขึ้นไป", nickname:"ออม", age:32, address:"หมู่บ้านเอื้ออาทรห้วยหมู148/653", edu:"ปริญญาตรี", major:"คอมพิวเตอร์ธุรการ", gpa:2.38},
  {no:5, id:7780, status:"ปิดใบสมัคร", date:"04/01/2021", prefix:"นางสาว", firstName:"รัชดาภรณ์", lastName:"ขอจัดกลาง", phone:"1301000075104", position1:"สมาชิกประเมินราคาและบริการลูกค้า", position2:"สมาชิกบริการลูกค้าสินเชื่อ สาขาราชบุรี", salary:"15,000 บาทขึ้นไป", nickname:"ออม", age:32, address:"หมู่บ้านเอื้ออาทรห้วยหมู148/653", edu:"ปริญาตรี", major:"คอมพิวเตอร์ธุรการ", gpa:2.38},
  {no:6, id:7781, status:"ปิดใบสมัคร", date:"06/01/2021", prefix:"นาย", firstName:"ชุติพงศ์", lastName:"มิ่งมณี", phone:"1239900226930", position1:"สมาชิกอะไหล่ TIS", position2:"สมาชิกอะไหล่ TIS", salary:"10,001-12,000 บาท", nickname:"เจมส์", age:26, address:"105/2 ม.2", edu:"ปวส.", major:"คอมพิวเตอร์ธุรกิจ", gpa:3.09},
  {no:7, id:7782, status:"ใบสมัครซ้ำ", date:"11/01/2021", prefix:"นางสาว", firstName:"ลัดดารัตน์", lastName:"ม่วงแก้ว", phone:"1179900279970", position1:"", position2:"", salary:"", nickname:"แนน", age:24, address:"", edu:"ปริญญาตรี", major:"คอมพิวเตอร์ศึกษา", gpa:2.59},
  {no:8, id:7783, status:"ปิดใบสมัคร", date:"11/01/2021", prefix:"นางสาว", firstName:"ลัดดารัตน์", lastName:"ม่วงแก้ว", phone:"1179900279970", position1:"สมาชิกประเมินราคาและบริการลูกค้า", position2:"ผู้รับใช้ทีมบริหารข้อมูลลูกค้า", salary:"10,001-12,000 บาท", nickname:"แนน", age:24, address:"264", edu:"ปริญญาตรี", major:"คอมพิวเตอร์ศึกษา", gpa:2.59},
  {no:9, id:7784, status:"ปิดใบสมัคร", date:"11/01/2021", prefix:"นางสาว", firstName:"จารุวรรณ", lastName:"เปยะสา", phone:"1709901032425", position1:"สมาชิกประเมินราคาและบริการลูกค้า", position2:"ผู้รับใช้ทีมบริการลูกค้าสินเชื่อ สาขาราชบุรี", salary:"12,001-15,000 บาท", nickname:"เตย", age:25, address:"104/5 ม.8", edu:"ปริญญาตรี", major:"การจัดการคุณภาพ", gpa:2.44},
  {no:10, id:7794, status:"จ้างงาน", date:"12/01/2021", prefix:"นางสาว", firstName:"จารุวรรณ", lastName:"พิมพิทักษ์", phone:"1759900316934", position1:"สมาชิกบริการลูกค้าสินเชื่อ สาขาราชบุรี", position2:"ผู้รับใช้ทีมการตลาดและบริหารลูกค้า", salary:"12,001-15,000 บาท", nickname:"นัท", age:24, address:"348/188 หมู่ที่8", edu:"ปริญญาตรี", major:"ภาพยนตร์และสื่อดิจิทัล", gpa:3.29}
];

const STATS = {
  total: 7800,
  hired: 2700,
  closed: 3500,
  duplicate: 1200,
  pending: 400
};

// Google Sheet URL: https://docs.google.com/spreadsheets/d/1d3DEkgty9LMgc0lqOzUaugSKY2csI8fjmRfDXZyNrls