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
                    <p>Simulez les économies que vous pourriez faire et discutez avec notre équipe de la formule qui vous convient le mieux </p>
                </div>

                <div className="offset-1 col-10 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xl-0 col-xl-2">
                    <h4>2.</h4>
                    <p> Notre équipe technique assure que votre assistant virtuel saura quoi faire pour vous et prépare son environnement de travail.</p>
                </div>

                <div className="offset-1 col-10 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xl-0 col-xl-2">
                    <h4>3.</h4>
                    <p>Votre assistant virtuel génère les factures pour vos patients et stock les données chez vous.*</p>
                    <p><i>*aucune de vos données personnelles ou professionnelles ne sont stockées chez ALIZ</i></p>
                </div>

                <div className="offset-1 col-10 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xl-0 col-xl-2">
                    <h4>4.</h4>
                    <p>Votre patient reçoit la facture par mail après avoir réglé la consultation. Plus besoin de vous préoccuper de la comptabilité, votre assistant virtuel rassemble vos données</p>
                </div>
                <div className="offset-1 col-10 offset-sm-1 col-sm-10 offset-md-2 col-md-8 offset-lg-3 col-lg-6 offset-xl-0 col-xl-2">
                    <h4>5.</h4>
                    <p>Partez l’esprit libre en week-end, Aliz s'occupe de tout.</p>
                </div>
            </div>
        </div>
    )
}
