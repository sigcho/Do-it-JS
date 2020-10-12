function newRegister() {						
	var newP = document.createElement("p");  // 새 p 요소 만들기 
	var userName = document.querySelector("#userName");					
	var newText = document.createTextNode(userName.value);  // 새 텍스트 노드 만들기
  newP.appendChild(newText);  // 텍스트 노드를 p 요소의 자식 요소로 연결하기
  
  var delBttn = document.createElement("span"); 	// 새 button 요소 만들기 
  var delText = document.createTextNode("X");  // 새 텍스트 노드 만들기
  delBttn.setAttribute("class", "del");  // 버튼에 class 속성 설정하기
  delBttn.appendChild(delText);  // 텍스트 노드를 button 요소의 자식 요소로 연결하기							
  newP.appendChild(delBttn);  //	del 버튼을 p 요소의 자식 요소로 	

  var nameList = document.querySelector("#nameList");  
  nameList.insertBefore(newP, nameList.childNodes[0]);  // p 요소를 #nameList 맨 앞에 추가하기
	// nameList.appendChild(newP); // p 요소를 #nameList의 자식 요소로 만들기
  userName.value = "";  // 텍스트 필드 지우기

  var removeBtns = document.querySelectorAll(".del");

  for(var i=0; i<removeBtns.length; i++){
    removeBtns[i].addEventListener("click", function(){
      if(this.parentNode.parentNode)
        this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }
}		
