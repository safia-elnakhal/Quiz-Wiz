import { Component, EventEmitter, Output } from '@angular/core';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { FlatTreeControl } from '@angular/cdk/tree';
interface Menu{
  text:string;
  link:string;
  icon:string;
  isActive:boolean;
}
// interface FoodNode {
//   name: string;
//   children?: FoodNode[];
// }

// interface ExampleFlatNode {
//   expandable: boolean;
//   name: string;
//   level: number;
// }

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {


  @Output()isOpenedSidebar=new EventEmitter<boolean>();
  isOpened:boolean=true;
  toggleSidebar(){
    this.isOpened=!this.isOpened;
    this.isOpenedSidebar.emit(this.isOpened)
  }
  constructor(private _AuthService: AuthService, private _Router: Router,) { 

    // this.dataSource.data = this.TREE_DATA;
  }
  
  
  
  isInstructor(): boolean {

    let role = localStorage.getItem('userRole');
    console.log(role);
    
    return role == 'Instructor'? true : false;
  
  }

  isStudent(): boolean {
    let role = localStorage.getItem('userRole');
    console.log(role);
    
    return role == 'Student'? true : false;
  
    
    
  }
  
  Menu: Menu[] = [
    {
      text: 'Dashboard',
      link: '/dashboard/home',
      icon: 'fa-solid fa-house-laptop fs-4',
      isActive: this.isInstructor()
    },
    {
      text: 'Groups',
      link: '/dashboard/instructors/group-list',
      icon: 'fa-solid fa-people-group fs-4',
      isActive:this.isInstructor()
    },
    {
      text: 'Students',
      link: '/dashboard/instructors/student-list',
      icon: 'fa-solid fa-sheet-plastic fs-4',
      isActive:this.isInstructor()
    },
    {
      text: 'Quizes',
      link: '/dashboard/instructors/quiz-list',
      icon: 'fa-solid fa-clock-rotate-left fs-4',
      isActive: this.isInstructor()
    },
    {
      text: 'Questions',
      link: '/dashboard/instructors/question-list',
      icon: 'fa-solid fa-person-circle-question fs-4',
      isActive: this.isInstructor()
    },
   
    {
      text: 'Results',
      link: '/dashboard/manager/projects',
      icon: 'fa-solid fa-sheet-plastic fs-4',
      isActive:this.isInstructor()
    },
 
  ]

  //TREE_DATA: FoodNode[] = [
    //   {
    //     name:  '',
    //     children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
    //   },]
    //   private _transformer = (node: FoodNode, level: number) => {
    //     return {
    //       expandable: !!node.children && node.children.length > 0,
    //       name: node.name,
    //       level: level,
    //     };
    //   };
    
    //   treeControl = new FlatTreeControl<ExampleFlatNode>(
    //     node => node.level,
    //     node => node.expandable,
    //   );
    
    //   treeFlattener = new MatTreeFlattener(
    //     this._transformer,
    //     node => node.level,
    //     node => node.expandable,
    //     node => node.children,
    //   );
    
    //   dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    
     
    
    //   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
