import React from 'react';

import './bestComment.scss'

export default function BestComment(props) {
    return (
        <>
            {/*  КОММЕНТАРИЙ ДНЯ  */}
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Комментарий дня</h2>
                </div>
                <div className="card-body">
                    <a href="/" className="card-body-title">
                        Как обмануть банкомат, если вы хотите снять больше наличных
                    </a>
                    <p className="card-text">
                        Таким образом укрепление и развитие структуры требуют 
                        от нас анализа форм развития. Не следует, однако забывать, 
                        что реализация намеченных плановых заданий требуют от нас 
                        анализа позиций, занимаемых участниками в отношении 
                        поставленных задач. Задача организации, в особенности же 
                        консультация...
                    </p>
                </div>
            </div>
            {/* ./card */}
        </>
    )
}