import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qdive',
  templateUrl: './qdive.page.html',
  styleUrls: ['./qdive.page.scss'],
})
export class QdivePage implements OnInit {

  Num1= 1;
  Num2= 2;
  Correct_position:any;
  result:any;
  Value1:any;
	 Value2:any;
	 Value3:any;
   Value4:any;
	 Position1=1;
	 Position2=2;
	 Position3=3;
   Position4=4;
   buttonColor1: string = '#ADD8E6';
	 buttonColor2: string = '#ADD8E6';
	 buttonColor3: string = '#ADD8E6';
   buttonColor4: string = '#ADD8E6';
   time = Date.now();

  constructor( ) { 

    while( this.Num1<this.Num2 ){

      this.Num1= Math.floor(Math.random() * 4 + 1);
      this.Num2 = Math.floor(Math.random() * 2 + 1 );
       
    } 
    
    this.Correct_position = Math.floor(Math.random() * 4 + 1);
    this.result= this.Num1/this.Num2;

    if(this.Correct_position==this.Position1){
      this.Value1=this.result;
      this.Value2=this.result + 4;
      this.Value3=this.result + 1;
      this.Value4=this.result - 1;
    }
    else if(this.Correct_position==this.Position2){
      this.Value2=this.result;
      this.Value1=this.result + 4;
      this.Value3=this.result + 1;
      this.Value4=this.result - 1;
    }
    else if(this.Correct_position==this.Position3){
      this.Value3=this.result;
      this.Value1=this.result + 4;
      this.Value2=this.result + 1;
      this.Value4=this.result - 1;
    }
    else if(this.Correct_position==this.Position4){
      this.Value4=this.result;
      this.Value1=this.result + 4;
      this.Value2=this.result + 1;
      this.Value3=this.result - 1;
    }

  }



  Selection(valor:any,click:any){

    if(valor==this.result){
  
    if(click==1){
    this.buttonColor1 = '#70e733';
    }else if(click==2){
    this.buttonColor2 = '#70e733';
    }else if(click==3){
    this.buttonColor3 = '#70e733';
    }else if(click==4){
    this.buttonColor4 = '#70e733';
    }
  

    
  }
  else{
  
    if(click==1){
  		this.buttonColor1 = '#ff4d43';


		  		if(this.Correct_position==this.Position1){
		  		this.buttonColor1 = '#70e733';
		  		}
		  		else if(this.Correct_position==this.Position2){
		  		this.buttonColor2 = '#70e733';
		  		}
		  		else if(this.Correct_position==this.Position3){
		  		this.buttonColor3 = '#70e733';
		  		}
		  		else if(this.Correct_position==this.Position4){
		  		this.buttonColor4 = '#70e733';
		  		}
  	

  		}else if(click==2){
  			this.buttonColor2 = '#ff4d43';

  				if(this.Correct_position==this.Position1){
		  		this.buttonColor1 = '#70e733';
		  		}
		  		else if(this.Correct_position==this.Position2){
		  		this.buttonColor2 = '#70e733';
		  		}
		  		else if(this.Correct_position==this.Position3){
		  		this.buttonColor3 = '#70e733';
		  		}
		  		else if(this.Correct_position==this.Position4){
		  		this.buttonColor4 = '#70e733';
		  		}

  		}else if(click==3){
  			this.buttonColor3 = '#ff4d43';

  			if(this.Correct_position==this.Position1){
		  		this.buttonColor1 = '#70e733';
		  		}
		  		else if(this.Correct_position==this.Position2){
		  		this.buttonColor2 = '#70e733';
		  		}
		  		else if(this.Correct_position==this.Position3){
		  		this.buttonColor3 = '#70e733';
		  		}
		  		else if(this.Correct_position==this.Position4){
		  		this.buttonColor4 = '#70e733';
		  		}

  		}else if(click==4){
  			this.buttonColor4 = '#ff4d43';

  			if(this.Correct_position==this.Position1){
		  		this.buttonColor1 = '#70e733';
		  		}
		  		else if(this.Correct_position==this.Position2){
		  		this.buttonColor2 = '#70e733';
		  		}
		  		else if(this.Correct_position==this.Position3){
		  		this.buttonColor3 = '#70e733';
		  		}
		  		else if(this.Correct_position==this.Position4){
		  		this.buttonColor4 = '#70e733';
		  		}




  		}
  }
      setTimeout(() => { 
        this.cambiarnumero(valor,click);
        },1000);

    
  }

    cambiarnumero(valor:any, click:any){

      this.Num1= 1;
      this.Num2= 2;

      while( this.Num1 < this.Num2 ){

        this.Num1= Math.floor(Math.random() * 4 + 1);
        this.Num2 = Math.floor(Math.random() * 2 + 1 );
       
    } 
    
    this.Correct_position = Math.floor(Math.random() * 4 + 1);
    this.result=this.Num1/this.Num2;

    if(this.Correct_position==this.Position1){
      this.Value1=this.result;
      this.Value2=this.result + 4;
      this.Value3=this.result + 1;
      this.Value4=this.result - 1;
    }
    else if(this.Correct_position==this.Position2){
      this.Value2=this.result;
      this.Value1=this.result + 4;
      this.Value3=this.result + 1;
      this.Value4=this.result - 1;
    }
    else if(this.Correct_position==this.Position3){
      this.Value3=this.result;
      this.Value1=this.result + 4;
      this.Value2=this.result + 1;
      this.Value4=this.result - 1;
    }
    else if(this.Correct_position==this.Position4){
      this.Value4=this.result;
      this.Value1=this.result + 4;
      this.Value2=this.result + 1;
      this.Value3=this.result - 1;
    }
    
 this.buttonColor1 = '#ADD8E6';
 this.buttonColor2 = '#ADD8E6';
 this.buttonColor3 = '#ADD8E6';
 this.buttonColor4 = '#ADD8E6';

 
  }

  ngOnInit() {
  }

}
