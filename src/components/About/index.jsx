import { Component, createRef } from "react";
import { LoaderContext } from "../../service/LoaderContext";

import ExpandMore from '@mui/icons-material/ExpandMore';
import Logo from "../Logo";
import Link from "../Link";
import S from './About.module.css';

class About extends Component {
    constructor() {
        super();
        this.InfoTabs = createRef();
    }
    
    static contextType = LoaderContext;

    componentDidMount() {
        this.context.hideLoader();
    }

    entryScroll() {
        window.scrollTo({ 
            top: this.InfoTabs.current.scrollHeight, 
            behavior: 'smooth'
        }); 
    }

    render() {
        return(
            <div className={S.Container}>
                <div className={S.EntryContainer}>
                    <MainLogo />
                    <h1>Что это такое?</h1>
                    <div className={S.EntryScrollIcon} onClick={() => this.entryScroll()}>
                        <ExpandMore fontSize='inherit' />
                    </div>
                </div>
                <div ref={this.InfoTabs} className={S.InfoTabs}>
                    <div className={S.InfoContainer}>
                        <h1>Что это такое?</h1>
                        <p>Веб-приложение для тренировки орфоэпии, основанное на орфоэпическом словаре ФИПИ, предназначенное для подготовки к ЕГЭ по русскому языку</p>
                    </div>
                    <div className={S.InfoContainer}>
                        <h1>Как посмотреть статистику?</h1>
                        <p>Нажмите на плашку с иконкой статистики и % верно поставленных ударений снизу</p>
                    </div>
                    <div className={S.InfoContainer}>
                        <h1>Как связаться с автором?</h1>
                        <p>Это можно сделать <a href='https://t.me/barf4' target='_blank' rel="noreferrer" style={{ textDecoration: 'underline' }}>здесь!</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

function MainLogo() {
    return (
        <Link
            to='/'
            style={{
                padding: '12px 16px',
                backgroundColor: 'var(--secondary-color)',
                color: 'var(--font-color)',
                transition: 'background-color 0.2s ease',
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 1rem 4rem 18px #0000001a'
            }}
        >
            <Logo size="48px" />
            <div 
                style={{
                    marginTop: -2,
                    paddingLeft: 10,
                    paddingRight: 4,
                    fontSize: 40
                }}
            >
                <span style={{ fontWeight: 500 }}>ЕГЭ</span>
                <span>.Ударения</span>
            </div>
        </Link>
    );
}

export default About;