class Node{

    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    
    constructor(){
        
        this.head = null;
    }


    findSum(){

        if(!this.head){
            return 0;
        }

        var runner = this.head;
        var sum = 0;


        while(runner !== null){

            sum += runner.data;
            runner = runner.next;

        }

        return sum;

    }



    contain(value){

        var mover = this.head;

        if(!this.head){

            return false;
        }

        while(mover !== null){

            if(mover.data === value ){

                return true;
              
            }

            mover = mover.next;
        }

        return false;


    }


    length(){

        if(!this.head){
            return 0;
        }

        var runner = this.head;
        var length = 0;


        while(runner !== null){

            length ++;
            runner = runner.next;

        }

        return length;

    }




}