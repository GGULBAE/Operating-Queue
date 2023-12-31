
const getExcelAndRender = async () => {
  const spreadsheetId = '1vHeagHKAF1pChsI44x4RjtMnTDgXrhwosWG6vtiKI1A'
  const parser = new PublicGoogleSheetsParser();
  
  const items = await parser.parse(spreadsheetId, 'forcalc');

  for (let i = 0; i < items.length; i++) {
    const { id, patient_name, protector_name, ddx, status, docter, memo} = items[i];

    const target = document.getElementById(id);
    const children = target.children;
    
    children[0].innerHTML = id ? id : "";;
    children[1].innerHTML = patient_name ? patient_name : "";
    children[2].innerHTML = protector_name ? protector_name : "";
    children[3].innerHTML = ddx ? ddx : "";
    children[4].innerHTML = status ? status : "";
    children[4].style.color = "black";
    if (status === "술전") {
      children[4].style.color = "#4ec2af";
    } else if (status === "술중") {
      
    } else if (status === "술후") {
      
    } else if (status === "처치") {
      
    } else if (status === "수혈") {
      children[4].style.color = "#bf4141";
    } else if (status === "퇴예") {

    } else if (status === "보딩") {

    } else if (status === "CPR") {

    }
    children[5].innerHTML = docter ? docter : "";
    children[6].innerHTML = memo ? memo : "";
  }

  const meta = await parser.parse(spreadsheetId, 'Meta');
  const dischargeTarget = document.getElementById("retire");
  const dischargeTargetChildren =  dischargeTarget.children;

  dischargeTargetChildren[1].innerHTML = meta[0].value ? meta[0].value : "";

  const noticeTarget = document.getElementById("hospitalized-notice-text");
  noticeTarget.innerHTML = meta[1].value ? `※ ${meta[1].value} ※` : "";
}

getExcelAndRender();


const renderDate = () => {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();
  const day = dateObj.getDay();
  var date_str = "";
  if (day === 1) {
    date_str = "월요일";
  } else if (day === 2) {
    date_str = "화요일";
  } else if (day === 3) {
    date_str = "수요일";
  } else if (day === 4) {
    date_str = "목요일";
  } else if (day === 5) {
    date_str = "금요일";
  } else if (day === 6) {
    date_str = "토요일";
  } else if (day === 0) {
    date_str = "일요일";
  } 
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes() < 10 ? "0" + dateObj.getMinutes() : dateObj.getMinutes();
  const second = dateObj.getSeconds() < 10 ? "0" + dateObj.getSeconds() : dateObj.getSeconds();

  document.getElementById("hospitalized-date-text").innerHTML = `${year}년 ${month}월 ${date}일 ${date_str} ${hour}:${minute}:${second}`;
}


const interval = setInterval(() => {
  getExcelAndRender();
  renderDate();
}, 1000)