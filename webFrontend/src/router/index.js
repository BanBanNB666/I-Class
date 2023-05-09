import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue'
import StudentMainView from '../view/StudentMainView.vue'
import TeacherMainView from '../view/TeacherMainView.vue'
import ClassMainView from '../view/ClassMainView.vue'
import MyMsgView from '../view/MyMsgView.vue'
import SubmitConditionView from '../view/SubmitConditionView.vue'
import SubmitView from '../view/SubmitView.vue'
import Timu from '../components/Timu.vue'

import LoginView from '../view/LoginView.vue'
import MessageEnterView from '../view/MessageEnterView.vue'
import AddQustionView from '../view/AddQuestionView.vue'
import AnswerQuestionView from '../view/AnswerQuestionView.vue'
import CorrectView from '../view/CorrectView.vue'
import rubbish from '../components2/correctShowProgram.vue'

const routes = [
  { path: '', redirect: '/login' },//default
  { path: '/studentMainView', name: 'studentMainView', component: StudentMainView },
  { path: '/teacherMainView', name: 'teacherMainView', component: TeacherMainView },
  { path: '/ClassMainView', name: 'ClassMainView', component: ClassMainView },
  { path: '/submitCondition', name: 'submitCondition', component: SubmitConditionView },
  { path: '/submit', name: 'submit', component: SubmitView },
  { path: '/mymsg', name: 'mymsg', component: MyMsgView },
  { path: '/app', name: 'app', component: App },
  { path: '/timu', name: 'timu', component: Timu },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/messageEnter',
    name: 'messageEnter',
    component: MessageEnterView
  },
  {
    path: '/addQuestion',
    name: 'addQuestion',
    component: AddQustionView
  },
  {
    path: '/answerQuestion',
    name: 'answerQuestion',
    component: AnswerQuestionView
  },
  {
    path: '/correct',
    name: 'correct',
    component: CorrectView
  },
  {
    path:'/rubbish',
    name:'rubbish',
    component:rubbish
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
