(()=>{document.getElementById("uv-form").addEventListener("submit",function(t){t.preventDefault();let e=document.getElementById("uv-address").value.trim();/^https?:\/\//i.test(e)||(e="https://"+e);let n=encodeURIComponent(e);window.location.href="/service/"+n});})();
self.Ultraviolet = Ultraviolet;
