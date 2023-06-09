document.addEventListener('DOMContentLoaded', function() {
    var copyButton = document.getElementById('copyButton');
    if (copyButton) {
      copyButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          var url = tabs[0].url;
          try {
          // 进行转换逻辑，得到URL中的projectName
            var regex = /\/([^/]+)$/;   // 匹配最后一个/后面的内容
            var matches = url.match(regex);
            var projectName = matches[1];
          }
            catch (error) { // 如果匹配失败，说明URL不合法  
                alert('Not find projectName!'); 
                return; 
            }
          // 将转换后的内容复制到剪贴板
          navigator.clipboard.writeText(projectName)
            .then(function() {
              alert('Get projectName!');
            })
            .catch(function(error) {
              console.error('Error:', error);
            });
        });
      });
    }
  });
  