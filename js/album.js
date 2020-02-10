function myAlbum(){

	var diva=document.createElement('div');
	diva.style=" width:50%;background-color:#555; border-style:dashed; border-color:blue; border-radius:20px;"
  	var paragraph=document.createElement('p');
  	var slogan= document.createElement('diva')
  	slogan.innerHTML='Mon Super Album<br>';
  	slogan.style='background-color: transparent; margin-bottom:100px; font-size:50px; color:red;'
  	paragraph.style='margin-top:100px; text-align:center;'
  	paragraph.appendChild(slogan);

  	var link=[];
   	var img=[];

  	function displayImg(link){
  		var img=new Image();
  		var overlay=document.getElementById('overlay')
  		img.onload=function(){
        overlay.innerHTML='';
        overlay.appendChild(img);
     
        }
  		img.src=link.href;
  		overlay.style.display='block';
  		overlay.innerHTML='<span style="color:yellow;">Chargement en cours...</span>';
  	}
  
  
   document.getElementById('overlay').onclick=function(){this.style.display='none'}
  for(var i=1;i<15;i++){
  	link[i]=document.createElement('a');
  	link[i].href='images/Copie de IMG_'+[i]+'.jpg';
  	link[i].title='afficher l\'image originale';
  	link[i].onclick=function(){
  		displayImg(this);
  		return false;
  	}
  	img[i]=document.createElement('img');
  	img[i].src='images/Min/IMG_'+[i]+'.jpg';
  	img[i].alt='Miniature';
  	link[i].appendChild(img[i]);
  	paragraph.appendChild(link[i]);
  	diva.appendChild(paragraph);
  	var centre=document.createElement('center');
  	centre.appendChild(diva)
  	document.body.appendChild(centre);
  }
}
