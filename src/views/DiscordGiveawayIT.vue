<template>
  <div class="giveaway-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4">Chiavi Gratuite per Unity Asset</h1>
            <p class="lead">
              Unisciti al nostro server Discord e ricevi una chiave gratuita per Assembly Station!
            </p>
          </div>

          <div class="card shadow-lg mb-5 border-primary">
            <div class="card-header bg-primary text-white">
              <h2 class="h4 mb-0">Stato Giveaway Chiavi Gratuite</h2>
            </div>
            <div class="card-body p-4">
              <div class="alert alert-success mb-4">
                <strong><i class="bi bi-check-circle me-2"></i> Primo lotto completato:</strong> 
                Le prime 5 chiavi gratuite sono state distribuite! Grazie a tutti coloro che si sono uniti.
              </div>
              
              <div class="alert alert-info mb-4">
                <strong><i class="bi bi-calendar-event me-2"></i> Prossimo giveaway:</strong> 
                Altre 2 chiavi gratuite saranno disponibili il <strong>30 settembre 2025</strong>
              </div>
              
              <div class="countdown-container mb-4">
                <div class="text-center">
                  <h4 class="mb-3">Countdown Prossimo Giveaway</h4>
                  <div class="countdown-display">
                    <div class="countdown-item">
                      <div class="countdown-number" id="days">--</div>
                      <div class="countdown-label">Giorni</div>
                    </div>
                    <div class="countdown-item">
                      <div class="countdown-number" id="hours">--</div>
                      <div class="countdown-label">Ore</div>
                    </div>
                    <div class="countdown-item">
                      <div class="countdown-number" id="minutes">--</div>
                      <div class="countdown-label">Minuti</div>
                    </div>
                    <div class="countdown-item">
                      <div class="countdown-number" id="seconds">--</div>
                      <div class="countdown-label">Secondi</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="text-center mb-4">
                <i class="bi bi-discord"></i>
                <h3 class="h3 mb-3">Come Ottenere la Prossima Chiave Gratuita</h3>
                <p class="text-muted">Rimani sintonizzato per il prossimo giveaway il 30 settembre 2025</p>
              </div>

              <div class="steps-container">
                <div class="step-item">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h4 class="h5">Unisciti al Nostro Server Discord</h4>
                    <p>Unisciti al nostro server Discord della comunità per essere avvisato quando le prossime chiavi saranno disponibili.</p>
                    <a href="https://discord.gg/m5Yw4MfEUs" target="_blank" rel="noopener noreferrer" class="btn btn-discord mb-3">
                      <i class="bi bi-discord me-2"></i> Unisciti al Server Discord
                    </a>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h4 class="h5">Vai al Canale #roles</h4>
                    <p>Appena entrato nel server, vai al canale <strong>#roles</strong> e seleziona l'emoji regalo 🎁 per poter visualizzare il canale <strong>#free-keys</strong>.</p>
                    <div class="alert alert-warning">
                      <i class="bi bi-exclamation-triangle me-2"></i> 
                      <strong>Importante:</strong> Senza selezionare l'emoji regalo, non potrai vedere il canale delle chiavi gratuite!
                    </div>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h4 class="h5">Aspetta il 30 Settembre 2025</h4>
                    <p>Le prossime 2 chiavi gratuite saranno rilasciate il 30 settembre 2025. Segui il countdown qui sopra!</p>
                    <div class="alert alert-info">
                      <i class="bi bi-info-circle me-2"></i> 
                      Annunceremo su Discord quando le chiavi saranno pronte per essere richieste.
                    </div>
                  </div>
                </div>

                <div class="step-item">
                  <div class="step-number">4</div>
                  <div class="step-content">
                    <h4 class="h5">Richiedi la Tua Chiave</h4>
                    <p>Quando arriverà il momento, invia un messaggio all'admin richiedendo la tua chiave gratuita (primo arrivato, primo servito).</p>
                    <div class="alert alert-warning">
                      <i class="bi bi-chat-dots me-2"></i> 
                      <strong>Formato messaggio:</strong><br>
                      "Ciao! Sono qui per le chiavi gratuite di Assembly Station."
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="asset-features-section mt-4">
                <div class="row">
                  <div class="col-md-6">
                    <h4 class="text-center mb-3">Caratteristiche dell'Asset</h4>
                    <div class="feature-list">
                      <div class="feature-item">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <span>Facile integrazione</span>
                      </div>
                      <div class="feature-item">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <span>Documentazione dettagliata</span>
                      </div>
                      <div class="feature-item">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <span>Aggiornamenti regolari</span>
                      </div>
                      <div class="feature-item">
                        <i class="bi bi-check-circle-fill text-success"></i>
                        <span>Supporto tecnico</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 d-flex align-items-center justify-content-center">
                    <div class="asset-preview text-center">
                      <img src="/images/asset-preview.png" alt="Anteprima dell'Asset" class="img-fluid rounded shadow-sm mb-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer bg-light">
              <p class="text-center mb-0">
                <small>Unendoti al nostro server Discord, accetti di seguire le regole del server e le linee guida della comunità. Le prossime 2 chiavi saranno distribuite il 30 settembre 2025.</small>
              </p>
            </div>
          </div>
          
          <div class="text-center mt-5">
            <RouterLink to="/it" class="btn btn-outline-primary">
              <i class="bi bi-arrow-left me-2"></i> Torna alla Home
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscordGiveawayIT',
  mounted() {
    this.startCountdown();
  },
  beforeUnmount() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  },
  data() {
    return {
      countdownInterval: null
    };
  },
  methods: {
    startCountdown() {
      const targetDate = new Date('2025-09-30T00:00:00').getTime();
      
      this.countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
          clearInterval(this.countdownInterval);
          document.getElementById('days').textContent = '00';
          document.getElementById('hours').textContent = '00';
          document.getElementById('minutes').textContent = '00';
          document.getElementById('seconds').textContent = '00';
          return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
      }, 1000);
    }
  }
}
</script>

<style scoped>
.giveaway-page {
  padding-top: 80px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.border-primary {
  border-color: #00A3FF !important;
}

.bg-primary {
  background-color: #00A3FF !important;
}

.discord-logo {
  height: 80px;
  width: auto;
}

.steps-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.step-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00A3FF;
  color: white;
  font-weight: bold;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  font-size: 18px;
}

.step-content {
  flex: 1;
}

.btn-discord {
  background-color: #5865F2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 20px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.btn-discord:hover {
  background-color: #4752c4;
  color: white;
}

.asset-features-section {
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.feature-item:hover {
  transform: translateX(5px);
}

.asset-preview img {
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
}

.countdown-container {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  padding: 30px;
  margin: 20px 0;
}

.countdown-display {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.countdown-item {
  text-align: center;
  min-width: 80px;
}

.countdown-number {
  display: block;
  font-size: 2.5rem;
  font-weight: bold;
  color: #00A3FF;
  background: white;
  border-radius: 10px;
  padding: 15px 10px;
  margin-bottom: 8px;
  box-shadow: 0 4px 8px rgba(0, 163, 255, 0.1);
  border: 2px solid #00A3FF;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.countdown-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .step-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .step-number {
    margin-bottom: 10px;
  }
  
  .asset-features-section .col-md-6:first-child {
    margin-bottom: 30px;
  }
  
  .countdown-display {
    gap: 15px;
  }
  
  .countdown-item {
    min-width: 70px;
  }
  
  .countdown-number {
    font-size: 2rem;
    padding: 12px 8px;
    min-height: 70px;
  }
}
</style>