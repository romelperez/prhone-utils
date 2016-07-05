<a name="PrhoneUtils"></a>

## PrhoneUtils : <code>Object</code>
PRHONE Utilities.

**Kind**: global variable  

* [PrhoneUtils](#PrhoneUtils) : <code>Object</code>
    * [.isMobile](#PrhoneUtils.isMobile) : <code>Boolean</code>
    * [.isOld](#PrhoneUtils.isOld) : <code>Boolean</code>
    * [.isIE](#PrhoneUtils.isIE) : <code>Number</code>
    * [.isIOS](#PrhoneUtils.isIOS) : <code>Boolean</code>
    * [.throttle(func, interval, gate)](#PrhoneUtils.throttle) ⇒ <code>function</code>
    * [.getDims(wMin, hMin, wMax, hMax)](#PrhoneUtils.getDims) ⇒ <code>Object</code>
    * [.getHeight([win])](#PrhoneUtils.getHeight) ⇒ <code>Number</code>
    * [.getFrameHeight(frame)](#PrhoneUtils.getFrameHeight) ⇒ <code>Number</code>
    * [.fitIframeHeight(iframe, [conf])](#PrhoneUtils.fitIframeHeight) ⇒ <code>Number</code>
    * [.getScrollOffset()](#PrhoneUtils.getScrollOffset) ⇒ <code>Object</code>
    * [.scrollTo(conf)](#PrhoneUtils.scrollTo) ⇒ <code>jQuery</code>

<a name="PrhoneUtils.isMobile"></a>

### PrhoneUtils.isMobile : <code>Boolean</code>
If the window is mobile.

**Kind**: static property of <code>[PrhoneUtils](#PrhoneUtils)</code>  
<a name="PrhoneUtils.isOld"></a>

### PrhoneUtils.isOld : <code>Boolean</code>
Browser is old.

**Kind**: static property of <code>[PrhoneUtils](#PrhoneUtils)</code>  
<a name="PrhoneUtils.isIE"></a>

### PrhoneUtils.isIE : <code>Number</code>
If the browser is IE and the value is the version. Otherwise, it is false.

**Kind**: static property of <code>[PrhoneUtils](#PrhoneUtils)</code>  
<a name="PrhoneUtils.isIOS"></a>

### PrhoneUtils.isIOS : <code>Boolean</code>
If the browser is iOS.

**Kind**: static property of <code>[PrhoneUtils](#PrhoneUtils)</code>  
<a name="PrhoneUtils.throttle"></a>

### PrhoneUtils.throttle(func, interval, gate) ⇒ <code>function</code>
Returns a function that will be called once in an interval of time right
away when it is called.

**Kind**: static method of <code>[PrhoneUtils](#PrhoneUtils)</code>  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | The function to throttle. |
| interval | <code>Number</code> | Time in milliseconds. |
| gate | <code>function</code> | The function to validate the throttle. If it return true, we prevent the throttle. |

<a name="PrhoneUtils.getDims"></a>

### PrhoneUtils.getDims(wMin, hMin, wMax, hMax) ⇒ <code>Object</code>
Get the usable browser window dimentions.

**Kind**: static method of <code>[PrhoneUtils](#PrhoneUtils)</code>  
**Returns**: <code>Object</code> - { Number width, Number height }  

| Param | Type | Description |
| --- | --- | --- |
| wMin | <code>Number</code> | Minimum width. |
| hMin | <code>Number</code> | Minimum height. |
| wMax | <code>Number</code> | Maximum width. |
| hMax | <code>Number</code> | Maximum height. |

<a name="PrhoneUtils.getHeight"></a>

### PrhoneUtils.getHeight([win]) ⇒ <code>Number</code>
Get a window content height.

**Kind**: static method of <code>[PrhoneUtils](#PrhoneUtils)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [win] | <code>Window</code> | Window object. |

<a name="PrhoneUtils.getFrameHeight"></a>

### PrhoneUtils.getFrameHeight(frame) ⇒ <code>Number</code>
Get window frame content height.

**Kind**: static method of <code>[PrhoneUtils](#PrhoneUtils)</code>  

| Param | Type | Description |
| --- | --- | --- |
| frame | <code>Node</code> | Window frame object. |

<a name="PrhoneUtils.fitIframeHeight"></a>

### PrhoneUtils.fitIframeHeight(iframe, [conf]) ⇒ <code>Number</code>
Changes `<iframe>` DOM node height to fit the content propertly. A default
minimum height can be set.

**Kind**: static method of <code>[PrhoneUtils](#PrhoneUtils)</code>  
**Returns**: <code>Number</code> - - Final height set in pixels.  

| Param | Type | Description |
| --- | --- | --- |
| iframe | <code>String</code> | Iframe node element. |
| [conf] | <code>Object</code> | Changes settings. |
| [conf.level] | <code>String</code> | Where does the iframe resides? 'parent', 'top' or by default, the same window. |
| [conf.min] | <code>Number</code> | Minimum height to set. Default 300 pixels. |
| [conf.plus] | <code>Number</code> | Pixels to add/substract to the final height. |

<a name="PrhoneUtils.getScrollOffset"></a>

### PrhoneUtils.getScrollOffset() ⇒ <code>Object</code>
Get the position of the document respecting the scroll.

**Kind**: static method of <code>[PrhoneUtils](#PrhoneUtils)</code>  
**Returns**: <code>Object</code> - - { Number x, Number y }  
<a name="PrhoneUtils.scrollTo"></a>

### PrhoneUtils.scrollTo(conf) ⇒ <code>jQuery</code>
Animate the scroll to where an element is located.

**Kind**: static method of <code>[PrhoneUtils](#PrhoneUtils)</code>  

| Param | Type | Description |
| --- | --- | --- |
| conf | <code>Object</code> &#124; <code>jQuery</code> |  |
| conf.$el | <code>jQuery</code> |  |
| [conf.$ct] | <code>jQuery</code> | If the element is inside a positionated container element, this should be provided. |
| [conf.time] | <code>Number</code> |  |
| [conf.type] | <code>String</code> | The type of animation to scroll to the element. If can be 'center' (by default) or 'top'. |
| [conf.topOffset] | <code>Number</code> |  |
| [conf.callback] | <code>function</code> |  |

