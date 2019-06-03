import React from "react";
import styles from "./Contact.css";

export const Contact = () => {
    return(
       <section className="contact">
            <div className="container">
                <div className="row ">
                    <div className="col-12">
                        <p class="text-center">Napisz do nas</p>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Podaj adres email</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="form-group">
                                <label for="form-control">Temat</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Wpisz wiadomość</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            <button type="submit" class="btn btn-primary">Wyślij</button>
                        </form>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default Contact;