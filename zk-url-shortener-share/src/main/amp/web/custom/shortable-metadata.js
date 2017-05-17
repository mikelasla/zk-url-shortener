(function()
{
   var $html = Alfresco.util.encodeHTML,
   $isValueSet = Alfresco.util.isValueSet;

   if (Alfresco.DocumentList)
   {
        YAHOO.Bubbling.fire("registerRenderer",
        {
           propertyName: "DW",
           renderer: function edicion_renderer(record, label)
           {
                var jsNode = record.jsNode,
                properties = jsNode.properties,
                html = "";
                var icon_state = "";
                var dw = properties["dw:shorturl"];
                html = '<span class="item">';
                html = html + ' <b>URL: </b> '+ window.location.protocol+"//"+ window.location.host+"/s/"+dw;
                html = html + '</span>';
                return html;
           }
        });
   }
})();