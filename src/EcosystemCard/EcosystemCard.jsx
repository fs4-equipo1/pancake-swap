
export function EcosystemCardsContainer({path, titulo, cardcomponents}) {

    
    return (
    <div class="discoverEcosystem">
        <div class="ecosystemContainer trade">
            <img class="ecosystemImg" src={path}/>
                <div class="ecosystemTrade">
                    <div class="ecosystemTitle">{titulo}</div>
                    <div class="card-container">
                        {cardcomponents.map()}
                    </div>
                </div>
        </div>
  </div>)
}