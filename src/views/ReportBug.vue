<template>
  <div class="report-bug-page">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="text-center mb-5">
            <h1 class="display-4 fw-bold text-accent mb-4">Report a Bug</h1>
            <p class="lead">
                Have you found a bug or have a proposal to improve Assembly Station? Let me know so I can fix it!
            </p>
          </div>

          <div class="row mb-5">
            <div class="col-md-4">
              <div class="info-card mb-4">
                <div class="info-icon">
                  <i class="bi bi-check-circle-fill"></i>
                </div>
                <h4>Bug Tracking</h4>
                <p>All reported issues are tracked and prioritized based on severity and impact.</p>
              </div>
            </div>
            
            <div class="col-md-4">
              <div class="info-card mb-4">
                <div class="info-icon">
                  <i class="bi bi-clock-fill"></i>
                </div>
                <h4>Response Time</h4>
                <p>I'm currently the only developer, so I'll do my best to resolve issues as quickly as possible.</p>
              </div>
            </div>
            
            <div class="col-md-4">
              <div class="info-card mb-4">
                <div class="info-icon">
                  <i class="bi bi-shield-check"></i>
                </div>
                <h4>Your Privacy</h4>
                <p>Your information is kept confidential and only used for resolving the reported issue.</p>
              </div>
            </div>
          </div>

          <div class="card shadow-sm mb-5">
            <div class="card-body">
              <h4>Ways to Report Bugs</h4>
              <div class="alert alert-info mb-4">
                <i class="bi bi-info-circle-fill me-2"></i>
                <strong>Recommended:</strong> Using GitHub allows you to easily track the status of your bug report and follow updates as I work on fixes.
              </div>
              <div class="row mt-4">
                <div class="col-md-6 mb-3 mb-md-0">
                  <div class="d-flex align-items-center">
                    <div class="bug-report-icon">
                      <i class="bi bi-github"></i>
                    </div>
                    <div>
                      <h5>GitHub Issues</h5>
                      <p class="mb-1">Create an issue on my GitHub repository (recommended)</p>
                      <a href="https://github.com/RiccardoMartella/Assembly-Station-Documentation/issues" class="btn btn-primary" target="_blank">Open GitHub</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex align-items-center">
                    <div class="bug-report-icon">
                      <i class="bi bi-envelope"></i>
                    </div>
                    <div>
                      <h5>Email</h5>
                      <p class="mb-1">Send me an email with details</p>
                      <a href="mailto:bugs@assemblystation.com" class="btn btn-outline-primary">Email Me</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card shadow-sm mb-5">
            <div class="card-body p-4">
              <div class="mb-4">
                <div class="d-flex align-items-center mb-3">
                  <i class="bi bi-bug fs-1 text-accent me-3"></i>
                  <h2>Bug Report Form</h2>
                </div>
                <p class="text-muted">
                  If you prefer not to use GitHub, you can fill out this form to report an issue directly.
                </p>
              </div>
              
              <form>
                <div class="mb-3">
                  <label for="bugTitle" class="form-label">Bug Title</label>
                  <input type="text" class="form-control" id="bugTitle" placeholder="Short description of the bug">
                </div>
                
                <div class="row mb-3">
                  <div class="col-md-6">
                    <label for="version" class="form-label">Assembly Station Version</label>
                    <input type="text" class="form-control" id="version" placeholder="e.g. 1.2.5">
                  </div>
                  <div class="col-md-6">
                    <label for="unityVersion" class="form-label">Unity Version</label>
                    <input type="text" class="form-control" id="unityVersion" placeholder="e.g. 2022.3.1f1">
                  </div>
                </div>
                
                <div class="mb-3">
                  <label for="severity" class="form-label">Bug Severity</label>
                  <select class="form-select" id="severity">
                    <option selected>Select severity level</option>
                    <option value="critical">Critical - App crashes or cannot function</option>
                    <option value="major">Major - Core functionality broken</option>
                    <option value="minor">Minor - Non-critical issue or UI problem</option>
                    <option value="enhancement">Enhancement - Feature request or suggestion</option>
                  </select>
                </div>
                
                <div class="mb-3">
                  <label for="bugDescription" class="form-label">Bug Description</label>
                  <textarea class="form-control" id="bugDescription" rows="5" placeholder="Detailed description of what happens..."></textarea>
                </div>
                
                <div class="mb-3">
                  <label for="reproduction" class="form-label">Steps to Reproduce</label>
                  <textarea class="form-control" id="reproduction" rows="4" placeholder="1. Open scene... 2. Select object... 3. Click on..."></textarea>
                </div>
                
                <div class="mb-3">
                  <label for="expected" class="form-label">Expected Behavior</label>
                  <textarea class="form-control" id="expected" rows="2" placeholder="What should happen instead?"></textarea>
                </div>
                
                <div class="mb-3">
                  <label class="form-label">Screenshots/Videos</label>
                  <div class="input-group">
                    <input type="file" class="form-control" id="attachments" multiple>
                    <label class="input-group-text" for="attachments">Upload</label>
                  </div>
                  <div class="form-text">Attach any relevant screenshots or videos (optional)</div>
                </div>
                
                <div class="mb-3">
                  <label for="email" class="form-label">Your Email (for follow-up)</label>
                  <input type="email" class="form-control" id="email" placeholder="your.email@example.com">
                </div>
                
                <button type="submit" class="btn btn-primary w-100 py-2 mt-3">Submit Bug Report</button>
              </form>
            </div>
          </div>

          <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  What happens after I submit a bug report?
                </button>
              </h2>
              <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p>After submitting a bug report, I will review the issue and respond as soon as possible. I'll provide updates on the status of the fix and may request additional information if needed. Once fixed, you'll receive a notification and the fix will be included in the next update.</p>
                </div>
              </div>
            </div>
            
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  How can I check the status of my bug report?
                </button>
              </h2>
              <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p>You can check the status of your report through the email you provided in the report. If you reported via GitHub, you can track the issue there. I also send email updates when there's progress on your reported issue.</p>
                </div>
              </div>
            </div>
            
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  What information is most helpful in bug reports?
                </button>
              </h2>
              <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  <p>The most helpful information includes:</p>
                  <ul>
                    <li>Clear, detailed steps to reproduce the issue</li>
                    <li>Screenshots or screen recordings showing the problem</li>
                    <li>Exact version information of Assembly Station and Unity</li>
                    <li>Error messages (if any)</li>
                    <li>When the issue started occurring (after an update, etc.)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReportBug'
}
</script>

<style scoped>
.report-bug-page {
  padding-top: 20px;
  padding-bottom: 50px;
}

.text-accent {
  color: #00A3FF;
}

.bug-report-icon {
  width: 50px;
  height: 50px;
  min-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #E6F7FF;
  margin-right: 15px;
  font-size: 24px;
  color: #00A3FF;
}

.info-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 25px 20px;
  height: 100%;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.info-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #E6F7FF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  font-size: 24px;
  color: #00A3FF;
}

.form-control:focus, .form-select:focus, .accordion-button:focus {
  border-color: #00A3FF;
  box-shadow: 0 0 0 0.25rem rgba(0, 163, 255, 0.25);
}

.accordion {
  margin-top: 2rem;
}

.accordion-button:not(.collapsed) {
  background-color: #E6F7FF;
  color: #00A3FF;
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%2300A3FF'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style>
