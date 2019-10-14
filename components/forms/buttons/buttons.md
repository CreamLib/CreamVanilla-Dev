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
    <li><a scrollTo href="#button">General buttons</a></li>
    <li><a scrollTo href="#button-icon">Button with icons</a></li>
    <li><a scrollTo href="#button-icon-only">Button with icons only</a></li>
    <li><a scrollTo href="#button-file">Upload</a></li>
    <li><a scrollTo href="#button-submit">Submit</a></li>
  </ul>
</div>

<!-- Component Title -->
<div class="titleComponent">
  <!-- NORMAL BUTTON -->
  <div class="descriptionComponent" id="button">
    <h3>General Buttons</h3>

    <!-- Description -->
    <div class="explain">
      <p>General action buttons.</p>
      <blockquote>"If href has no value, then it is a button."</blockquote>
    </div>

    <!-- Demo -->
    <div class="demo">
      <ul class="buttons-bar">
        <li><c3m-button (click)="alert('general action')">general action</c3m-button></li>
        <li><c3m-button (click)="alert('submit action')" styleClass="hot-color">submit action</c3m-button></li>
        <li><c3m-button (click)="alert('optional action')" styleClass="optional">optional action</c3m-button></li>
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
  &lt;!-- Normal Buttons --&gt;
  &lt;c3m-button&gt;general action&lt;/c3m-button&gt;
  &lt;c3m-button styleClass=&#34;hot-color&#34; &gt;submit action&lt;/c3m-button&gt;
  &lt;c3m-button styleClass=&#34;optional&#34; &gt;optional action&lt;/c3m-button&gt;</code>
                  </pre>
        </div>
      </c3m-tab>
    </c3m-tabs>
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

