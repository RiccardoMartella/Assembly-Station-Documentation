<template>
  <div class="contacts-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4">Contact Me</h1>
            <p class="lead">
                I'm here to help you! Get in touch with me.
            </p>
          </div>

          <div class="card shadow-sm mb-5">
            <div class="card-body p-4">
              <div class="row">
                <div class="col-lg-6 mb-4 mb-lg-0">
                  <h4>Contact Information</h4>
                  <p class="text-muted mb-4">
                    Please feel free to reach out with any questions, feedback, or support requests.
                  </p>
                  
                  <div class="d-flex align-items-center mb-3">
                    <div class="contact-icon-wrapper">
                      <i class="bi bi-envelope-fill text-accent"></i>
                    </div>
                    <div>
                      <p class="mb-0 fw-bold">Email</p>
                      <p class="mb-0">support@assemblystation.com</p>
                    </div>
                  </div>
                  
                  <div class="d-flex align-items-center mb-3">
                    <div class="contact-icon-wrapper">
                      <i class="bi bi-linkedin text-accent"></i>
                    </div>
                    <div>
                      <p class="mb-0 fw-bold">LinkedIn</p>
                      <p class="mb-0">Visit my LinkedIn profile</p>
                    </div>
                  </div>
                  
                  <div class="d-flex align-items-center">
                    <div class="contact-icon-wrapper">
                      <i class="bi bi-github text-accent"></i>
                    </div>
                    <div>
                      <p class="mb-0 fw-bold">GitHub</p>
                      <p class="mb-0">Report issues on my GitHub</p>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-6">
                  <h4>Send me a message</h4>
                  <form>
                    <div class="mb-3">
                      <label for="name" class="form-label">Name</label>
                      <input type="text" class="form-control" id="name" placeholder="Your name">
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" placeholder="Your email">
                    </div>
                    <div class="mb-3">
                      <label for="message" class="form-label">Message</label>
                      <textarea class="form-control" id="message" rows="5" placeholder="Your message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-5">
            <h5>Find me on social media</h5>
            <div class="d-flex justify-content-center gap-4 mt-3">
                <a href="#" class="social-icon">
                <i class="bi bi-github fs-3 text-accent"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="bi bi-unity fs-3 text-accent"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="bi bi-linkedin fs-3 text-accent"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contacts'
}
</script>

<style scoped>
.contacts-page {
  padding-top: 20px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.contact-icon-wrapper {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #E6F7FF;
  margin-right: 15px;
}

.contact-icon-wrapper i {
  font-size: 20px;
}

.social-icon {
  text-decoration: none;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-3px);
}

.form-control:focus {
  border-color: #00A3FF;
  box-shadow: 0 0 0 0.25rem rgba(0, 163, 255, 0.25);
}

.btn-primary {
  background-color: #00A3FF;
  border-color: #00A3FF;
}

.btn-primary:hover {
  background-color: #0082CC;
  border-color: #0082CC;
}
</style>
