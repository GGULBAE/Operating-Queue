
const getExcelAndRender = async () => {
  const spreadsheetId = '1r6pHEgVnNx1vHugiEg7iO12TTKpW80IBhz5VXbZvNdg'
  const parser = new PublicGoogleSheetsParser();
  
  const items = await parser.parse(spreadsheetId);
  const contentsElement = document.getElementsByClassName("content")[0];
  
  contentsElement.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const target = items[i];

    const wrapper = document.createElement("div");
    const index = document.createElement("div");
    index.innerText = target.index;
    const user_name = document.createElement("div");
    user_name.innerText = target.user_name;
    const op_name = document.createElement("div");
    op_name.innerText = target.op_name;
    const op_main = document.createElement("div");
    op_main.innerText = target.op_main;
    const op_sub = document.createElement("div");
    op_sub.innerText = target.op_sub;
    const status = document.createElement("div");
    status.innerText = target.status;
    
    wrapper.appendChild(index)
    wrapper.appendChild(user_name)
    wrapper.appendChild(op_name)
    wrapper.appendChild(op_main)
    wrapper.appendChild(op_sub)
    wrapper.appendChild(status)

    contentsElement.appendChild(wrapper);
  }
}

const renderDate = () => {
  document.getElementsByClassName("date")[0].innerHTML = "현재 시각" + new Date();
}

setInterval(() => {
  getExcelAndRender();
  renderDate();
}, 1000)