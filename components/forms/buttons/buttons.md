---
title: Buttons & Controls
description: This is the button component
date: 2019-09-25
tags:
  - components
  - forms
layout: layouts/component.njk
---

<!-- Component Page Title -->
<div class="panelTitle">
  <ul>
    <li><a href="#button">General buttons</a></li>
    <li><a href="#button-icon">Button with icons</a></li>
    <li><a href="#button-icon-only">Button with icons only</a></li>
    <li><a href="#button-file">Upload</a></li>
    <li><a href="#button-submit">Submit</a></li>
  </ul>
</div>

<!-- Component Title -->
<div class="titleComponent">
  <!-- NORMAL BUTTON -->
  <div class="descriptionComponent" id="button">
  <h3>General Buttons</h3>
    <div class="explain">
      <p>General action buttons.</p>
      <blockquote>"If href has no value, then it is a button."</blockquote>
    </div>
    <!-- Demo -->
    <div class="demo">
      <ul class="buttons-bar ui-buttons">
        <li><button type="button">general action</button></li>
        <li><button type="button" class="second">second action</button></li>
        <li><button type="button" class="cancel">cancel action</button></li>
      </ul>
    </div>
    <!-- CODE SNIPPETS -->
    <div class="snippets">
      <div class="tabsContainer">
        <ul class="buttons-bar">
          <li class="over active">
            <button id="tab01_01" aria-controls="tab01_01_content">HTML</button>
          </li>
          <li class="over">
            <button id="tab01_02" aria-controls="tab01_02_content">CSS</button>
          </li>
        </ul>
        <div class="content" aria-hidden="false" aria-labeledby="tab01_01" id="tab01_01_content">
          <div class="code">
          <!--?prettify lang=html linenums=true?-->
          <pre class="prettyprint linenums">
            <code>
            &lt!-- Normal button --&gt;
            &lt;p class="ui-buttons"&gt;
              &lt;button&gt;general action&lt;/button&gt;
            &lt;/p&gt;
            &lt!-- Second button --&gt;
            &lt;p class="ui-buttons"&gt;
              &lt;button class="second"&gt;second action&lt;/button&gt;
            &lt;/p&gt;
            &lt!-- Cancel button --&gt;
            &lt;p class="ui-buttons"&gt;
              &lt;button class="cancel"&gt;cancel action&lt;/button&gt;
            &lt;/p&gt;
            </code>
          </pre>
        </div>
        </div>
        <div class="content" aria-hidden="true" aria-labeledby="tab01_02" id="tab01_02_content">
          <div _ngcontent-c18="" class="code">
            <pre _ngcontent-c18="" class="prettyprint linenums prettyprinted" style="">
              Code CSS
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ICONS BUTTONS -->
  <div class="descriptionComponent" id="button-icon">
    <h3>Icon Buttons</h3>
    <!-- Demo -->
    <div class="demo">
      <ul class="buttons-bar">
        <li><c3m-button-icon class="icon-delete">Delete</c3m-button-icon></li>
        <li><c3m-button-icon class="icon-edit">Edit</c3m-button-icon></li>
        <li><c3m-button-icon class="icon-add">Add</c3m-button-icon></li>
      </ul>
    </div>
    <!-- CODE SNIPPETS -->
    <c3m-tabs class="snippets">
      <!-- SNIPPETS HTML -->
      <c3m-tab tabTitle="To call the component">
        <div class="code">
          <!--?prettify lang=html linenums=true?-->
          <pre class="prettyprint linenums">
                    <code>
&lt;c3m-button-icon class=&#34;icon-delete&#34;&gt;Delete&lt;/c3m-button-icon&gt;
&lt;c3m-button-icon class=&#34;icon-edit&#34;&gt;Edit&lt;/c3m-button-icon&gt;
&lt;c3m-button-icon class=&#34;icon-add&#34;&gt;Add&lt;/c3m-button-icon&gt;
</code>
                </pre>
        </div>
      </c3m-tab>
    </c3m-tabs>
  </div>

  <!-- ICON ONLY BUTTONS -->
  <div class="descriptionComponent" id="button-icon-only">
    <h3>Buttons With Icons Only</h3>
    <!-- Demo -->
    <div class="demo">
      <ul class="buttons-bar">
        <li><c3m-button-icon-only class="icon-delete">Delete</c3m-button-icon-only></li>
        <li><c3m-button-icon-only class="icon-edit">Edit</c3m-button-icon-only></li>
        <li><c3m-button-icon-only class="icon-add">Add</c3m-button-icon-only></li>
      </ul>
    </div>
    <!-- CODE SNIPPETS -->
    <c3m-tabs class="snippets">
      <!-- SNIPPETS HTML -->
      <c3m-tab tabTitle="To call the component">
        <div class="code">
          <!--?prettify lang=html linenums=true?-->
          <pre class="prettyprint linenums">
                    <code>
&lt;c3m-button-icon-only class=&#34;icon-delete&#34;&gt;Delete&lt;/c3m-button-icon-only&gt;
&lt;c3m-button-icon-only class=&#34;icon-edit&#34;&gt;Edit&lt;/c3m-button-icon-only&gt;
&lt;c3m-button-icon-only class=&#34;icon-add&#34;&gt;Add&lt;/c3m-button-icon-only&gt;
</code>
                </pre>
        </div>
      </c3m-tab>
    </c3m-tabs>
  </div>

  <!-- UPLOAD BUTTON -->
  <div class="descriptionComponent" id="button-file">
    <h3>Upload Button</h3>
    <div class="explain">
      <p>Allow the upload of multiple files.</p>
    </div>
    <div class="demo">
      <c3m-button-file>Files to upload</c3m-button-file>
    </div>
    <c3m-tabs class="snippets">
      <c3m-tab tabTitle="To call the component">
        <div class="code">
          <!--?prettify lang=html linenums=true?-->
          <pre class="prettyprint linenums">
  &lt;!-- Button Upload --&gt;
  &#x3C;c3m-button-file&#x3E;Choose a file&#x3C;/c3m-button-file&#x3E;
                  </pre
          >
        </div>
      </c3m-tab>
    </c3m-tabs>
  </div>

  <!-- SUBMIT BUTTON -->
  <div class="descriptionComponent" id="button-submit">
    <h3>Submit Button</h3>
    <div class="explain">
      <p>
        A standard submit input (should appear inside a form or be attached to one).
      </p>
    </div>
    <div class="demo">
      <c3m-button-submit inputValue="submit"></c3m-button-submit>
    </div>
    <c3m-tabs class="snippets">
      <c3m-tab tabTitle="To call the component">
        <div class="code">
          <!--?prettify lang=html linenums=true?-->
          <pre class="prettyprint linenums">
                      <code>
  &lt;!-- Button Submit --&gt;
  &#x3C;c3m-button-submit inputValue=&#x22;submit&#x22;&#x3E;&#x3C;/c3m-button-submit&#x3E; </code>
                  </pre>
        </div>
      </c3m-tab>
    </c3m-tabs>
  </div>
</div>

