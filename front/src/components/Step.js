import React from 'react'

export default function Step() {
    return (
        <div className="step-view">

            <div className="header-step">
                <h3>Comment ça marche?</h3>
                <hr></hr>
            </div>

            <div className="all-step">
                <div className="offset-1 col-10 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xl-1 col-xl-2">
                    <h4>1.</h4>
                    <p>Un premier contact avec l'un de nos experts dans les 48h afin de comprendre vos besoins et vous proposer une offre sur mesure </p>
                </div>

                <div className="offset-1 col-10 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xl-1 col-xl-2">
                    <h4>2.</h4>
                    <p> Votre assistant virtuel vous envoie les factures par mail. Les informations sont stockées sur votre Google Doc.</p>
                </div>

                <div className="offset-1 col-10 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xl-1 col-xl-2">
                    <h4>3.</h4>
                    <p>Votre assistant virtuel génère les factures pour vos patients et stock les données chez vous.*</p>
                    <i>*les données ne sortent pas de votre réseau personnel</i>
                </div>

                <div className="offset-1 col-10 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xl-1 col-xl-2">
                    <h4>4.</h4>
                    <p>Votre patient reçoit la facture par mail après avoir réglé la consultation. Plus besoin de vous préoccuper de la comptabilité, votre assistant virtuel rassemble vos données</p>
                </div>
            </div>
            {/* <div>Partez l’esprit libre en week-end, Aliz s'occupe de tout.</div> */}
        </div>
    )
}
