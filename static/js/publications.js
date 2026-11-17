// Toggle the publications page between "By Category" (default, as authored)
// and "By Year" (regrouped client-side from each entry's venue line).
(function () {
  var root = document.querySelector('.post-content');
  if (!root) return;

  var items = root.querySelectorAll('ul > li');
  if (!items.length) return;

  // Collect entries with their year (last 4-digit year in the venue line).
  var groups = {};
  items.forEach(function (li) {
    var ems = li.querySelectorAll('em');
    var venue = ems.length ? ems[ems.length - 1].textContent : '';
    var m = venue.match(/(?:19|20)\d\d/g);
    var key = m ? m[m.length - 1] : 'Preprint';
    (groups[key] = groups[key] || []).push(li.cloneNode(true));
  });

  var keys = Object.keys(groups).sort(function (a, b) {
    if (a === 'Preprint') return -1;
    if (b === 'Preprint') return 1;
    return b - a;
  });

  var byYear = document.createElement('div');
  byYear.id = 'pubs-by-year';
  byYear.hidden = true;
  keys.forEach(function (k) {
    var h = document.createElement('h2');
    h.textContent = k === 'Preprint' ? 'Preprint' : k;
    var ul = document.createElement('ul');
    groups[k].forEach(function (li) { ul.appendChild(li); });
    byYear.appendChild(h);
    byYear.appendChild(ul);
  });

  // Wrap the original category view so it can be hidden as a unit.
  var byCat = document.createElement('div');
  byCat.id = 'pubs-by-category';
  var firstH2 = root.querySelector('h2');
  var node = firstH2;
  while (node) {
    var next = node.nextSibling;
    if (node === firstH2) firstH2.parentNode.insertBefore(byCat, firstH2);
    byCat.appendChild(node);
    node = next;
  }
  root.appendChild(byYear);

  // Toggle control.
  var bar = document.createElement('div');
  bar.className = 'pubs-toggle';
  var btns = {};
  [['category', 'By Category'], ['year', 'By Year']].forEach(function (v) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = v[1];
    b.addEventListener('click', function () { show(v[0]); });
    btns[v[0]] = b;
    bar.appendChild(b);
  });
  byCat.parentNode.insertBefore(bar, byCat);

  function show(mode) {
    byCat.hidden = mode !== 'category';
    byYear.hidden = mode !== 'year';
    Object.keys(btns).forEach(function (k) {
      btns[k].classList.toggle('active', k === mode);
    });
    try { localStorage.setItem('pubs-view', mode); } catch (e) {}
    if (history.replaceState) {
      history.replaceState(null, '', mode === 'year' ? '#year' : location.pathname);
    }
  }

  var saved = null;
  try { saved = localStorage.getItem('pubs-view'); } catch (e) {}
  show(location.hash === '#year' ? 'year' : (location.hash === '' && saved === 'year' ? 'year' : 'category'));
})();
