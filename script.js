let count=0;
        function counter(){
            count++;
            document.querySelector('h1').innerHTML=count;
            if(count%10==0)
            {
                alert(`The counter is now: ${count}`)
            }
        }
        document.addEventListener('DOMContentLoaded',function(){
            document.querySelector('button').onclick=counter;
        })
         