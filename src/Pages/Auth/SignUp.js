import React, { useState } from 'react';
import { useRequest } from '../../Hook/Request';
import '../../Styles/style.css';
import '../../Styles/responsive.css';
let google = require('../../img/g.png');
let facebook = require('../../img/f.png');
let linkdiin = require('../../img/l.png');

function SignUp({ onHide }) {

     const [form, setform] = useState({ email: "", password: "" })
     const [loading, setLoading] = useState(false)
     const { Request } = useRequest();
     const handler = () => {
         setLoading(true)
         Request({
             url: "register",
             form: form,
         }).then((response) => {
             setLoading(false)
             if (response.status) {
                 localStorage.setItem('user', JSON.stringify(response.result))
                 alert(response.result.message)
 
             } else {
                 alert(response.result.message)
             }
         })
     }
     return (
         <div className="page-auth">
                         <div id="register_btn" className="login boxe d-none">
                              <div data="loginBox1 d-none" className="loginBox loginBox1">
                                   <div className="login_title">
                                        <span data-id="login_btn" className="login_btn">Вход</span>
                                        <span data-id="register_btn" className="register_btn active">Регистрация</span>
                                        <small onClick={onHide} ></small>
                                   </div>
                                   <h1 className="title3  item2">Создать аккаунт</h1>
                                   <form className="form" method="POST" >
                                        <div className="form_inputBox">
                                             <label for="input">Введите адрес электронной почты</label>
                                             <input className="input" type={"text"} id="input" placeholder="Введите ваш e-mail" />
                                        </div>
                                        <div className="form_inputBox">
                                             <label for="input2">Введите адрес электронной почты</label>
                                             <input className="input" type={"email"} id="input2" placeholder="Введите пароль" />
                                             <a href="#" className="forget_pass">Забыли пароль?</a>
                                        </div>
                                        <button className="login_button " type="submit">Зарегистрироваться</button>
                                        <div className="checkBox">
                                             <input className="checkBoxInput" type={"checkbox"} id="input3" />
                                             <label className="item1" for="input3">Подтверждаю, что ознакомлен, полностью согласен и <a href="#" className="link2">принимаю условия</a></label>
                                        </div>
                                   </form>
                                   <div className="other_login">
                                        <div className="other_loginTitle">
                                             <h2 className="title2">или войти через</h2>
                                        </div>
                                   </div>
                                   <div className="other_login_items">
                                        <img src={google} alt="google photo" />
                                        <img src={linkdiin} alt="linkdiin photo" />
                                        <img src={facebook} alt="facebook photo" />
                                   </div>
                              </div>
                         </div>

                         <div id="login_btn" className="login boxe">
                              <div data="loginBox1" className="loginBox loginBox1 ">
                                   <div className="login_title ">
                                        <span data-id="login_btn" className="login_btn active">Вход</span>
                                        <span data-id="register_btn" className="register_btn ">Регистрация</span>
                                        <small onClick={onHide}></small>
                                   </div>
                                   <h1 className="title3  item2"> Войти в аккаунт</h1>
                                   <form className="form" method="POST" >
                                        <div className="form_inputBox">
                                             <label for="input">Введите адрес электронной почты</label>
                                             <input className="input" type={"text"} id="input" placeholder="Введите ваш e-mail" />
                                        </div>
                                        <div className="form_inputBox">
                                             <label for="input2">Пароль</label>
                                             <input className="input" type={"email"} id="input2" placeholder="Введите пароль" />
                                             <a href="#" className="forget_pass ">Забыли пароль?</a>
                                        </div>
                                        <div className="checkBox">
                                             <input className="checkBoxInput" type={"checkbox"} id="input3" />
                                             <label className="item1" for="input3">Запомнить меня</label>
                                        </div>
                                        <button className="login_button  item2" type="submit">Войти</button>
                                   </form>
                                   <div className="other_login">
                                        <div className="other_loginTitle">
                                             <h2 className="title2">или войти через</h2>
                                        </div>
                                   </div>
                                   <div className="other_login_items">
                                        <img src={google} alt="google photo" />
                                        <img src={linkdiin} alt="linkdiin photo" />
                                        <img src={facebook} alt="facebook photo" />
                                   </div>
                              </div>
                         </div>
                    </div>
     )
 }
let items = document.querySelectorAll(".boxe");
let btns = document.querySelectorAll(".login_title span");
btns.forEach(btn => {
     btn.onclick = function () {
          let attr = this.getAttribute("data-id");

          for (let i = 0; i < items.length; i++) {
               items[i].classList.add("d-none");
               if(items[i].getAttribute("id")===attr){
                    items[i].classList.remove("d-none");
               }
               
          }
     }
})
export default SignUp
