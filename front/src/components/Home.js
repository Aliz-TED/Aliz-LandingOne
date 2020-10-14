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

                <div className="offset-1 col-10 offset-sm-1 col-sm-10 offset-lg-1 col-lg-10 offset-xl-0 col-xl-6 ">
                    <h1 className="offset-lg-1 offset-xl-2 col-xl-8">Combien de temps comptez-vous perdre ?</h1>
                    <p className="presentation offset-sm-1 col-sm-10 offset-xl-2 col-xl-8 ">
                        En moyenne, un professionnel de santé passe 10% de son temps à rédiger les factures.
                        Chez Aliz, nous développons des solutions pour vous accompagner dans vos tâches au quotidien.
                        Notre test gratuit vous permet d'estimer vos futures économies.
                    </p>
                    <a href="#contact" className="offset-sm-2 col-sm-8 offset-xl-3 col-xl-6 btn btn-alizz">
                        TESTER GRATUITEMENT
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
