
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
    children[5].innerHTML = docter ? docter : "";
    children[6].innerHTML = memo ? memo : "";
  }

  const discharge = await parser.parse(spreadsheetId, 'Discharge');
  const dischargeTarget = document.getElementById("retire");
  const dischargeTargetChildren =  dischargeTarget.children;

  dischargeTargetChildren[1].innerHTML = discharge[0].value ? discharge[0].value : "";
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

  document.getElementById("hospitalized-date-text").innerHTML = `${year}년 ${month}월 ${date}일 ${date_str} ${hour}:${minute}`;
}


const interval = setInterval(() => {
  getExcelAndRender();
  renderDate();
}, 1000)