import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Enquire.css'
import emailjs from '@emailjs/browser'
import { i18n } from '../../Translate/i18n'

const Enquire = () => {
    

  const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [message, setMessage] = useState('')
        const [country, setCountry] = useState('')
        const [company, setCompany] = useState('')
        const [determinada, setDeterminado] = useState(false)
        const [inovadora, setInovadora] = useState(false)
        const [forte, setForte] = useState(false)
        const [elegante, setElegante] = useState(false)
        const [moderna, setModerna] = useState(false)
        const [feliz, setFeliz] = useState(false)
        const [simples, setSimples] = useState(false)
        const [calma, setCalma] = useState(false)
        const [seria, setSeria] = useState(false)
        const [amigavel, setAmigavel] = useState(false)
        const [romantica, setRomantica] = useState(false)
        const [comum, setComum] = useState(false)
        const [google, setGoogle] = useState(false)
        const [instagram, setInstagram] = useState(false)
        const [behance, setBehance] = useState(false)
        const [outro, setOutro] = useState(false)
        

    function sendEmail(e){
        e.preventDefault();

        if(name === '' || email === '' || message === '' || country === '' || company === ''){
            alert(i18n.t("enquire.box"));
            return;
        }

    const templateParams = {
        from_name: name,
        email: email,
        message: message,
        country: country,
        company: company,
        determinada: determinada,
        inovadora: inovadora,
        forte: forte,
        elegante: elegante,
        moderna: moderna,
        feliz: feliz,
        simples: simples,
        calma: calma,
        seria: seria,
        amigavel: amigavel,
        romantica: romantica,
        comum: comum,
        google: google,
        instagram: instagram,
        behance: behance,
        outro: outro
    }

        emailjs.send("service_wbslkfo", "template_xlirosj", templateParams, "Ovz0_BiOdTTHtRnkR")
        .then((response) => {
            setName(''),
            setEmail(''),
            setMessage('')
            setCompany('')
            setCountry('')
            setDeterminado('')
            window.location.reload();
        })
    }


      
  useEffect(() => {
    document.title = i18n.t("tab.enquire");
  }, []);


    return (
        <section>
        <Navbar/>

        <div className='wrapper'>

            <div className='enquire-header'>
                <h2>{i18n.t("enquire.areuready")}</h2>
                <h4>{i18n.t("enquire.fill")}</h4>
            </div>

            <div className='contact-forms'>
                    <form className='contact-form' onSubmit={sendEmail}>

                        <h3>{i18n.t("enquire.yourname")}</h3>
                        <label className='search-label'><input 
                        className='input'
                        type='text'
                        placeholder={i18n.t("enquire.placeyourname")}
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        /></label>


                        <h3>{i18n.t("enquire.youremail")}</h3>
                        <label className='search-label'><input
                        className='input'
                        type='text'
                        placeholder={i18n.t("enquire.placeyouremail")}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        /></label>

                        <h3>{i18n.t("enquire.yourbusinessname")}</h3>
                        <label className='search-label'><input
                        className='input'
                        type='text'
                        placeholder={i18n.t("enquire.placebusiness")}
                        onChange={(e) => setCompany(e.target.value)}
                        value={company}
                        /></label>

                        <h3>{i18n.t("enquire.yourcountry")}</h3>
                        <label className='search-label'><input
                        className='input'
                        type='text'
                        placeholder={i18n.t("enquire.placecountry")}
                        onChange={(e) => setCountry(e.target.value)}
                        value={country}
                        /></label>
                        

                        <h3>{i18n.t("enquire.aboutbusiness")}</h3>
                        <label className='search-label'>
                        <textarea
                        className='input'
                        placeholder={i18n.t("enquire.placeaboutbusiness")}
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        /></label>


                        <h3>{i18n.t("enquire.howbusiness")}</h3>
                        


                        <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setDeterminado(e.target.checked === true || false)}
                        value={determinada}/>
                                <span class="checkmark"></span>
                                {i18n.t("enquire.determined")}
                            </label>

                            <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setInovadora(e.target.checked === true || false)}
                        value={inovadora}/>
                                <span class="checkmark"></span>
                                {i18n.t("enquire.innovative")}
                            </label>

                            <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setForte(e.target.checked === true || false)}
                        value={forte}/>
                                <span class="checkmark"></span>
                                {i18n.t("enquire.strong")}
                            </label>

                            <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setElegante(e.target.checked === true || false)}
                        value={elegante}/>
                                <span class="checkmark"></span>
                                {i18n.t("enquire.elegant")}
                            </label>

                            <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setModerna(e.target.checked === true || false)}
                        value={moderna}/>
                                <span class="checkmark"></span>
                                {i18n.t("enquire.modern")}
                            </label>

                            <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setFeliz(e.target.checked === true || false)}
                        value={feliz}/>
                                <span class="checkmark"></span>
                                {i18n.t("enquire.happy")}
                            </label>

                            <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setSimples(e.target.checked === true || false)}
                        value={simples}/>
                                <span class="checkmark"></span>
                                {i18n.t("enquire.simple")}
                            </label>

                            <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setCalma(e.target.checked === true || false)}
                        value={calma}/>
                                <span class="checkmark"></span>
                                {i18n.t("enquire.calm")}
                            </label>

                            <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setSeria(e.target.checked === true || false)}
                        value={seria}/>
                                <span class="checkmark"></span>
                                {i18n.t("enquire.serious")}
                            </label>

                            <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setAmigavel(e.target.checked === true || false)}
                        value={amigavel}/>
                                <span class="checkmark"></span>
                                {i18n.t("enquire.friendly")}
                            </label>

                            <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setRomantica(e.target.checked === true || false)}
                        value={romantica}/>
                                <span class="checkmark"></span>
                                {i18n.t("enquire.romantic")}
                            </label>

                            <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setComum(e.target.checked === true || false)}
                        value={comum}/>
                                <span class="checkmark"></span>
                                {i18n.t("enquire.common")}
                            </label>

                            <h3>{i18n.t("enquire.where")}</h3>
                        
                        <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setGoogle(e.target.checked === true || false)}
                        value={google}/>
                                <span class="checkmark"></span>
                                Google
                            </label>

                            <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setInstagram(e.target.checked === true || false)}
                        value={instagram}/>
                                <span class="checkmark"></span>
                                Instagram
                            </label>

                            <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setBehance(e.target.checked === true || false)}
                        value={behance}/>
                                <span class="checkmark"></span>
                                Behance
                            </label>

                            <label class="material-checkbox">
                                <input type="checkbox" onChange={(e) => setOutro(e.target.checked === true || false)}
                        value={outro}/>
                                <span class="checkmark"></span>
                                {i18n.t("enquire.other")}
                            </label>

                        <input className='contact-button2' type='submit' value={i18n.t("enquire.sendbtn")} />
                    </form>
                </div>

        </div>

        <Footer/>
        </section>
    )
}

export default Enquire