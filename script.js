function updateClock() {
    const hours = document.getElementById("hrs");
    const minutes = document.getElementById("mins");
    const seconds = document.getElementById("secs");
  
    const h_dot = document.querySelector(".h_dot");
    const m_dot = document.querySelector(".m_dot");
    const s_dot = document.querySelector(".s_dot");
  
    const hh_circle = document.getElementById("hh");
    const mm_circle = document.getElementById("mm");
    const ss_circle = document.getElementById("ss");
  
    // ดึงเวลาปัจจุบัน
    const now = new Date();
    const hr = now.getHours() % 12; // ชั่วโมง (0-11)
    const min = now.getMinutes(); // นาที (0-59)
    const sec = now.getSeconds(); // วินาที (0-59)
  
    // ตั้งค่าเวลาบนหน้าจอ
    hours.innerHTML = hr < 10 ? "0" + hr : hr;
    minutes.innerHTML = min < 10 ? "0" + min : min;
    seconds.innerHTML = sec < 10 ? "0" + sec : sec;
  
    // อัปเดตความยาวเส้นของวงกลม
    hh_circle.style.strokeDashoffset = 440 - (440 * hr) / 12;
    mm_circle.style.strokeDashoffset = 440 - (440 * min) / 60;
    ss_circle.style.strokeDashoffset = 440 - (440 * sec) / 60;
  
    // อัปเดตการหมุนของจุด
    h_dot.style.transform = `rotate(${hr * 30}deg) translate(0, -70px)`;
    m_dot.style.transform = `rotate(${min * 6}deg) translate(0, -70px)`;
    s_dot.style.transform = `rotate(${sec * 6}deg) translate(0, -70px)`;
  }
  
  // เรียกฟังก์ชันเมื่อโหลดหน้า
  setInterval(updateClock, 1000);
  updateClock();
function updateDayNightIcons() {
  const sun = document.getElementById("sun");
  const moon = document.getElementById("moon");

  // ดึงเวลาปัจจุบัน
  const currentTime = new Date();
  const hours = currentTime.getHours(); // ชั่วโมง (0-23)

  // เช็คว่าช่วงเวลาเป็นกลางวันหรือกลางคืน
  if (hours >= 6 && hours < 18) {
    // กลางวัน: แสดงพระอาทิตย์ ซ่อนพระจันทร์
    sun.style.display = "block";
    moon.style.display = "none";
  } else {
    // กลางคืน: แสดงพระจันทร์ ซ่อนพระอาทิตย์
    sun.style.display = "none";
    moon.style.display = "block";
  }
}
// เรียกฟังก์ชันเมื่อโหลดหน้า
setInterval(updateClock, 1000);
updateClock();


// เรียกฟังก์ชันเมื่อเริ่มต้น
updateDayNightIcons();

// เรียกฟังก์ชันทุกๆ 1 นาที (ตรวจสอบการเปลี่ยนแปลงเวลา)
setInterval(updateDayNightIcons, 60000);
