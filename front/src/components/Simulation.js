import React, { useState } from 'react'
import { insertSimulation } from '../services/axios.js'
import { useForm } from 'react-hook-form'
import PopSimul from './PopSimul'


export default function Simulation() {
    const [hourlyrate, setHourlyrate] = useState('')
    const [nbrbill, setNbrbill] = useState('')
    const [timebybill, setTimebybill] = useState('')
    const [calcul, setCalcul] = useState(0)
    const [spendTime, setSpendTime] = useState(0)
    const { register, handleSubmit } = useForm();

    const data = {
        "nbrBill": parseInt(nbrbill),
        "hourlyRate": parseInt(hourlyrate),
        "timePerBill": parseInt(timebybill)
    }
    const simul = {
        calcul: parseInt(calcul),
        spendTime: parseInt(spendTime)
    }

    const onSubmit = error => {
        // console.log(error)
        if (error === undefined || error === false || error === '') {
            alert('Les erreurs ne sont pas corrigées')
        }
        else {

            setCalcul((hourlyrate / 60) * ((nbrbill * timebybill) * 30))
            setSpendTime(((nbrbill * timebybill) * 30) / 60)
            if (calcul !== 0 || spendTime !== 0) {
                insertSimulation({ data })
            }

        }
    }

    return (
        <div className="simulation-view container-fluid">

            <div className="row header-simulation">
                <h4 className="col-xl-10">Et si on vous révélait combien vous perdez chaque mois ? </h4>
            </div>

            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                <div className="all-input">

                    <div className="containerInput">
                        <input type="text"
                            name="hourlyrate"
                            id="hourlyrate"
                            placeholder="en euros"
                            value={hourlyrate}
                            onChange={(e) => setHourlyrate(e.target.value)}
                            ref={register({ required: true, maxLength: 10, pattern: /^[0-9]+$/ })}
                        />
                        <label htmlFor="name">Votre taux horaire</label>
                    </div>

                    <div className="containerInput">
                        <input
                            type="text"
                            name="nbrbill"
                            id="nbrbill"
                            placeholder="par jour"
                            value={nbrbill}
                            onChange={(e) => setNbrbill(e.target.value)}
                            ref={register({ required: true, maxLength: 10, pattern: /^[0-9]+$/ })} />
                        <label htmlFor="name">Votre nombre de patients</label>
                    </div>

                    <div className="containerInput">
                        <input
                            type="text"
                            name="timebybill"
                            id="timebybill"
                            placeholder="en minutes"
                            alt="temps administratif par patient" 
                            title="Votre temps moyen passé par patient correspond à la rédaction de facture, l'envoie d'email, le traitement en comptabilité etc..." 
                            value={timebybill}
                            onChange={(e) => setTimebybill(e.target.value)}
                            ref={register({ required: true, maxLength: 10, pattern: /^[0-9]+$/ })} />
                        <label htmlFor="name">Temps administratif / patient</label>
                    </div>

                    <PopSimul calcul={simul}/>

                </div>
            </form>

        </div>


    )
}

