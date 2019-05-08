webpackJsonp([0xbbb302e8a544],{904:function(n,s){n.exports={data:{markdownRemark:{html:'<p><em>Hooks</em> are a new feature proposal that lets you use state and other React features without writing a class. They’re currently in React v16.7.0-alpha and being discussed in <a href="https://github.com/reactjs/rfcs/pull/68">an open RFC</a>.</p>\n<p>Hooks are JavaScript functions, but you need to follow two rules when using them. We provide a <a href="https://www.npmjs.com/package/eslint-plugin-react-hooks">linter plugin</a> to enforce these rules automatically:</p>\n<h3 id="only-call-hooks-at-the-top-level"><a href="#only-call-hooks-at-the-top-level" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Only Call Hooks at the Top Level</h3>\n<p><strong>Don’t call Hooks inside loops, conditions, or nested functions.</strong> Instead, always use Hooks at the top level of your React function. By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple <code class="gatsby-code-text">useState</code> and <code class="gatsby-code-text">useEffect</code> calls. (If you’re curious, we’ll explain this in depth <a href="#explanation">below</a>.)</p>\n<h3 id="only-call-hooks-from-react-functions"><a href="#only-call-hooks-from-react-functions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Only Call Hooks from React Functions</h3>\n<p><strong>Don’t call Hooks from regular JavaScript functions.</strong> Instead, you can:</p>\n<ul>\n<li>✅ Call Hooks from React function components.</li>\n<li>✅ Call Hooks from custom Hooks (we’ll learn about them <a href="/docs/hooks-custom.html">on the next page</a>).</li>\n</ul>\n<p>By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.</p>\n<h2 id="eslint-plugin"><a href="#eslint-plugin" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ESLint Plugin</h2>\n<p>We released an ESLint plugin called <a href="https://www.npmjs.com/package/eslint-plugin-react-hooks"><code class="gatsby-code-text">eslint-plugin-react-hooks</code></a> that enforces these two rules. You can add this plugin to your project if you’d like to try it:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash"><span class="token function">npm</span> <span class="token function">install</span> eslint-plugin-react-hooks@next\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// Your ESLint configuration</span>\n<span class="token punctuation">{</span>\n  <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token comment">// ...</span>\n    <span class="token string">"react-hooks"</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">"rules"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    <span class="token string">"react-hooks/rules-of-hooks"</span><span class="token punctuation">:</span> <span class="token string">"error"</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>In the future, we intend to include this plugin by default into Create React App and similar toolkits.</p>\n<p><strong>You can skip to the next page explaining how to write <a href="/docs/hooks-custom.html">your own Hooks</a> now.</strong> On this page, we’ll continue by explaining the reasoning behind these rules.</p>\n<h2 id="explanation"><a href="#explanation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Explanation</h2>\n<p>As we <a href="/docs/hooks-state.html#tip-using-multiple-state-variables">learned earlier</a>, we can use multiple State or Effect Hooks in a single component:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">Form</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 1. Use the name state variable</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Mary\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 2. Use an effect for persisting the form</span>\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">persistForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">\'formData\'</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 3. Use the surname state variable</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>surname<span class="token punctuation">,</span> setSurname<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Poppins\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 4. Use an effect for updating the title</span>\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">updateTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    document<span class="token punctuation">.</span>title <span class="token operator">=</span> name <span class="token operator">+</span> <span class="token string">\' \'</span> <span class="token operator">+</span> surname<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>So how does React know which state corresponds to which <code class="gatsby-code-text">useState</code> call? The answer is that <strong>React relies on the order in which Hooks are called</strong>. Our example works because the order of the Hook calls is the same on every render:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// ------------</span>\n<span class="token comment">// First render</span>\n<span class="token comment">// ------------</span>\n<span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Mary\'</span><span class="token punctuation">)</span>           <span class="token comment">// 1. Initialize the name state variable with \'Mary\'</span>\n<span class="token function">useEffect</span><span class="token punctuation">(</span>persistForm<span class="token punctuation">)</span>     <span class="token comment">// 2. Add an effect for persisting the form</span>\n<span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Poppins\'</span><span class="token punctuation">)</span>        <span class="token comment">// 3. Initialize the surname state variable with \'Poppins\'</span>\n<span class="token function">useEffect</span><span class="token punctuation">(</span>updateTitle<span class="token punctuation">)</span>     <span class="token comment">// 4. Add an effect for updating the title</span>\n\n<span class="token comment">// -------------</span>\n<span class="token comment">// Second render</span>\n<span class="token comment">// -------------</span>\n<span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Mary\'</span><span class="token punctuation">)</span>           <span class="token comment">// 1. Read the name state variable (argument is ignored)</span>\n<span class="token function">useEffect</span><span class="token punctuation">(</span>persistForm<span class="token punctuation">)</span>     <span class="token comment">// 2. Replace the effect for persisting the form</span>\n<span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Poppins\'</span><span class="token punctuation">)</span>        <span class="token comment">// 3. Read the surname state variable (argument is ignored)</span>\n<span class="token function">useEffect</span><span class="token punctuation">(</span>updateTitle<span class="token punctuation">)</span>     <span class="token comment">// 4. Replace the effect for updating the title</span>\n\n<span class="token comment">// ...</span>\n</code></pre>\n      </div>\n<p>As long as the order of the Hook calls is the same between renders, React can associate some local state with each of them. But what happens if we put a Hook call (for example, the <code class="gatsby-code-text">persistForm</code> effect) inside a condition?</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">  <span class="token comment">// 🔴 We\'re breaking the first rule by using a Hook in a condition</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!==</span> <span class="token string">\'\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">persistForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">\'formData\'</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>The <code class="gatsby-code-text">name !== &#39;&#39;</code> condition is <code class="gatsby-code-text">true</code> on the first render, so we run this Hook. However, on the next render the user might clear the form, making the condition <code class="gatsby-code-text">false</code>. Now that we skip this Hook during rendering, the order of the Hook calls becomes different:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Mary\'</span><span class="token punctuation">)</span>           <span class="token comment">// 1. Read the name state variable (argument is ignored)</span>\n<span class="token comment">// useEffect(persistForm)  // 🔴 This Hook was skipped!</span>\n<span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">\'Poppins\'</span><span class="token punctuation">)</span>        <span class="token comment">// 🔴 2 (but was 3). Fail to read the surname state variable</span>\n<span class="token function">useEffect</span><span class="token punctuation">(</span>updateTitle<span class="token punctuation">)</span>     <span class="token comment">// 🔴 3 (but was 4). Fail to replace the effect</span>\n</code></pre>\n      </div>\n<p>React wouldn’t know what to return for the second <code class="gatsby-code-text">useState</code> Hook call. React expected that the second Hook call in this component corresponds to the <code class="gatsby-code-text">persistForm</code> effect, just like during the previous render, but it doesn’t anymore. From that point, every next Hook call after the one we skipped would also shift by one, leading to bugs.</p>\n<p><strong>This is why Hooks must be called on the top level of our components.</strong> If we want to run an effect conditionally, we can put that condition <em>inside</em> our Hook:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">persistForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 👍 We\'re not breaking the first rule anymore</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!==</span> <span class="token string">\'\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">\'formData\'</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>Note that you don’t need to worry about this problem if you use the <a href="https://www.npmjs.com/package/eslint-plugin-react-hooks">provided lint rule</a>.</strong> But now you also know <em>why</em> Hooks work this way, and which issues the rule is preventing.</p>\n<h2 id="next-steps"><a href="#next-steps" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Next Steps</h2>\n<p>Finally, we’re ready to learn about <a href="/docs/hooks-custom.html">writing your own Hooks</a>! Custom Hooks let you combine Hooks provided by React into your own abstractions, and reuse common stateful logic between different components.</p>',frontmatter:{title:"Rules of Hooks",next:"hooks-custom.html",prev:"hooks-effect.html"},fields:{path:"docs/hooks-rules.md",slug:"docs/hooks-rules.html"}}},pathContext:{slug:"docs/hooks-rules.html"}}}});
//# sourceMappingURL=path---docs-hooks-rules-html-55ef72d24ceeb85e24dd.js.map