
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countFilterArray'
})
export class CountFilterArrayPipe implements PipeTransform {


  transform(arrStudent, arrFilter: any[]): any {

    let filteredArray = []
    let flagTalent = 0
    let flagTasks = 0
    let flag = 0
    let Talent = 0
    if (arrFilter.length == 0) {

      return arrStudent.length
    }
    else {
      console.log(arrStudent,"llll");
      
      for (let i of arrStudent) {
        Talent = 0
        for (let filter of arrFilter) {

          switch (Object.keys(filter)[0]) {

            case 'Name': {
              if (`${i.FirstName + ' ' + i.LastName}` == filter.Name) {
                flag++
              }
              break;
            }
            case 'Class': {
              console.log(filter.Class);
              
              let Num = filter.Class[filter.Class.length - 1]
              console.log(Num);
              if (Num > 0) {
                if (i.Class == filter.Class) {
                  console.log(Num);
                  

                  flag++
                }
               
                
               
              }
              else {

                console.log(i.Class[0],filter.Class[0],"pppppppp");
                if (i.Class[0] == filter.Class[0]) {
                  flag++
                }
              }

              break
            }
            case 'Talent': {
              flagTalent = 0
              for (const T of i.ArrayTalent) {
                if (T.nameTalent == filter.Talent) {
                  flagTalent++
                }

              }
              if (flagTalent != 0) {
                flag++
                Talent++
                console.log(i, Talent, "33333");
              }
              break;
            }
            case 'Activity': {
              flagTasks = 0
              let index = 0
              for (const T of i.ArrayTasks) {

                if (T.nameActivity == filter.Activity) {
                  index = arrFilter.findIndex(i => Object.keys(i)[0] == 'year')
                  if (index != -1) {
                    if (T.year == arrFilter[index].year) {
                      flagTasks++
                    }
                  }
                  else {
                    flagTasks++
                  }
                }
              }
              if (flagTasks != 0) {
                    if (index != -1) {
                        console.log(i, Talent, flag, arrFilter.length, "]]]]");
                        flag = flag + 2
                    }
                      else {
                        console.log(i, "33333");
                        flag++
                      }
                    
                    
                  }
                break;
              }
           
          }

        }


        if (flag == arrFilter.length) {
          filteredArray.push(i)
        }
        flag = 0
      }



      // dataSource = new MatTableDataSource<resultSearchModel>(filteredArray);
      // dataSource.paginator = arrStudent.paginator;
      return filteredArray.length;
    }
  }

}



