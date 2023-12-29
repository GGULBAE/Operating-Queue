
const getExcelAndRender = async () => {
  const spreadsheetId = '1vHeagHKAF1pChsI44x4RjtMnTDgXrhwosWG6vtiKI1A'
  const parser = new PublicGoogleSheetsParser();
  
  const items = await parser.parse(spreadsheetId, 'forcalc');

  for (let i = 0; i < items.length; i++) {
    const { index, id, patient_name, protector_name, ddx, status, docter, memo} = items[i];

    const target = document.getElementById(id);
    // console.log(target);
    console.log(index, id, patient_name, protector_name, ddx, status, docter, memo);

    const children = target.children;
    
    children[0].innerHTML = id;
    children[1].innerHTML = patient_name;
    children[2].innerHTML = protector_name;
    children[3].innerHTML = ddx;
    children[4].innerHTML = status;
    children[5].innerHTML = docter;
    children[6].innerHTML = memo;

    // console.log(children)
  }
  // console.log(items);
  // const contentsElement = document.getElementsByClassName("content")[0];
  
  // contentsElement.innerHTML = "";
  
  // for (let i = 0; i < items.length; i++) {
  //   const target = items[i];

  //   const wrapper = document.createElement("div");
  //   const index = document.createElement("div");
  //   index.innerText = target.index ? target.index : "";
  //   if (index.innerText === "") {
  //     break;
  //   }
  //   index.classList.add('small')
  //   const op_place = document.createElement("div");
  //   op_place.innerText = target.op_place ? target.op_place : "";
  //   const user_name = document.createElement("div");
  //   user_name.innerText = target.user_name ? target.user_name : "";
  //   const op_name = document.createElement("div");
  //   op_name.innerText = target.op_name ? target.op_name : "";
  //   op_name.classList.add("medium");
  //   const op_main = document.createElement("div");
  //   op_main.innerText = target.op_main ? target.op_main : "";
  //   const op_sub = document.createElement("div");
  //   op_sub.innerText = target.op_sub ? target.op_sub : "";
  //   const status = document.createElement("div");
  //   status.innerText = target.status ? target.status : "";

  //   if (target.status === "수술 중") {
  //     status.classList.add("red");
  //   } else if (target.status === "수술 준비") {
  //     status.classList.add("yellow");
  //   }
    
  //   wrapper.appendChild(index)
  //   wrapper.appendChild(op_place)
  //   wrapper.appendChild(user_name)
  //   wrapper.appendChild(op_name)
  //   wrapper.appendChild(op_main)
  //   wrapper.appendChild(op_sub)
  //   wrapper.appendChild(status)

  //   contentsElement.appendChild(wrapper);
  // }
}

getExcelAndRender();
const interval = setInterval(() => {
  // getExcelAndRender();
}, 1000)