var c;
var m;
var f;
var r;
var n;

  export function C() {
    var b = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    b.setAttribute("width", window.innerWidth);
    b.setAttribute("height", window.innerHeight);
    document.querySelector("#bg").appendChild(b);
    var a = (window.innerWidth + window.innerHeight) / 20;
    f = Math.ceil(window.innerWidth / a) + 1;
    r = Math.ceil(window.innerHeight / a) + 1;
    m = Math.ceil(window.innerWidth / (f - 1));
    n = Math.ceil(window.innerHeight / (r - 1));
    c = [];
    for (a = 0; a < r; a++) {
      for (var d = 0; d < f; d++) {
        c.push({x:m * d, y:n * a, originX:m * d, originY:n * a});
      }
    }
    
    for (var b = 0; b < c.length; b++) {
        0 !== c[b].originX && c[b].originX !== m * (f - 1) && (c[b].x = c[b].originX + Math.random() * m - m / 2), 0 !== c[b].originY && c[b].originY !== n * (r - 1) && (c[b].y = c[b].originY + Math.random() * n - n / 2);
      }

    for (a = 0; a < c.length; a++) {
      if (c[a].originX !== m * (f - 1) && c[a].originY !== n * (r - 1)) {
        for (var d = c[a].x, u = c[a].y, v = c[a + 1].x, w = c[a + 1].y, g = c[a + f].x, h = c[a + f].y, k = c[a + f + 1].x, l = c[a + f + 1].y, p = Math.floor(2 * Math.random()), q = 0; 2 > q; q++) {
          var e = document.createElementNS(b.namespaceURI, "polygon");
          0 === p ? 0 === q ? (e.point1 = a, e.point2 = a + f, e.point3 = a + f + 1, e.setAttribute("points", d + "," + u + " " + g + "," + h + " " + k + "," + l)) : 1 === q && (e.point1 = a, e.point2 = a + 1, e.point3 = a + f + 1, e.setAttribute("points", d + "," + u + " " + v + "," + w + " " + k + "," + l)) : 1 === p && (0 === q ? (e.point1 = a, e.point2 = a + f, e.point3 = a + 1, e.setAttribute("points", d + "," + u + " " + g + "," + h + " " + v + "," + w)) : 1 === q && (e.point1 = a + f, e.point2 = 
          a + 1, e.point3 = a + f + 1, e.setAttribute("points", g + "," + h + " " + v + "," + w + " " + k + "," + l)));
          e.setAttribute("fill", "rgba(0,0,0," + Math.random() / 4 + ")"); // Color and opacity
          var t = document.createElementNS("http://www.w3.org/2000/svg", "animate");
          t.setAttribute("fill", "freeze");
          t.setAttribute("attributeName", "points");
          t.setAttribute("dur", "10000ms"); // Duration
          t.setAttribute("calcMode", "linear"); // Easing
          e.appendChild(t);
          b.appendChild(e);
        }
      }
    }
    for (var b = 0; b < c.length; b++) {
        0 !== c[b].originX && c[b].originX !== m * (f - 1) && (c[b].x = c[b].originX + Math.random() * m - m / 2), 0 !== c[b].originY && c[b].originY !== n * (r - 1) && (c[b].y = c[b].originY + Math.random() * n - n / 2);
      }
    for (var b = 0; b < document.querySelector("#bg svg").childNodes.length; b++) {
      var a = document.querySelector("#bg svg").childNodes[b], d = a.childNodes[0];
      d.getAttribute("to") && d.setAttribute("from", d.getAttribute("to"));
      d.setAttribute("to", c[a.point1].x + "," + c[a.point1].y + " " + c[a.point2].x + "," + c[a.point2].y + " " + c[a.point3].x + "," + c[a.point3].y);
      d.beginElement();
    }
  }
  
  
    
    
  