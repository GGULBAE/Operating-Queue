
const getExcelAndRender = async () => {
  const spreadsheetId = '1LUQh_E_Y-dvTSAFgWXwSXNKjkmAHuoykI2OtP0fh4yk'
  const parser = new PublicGoogleSheetsParser();
  
  const items = await parser.parse(spreadsheetId, 'forcalc');
  const contentsElement = document.getElementsByClassName("content")[0];
  
  contentsElement.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const target = items[i];

    const wrapper = document.createElement("div");
    const index = document.createElement("div");
    index.innerText = target.index ? target.index : "";
    index.classList.add('small')
    const op_place = document.createElement("div");
    op_place.innerText = target.op_place ? target.op_place : "";
    const user_name = document.createElement("div");
    user_name.innerText = target.user_name ? target.user_name : "";
    const op_name = document.createElement("div");
    op_name.innerText = target.op_name ? target.op_name : "";
    op_name.classList.add("medium");
    const op_main = document.createElement("div");
    op_main.innerText = target.op_main ? target.op_main : "";
    const op_sub = document.createElement("div");
    op_sub.innerText = target.op_sub ? target.op_sub : "";
    const status = document.createElement("div");
    status.innerText = target.status ? target.status : "";
    if (target.status === "수술 중") {
      status.classList.add("red");
    } else if (target.status === "수술 준비") {
      status.classList.add("yellow");
    }
    
    wrapper.appendChild(index)
    wrapper.appendChild(op_place)
    wrapper.appendChild(user_name)
    wrapper.appendChild(op_name)
    wrapper.appendChild(op_main)
    wrapper.appendChild(op_sub)
    wrapper.appendChild(status)

    contentsElement.appendChild(wrapper);
  }
}

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

  document.getElementById("date_text").innerHTML = `${year}년 ${month}월 ${date}일 ${date_str} ${hour}:${minute}`;
}

const interval = setInterval(() => {
  getExcelAndRender();
  renderDate();
}, 1000)