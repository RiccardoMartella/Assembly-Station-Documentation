<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">10. KNOWN ISSUES</h1>

      <div class="doc-section">
        <h2 class="doc-section-title">COMMON ERRORS</h2>

        <div class="content-block">
          <div class="content-text">
            <p>
              It can happen that, when you go to build certain pieces, this type
              of error appears:
            </p>
          </div>

          <div class="content-media">
            <ImageZoomable
              src="/images/bug.png"
              alt="Error Message"
              caption="Example of an error message"
              class="standard-image"
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">TROUBLESHOOTING</h2>

        <div class="content-block">
          <div class="content-text">
            <p>
              This may happen because the component might not have the
              <strong>PieceDescription</strong> assigned. Simply locate the
              component and assign it correctly.
            </p>
            <p>The video below shows how to fix this issue:</p>
          </div>

          <div class="content-media">
            <video controls class="demo-video w-100">
              <source src="https://www.dropbox.com/scl/fi/d05zgntphtqp1g9zf9e43/bug.mp4?rlkey=2d0wm9880zgysrqywwjx9nru0&dl=1" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
            <p class="caption">Tutorial: How to fix naming conflicts</p>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">TROUBLESHOOTING TIPS</h2>

        <div class="content-block">
          <div class="content-text">
            <div class="alert-box alert-info">
              <h4 class="alert-box-title">Common solutions for issues:</h4>
              <ul class="step-list">
                <li>
                  Ensure all materials are correctly placed in the Resources
                  folder
                </li>
                <li>
                  Check that prefabs are properly set up with appropriate pivots
                </li>
                <li>
                  Verify that all required components are assigned in the
                  inspector
                </li>
                <li>
                  Make sure there are no duplicate names in your project pieces
                </li>
                <li>Check for error messages in the Unity console</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="doc-section text-center">
        <h2 class="doc-section-title">NEED HELP?</h2>

        <div class="content-block justify-content-center">
          <div>
            <p>
              If you're experiencing issues not covered in this documentation,
              feel free to contact me for support.
            </p>
            <div class="d-flex justify-content-center gap-4 mt-3">
              <a
                href="https://github.com/RiccardoMartella/Assembly-Station-Documentation/issues"
                class="btn btn-outline-primary"
              >
                <i class="bi bi-github me-2"></i>Report Issue on GitHub
              </a>
              <RouterLink to="/contacts#contEn" class="btn btn-outline-primary">
                <i class="bi bi-envelope me-2"></i>Contact
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from "@/components/ContentSection.vue";
import ImageZoomable from "@/components/ImageZoomable.vue";

export default {
  name: "KnownIssues",
  components: {
    ContentSection,
    ImageZoomable,
  },
};
</script>

<style>
@import "@/assets/styles/documentation.css";

.standard-image {
  max-width: 100%;
  width: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.content-block {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 30px;
  margin-top: 20px;
}

.content-text {
  flex: 3;
}

.content-media {
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.demo-video {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 400px; /* Add height for iframe */
}

.step-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 20px;
}

.step-list li {
  margin-bottom: 8px;
}
</style>
