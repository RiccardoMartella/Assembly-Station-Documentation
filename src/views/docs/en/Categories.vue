<template>
  <div class="doc-page">
    <ContentSection>
      <h1 class="doc-title">6. TAGS/CATEGORIES/GROUPS OF PIECES</h1>
      
      <p class="text-lead">
        Once all the texts and images have been inserted, you can proceed with creating the TAGS and GROUPS.
      </p>

      <div class="doc-section">
        <h2 class="doc-section-title">PIECES WITHOUT CATEGORIES</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              Initially, each piece of the prefab will not have a tag and will therefore be visible in the panel in a single list.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/nocategory.png" 
              alt="No Category"
              caption="Displaying pieces without categories" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">ASSIGNING TAGS</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              If you want to divide the pieces by category, just create a tag and assign it to each piece for each category.
              You can select multiple tags at the same time by holding down the CTRL key and selecting the various Pieces, otherwise by pressing the CTRL+SHIFT key.
            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/Tag.png" 
              alt="Tag"
              caption="Assigning tags to pieces" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">CATEGORY RESULTS</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              By doing so, the pieces will be divided based on the tag you assigned. The panel will show pieces organized by categories.
            </p>
          </div>
          
          <div class="content-media centered">
            <ImageZoomable 
              src="/images/multicat.png" 
              alt="Multiple Categories" 
              style="max-width: 350px;"
              caption="Visualizing pieces divided by categories" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section alert-section">
        <h2 class="doc-section-title text-center text-danger">ATTENTION!!!</h2>
        <h4 class="text-center mb-3 text-danger">Pay attention to this part</h4>
        <h3 class="text-center mb-4">GROUPS</h3>
        
        <div class="alert-box alert-warning">
          <p class="text-center">
            Each piece that contains a <u>SkinnedMeshRenderer or a MeshRenderer</u> will be displayed in
            the panel. This means that, in the presence of models with hundreds of pieces, the resulting list will be
            very long, making it difficult for the user to quickly find the desired piece.
            <br><br>
            To solve this problem, I introduced Groups, which allow you to organize the pieces into
            specific categories, simplifying the search and management. To better clarify the concept, here is an example:
          </p>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">COMPARISON: PIECES WITH AND WITHOUT GROUPS</h2>
        
        <div class="content-block two-columns">
          <div class="column">
            <h4 class="sub-title">Without Groups</h4>
            <p>
              In this case, the pieces do not have an assigned group and will therefore be displayed as 6 separate buttons.
            </p>
            <ImageZoomable 
              src="/images/testgruppi.png" 
              alt="Test Groups"
              caption="Displaying pieces without grouping" 
            />
          </div>
          
          <div class="column">
            <h4 class="sub-title">With Groups</h4>
            <p>
              Once the group is assigned, here is the result:
              1 button for 6 pieces.
              <br><br>
              <u>Any number of pieces can be combined into a group.</u>
            </p>
            <ImageZoomable 
              src="/images/fix.png" 
              alt="Fix"
              caption="Displaying grouped pieces" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">VIDEO GUIDE FOR GROUP ASSIGNMENT</h2>
        
        <div class="content-block vertical">
          <div class="content-text">
            <p>
              To assign the group, follow the video tutorial below that shows the complete process.
            </p>
            <strong>GroupPieces</strong> folder within the path
            <code>Assets > AssemblyStation > ScriptableObjects > GroupPieces</code>.
          </div>
          
          <div class="content-media">
            <video controls class="demo-video w-100">
              <source src="https://www.dropbox.com/scl/fi/pehlalx0cxts1dfnd3f81/newsystemGroup.mp4?rlkey=xxnl6gztdhdtujv26fh44mnwn&st=l4c2yb6q&dl=1" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
            <p class="caption">Video tutorial for group assignment</p>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">IMPORTANT: AUTOMATIC SELECTION</h2>
        
        <div class="info-box" id="first">
          <p class="text-center">
            When using Groups, the image is automatically selected from the <strong>first piece of the group</strong>, as well as the description and name.
          </p>
        </div>

        <div class="content-block vertical mt-4">
          <div class="content-text">
            <p>
              <strong class="text-danger">To select the first item on the list, simply check the checkbox next to the name. It will be assigned as the first, and all resources, names, images, and camera zoom will be linked to it. Therefore, it is necessary to assign all these elements to that piece.</strong>            </p>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
            src="/images/firstgroups.png" 
            alt="Piece Group Fix"
              caption="Resource configuration in the first piece of the group" 
            />
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">IMPORTANT: GROUP NAMING AND ORGANIZATION</h2>
        
        <div class="alert-box alert-warning">
          <p class="text-center">
            <strong>Pay close attention to group organization!</strong> Do not add pieces from different prefabs to the same group. 
            Instead, create separate groups for each prefab.
          </p>
          <p class="text-center mt-2">
            <strong>Additionally:</strong> All pieces assigned to the same group should have the same tag. 
            Mixing different tags within the same group can cause issues.
          </p>
        </div>

        <div class="content-block vertical mt-4">
          <div class="content-text">
            <p>
              <strong class="text-danger">Example of correct organization:</strong>
            </p>
            <ul>
              <li><strong>Prefab 1 (Colonial Ship)</strong> → Group "Colonial Cannons"</li>
              <li><strong>Prefab 2 (Aurora Ship)</strong> → Group "Aurora Cannons"</li>
            </ul>
            <p>
              If you mix pieces from different prefabs in the same group, the system will not function correctly. Always create distinct groups for each prefab, even if the pieces have similar functions or attributes.
            </p>
          </div>
        </div>
      </div>

      <div class="doc-section">
        <h2 class="doc-section-title">LOD GROUPS AND TAGS</h2>
        
        <div class="content-block">
          <div class="content-text">
            <p>
              When working with LOD (Level of Detail) Groups, the same grouping and tagging principles apply. For consistency and proper functionality, follow these guidelines:
            </p>
            <ul>
              <li><strong>Apply the same tag to all LOD levels</strong> of the same model to maintain consistency</li>
              <li>When adding pieces to a group, make sure to include all relevant LOD levels with the same tag</li>
              <li>Each LOD level should be properly tagged to ensure that the UI system can correctly identify and group them</li>
              <li><strong>Remember:</strong> Even though only the first piece with the Descriptor Component will be considered for display in the UI, applying the same tag to all LOD levels is essential for visual coherence and proper system functionality</li>
              <li>For more information on LOD Groups, refer to <RouterLink to="/docs/lod-group" class="alert-link">Section 11: LOD Group</RouterLink></li>
            </ul>
            
            <div class="alert alert-info mt-3">
              <i class="bi bi-info-circle-fill me-2"></i>
              <div>
                <strong>Important note:</strong> When grouping LOD levels, apply the same tag to all levels (LOD0, LOD1, LOD2, etc.) of the model you want to group together. Even though the system will only use the Descriptor Component from the first piece for displaying information, maintaining consistent tagging across all LOD levels ensures proper grouping behavior and visual coherence in the interface.
              </div>
            </div>
          </div>
          
          <div class="content-media">
            <ImageZoomable 
              src="/images/tagLOD.png" 
              alt="LOD Group Tagging"
              caption="Applying the same tag to all LOD levels for consistency" 
            />
          </div>
        </div>
      </div>
    </ContentSection>
  </div>
</template>

<script>
import ContentSection from '@/components/ContentSection.vue'
import ImageZoomable from '@/components/ImageZoomable.vue'

export default {
  name: 'Categories',
  components: {
    ContentSection,
    ImageZoomable
  }
}
</script>

<style>
@import '@/assets/styles/documentation.css';

/* Page specific styles */
.vertical {
  flex-direction: column !important;
}

.vertical .content-text {
  margin-bottom: 20px;
}

.vertical .content-media {
  width: 100%;
}

.centered {
  display: flex;
  justify-content: center;
}

.two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.column {
  display: flex;
  flex-direction: column;
}

.sub-title {
  font-size: 1.1rem;
  margin-bottom: 12px;
  color: #2c3e50;
  font-weight: 600;
}

.info-box {
  background-color: #e8f4f8;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  border-left: 4px solid #17a2b8;
}

.demo-video {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  height: 400px; /* Add height for iframe */
}

.caption {
  text-align: center;
  font-style: italic;
  color: #666;
  margin-top: 10px;
}

.alert-section {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin: 30px 0;
  border-left: 4px solid #dc3545;
}

@media (max-width: 768px) {
  .two-columns {
    grid-template-columns: 1fr;
  }
}
</style>
