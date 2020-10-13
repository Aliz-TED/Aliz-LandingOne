import React from 'react'
import Step from './Step'
import Simulation from './Simulation'
import Client from './Client'
import Footer from './Footer'

export default function Home() {

    return (
        <div className="home-view">

            <div className="bg-responsive"></div>
            <div className="row">

                <div className="offset-1 col-10 offset-sm-1 col-sm-10 offset-lg-1 col-lg-10 offset-xl-1 col-xl-5 ">
                    <h1 className="offset-lg-1 offset-xl-0">Combien de temps allez-vous perdre aujourd'hui?</h1>
                    <p className="presentation offset-sm-1 col-sm-10 offset-xl-0 col-xl-10 ">
                        En moyenne, un professionnel de santé passe 10% de son temps à rédiger les factures.
                        Chez Aliz, nous déveleppons des solutions pour vous accompagner dans vos tâches au quotidien
                        Notre test gratuit vous permets d'estimer vos futurs économies.
                    </p>
                    <a href="#contact" className="offset-sm-2 col-sm-8 offset-xl-2 col-xl-6 btn btn-alizz">
                        Tester gratuitement
                    </a>
                </div>

                <div className="d-none d-xl-block col-xl-6 bg">
                </div>
            </div>


            <div className="body-view row">
                <Simulation />
                <Step />
                <Client />
                <Footer />
            </div>

        </div>
    )
}
