const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'./B9BRqZ_u.js',
			'./DPuKpAsp.js',
			'./DcgrL8hp.js',
			'./awzKxlHP.js',
			'./j6DJbcnn.js',
			'./BVdWusFy.js',
			'./n0jKMFEm.js',
			'./CMe1BOE4.js',
			'./D9VeyYUl.js'
		])
) => i.map((i) => d[i]);
import { b as yc, d as uf, f as Xe, a as We, c as wa } from './DcgrL8hp.js';
import {
	t as gt,
	F as so,
	N as wc,
	L as ff,
	az as hf,
	G as xc,
	aq as df,
	au as pf,
	as as gf,
	O as vf,
	J as ts,
	a2 as Vc,
	v as Bl,
	a3 as Dl,
	aA as mf,
	a6 as bf,
	a4 as _c,
	aB as yf,
	p as yr,
	k as Yt,
	aC as wf,
	b as wr,
	H as ps,
	a8 as fs,
	o as Yc,
	c as be,
	s as xe,
	g as F,
	d as Ne,
	S as ut,
	r as ve,
	f as Nn,
	n as Qr,
	u as St,
	ae as ni,
	h as xf,
	aD as _f
} from './awzKxlHP.js';
import { l as Ol, d as en, s as Fr, e as Rl } from './j6DJbcnn.js';
import { p as fn, r as Lf, b as Vr, i as Nt, c as Af, s as Xc, a as Ri } from './BVdWusFy.js';
import {
	r as Sf,
	g as Nf,
	f as kf,
	h as qt,
	z as br,
	E as Mt,
	j as Vt,
	b as tt,
	k as $e,
	e as Wn,
	s as Ai,
	i as Si,
	a as qr,
	l as Wt,
	m as Sa,
	n as Jc,
	o as Kc,
	S as Pf,
	L as Cf,
	c as If,
	I as Ff,
	T as ga,
	p as Ef,
	K as Tf,
	q as Gt,
	t as jf,
	u as Ht,
	U as Mf,
	v as Bf,
	w as Df,
	C as Of,
	R as Lc,
	x as ol,
	y as Rf,
	A as sl,
	B as qf,
	D as zf,
	F as Uf,
	H as Hf,
	G as rs
} from './DPuKpAsp.js';
import './D9VeyYUl.js';
import { _ as Ll } from './Dp1pzeXC.js';
import { s as Wf, g as Gf } from './n0jKMFEm.js';
import { a as Vf, b as ll, A as cl, F as ul, c as Yf } from './CMe1BOE4.js';
function Al(n, e, r = !1, i = !1, s = !1) {
	var a = n,
		l = '';
	gt(() => {
		var u = ff;
		if (l === (l = e() ?? '')) {
			so && wc();
			return;
		}
		if (
			(u.nodes_start !== null &&
				(hf(u.nodes_start, u.nodes_end), (u.nodes_start = u.nodes_end = null)),
			l !== '')
		) {
			if (so) {
				xc.data;
				for (var h = wc(), p = h; h !== null && (h.nodeType !== 8 || h.data !== ''); )
					(p = h), (h = df(h));
				if (h === null) throw (pf(), gf);
				yc(xc, p), (a = vf(h));
				return;
			}
			var v = l + '';
			r ? (v = `<svg>${v}</svg>`) : i && (v = `<math>${v}</math>`);
			var m = uf(v);
			if (((r || i) && (m = ts(m)), yc(ts(m), m.lastChild), r || i))
				for (; ts(m); ) a.before(ts(m));
			else a.before(m);
		}
	});
}
function Xf(n, e, r) {
	Vc(() => {
		var i = Bl(() => e(n, r == null ? void 0 : r()) || {});
		if (i != null && i.destroy) return () => i.destroy();
	});
}
function lo(n, e, r = e) {
	var i = yf();
	Ol(n, 'input', (s) => {
		var a = s ? n.defaultValue : n.value;
		if (((a = hl(n) ? dl(a) : a), r(a), i && a !== (a = e()))) {
			var l = n.selectionStart,
				u = n.selectionEnd;
			(n.value = a ?? ''),
				u !== null && ((n.selectionStart = l), (n.selectionEnd = Math.min(u, n.value.length)));
		}
	}),
		((so && n.defaultValue !== n.value) || (Bl(e) == null && n.value)) &&
			r(hl(n) ? dl(n.value) : n.value),
		Dl(() => {
			var s = e();
			(hl(n) && s === dl(n.value)) ||
				(n.type === 'date' && !s && !n.value) ||
				(s !== n.value && (n.value = s ?? ''));
		});
}
const fl = new Set();
function An(n, e, r, i, s = i) {
	var a = r.getAttribute('type') === 'checkbox',
		l = n;
	let u = !1;
	if (e !== null) for (var h of e) l = l[h] ?? (l[h] = []);
	l.push(r),
		Ol(
			r,
			'change',
			() => {
				var p = r.__value;
				a && (p = Sc(l, p, r.checked)), s(p);
			},
			() => s(a ? [] : null)
		),
		Dl(() => {
			var p = i();
			if (so && r.defaultChecked !== r.checked) {
				u = !0;
				return;
			}
			a ? ((p = p || []), (r.checked = p.includes(r.__value))) : (r.checked = mf(r.__value, p));
		}),
		bf(() => {
			var p = l.indexOf(r);
			p !== -1 && l.splice(p, 1);
		}),
		fl.has(l) ||
			(fl.add(l),
			_c(() => {
				l.sort((p, v) => (p.compareDocumentPosition(v) === 4 ? -1 : 1)), fl.delete(l);
			})),
		_c(() => {
			if (u) {
				var p;
				if (a) p = Sc(l, p, r.checked);
				else {
					var v = l.find((m) => m.checked);
					p = v == null ? void 0 : v.__value;
				}
				s(p);
			}
		});
}
function Ac(n, e, r = e) {
	Ol(n, 'change', (i) => {
		var s = i ? n.defaultChecked : n.checked;
		r(s);
	}),
		((so && n.defaultChecked !== n.checked) || Bl(e) == null) && r(n.checked),
		Dl(() => {
			var i = e();
			n.checked = !!i;
		});
}
function Sc(n, e, r) {
	for (var i = new Set(), s = 0; s < n.length; s += 1) n[s].checked && i.add(n[s].__value);
	return r || i.delete(e), Array.from(i);
}
function hl(n) {
	var e = n.type;
	return e === 'number' || e === 'range';
}
function dl(n) {
	return n === '' ? null : +n;
}
var Jf = Sf();
function Kf(n, e) {
	yr(e, !0);
	let r = fn(e, 'staticConfig', 3, !1),
		i = fn(e, 'x', 15),
		s = fn(e, 'y', 15),
		a = fn(e, 'scale', 15),
		l = fn(e, 'scaleX', 15),
		u = fn(e, 'scaleY', 15),
		h = fn(e, 'rotation', 15),
		p = fn(e, 'skewX', 15),
		v = fn(e, 'skewY', 15),
		m = Lf(e, [
			'$$slots',
			'$$events',
			'$$legacy',
			'staticConfig',
			'x',
			'y',
			'scale',
			'scaleX',
			'scaleY',
			'rotation',
			'skewX',
			'skewY'
		]);
	const y = new Jf.Transformer({
		x: i(),
		y: s(),
		scale: a(),
		scaleX: l(),
		scaleY: u(),
		rotation: h(),
		skewX: p(),
		skewY: v(),
		...m
	});
	if ((Nf().add(y), !r())) {
		const d = y.getAttrs();
		y.on('transformend', () => {
			i() !== void 0 && i(d.x),
				s() !== void 0 && s(d.y),
				a() !== void 0 && a(d.scale),
				l() !== void 0 && l(d.scaleX),
				u() !== void 0 && u(d.scaleY),
				h() !== void 0 && h(d.rotation),
				p() !== void 0 && p(d.skewX),
				v() !== void 0 && v(d.skewY);
		}),
			y.on('dragend', () => {
				i() !== void 0 && i(d.x), s() !== void 0 && s(d.y);
			});
	}
	return (
		Object.keys(m)
			.filter((d) => !d.startsWith('on'))
			.forEach((d) => {
				Yt(() => {
					y.setAttr(d, m[d]);
				});
			}),
		Yt(() => {
			y.setAttr('x', i());
		}),
		Yt(() => {
			y.setAttr('y', s());
		}),
		Yt(() => {
			y.setAttr('scale', a());
		}),
		Yt(() => {
			y.setAttr('scaleX', l());
		}),
		Yt(() => {
			y.setAttr('scaleY', u());
		}),
		Yt(() => {
			y.setAttr('rotation', h());
		}),
		Yt(() => {
			y.setAttr('skewX', p());
		}),
		Yt(() => {
			y.setAttr('skewY', v());
		}),
		kf(m, y),
		wf(() => {
			y.destroy();
		}),
		wr({ node: y })
	);
}
const At = {
	Black: '#000000',
	White: '#ffffff',
	Gray: '#808080',
	Transparent: 'transparent',
	DefaultFill: '#ffa500',
	DefaultStroke: '#000000'
};
function Zf() {
	return '#000000';
}
function Qf(n = 400, e = 300) {
	return { x: n / 2, y: e / 2 };
}
const ql = { Shape: 'shape', Text: 'text', Image: 'image' },
	ii = ps([]);
function Zc(n) {
	ii.update((e) => [...e, n]);
}
function $f(n, e) {
	ii.update((r) => r.map((i) => (i.id === n ? { ...i, ...e } : i)));
}
function eh(n) {
	return n.type === ql.Shape;
}
function Qc(n) {
	return n.type === ql.Text;
}
function th(n) {
	return n.type === ql.Image;
}
function rh() {
	const n = ps({ states: [], currentIndex: -1 }),
		{ subscribe: e, set: r, update: i } = n;
	function s(y, d, E) {
		return {
			elements: fs(ii),
			canvasBackgroundColor: y || 'var(--color-secondary)',
			canvasWidth: d || 500,
			canvasHeight: E || 400
		};
	}
	function a(y, d, E) {
		const N = s(y, d, E);
		i((P) => {
			const _ = P.states.slice(0, P.currentIndex + 1);
			return (
				_.push(N),
				_.length > 50
					? (_.shift(), { states: _, currentIndex: _.length - 1 })
					: { states: _, currentIndex: _.length - 1 }
			);
		});
	}
	function l() {
		i((y) => {
			if (y.currentIndex > 0) {
				const d = y.states[y.currentIndex - 1];
				return ii.set(d.elements), { ...y, currentIndex: y.currentIndex - 1, restoredState: d };
			}
			return y;
		});
	}
	function u() {
		i((y) => {
			if (y.currentIndex < y.states.length - 1) {
				const d = y.states[y.currentIndex + 1];
				return ii.set(d.elements), { ...y, currentIndex: y.currentIndex + 1, restoredState: d };
			}
			return y;
		});
	}
	function h(y) {
		return y.currentIndex > 0;
	}
	function p(y) {
		return y.currentIndex < y.states.length - 1;
	}
	a();
	function v() {
		return fs(n).restoredState;
	}
	function m() {
		r({ states: [], currentIndex: -1 }), a();
	}
	return {
		subscribe: e,
		pushState: a,
		undo: l,
		redo: u,
		canUndo: h,
		canRedo: p,
		getRestoredState: v,
		reset: m
	};
}
const $r = rh();
function nh(n, e, r) {
	const i = qt.get(n, e);
	if (!i) return;
	const s = fs(br),
		a = br.getCurrentPage(s),
		l = {
			id: crypto.randomUUID(),
			type: n,
			...Qf(a == null ? void 0 : a.canvasWidth, a == null ? void 0 : a.canvasHeight),
			draggable: !0,
			...i.defaultProps,
			...r,
			pageId: a == null ? void 0 : a.id
		};
	n === Mt.Shape
		? (l.shapeType = e)
		: n === Mt.Text
			? (l.textType = e)
			: n === Mt.Image && (l.imageType = e),
		i.defaultProps.fill && i.defaultProps.fill !== At.Transparent && (l.fill = Zf()),
		Zc(l),
		n === Mt.Shape
			? br.addElementToCurrentPage(Vt.Shapes, l)
			: n === Mt.Text
				? br.addElementToCurrentPage(Vt.Text, l)
				: n === Mt.Image && br.addElementToCurrentPage(Vt.Images, l),
		$r.pushState();
}
function $c(n, e, r) {
	ii.update((i) => i.map((s) => (s.id === n ? { ...s, x: e, y: r } : s)));
}
function eu() {
	ii.set([]), $r.pushState();
}
function ih(n) {
	return (e) => {
		n(e), br.updateCurrentPageBackground(e), $r.pushState(e);
	};
}
function ah(n) {
	return (e) => {
		n(e);
	};
}
function oh(n) {
	return (e) => {
		n(e);
	};
}
function sh(n, e) {
	return (r, i) => {
		n(r), e(i);
	};
}
function lh(n, e, r) {
	return () => {
		const i = window.innerWidth - 80 - 96,
			s = window.innerHeight - 64 - 80 - 96,
			a = i / n,
			l = s / e,
			u = Math.min(a, l),
			h = Math.max(25, Math.min(500, Math.round(u * 100)));
		r(h);
	};
}
function ch(n) {
	return () => {
		confirm('Are you sure you want to clear all elements? This cannot be undone.') &&
			(eu(), n(null));
	};
}
function uh(n) {
	return (e) => {
		n(e);
	};
}
const tu = { Upload: 'upload' },
	fh = ps([]);
function hh(n, e, r) {
	const i = document.createElement('img');
	return (
		(i.onload = () => {
			const s = i.naturalWidth / i.naturalHeight,
				a = 200;
			let l = a,
				u = a;
			s > 1 ? (u = a / s) : (l = a * s);
			const h = fs(br),
				p = br.getCurrentPage(h),
				v = {
					id: crypto.randomUUID(),
					type: Mt.Image,
					imageType: tu.Upload,
					src: n.src,
					x: (e - l) / 2,
					y: (r - u) / 2,
					width: Math.round(l),
					height: Math.round(u),
					originalWidth: i.naturalWidth,
					originalHeight: i.naturalHeight,
					draggable: !0,
					opacity: 1,
					scaleX: 1,
					scaleY: 1,
					rotation: 0,
					brightness: 0,
					contrast: 0,
					image: i,
					pageId: p == null ? void 0 : p.id
				};
			Zc(v), br.addElementToCurrentPage(Vt.Images, v);
		}),
		(i.src = n.src),
		null
	);
}
function dh(n, e) {
	return (r, i) => {
		if (r === 'upload' && i) {
			hh(i, n, e);
			return;
		}
		const s =
			qt.get(Mt.Shape, r) || qt.get(Mt.Text, r) || qt.get(Mt.Image, r) || qt.get(Mt.Other, r);
		s && nh(s.type, r);
	};
}
function ph() {
	return (n, e) => {
		$f(n, e), $r.pushState();
	};
}
function gh(n) {
	return () => {
		n(null);
	};
}
const ro = {
		Heading: 'heading',
		Paragraph: 'paragraph',
		Caption: 'caption',
		SpeechBubble: 'speech_bubble',
		TextBanner: 'text_banner'
	},
	ru = ps([]);
function vh(n) {
	return (e, r) => {
		const i = r.target,
			s = n / 100;
		$c(e.id, i.x() / s, i.y() / s), $r.pushState();
	};
}
var mh = (n, e) => e('shapes'),
	bh = (n, e) => e('images'),
	yh = (n, e) => e('text'),
	wh = (n, e) => {
		confirm('Are you sure you want to clear all elements? This cannot be undone.') &&
			e.clearCanvas();
	},
	xh = (n, e, r) => e(F(r).subType),
	_h = Xe('<button><div><!></div> <div> </div></button>'),
	Lh = Xe(
		'<div><h2>SHAPES</h2></div> <div class="flex-1 overflow-y-auto p-4"><div class="grid grid-cols-2 gap-3"></div></div>',
		1
	),
	Ah = Xe(
		'<div><h2>IMAGES</h2></div> <div class="flex-1 overflow-y-auto p-6"><div class="mb-6"><label for="image-upload"><svg stroke="currentColor" fill="none" viewBox="0 0 48 48"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg> <p>UPLOAD IMAGE</p> <p>PNG, JPG, GIF up to 10MB</p></label> <input id="image-upload" type="file" accept="image/*" class="hidden"/></div> <div class="text-center"><p>Click or drag an image file above to add it to your canvas</p></div></div>',
		1
	),
	Sh = (n, e, r) => e(F(r).subType),
	Nh = Xe('<button><div><!></div> <div><div> </div></div></button>'),
	kh = Xe('<div class="space-y-3"></div>'),
	Ph = Xe(
		'<div class="mt-8 text-center"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg> <p>Text functionality coming soon</p></div>'
	),
	Ch = Xe('<div><h2>TEXT</h2></div> <div class="flex-1 overflow-y-auto p-6"><!></div>', 1),
	Ih = Xe(
		'<div class="border-b border-gray-200 p-4"><h2 class="text-lg font-semibold text-gray-800">Other Elements</h2> <p class="text-sm text-gray-500">Additional design elements</p></div> <div class="flex-1 overflow-y-auto p-4"><div class="mt-8 text-center text-gray-500"><div class="mb-4 text-4xl">⚡</div> <p>Other elements coming soon!</p></div></div>',
		1
	),
	Fh = Xe('<div><!></div>'),
	Eh = Xe(
		'<div class="flex h-full"><div><div class="flex-1 space-y-1 px-2 pt-4"><button><svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg> <span>SHAPES</span></button> <button><svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg> <span>IMAGES</span></button> <button><svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg> <span>TEXT</span></button></div> <div><button><svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1H8a1 1 0 00-1 1v3M4 7h16"></path></svg> <span class="text-xs font-medium">Clear</span></button></div></div> <!></div>'
	);
function Th(n, e) {
	yr(e, !0);
	let r = ut(null),
		i = ut(null),
		s = ut(null);
	const a = qt.getByCategory(Vt.Shapes),
		l = qt.getByCategory(Vt.Text);
	qt.getByCategory(Vt.Images);
	function u(W) {
		F(r) &&
			F(i) &&
			F(s) &&
			!F(i).contains(W.target) &&
			!F(s).contains(W.target) &&
			(Ne(r, null), e.close());
	}
	function h(W) {
		F(r) === W ? (Ne(r, null), e.close()) : (Ne(r, W, !0), e.open({ panel: W }));
	}
	function p(W) {
		console.log('element subtype', W), e.elementSelected(W);
	}
	function v(W) {
		var re;
		const oe = W.target,
			ee = (re = oe.files) == null ? void 0 : re[0];
		if (!ee) return;
		if (!ee.type.startsWith('image/')) {
			alert('Please select a valid image file.');
			return;
		}
		if (ee.size > 10 * 1024 * 1024) {
			alert('File size must be less than 10MB.');
			return;
		}
		const z = URL.createObjectURL(ee);
		e.elementSelected('upload', { src: z, originalName: ee.name }), (oe.value = '');
	}
	Yc(
		() => (
			document.addEventListener('click', u),
			() => {
				document.removeEventListener('click', u);
			}
		)
	),
		Yt(() => {
			e.isOpen || Ne(r, null);
		});
	var m = Eh(),
		y = be(m),
		d = be(y),
		E = be(d);
	E.__click = [mh, h];
	var N = xe(E, 2);
	N.__click = [bh, h];
	var P = xe(N, 2);
	(P.__click = [yh, h]), ve(d);
	var _ = xe(d, 2),
		j = be(_);
	(j.__click = [wh, e]),
		ve(_),
		ve(y),
		Vr(
			y,
			(W) => Ne(s, W),
			() => F(s)
		);
	var O = xe(y, 2);
	{
		var G = (W) => {
			var oe = Fh(),
				ee = be(oe);
			{
				var z = (de) => {
						var C = Lh(),
							L = Nn(C),
							q = be(L);
						ve(L);
						var B = xe(L, 2),
							Z = be(B);
						Wn(
							Z,
							21,
							() => a,
							Si,
							(Q, ie) => {
								var K = _h();
								K.__click = [xh, p, ie];
								var le = be(K),
									ue = be(le);
								Al(ue, () => F(ie).icon), ve(le);
								var Se = xe(le, 2),
									b = be(Se, !0);
								ve(Se),
									ve(K),
									gt(() => {
										tt(K, 1, $e.ShapeGridItem),
											Ai(K, 'aria-label', `Add ${F(ie).name ?? ''} to canvas`),
											tt(le, 1, $e.ShapeIcon),
											tt(Se, 1, $e.ShapeName),
											Fr(b, F(ie).name);
									}),
									We(Q, K);
							}
						),
							ve(Z),
							ve(B),
							gt(() => {
								tt(L, 1, $e.SidebarPanelHeader), tt(q, 1, $e.SidebarPanelTitle);
							}),
							We(de, C);
					},
					re = (de, C) => {
						{
							var L = (B) => {
									var Z = Ah(),
										Q = Nn(Z),
										ie = be(Q);
									ve(Q);
									var K = xe(Q, 2),
										le = be(K),
										ue = be(le),
										Se = be(ue),
										b = xe(Se, 2),
										T = xe(b, 2);
									ve(ue);
									var M = xe(ue, 2);
									(M.__change = v), ve(le);
									var H = xe(le, 2),
										V = be(H);
									ve(H),
										ve(K),
										gt(() => {
											tt(Q, 1, $e.SidebarPanelHeader),
												tt(ie, 1, $e.SidebarPanelTitle),
												tt(ue, 1, $e.UploadArea),
												tt(Se, 0, $e.UploadIcon),
												tt(b, 1, $e.UploadTitle),
												tt(T, 1, $e.UploadSubtext),
												tt(V, 1, $e.InfoText);
										}),
										We(B, Z);
								},
								q = (B, Z) => {
									{
										var Q = (K) => {
												var le = Ch(),
													ue = Nn(le),
													Se = be(ue);
												ve(ue);
												var b = xe(ue, 2),
													T = be(b);
												{
													var M = (V) => {
															var te = kh();
															Wn(
																te,
																21,
																() => l,
																Si,
																(se, ce) => {
																	var Ce = Nh();
																	Ce.__click = [Sh, p, ce];
																	var ye = be(Ce),
																		Te = be(ye);
																	Al(Te, () => F(ce).icon), ve(ye);
																	var Fe = xe(ye, 2),
																		Ue = be(Fe),
																		pe = be(Ue, !0);
																	ve(Ue),
																		ve(Fe),
																		ve(Ce),
																		gt(() => {
																			tt(Ce, 1, $e.TextGridItem),
																				Ai(Ce, 'aria-label', `Add ${F(ce).name ?? ''} to canvas`),
																				tt(ye, 1, $e.TextIcon),
																				tt(Ue, 1, $e.TextName),
																				Fr(pe, F(ce).name);
																		}),
																		We(se, Ce);
																}
															),
																ve(te),
																We(V, te);
														},
														H = (V) => {
															var te = Ph(),
																se = be(te),
																ce = xe(se, 2);
															ve(te),
																gt(() => {
																	tt(se, 0, $e.PlaceholderIcon), tt(ce, 1, $e.InfoText);
																}),
																We(V, te);
														};
													Nt(T, (V) => {
														l.length > 0 ? V(M) : V(H, !1);
													});
												}
												ve(b),
													gt(() => {
														tt(ue, 1, $e.SidebarPanelHeader), tt(Se, 1, $e.SidebarPanelTitle);
													}),
													We(K, le);
											},
											ie = (K, le) => {
												{
													var ue = (Se) => {
														var b = Ih();
														Qr(2), We(Se, b);
													};
													Nt(
														K,
														(Se) => {
															F(r) === 'other' && Se(ue);
														},
														le
													);
												}
											};
										Nt(
											B,
											(K) => {
												F(r) === 'text' ? K(Q) : K(ie, !1);
											},
											Z
										);
									}
								};
							Nt(
								de,
								(B) => {
									F(r) === 'images' ? B(L) : B(q, !1);
								},
								C
							);
						}
					};
				Nt(ee, (de) => {
					F(r) === 'shapes' ? de(z) : de(re, !1);
				});
			}
			ve(oe),
				Vr(
					oe,
					(de) => Ne(i, de),
					() => F(i)
				),
				gt(() => tt(oe, 1, $e.SidebarPanel)),
				We(W, oe);
		};
		Nt(O, (W) => {
			F(r) && W(G);
		});
	}
	ve(m),
		gt(() => {
			tt(y, 1, $e.SidebarToolbox),
				tt(
					E,
					1,
					`${$e.SidebarButton} ${(F(r) === 'shapes' ? $e.SidebarButtonActive : $e.SidebarButtonInactive) ?? ''}`
				),
				tt(
					N,
					1,
					`${$e.SidebarButton} ${(F(r) === 'images' ? $e.SidebarButtonActive : $e.SidebarButtonInactive) ?? ''}`
				),
				tt(
					P,
					1,
					`${$e.SidebarButton} ${(F(r) === 'text' ? $e.SidebarButtonActive : $e.SidebarButtonInactive) ?? ''}`
				),
				tt(_, 1, $e.SidebarTrashSection),
				tt(j, 1, $e.SidebarTrashButton);
		}),
		We(n, m),
		wr();
}
en(['click', 'change']);
var jh = Xe(
		'<div class="flex h-full items-center gap-6 overflow-x-auto"><div class="flex items-center gap-3 flex-shrink-0"><span class="text-purple-600"><!></span></div> <div class="h-6 w-px bg-primary flex-shrink-0"></div> <div class="flex-1 min-w-0"><!></div></div>'
	),
	Mh = Xe('<div><!></div>');
function Bh(n, e) {
	yr(e, !0);
	function r(l, u) {
		e.selectedElement && e.onUpdateElement(e.selectedElement.id, { [l]: u });
	}
	var i = Mh(),
		s = be(i);
	{
		var a = (l) => {
			var u = wa();
			const h = St(() => qt.getEditPanel(e.selectedElement.type, e.selectedElement.subType));
			var p = Nn(u);
			{
				var v = (m) => {
					var y = jh();
					const d = St(() => F(h).component);
					var E = be(y),
						N = be(E),
						P = be(N);
					Al(P, () => F(h).icon), ve(N), ve(E);
					var _ = xe(E, 4),
						j = be(_);
					Af(
						j,
						() => F(d),
						(O, G) => {
							G(O, {
								get element() {
									return e.selectedElement;
								},
								updateProperty: r
							});
						}
					),
						ve(_),
						ve(y),
						We(m, y);
				};
				Nt(p, (m) => {
					F(h) && m(v);
				});
			}
			We(l, u);
		};
		Nt(s, (l) => {
			e.isVisible && e.selectedElement && l(a);
		});
	}
	ve(i),
		gt(() =>
			tt(
				i,
				1,
				`h-full ${$e.PanelBg} px-6 py-3 ${e.isVisible && e.selectedElement ? 'border-b-2 border-green-400' : ''}`
			)
		),
		We(n, i),
		wr();
}
const va = { Fill: 'fill', Border: 'border', Text: 'text' };
function Dh(n, e) {
	n.preventDefault(), n.stopPropagation(), Ne(e, !F(e));
}
function Oh(n) {
	n.stopPropagation();
}
function Rh(n, e) {
	const i = n.target.value;
	(/^#[0-9A-Fa-f]{6}$/.test(i) || i === 'transparent') && e.onUpdate(i);
}
var qh = Xe(
		'<div class="absolute inset-0 bg-gray-200" style="background-image: repeating-conic-gradient(#ccc 0% 25%, transparent 0% 50%) 50% / 4px 4px;"></div> <div class="absolute inset-0 flex items-center justify-center"><span class="text-red-500 text-xs font-bold">∅</span></div>',
		1
	),
	zh = Xe('<div class="absolute inset-0"></div>'),
	Uh = Xe('<span class="text-red-500 text-xs font-bold">∅</span>'),
	Hh = Xe(
		'<div class="absolute inset-0 rounded border-4 bg-transparent pointer-events-none"></div>'
	),
	Wh = Xe('<span class="text-red-500 text-xs font-bold">∅</span>'),
	Gh = Xe('<span class="text-sm font-medium">A</span>'),
	Vh = (n, e) => Ne(e, !1),
	Yh = (n, e) => e('transparent'),
	Xh = (n, e, r) => e(F(r)),
	Jh = Xe(
		'<button type="button" class="w-6 h-6 rounded border border-green-400 hover:scale-110 transition-transform focus:ring-2 focus:ring-green-400 focus:outline-none"></button>'
	),
	Kh = (n, e) => e('transparent'),
	Zh = (n, e) => e('#000000'),
	Qh = (n, e) => e('#ffffff'),
	$h = Xe(
		'<div><div class="flex justify-end mb-3"><button type="button" class="text-green-400 hover:text-green-300 text-lg leading-none font-black" aria-label="Close color picker">×</button></div> <div class="grid grid-cols-10 gap-1 mb-4"><button type="button" class="w-6 h-6 rounded border border-green-400 hover:scale-110 transition-transform relative overflow-hidden bg-gray-800" aria-label="Transparent"><div class="absolute inset-0 bg-gray-200" style="background-image: repeating-conic-gradient(#ccc 0% 25%, transparent 0% 50%) 50% / 4px 4px;"></div> <div class="absolute inset-0 flex items-center justify-center"><span class="text-red-500 text-xs font-bold">∅</span></div></button> <!></div> <div class="flex items-center gap-2 mb-3"><label class="text-xs text-green-400 w-8 font-industrial font-black">HEX:</label> <input type="text" class="flex-1 px-2 py-1 text-xs border border-green-400 rounded bg-gray-900 text-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 font-mono"/></div> <div class="flex items-center gap-2 pt-2 border-t border-green-400"><button type="button" class="text-xs bg-gray-800 hover:bg-gray-700 text-green-400 px-2 py-1 rounded transition-colors border border-green-400 font-industrial font-black">Clear</button> <button type="button" class="text-xs bg-green-400 hover:bg-green-300 text-black px-2 py-1 rounded transition-colors font-industrial font-black">Black</button> <button type="button" class="text-xs bg-gray-900 hover:bg-gray-800 border border-green-400 text-green-400 px-2 py-1 rounded transition-colors font-industrial font-black">White</button></div></div>'
	),
	e2 = Xe(
		'<div class="relative flex items-center gap-2"><button type="button" class="h-8 w-8 rounded border-2 border-green-400 relative overflow-hidden transition-all hover:scale-105 focus:ring-2 focus:ring-green-400 focus:outline-none flex items-center justify-center bg-gray-900" aria-label="Choose color"><!></button> <!></div>'
	);
function zl(n, e) {
	yr(e, !0);
	let r = fn(e, 'type', 19, () => va.Fill),
		i = ut(!1),
		s,
		a = ut(void 0);
	const l = [
		'#000000',
		'#434343',
		'#666666',
		'#999999',
		'#b7b7b7',
		'#cccccc',
		'#d9d9d9',
		'#efefef',
		'#f3f3f3',
		'#ffffff',
		'#980000',
		'#ff0000',
		'#ff9900',
		'#ffff00',
		'#00ff00',
		'#00ffff',
		'#4a86c7',
		'#0000ff',
		'#9900ff',
		'#ff00ff',
		'#e6b8af',
		'#f4cccc',
		'#fce5cd',
		'#fff2cc',
		'#d9ead3',
		'#d0e0e3',
		'#c9daf8',
		'#cfe2f3',
		'#d9d2e9',
		'#ead1dc',
		'#dd7e6b',
		'#ea9999',
		'#f9cb9c',
		'#ffe599',
		'#b6d7a8',
		'#a2c4c9',
		'#a4c2f4',
		'#9fc5e8',
		'#b4a7d6',
		'#d5a6bd'
	];
	function u(P) {
		e.onUpdate(P);
	}
	function h() {
		const P = F(a).getBoundingClientRect();
		return { top: `${P.bottom - 24}px`, left: `${P.left}px` };
	}
	Yt(() => {
		if (F(i)) {
			let P = function (j) {
				s && !s.contains(j.target) && F(a) && !F(a).contains(j.target) && Ne(i, !1);
			};
			const _ = setTimeout(() => {
				document.addEventListener('click', P, !0);
			}, 100);
			return () => {
				clearTimeout(_), document.removeEventListener('click', P, !0);
			};
		}
	});
	var p = e2(),
		v = be(p);
	v.__click = [Dh, i];
	var m = be(v);
	{
		var y = (P) => {
				var _ = wa(),
					j = Nn(_);
				{
					var O = (W) => {
							var oe = qh();
							Qr(2), We(W, oe);
						},
						G = (W) => {
							var oe = zh();
							gt(() => qr(oe, `background-color: ${e.value ?? ''};`)), We(W, oe);
						};
					Nt(j, (W) => {
						e.value === 'transparent' || e.value === '#00000000' ? W(O) : W(G, !1);
					});
				}
				We(P, _);
			},
			d = (P, _) => {
				{
					var j = (G) => {
							var W = wa(),
								oe = Nn(W);
							{
								var ee = (re) => {
										var de = Uh();
										We(re, de);
									},
									z = (re) => {
										var de = Hh();
										gt(() => qr(de, `border-color: ${e.value ?? ''};`)), We(re, de);
									};
								Nt(oe, (re) => {
									e.value === 'transparent' || e.value === '#00000000' ? re(ee) : re(z, !1);
								});
							}
							We(G, W);
						},
						O = (G, W) => {
							{
								var oe = (ee) => {
									var z = wa(),
										re = Nn(z);
									{
										var de = (L) => {
												var q = Wh();
												We(L, q);
											},
											C = (L) => {
												var q = Gh();
												gt(() => qr(q, `color: ${e.value ?? ''};`)), We(L, q);
											};
										Nt(re, (L) => {
											e.value === 'transparent' || e.value === '#00000000' ? L(de) : L(C, !1);
										});
									}
									We(ee, z);
								};
								Nt(
									G,
									(ee) => {
										r() === va.Text && ee(oe);
									},
									W
								);
							}
						};
					Nt(
						P,
						(G) => {
							r() === va.Border ? G(j) : G(O, !1);
						},
						_
					);
				}
			};
		Nt(m, (P) => {
			r() === va.Fill ? P(y) : P(d, !1);
		});
	}
	ve(v),
		Vr(
			v,
			(P) => Ne(a, P),
			() => F(a)
		);
	var E = xe(v, 2);
	{
		var N = (P) => {
			var _ = $h();
			const j = St(h);
			_.__click = [Oh];
			var O = be(_),
				G = be(O);
			(G.__click = [Vh, i]), ve(O);
			var W = xe(O, 2),
				oe = be(W);
			oe.__click = [Yh, u];
			var ee = xe(oe, 2);
			Wn(
				ee,
				17,
				() => l,
				Si,
				(B, Z) => {
					var Q = Jh();
					(Q.__click = [Xh, u, Z]),
						gt(() => {
							qr(Q, `background-color: ${F(Z) ?? ''}`), Ai(Q, 'aria-label', `Color ${F(Z) ?? ''}`);
						}),
						We(B, Q);
				}
			),
				ve(W);
			var z = xe(W, 2),
				re = xe(be(z), 2);
			Wt(re), (re.__input = [Rh, e]), ve(z);
			var de = xe(z, 2),
				C = be(de);
			C.__click = [Kh, u];
			var L = xe(C, 2);
			L.__click = [Zh, u];
			var q = xe(L, 2);
			(q.__click = [Qh, u]),
				ve(de),
				ve(_),
				Vr(
					_,
					(B) => (s = B),
					() => s
				),
				gt(() => {
					tt(_, 1, `fixed ${$e.DropdownPanel} p-4 w-64 z-[99999]`),
						qr(_, `top: ${F(j).top ?? ''}; left: ${F(j).left ?? ''};`),
						Sa(re, e.value === 'transparent' ? '' : e.value),
						Ai(re, 'placeholder', e.value === 'transparent' ? 'transparent' : '#000000');
				}),
				We(P, _);
		};
		Nt(E, (P) => {
			F(i) && P(N);
		});
	}
	return ve(p), We(n, p), wr({ ColorPickerType: va });
}
en(['click', 'input']);
function t2(n, e, r, i, s, a) {
	F(e) > 0 && F(r) > 0 && (i.onSizeChange(F(e), F(r)), Ne(s, !1), Ne(a, !1));
}
function r2(n, e, r, i, s) {
	Ne(e, !F(e)), F(e) && (Ne(r, i.currentWidth, !0), Ne(s, i.currentHeight, !0));
}
var n2 = (n, e) => Ne(e, !F(e)),
	i2 = (n, e, r) => e(F(r)),
	a2 = Xe(
		'<button type="button"><span> </span> <span class="text-xs text-text-muted group-hover:text-black font-mono"> </span></button>'
	),
	o2 = Xe('<div></div>'),
	s2 = Xe('<div class="p-2"><div> </div> <!></div> <!>', 1),
	l2 = Xe(
		'<div class="mt-2 px-2 pb-2"><div class="flex gap-2 items-center"><label for="custom-width" class="sr-only">Custom canvas width</label> <input id="custom-width" type="number" placeholder="Width" min="1" aria-label="Canvas width in pixels"/> <span class="text-xs text-text-muted">×</span> <label for="custom-height" class="sr-only">Custom canvas height</label> <input id="custom-height" type="number" placeholder="Height" min="1" aria-label="Canvas height in pixels"/> <button type="button" class="px-2 py-1 text-xs bg-green-400 text-black rounded hover:bg-green-300 focus:outline-none focus:ring-1 focus:ring-green-400 font-industrial font-black" aria-label="Apply custom canvas size">Apply</button></div></div>'
	),
	c2 = Xe(
		'<div><!> <div><button type="button"><span>Custom Size</span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 12,15 18,9"></polyline></svg></button> <!></div></div>'
	),
	u2 = (n, e, r) => {
		Ne(e, !1), Ne(r, !1);
	},
	f2 = Xe('<div class="fixed inset-0 z-[999998]"></div>'),
	h2 = Xe(
		'<div class="relative"><button type="button"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 9h6v6H9z"></path></svg> <span class="max-w-32 truncate"> </span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 12,15 18,9"></polyline></svg></button> <!></div> <!>',
		1
	);
function d2(n, e) {
	yr(e, !0);
	const r = [
		{ name: 'Instagram Post', width: 1080, height: 1080, category: 'Social' },
		{ name: 'Instagram Story', width: 1080, height: 1920, category: 'Social' },
		{ name: 'Facebook Post', width: 1200, height: 630, category: 'Social' },
		{ name: 'Twitter Post', width: 1200, height: 675, category: 'Social' },
		{ name: 'LinkedIn Post', width: 1200, height: 627, category: 'Social' },
		{ name: 'A4', width: 2480, height: 3508, category: 'Print' },
		{ name: 'US Letter', width: 2550, height: 3300, category: 'Print' },
		{ name: 'Business Card', width: 1050, height: 600, category: 'Print' },
		{ name: 'Poster', width: 2400, height: 3600, category: 'Print' },
		{ name: 'Desktop Banner', width: 1920, height: 1080, category: 'Web' },
		{ name: 'Mobile Banner', width: 320, height: 568, category: 'Web' },
		{ name: 'Square', width: 800, height: 800, category: 'Web' }
	];
	let i = ut(!1),
		s = ut(void 0),
		a = ut(ni(e.currentWidth)),
		l = ut(ni(e.currentHeight)),
		u = ut(!1);
	const h = St(() => () => {
		const W = r.find((oe) => oe.width === e.currentWidth && oe.height === e.currentHeight);
		return W ? W.name : `${e.currentWidth} × ${e.currentHeight}`;
	});
	Yt(() => {
		Ne(a, e.currentWidth, !0), Ne(l, e.currentHeight, !0);
	});
	function p(W) {
		e.onSizeChange(W.width, W.height), Ne(i, !1), Ne(u, !1);
	}
	const v = St(() => () => {
		const W = {};
		return (
			r.forEach((oe) => {
				W[oe.category] || (W[oe.category] = []), W[oe.category].push(oe);
			}),
			W
		);
	});
	var m = h2(),
		y = Nn(m),
		d = be(y);
	d.__click = [n2, i];
	var E = xe(be(d), 2),
		N = be(E, !0);
	ve(E);
	var P = xe(E, 2);
	ve(d),
		Vr(
			d,
			(W) => Ne(s, W),
			() => F(s)
		);
	var _ = xe(d, 2);
	{
		var j = (W) => {
			var oe = c2();
			const ee = St(() => {
				var B;
				return (B = F(s)) == null ? void 0 : B.getBoundingClientRect();
			});
			var z = be(oe);
			Wn(
				z,
				17,
				() => Object.entries(F(v)()),
				Si,
				(B, Z) => {
					var Q = St(() => xf(F(Z), 2));
					let ie = () => F(Q)[0],
						K = () => F(Q)[1];
					var le = s2(),
						ue = Nn(le),
						Se = be(ue),
						b = be(Se, !0);
					ve(Se);
					var T = xe(Se, 2);
					Wn(T, 17, K, Si, (V, te) => {
						var se = a2();
						se.__click = [i2, p, te];
						var ce = be(se),
							Ce = be(ce, !0);
						ve(ce);
						var ye = xe(ce, 2),
							Te = be(ye);
						ve(ye),
							ve(se),
							gt(() => {
								tt(se, 1, $e.DropdownItem),
									Fr(Ce, F(te).name),
									Fr(Te, `${F(te).width ?? ''} × ${F(te).height ?? ''}`);
							}),
							We(V, se);
					}),
						ve(ue);
					var M = xe(ue, 2);
					{
						var H = (V) => {
							var te = o2();
							gt(() => tt(te, 1, $e.DropdownDivider)), We(V, te);
						};
						Nt(M, (V) => {
							ie() !== 'Web' && V(H);
						});
					}
					gt(() => {
						tt(Se, 1, $e.DropdownCategory), Fr(b, ie());
					}),
						We(B, le);
				}
			);
			var re = xe(z, 2),
				de = be(re);
			de.__click = [r2, u, a, e, l];
			var C = xe(be(de), 2);
			ve(de);
			var L = xe(de, 2);
			{
				var q = (B) => {
					var Z = l2(),
						Q = be(Z),
						ie = xe(be(Q), 2);
					Wt(ie);
					var K = xe(ie, 6);
					Wt(K);
					var le = xe(K, 2);
					(le.__click = [t2, a, l, e, i, u]),
						ve(Q),
						ve(Z),
						gt(() => {
							tt(ie, 1, `w-20 ${$e.DropdownInput}`), tt(K, 1, `w-20 ${$e.DropdownInput}`);
						}),
						lo(
							ie,
							() => F(a),
							(ue) => Ne(a, ue)
						),
						lo(
							K,
							() => F(l),
							(ue) => Ne(l, ue)
						),
						We(B, Z);
				};
				Nt(L, (B) => {
					F(u) && B(q);
				});
			}
			ve(re),
				ve(oe),
				gt(() => {
					tt(oe, 1, `fixed w-64 ${$e.DropdownPanel} max-h-96 overflow-y-auto z-[99999]`),
						qr(oe, `top: ${F(ee).bottom - 24}px; left: ${F(ee).left ?? ''}px;`),
						tt(re, 1, `${$e.DropdownDivider} p-2`),
						tt(de, 1, $e.DropdownItem),
						tt(C, 0, `transition-transform ${F(u) ? 'rotate-180' : ''}`);
				}),
				We(W, oe);
		};
		Nt(_, (W) => {
			F(i) && W(j);
		});
	}
	ve(y);
	var O = xe(y, 2);
	{
		var G = (W) => {
			var oe = f2();
			(oe.__click = [u2, i, u]), We(W, oe);
		};
		Nt(O, (W) => {
			F(i) && W(G);
		});
	}
	gt(
		(W) => {
			tt(d, 1, $e.DropdownButton),
				Fr(N, W),
				tt(P, 0, `transition-transform ${F(i) ? 'rotate-180' : ''}`);
		},
		[() => F(h)()]
	),
		We(n, m),
		wr();
}
en(['click']);
var p2 = (n, e) => e.onToggleGrid(!e.showGrid),
	g2 = (n, e) => e.onUpdateZoom(Math.max(25, e.zoom - 25)),
	v2 = (n, e) => e.onUpdateZoom(+n.target.value),
	m2 = Xe('<option> </option>'),
	b2 = (n, e) => e.onUpdateZoom(Math.min(500, e.zoom + 25)),
	y2 = Xe(
		'<div class="flex items-center gap-4"><!> <div></div> <!> <div></div> <button type="button" title="Toggle grid"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="8" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="16" y2="21"></line><line x1="3" y1="8" x2="21" y2="8"></line><line x1="3" y1="16" x2="21" y2="16"></line></svg></button> <div></div> <div class="flex items-center gap-2"><button type="button" title="Zoom out" aria-label="Zoom out canvas"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path><line x1="8" y1="11" x2="14" y2="11"></line></svg></button> <select aria-label="Canvas zoom level"></select> <button type="button" title="Zoom in" aria-label="Zoom in canvas"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg></button></div> <div></div> <button type="button" title="Fit to window" aria-label="Fit canvas to window"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg></button></div>'
	);
function w2(n, e) {
	yr(e, !0);
	const r = [25, 50, 75, 100, 125, 150, 200, 300, 400, 500],
		i = St(() => (r.includes(e.zoom) ? r : [...r, e.zoom].sort((j, O) => j - O)));
	var s = y2(),
		a = be(s);
	d2(a, {
		get currentWidth() {
			return e.canvasWidth;
		},
		get currentHeight() {
			return e.canvasHeight;
		},
		get onSizeChange() {
			return e.onUpdateCanvasSize;
		}
	});
	var l = xe(a, 2),
		u = xe(l, 2);
	zl(u, {
		get value() {
			return e.backgroundColor;
		},
		get onUpdate() {
			return e.onUpdateBackground;
		}
	});
	var h = xe(u, 2),
		p = xe(h, 2);
	p.__click = [p2, e];
	var v = xe(p, 2),
		m = xe(v, 2),
		y = be(m);
	y.__click = [g2, e];
	var d = xe(y, 2);
	Jc(d, () => e.zoom);
	var E;
	(d.__change = [v2, e]),
		Wn(
			d,
			21,
			() => F(i),
			Si,
			(j, O) => {
				var G = m2(),
					W = {},
					oe = be(G);
				ve(G),
					gt(() => {
						W !== (W = F(O)) && (G.value = (G.__value = F(O)) ?? ''), Fr(oe, `${F(O) ?? ''}%`);
					}),
					We(j, G);
			}
		),
		ve(d);
	var N = xe(d, 2);
	(N.__click = [b2, e]), ve(m);
	var P = xe(m, 2),
		_ = xe(P, 2);
	(_.__click = function (...j) {
		var O;
		(O = e.onFitToWindow) == null || O.apply(this, j);
	}),
		ve(s),
		gt(() => {
			tt(l, 1, $e.EditPanelDivider),
				tt(h, 1, $e.EditPanelDivider),
				tt(p, 1, `${$e.EditPanelIconButton} ${e.showGrid ? 'bg-green-400 text-black' : ''}`),
				Ai(p, 'aria-pressed', e.showGrid),
				tt(v, 1, $e.EditPanelDivider),
				tt(y, 1, $e.EditPanelSmallButton),
				(y.disabled = e.zoom <= 25),
				E !== (E = e.zoom) && ((d.value = (d.__value = e.zoom) ?? ''), Kc(d, e.zoom)),
				tt(d, 1, $e.EditPanelSelect),
				tt(N, 1, $e.EditPanelSmallButton),
				(N.disabled = e.zoom >= 500),
				tt(P, 1, $e.EditPanelDivider),
				tt(_, 1, $e.EditPanelIconButton);
		}),
		We(n, s),
		wr();
}
en(['click', 'change']);
var x2 = Xe(
		'<div class="absolute inset-0 pointer-events-none"><div class="absolute top-0 bottom-0" style="left: 33.33%; border-left: 2px solid #6b7280; opacity: 0.8;"></div> <div class="absolute top-0 bottom-0" style="left: 66.67%; border-left: 2px solid #6b7280; opacity: 0.8;"></div> <div class="absolute left-0 right-0" style="top: 33.33%; border-top: 2px solid #6b7280; opacity: 0.8;"></div> <div class="absolute left-0 right-0" style="top: 66.67%; border-top: 2px solid #6b7280; opacity: 0.8;"></div></div>'
	),
	_2 = Xe('<!> <!> <!> <!>', 1),
	L2 = Xe('<div class="flex items-center justify-center w-full h-full"><!></div>'),
	A2 = Xe(
		'<div class="flex-1 overflow-auto"><div class="flex items-center justify-center"><div class="border border-gray-200 shadow-lg relative"><!> <!></div></div></div>'
	);
function S2(n, e) {
	yr(e, !0);
	let r = ut(void 0),
		i = ut(void 0),
		s = ut(void 0);
	Yt(() => {
		if (F(r) && e.onStageReady) {
			let N = null;
			typeof F(r).getNode == 'function'
				? (N = F(r).getNode())
				: F(r).node
					? (N = F(r).node)
					: F(r)._node && (N = F(r)._node),
				N && e.onStageReady(N);
		}
	}),
		Yt(() => {
			e.selectedId && F(s) && F(i) ? a() : F(s) && F(i) && l();
		});
	function a() {
		if (!F(s) || !e.selectedId || !F(i)) return;
		let N = null;
		typeof F(s).getNode == 'function'
			? (N = F(s).getNode())
			: F(s).node
				? (N = F(s).node)
				: F(s)._node && (N = F(s)._node);
		let P = null;
		if (
			(typeof F(i).getNode == 'function'
				? (P = F(i).getNode())
				: F(i).node
					? (P = F(i).node)
					: F(i)._node && (P = F(i)._node),
			!N || !P)
		)
			return;
		const _ = P.findOne(`#${e.selectedId}`);
		_ && (N.nodes([_]), P.batchDraw());
	}
	function l() {
		if (!F(s) || !F(i)) return;
		let N = null;
		if (
			(typeof F(s).getNode == 'function'
				? (N = F(s).getNode())
				: F(s).node
					? (N = F(s).node)
					: F(s)._node && (N = F(s)._node),
			N)
		) {
			N.nodes([]);
			let P = null;
			typeof F(i).getNode == 'function'
				? (P = F(i).getNode())
				: F(i).node
					? (P = F(i).node)
					: F(i)._node && (P = F(i)._node),
				P && P.batchDraw();
		}
	}
	function u(N) {
		const P = N.target,
			_ = P.id(),
			j = P.scaleX(),
			O = P.scaleY(),
			G = P.rotation(),
			W = P.x(),
			oe = P.y();
		Ef.update((ee) =>
			ee.map((z) => (z.id === _ ? { ...z, x: W, y: oe, scaleX: j, scaleY: O, rotation: G } : z))
		),
			ru.update((ee) =>
				ee.map((z) => (z.id === _ ? { ...z, x: W, y: oe, scaleX: j, scaleY: O, rotation: G } : z))
			),
			fh.update((ee) =>
				ee.map((z) => (z.id === _ ? { ...z, x: W, y: oe, scaleX: j, scaleY: O, rotation: G } : z))
			),
			$r.pushState();
	}
	var h = A2(),
		p = be(h),
		v = be(p),
		m = be(v);
	{
		var y = (N) => {
			var P = x2();
			We(N, P);
		};
		Nt(m, (N) => {
			e.showGrid && N(y);
		});
	}
	var d = xe(m, 2);
	{
		var E = (N) => {
			var P = L2(),
				_ = be(P);
			Vr(
				Pf(_, {
					get width() {
						return e.canvasWidth;
					},
					get height() {
						return e.canvasHeight;
					},
					class: 'block',
					get onclick() {
						return e.onStageClick;
					},
					get onwheel() {
						return e.onWheel;
					},
					get onmousedown() {
						return e.onMouseDown;
					},
					get onmousemove() {
						return e.onMouseMove;
					},
					get onmouseup() {
						return e.onMouseUp;
					},
					'aria-label': 'Design canvas - click to add elements, drag to move selected elements',
					role: 'img',
					children: (j, O) => {
						Vr(
							Cf(j, {
								children: (G, W) => {
									var oe = _2(),
										ee = Nn(oe);
									If(ee, {
										get shapes() {
											return e.shapes;
										},
										get selectedId() {
											return e.selectedId;
										},
										get onDragEnd() {
											return e.onElementDragEnd;
										},
										get onElementClick() {
											return e.onElementClick;
										}
									});
									var z = xe(ee, 2);
									Ff(z, {
										get images() {
											return e.images;
										},
										get selectedId() {
											return e.selectedId;
										},
										get onDragEnd() {
											return e.onElementDragEnd;
										},
										get onElementClick() {
											return e.onElementClick;
										}
									});
									var re = xe(z, 2);
									Wn(
										re,
										17,
										() => e.texts,
										(C) => C.id,
										(C, L) => {
											const q = St(() => F(L).fontSize || 16),
												B = St(() => F(L).strokeWidth || 0),
												Z = St(() => F(L).padding || 4),
												Q = St(() => F(L).width || 150),
												ie = St(() => F(L).height || 30),
												K = St(() => F(L).scaleX ?? 1),
												le = St(() => F(L).scaleY ?? 1),
												ue = St(() => F(L).rotation ?? 0);
											ga(C, {
												get x() {
													return F(L).x;
												},
												get y() {
													return F(L).y;
												},
												get text() {
													return F(L).text;
												},
												get fontFamily() {
													return F(L).fontFamily;
												},
												get fontSize() {
													return F(q);
												},
												get fontWeight() {
													return F(L).fontWeight;
												},
												get textAlign() {
													return F(L).textAlign;
												},
												get fill() {
													return F(L).fill;
												},
												get stroke() {
													return F(L).stroke;
												},
												get strokeWidth() {
													return F(B);
												},
												get opacity() {
													return F(L).opacity;
												},
												get padding() {
													return F(Z);
												},
												get width() {
													return F(Q);
												},
												get height() {
													return F(ie);
												},
												get scaleX() {
													return F(K);
												},
												get scaleY() {
													return F(le);
												},
												get rotation() {
													return F(ue);
												},
												draggable: !0,
												get id() {
													return F(L).id;
												},
												onclick: (Se) => {
													(Se.cancelBubble = !0), e.onTextElementClick(F(L).id);
												},
												ondblclick: (Se) => {
													(Se.cancelBubble = !0), e.onTextElementDblClick(F(L));
												},
												ondragend: (Se) => e.onTextElementDragEnd(F(L), Se)
											});
										}
									);
									var de = xe(re, 2);
									Vr(
										Kf(de, {
											config: {
												enabledAnchors: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
												rotateEnabled: !0,
												borderEnabled: !0,
												anchorSize: 8,
												anchorFill: '#ffffff',
												anchorStroke: '#3b82f6',
												anchorStrokeWidth: 2,
												borderStroke: '#3b82f6',
												borderStrokeWidth: 1,
												borderDash: [4, 4],
												rotateAnchorOffset: 20,
												anchorCornerRadius: 2
											},
											ontransformend: u
										}),
										(C) => Ne(s, C, !0),
										() => F(s)
									),
										We(G, oe);
								},
								$$slots: { default: !0 }
							}),
							(G) => Ne(i, G, !0),
							() => F(i)
						);
					},
					$$slots: { default: !0 }
				}),
				(j) => Ne(r, j, !0),
				() => F(r)
			),
				ve(P),
				We(N, P);
		};
		Nt(d, (N) => {
			N(E);
		});
	}
	return (
		ve(v),
		ve(p),
		ve(h),
		gt(() => {
			qr(
				p,
				`padding: 48px; min-width: ${e.canvasWidth + 96}px; min-height: ${e.canvasHeight + 96}px;`
			),
				qr(
					v,
					`background-color: ${e.canvasBackgroundColor ?? ''}; width: ${e.canvasWidth ?? ''}px; height: ${e.canvasHeight ?? ''}px;`
				);
		}),
		We(n, h),
		wr({
			get stageRef() {
				return F(r);
			},
			set stageRef(N) {
				Ne(r, ni(N));
			},
			updateTransformer: a
		})
	);
}
function N2() {
	br.addPage();
}
var k2 = Xe(
	'<button class="flex flex-col items-center justify-center w-16 border-2 border-dashed border-primary bg-transparent hover:bg-background-panel transition-colors group" style="writing-mode: vertical-rl; text-orientation: mixed;" aria-label="Add new page" title="Add Page"><svg class="w-6 h-6 mb-2 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg> <span class="text-sm font-black tracking-wide font-industrial text-primary">ADD PAGE</span></button>'
);
function P2(n, e) {
	yr(e, !0);
	let r;
	Yt(() => {
		var s, a;
		if (r) {
			const l =
				(a = (s = r.parentElement) == null ? void 0 : s.parentElement) == null
					? void 0
					: a.querySelector('div[class*="flex-shrink-0 border-2"]');
			if (l) {
				const u = l.offsetHeight;
				r.style.height = `${u}px`;
			}
		}
	});
	var i = k2();
	(i.__click = [N2]),
		Vr(
			i,
			(s) => (r = s),
			() => r
		),
		We(n, i),
		wr();
}
en(['click']);
var C2 = Xe(
		'<div class="flex-shrink-0 border-2 transition-all duration-200"><div class="px-3 py-1 text-xs font-black tracking-wide font-industrial bg-background-panel border-b border-border"><span class="text-text-muted"> </span></div> <div class="cursor-default"><!></div></div>'
	),
	I2 = Xe('<div><!> <div class="flex-shrink-0 flex"><!></div></div>');
function F2(n, e) {
	yr(e, !0);
	const [r, i] = Xc(),
		s = () => Ri(br, '$zineStore', r),
		a = () => Ri(ii, '$elements', r);
	let l = fn(e, 'stageRefs', 15),
		u = ut(ni([])),
		h = ut(void 0);
	Yt(() => {
		const O = s().pages.length;
		(!l() || l().length !== O) && l(new Array(O).fill(null)),
			F(u).length !== O && Ne(u, new Array(O).fill(null), !0);
	});
	function p(O, G) {
		l((l()[G] = { node: O }), !0),
			G === s().currentPageIndex && e.onStageReady && e.onStageReady(O);
	}
	Yt(() => {
		const O = F(u)[s().currentPageIndex];
		O && F(v) !== O && Ne(v, O, !0);
	});
	let v = ut(void 0);
	function m(O) {
		const G = a().filter((W) => W.pageId === O);
		return { shapes: G.filter(eh), texts: G.filter(Qc), images: G.filter(th) };
	}
	function y(O) {
		if (!F(h)) return;
		const G = F(h).children[O];
		if (G) {
			const W = F(h).clientWidth,
				oe = G.offsetLeft,
				ee = G.clientWidth,
				z = oe - (W - ee) / 2;
			F(h).scrollTo({ left: z, behavior: 'smooth' });
		}
	}
	function d(O) {
		br.setCurrentPage(O), l()[O] && e.onStageReady && e.onStageReady(l()[O]), y(O);
	}
	Yt(() => {
		const O = s().currentPageIndex;
		y(O);
	});
	var E = I2();
	let N;
	var P = be(E);
	Wn(
		P,
		3,
		() => s().pages,
		(O) => O.id,
		(O, G, W) => {
			var oe = C2();
			const ee = St(() => m(F(G).id));
			var z = be(oe),
				re = be(z),
				de = be(re);
			ve(re), ve(z);
			var C = xe(z, 2);
			C.__click = () => d(F(W));
			var L = be(C);
			Vr(
				S2(L, {
					onStageReady: (q) => p(q, F(W)),
					get canvasWidth() {
						return F(G).canvasWidth;
					},
					get canvasHeight() {
						return F(G).canvasHeight;
					},
					get canvasZoom() {
						return e.canvasZoom;
					},
					get canvasBackgroundColor() {
						return F(G).canvasBackgroundColor;
					},
					get showGrid() {
						return e.showGrid;
					},
					get shapes() {
						return F(ee).shapes;
					},
					get images() {
						return F(ee).images;
					},
					get texts() {
						return F(ee).texts;
					},
					get selectedId() {
						return e.selectedId;
					},
					get onStageClick() {
						return e.onStageClick;
					},
					get onWheel() {
						return e.onWheel;
					},
					get onMouseDown() {
						return e.onMouseDown;
					},
					get onMouseMove() {
						return e.onMouseMove;
					},
					get onMouseUp() {
						return e.onMouseUp;
					},
					get onElementDragEnd() {
						return e.onElementDragEnd;
					},
					get onElementClick() {
						return e.onElementClick;
					},
					get onTextElementClick() {
						return e.onTextElementClick;
					},
					get onTextElementDblClick() {
						return e.onTextElementDblClick;
					},
					get onTextElementDragEnd() {
						return e.onTextElementDragEnd;
					}
				}),
				(q, B) => (F(u)[B] = q),
				(q) => {
					var B;
					return (B = F(u)) == null ? void 0 : B[q];
				},
				() => [F(W)]
			),
				ve(C),
				ve(oe),
				gt(() => {
					qr(
						oe,
						`border-color: ${F(W) === s().currentPageIndex ? 'var(--color-primary)' : 'var(--color-border)'};`
					),
						Fr(de, `Page ${F(G).pageNumber ?? ''}`);
				}),
				We(O, oe);
		}
	);
	var _ = xe(P, 2),
		j = be(_);
	P2(j, {}),
		ve(_),
		ve(E),
		Vr(
			E,
			(O) => Ne(h, O),
			() => F(h)
		),
		gt(
			(O) =>
				(N = tt(
					E,
					1,
					'flex items-start gap-4 overflow-x-auto pb-4 pt-4 svelte-qexxnd',
					null,
					N,
					O
				)),
			[() => ({ 'justify-center': s().pages.length === 1 })]
		),
		We(n, E),
		wr(),
		i();
}
en(['click']);
function Bt(n) {
	'@babel/helpers - typeof';
	return (
		(Bt =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (e) {
						return typeof e;
					}
				: function (e) {
						return e &&
							typeof Symbol == 'function' &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? 'symbol'
							: typeof e;
					}),
		Bt(n)
	);
}
var zr = Uint8Array,
	hn = Uint16Array,
	Ul = Int32Array,
	gs = new zr([
		0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0
	]),
	vs = new zr([
		0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13,
		13, 0, 0
	]),
	Sl = new zr([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
	nu = function (n, e) {
		for (var r = new hn(31), i = 0; i < 31; ++i) r[i] = e += 1 << n[i - 1];
		for (var s = new Ul(r[30]), i = 1; i < 30; ++i)
			for (var a = r[i]; a < r[i + 1]; ++a) s[a] = ((a - r[i]) << 5) | i;
		return { b: r, r: s };
	},
	iu = nu(gs, 2),
	au = iu.b,
	Nl = iu.r;
(au[28] = 258), (Nl[258] = 28);
var ou = nu(vs, 0),
	E2 = ou.b,
	Nc = ou.r,
	kl = new hn(32768);
for (var Xt = 0; Xt < 32768; ++Xt) {
	var xi = ((Xt & 43690) >> 1) | ((Xt & 21845) << 1);
	(xi = ((xi & 52428) >> 2) | ((xi & 13107) << 2)),
		(xi = ((xi & 61680) >> 4) | ((xi & 3855) << 4)),
		(kl[Xt] = (((xi & 65280) >> 8) | ((xi & 255) << 8)) >> 1);
}
var Hn = function (n, e, r) {
		for (var i = n.length, s = 0, a = new hn(e); s < i; ++s) n[s] && ++a[n[s] - 1];
		var l = new hn(e);
		for (s = 1; s < e; ++s) l[s] = (l[s - 1] + a[s - 1]) << 1;
		var u;
		if (r) {
			u = new hn(1 << e);
			var h = 15 - e;
			for (s = 0; s < i; ++s)
				if (n[s])
					for (
						var p = (s << 4) | n[s], v = e - n[s], m = l[n[s] - 1]++ << v, y = m | ((1 << v) - 1);
						m <= y;
						++m
					)
						u[kl[m] >> h] = p;
		} else for (u = new hn(i), s = 0; s < i; ++s) n[s] && (u[s] = kl[l[n[s] - 1]++] >> (15 - n[s]));
		return u;
	},
	Ni = new zr(288);
for (var Xt = 0; Xt < 144; ++Xt) Ni[Xt] = 8;
for (var Xt = 144; Xt < 256; ++Xt) Ni[Xt] = 9;
for (var Xt = 256; Xt < 280; ++Xt) Ni[Xt] = 7;
for (var Xt = 280; Xt < 288; ++Xt) Ni[Xt] = 8;
var co = new zr(32);
for (var Xt = 0; Xt < 32; ++Xt) co[Xt] = 5;
var T2 = Hn(Ni, 9, 0),
	j2 = Hn(Ni, 9, 1),
	M2 = Hn(co, 5, 0),
	B2 = Hn(co, 5, 1),
	pl = function (n) {
		for (var e = n[0], r = 1; r < n.length; ++r) n[r] > e && (e = n[r]);
		return e;
	},
	En = function (n, e, r) {
		var i = (e / 8) | 0;
		return ((n[i] | (n[i + 1] << 8)) >> (e & 7)) & r;
	},
	gl = function (n, e) {
		var r = (e / 8) | 0;
		return (n[r] | (n[r + 1] << 8) | (n[r + 2] << 16)) >> (e & 7);
	},
	Hl = function (n) {
		return ((n + 7) / 8) | 0;
	},
	su = function (n, e, r) {
		return (r == null || r > n.length) && (r = n.length), new zr(n.subarray(e, r));
	},
	D2 = [
		'unexpected EOF',
		'invalid block type',
		'invalid length/literal',
		'invalid distance',
		'stream finished',
		'no stream handler',
		,
		'no callback',
		'invalid UTF-8 data',
		'extra field too long',
		'date not in range 1980-2099',
		'filename too long',
		'stream finishing',
		'invalid zip data'
	],
	jn = function (n, e, r) {
		var i = new Error(e || D2[n]);
		if (((i.code = n), Error.captureStackTrace && Error.captureStackTrace(i, jn), !r)) throw i;
		return i;
	},
	O2 = function (n, e, r, i) {
		var s = n.length,
			a = 0;
		if (!s || (e.f && !e.l)) return r || new zr(0);
		var l = !r,
			u = l || e.i != 2,
			h = e.i;
		l && (r = new zr(s * 3));
		var p = function (ye) {
				var Te = r.length;
				if (ye > Te) {
					var Fe = new zr(Math.max(Te * 2, ye));
					Fe.set(r), (r = Fe);
				}
			},
			v = e.f || 0,
			m = e.p || 0,
			y = e.b || 0,
			d = e.l,
			E = e.d,
			N = e.m,
			P = e.n,
			_ = s * 8;
		do {
			if (!d) {
				v = En(n, m, 1);
				var j = En(n, m + 1, 3);
				if (((m += 3), j))
					if (j == 1) (d = j2), (E = B2), (N = 9), (P = 5);
					else if (j == 2) {
						var oe = En(n, m, 31) + 257,
							ee = En(n, m + 10, 15) + 4,
							z = oe + En(n, m + 5, 31) + 1;
						m += 14;
						for (var re = new zr(z), de = new zr(19), C = 0; C < ee; ++C)
							de[Sl[C]] = En(n, m + C * 3, 7);
						m += ee * 3;
						for (var L = pl(de), q = (1 << L) - 1, B = Hn(de, L, 1), C = 0; C < z; ) {
							var Z = B[En(n, m, q)];
							m += Z & 15;
							var O = Z >> 4;
							if (O < 16) re[C++] = O;
							else {
								var Q = 0,
									ie = 0;
								for (
									O == 16
										? ((ie = 3 + En(n, m, 3)), (m += 2), (Q = re[C - 1]))
										: O == 17
											? ((ie = 3 + En(n, m, 7)), (m += 3))
											: O == 18 && ((ie = 11 + En(n, m, 127)), (m += 7));
									ie--;

								)
									re[C++] = Q;
							}
						}
						var K = re.subarray(0, oe),
							le = re.subarray(oe);
						(N = pl(K)), (P = pl(le)), (d = Hn(K, N, 1)), (E = Hn(le, P, 1));
					} else jn(1);
				else {
					var O = Hl(m) + 4,
						G = n[O - 4] | (n[O - 3] << 8),
						W = O + G;
					if (W > s) {
						h && jn(0);
						break;
					}
					u && p(y + G), r.set(n.subarray(O, W), y), (e.b = y += G), (e.p = m = W * 8), (e.f = v);
					continue;
				}
				if (m > _) {
					h && jn(0);
					break;
				}
			}
			u && p(y + 131072);
			for (var ue = (1 << N) - 1, Se = (1 << P) - 1, b = m; ; b = m) {
				var Q = d[gl(n, m) & ue],
					T = Q >> 4;
				if (((m += Q & 15), m > _)) {
					h && jn(0);
					break;
				}
				if ((Q || jn(2), T < 256)) r[y++] = T;
				else if (T == 256) {
					(b = m), (d = null);
					break;
				} else {
					var M = T - 254;
					if (T > 264) {
						var C = T - 257,
							H = gs[C];
						(M = En(n, m, (1 << H) - 1) + au[C]), (m += H);
					}
					var V = E[gl(n, m) & Se],
						te = V >> 4;
					V || jn(3), (m += V & 15);
					var le = E2[te];
					if (te > 3) {
						var H = vs[te];
						(le += gl(n, m) & ((1 << H) - 1)), (m += H);
					}
					if (m > _) {
						h && jn(0);
						break;
					}
					u && p(y + 131072);
					var se = y + M;
					if (y < le) {
						var ce = a - le,
							Ce = Math.min(le, se);
						for (ce + y < 0 && jn(3); y < Ce; ++y) r[y] = i[ce + y];
					}
					for (; y < se; ++y) r[y] = r[y - le];
				}
			}
			(e.l = d), (e.p = b), (e.b = y), (e.f = v), d && ((v = 1), (e.m = N), (e.d = E), (e.n = P));
		} while (!v);
		return y != r.length && l ? su(r, 0, y) : r.subarray(0, y);
	},
	ri = function (n, e, r) {
		r <<= e & 7;
		var i = (e / 8) | 0;
		(n[i] |= r), (n[i + 1] |= r >> 8);
	},
	no = function (n, e, r) {
		r <<= e & 7;
		var i = (e / 8) | 0;
		(n[i] |= r), (n[i + 1] |= r >> 8), (n[i + 2] |= r >> 16);
	},
	vl = function (n, e) {
		for (var r = [], i = 0; i < n.length; ++i) n[i] && r.push({ s: i, f: n[i] });
		var s = r.length,
			a = r.slice();
		if (!s) return { t: cu, l: 0 };
		if (s == 1) {
			var l = new zr(r[0].s + 1);
			return (l[r[0].s] = 1), { t: l, l: 1 };
		}
		r.sort(function (W, oe) {
			return W.f - oe.f;
		}),
			r.push({ s: -1, f: 25001 });
		var u = r[0],
			h = r[1],
			p = 0,
			v = 1,
			m = 2;
		for (r[0] = { s: -1, f: u.f + h.f, l: u, r: h }; v != s - 1; )
			(u = r[r[p].f < r[m].f ? p++ : m++]),
				(h = r[p != v && r[p].f < r[m].f ? p++ : m++]),
				(r[v++] = { s: -1, f: u.f + h.f, l: u, r: h });
		for (var y = a[0].s, i = 1; i < s; ++i) a[i].s > y && (y = a[i].s);
		var d = new hn(y + 1),
			E = Pl(r[v - 1], d, 0);
		if (E > e) {
			var i = 0,
				N = 0,
				P = E - e,
				_ = 1 << P;
			for (
				a.sort(function (oe, ee) {
					return d[ee.s] - d[oe.s] || oe.f - ee.f;
				});
				i < s;
				++i
			) {
				var j = a[i].s;
				if (d[j] > e) (N += _ - (1 << (E - d[j]))), (d[j] = e);
				else break;
			}
			for (N >>= P; N > 0; ) {
				var O = a[i].s;
				d[O] < e ? (N -= 1 << (e - d[O]++ - 1)) : ++i;
			}
			for (; i >= 0 && N; --i) {
				var G = a[i].s;
				d[G] == e && (--d[G], ++N);
			}
			E = e;
		}
		return { t: new zr(d), l: E };
	},
	Pl = function (n, e, r) {
		return n.s == -1 ? Math.max(Pl(n.l, e, r + 1), Pl(n.r, e, r + 1)) : (e[n.s] = r);
	},
	kc = function (n) {
		for (var e = n.length; e && !n[--e]; );
		for (
			var r = new hn(++e),
				i = 0,
				s = n[0],
				a = 1,
				l = function (h) {
					r[i++] = h;
				},
				u = 1;
			u <= e;
			++u
		)
			if (n[u] == s && u != e) ++a;
			else {
				if (!s && a > 2) {
					for (; a > 138; a -= 138) l(32754);
					a > 2 && (l(a > 10 ? ((a - 11) << 5) | 28690 : ((a - 3) << 5) | 12305), (a = 0));
				} else if (a > 3) {
					for (l(s), --a; a > 6; a -= 6) l(8304);
					a > 2 && (l(((a - 3) << 5) | 8208), (a = 0));
				}
				for (; a--; ) l(s);
				(a = 1), (s = n[u]);
			}
		return { c: r.subarray(0, i), n: e };
	},
	io = function (n, e) {
		for (var r = 0, i = 0; i < e.length; ++i) r += n[i] * e[i];
		return r;
	},
	lu = function (n, e, r) {
		var i = r.length,
			s = Hl(e + 2);
		(n[s] = i & 255), (n[s + 1] = i >> 8), (n[s + 2] = n[s] ^ 255), (n[s + 3] = n[s + 1] ^ 255);
		for (var a = 0; a < i; ++a) n[s + a + 4] = r[a];
		return (s + 4 + i) * 8;
	},
	Pc = function (n, e, r, i, s, a, l, u, h, p, v) {
		ri(e, v++, r), ++s[256];
		for (
			var m = vl(s, 15),
				y = m.t,
				d = m.l,
				E = vl(a, 15),
				N = E.t,
				P = E.l,
				_ = kc(y),
				j = _.c,
				O = _.n,
				G = kc(N),
				W = G.c,
				oe = G.n,
				ee = new hn(19),
				z = 0;
			z < j.length;
			++z
		)
			++ee[j[z] & 31];
		for (var z = 0; z < W.length; ++z) ++ee[W[z] & 31];
		for (var re = vl(ee, 7), de = re.t, C = re.l, L = 19; L > 4 && !de[Sl[L - 1]]; --L);
		var q = (p + 5) << 3,
			B = io(s, Ni) + io(a, co) + l,
			Z = io(s, y) + io(a, N) + l + 14 + 3 * L + io(ee, de) + 2 * ee[16] + 3 * ee[17] + 7 * ee[18];
		if (h >= 0 && q <= B && q <= Z) return lu(e, v, n.subarray(h, h + p));
		var Q, ie, K, le;
		if ((ri(e, v, 1 + (Z < B)), (v += 2), Z < B)) {
			(Q = Hn(y, d, 0)), (ie = y), (K = Hn(N, P, 0)), (le = N);
			var ue = Hn(de, C, 0);
			ri(e, v, O - 257), ri(e, v + 5, oe - 1), ri(e, v + 10, L - 4), (v += 14);
			for (var z = 0; z < L; ++z) ri(e, v + 3 * z, de[Sl[z]]);
			v += 3 * L;
			for (var Se = [j, W], b = 0; b < 2; ++b)
				for (var T = Se[b], z = 0; z < T.length; ++z) {
					var M = T[z] & 31;
					ri(e, v, ue[M]), (v += de[M]), M > 15 && (ri(e, v, (T[z] >> 5) & 127), (v += T[z] >> 12));
				}
		} else (Q = T2), (ie = Ni), (K = M2), (le = co);
		for (var z = 0; z < u; ++z) {
			var H = i[z];
			if (H > 255) {
				var M = (H >> 18) & 31;
				no(e, v, Q[M + 257]), (v += ie[M + 257]), M > 7 && (ri(e, v, (H >> 23) & 31), (v += gs[M]));
				var V = H & 31;
				no(e, v, K[V]), (v += le[V]), V > 3 && (no(e, v, (H >> 5) & 8191), (v += vs[V]));
			} else no(e, v, Q[H]), (v += ie[H]);
		}
		return no(e, v, Q[256]), v + ie[256];
	},
	R2 = new Ul([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
	cu = new zr(0),
	q2 = function (n, e, r, i, s, a) {
		var l = a.z || n.length,
			u = new zr(i + l + 5 * (1 + Math.ceil(l / 7e3)) + s),
			h = u.subarray(i, u.length - s),
			p = a.l,
			v = (a.r || 0) & 7;
		if (e) {
			v && (h[0] = a.r >> 3);
			for (
				var m = R2[e - 1],
					y = m >> 13,
					d = m & 8191,
					E = (1 << r) - 1,
					N = a.p || new hn(32768),
					P = a.h || new hn(E + 1),
					_ = Math.ceil(r / 3),
					j = 2 * _,
					O = function (Ue) {
						return (n[Ue] ^ (n[Ue + 1] << _) ^ (n[Ue + 2] << j)) & E;
					},
					G = new Ul(25e3),
					W = new hn(288),
					oe = new hn(32),
					ee = 0,
					z = 0,
					re = a.i || 0,
					de = 0,
					C = a.w || 0,
					L = 0;
				re + 2 < l;
				++re
			) {
				var q = O(re),
					B = re & 32767,
					Z = P[q];
				if (((N[B] = Z), (P[q] = B), C <= re)) {
					var Q = l - re;
					if ((ee > 7e3 || de > 24576) && (Q > 423 || !p)) {
						(v = Pc(n, h, 0, G, W, oe, z, de, L, re - L, v)), (de = ee = z = 0), (L = re);
						for (var ie = 0; ie < 286; ++ie) W[ie] = 0;
						for (var ie = 0; ie < 30; ++ie) oe[ie] = 0;
					}
					var K = 2,
						le = 0,
						ue = d,
						Se = (B - Z) & 32767;
					if (Q > 2 && q == O(re - Se))
						for (
							var b = Math.min(y, Q) - 1, T = Math.min(32767, re), M = Math.min(258, Q);
							Se <= T && --ue && B != Z;

						) {
							if (n[re + K] == n[re + K - Se]) {
								for (var H = 0; H < M && n[re + H] == n[re + H - Se]; ++H);
								if (H > K) {
									if (((K = H), (le = Se), H > b)) break;
									for (var V = Math.min(Se, H - 2), te = 0, ie = 0; ie < V; ++ie) {
										var se = (re - Se + ie) & 32767,
											ce = N[se],
											Ce = (se - ce) & 32767;
										Ce > te && ((te = Ce), (Z = se));
									}
								}
							}
							(B = Z), (Z = N[B]), (Se += (B - Z) & 32767);
						}
					if (le) {
						G[de++] = 268435456 | (Nl[K] << 18) | Nc[le];
						var ye = Nl[K] & 31,
							Te = Nc[le] & 31;
						(z += gs[ye] + vs[Te]), ++W[257 + ye], ++oe[Te], (C = re + K), ++ee;
					} else (G[de++] = n[re]), ++W[n[re]];
				}
			}
			for (re = Math.max(re, C); re < l; ++re) (G[de++] = n[re]), ++W[n[re]];
			(v = Pc(n, h, p, G, W, oe, z, de, L, re - L, v)),
				p ||
					((a.r = (v & 7) | (h[(v / 8) | 0] << 3)),
					(v -= 7),
					(a.h = P),
					(a.p = N),
					(a.i = re),
					(a.w = C));
		} else {
			for (var re = a.w || 0; re < l + p; re += 65535) {
				var Fe = re + 65535;
				Fe >= l && ((h[(v / 8) | 0] = p), (Fe = l)), (v = lu(h, v + 1, n.subarray(re, Fe)));
			}
			a.i = l;
		}
		return su(u, 0, i + Hl(v) + s);
	},
	uu = function () {
		var n = 1,
			e = 0;
		return {
			p: function (r) {
				for (var i = n, s = e, a = r.length | 0, l = 0; l != a; ) {
					for (var u = Math.min(l + 2655, a); l < u; ++l) s += i += r[l];
					(i = (i & 65535) + 15 * (i >> 16)), (s = (s & 65535) + 15 * (s >> 16));
				}
				(n = i), (e = s);
			},
			d: function () {
				return (
					(n %= 65521),
					(e %= 65521),
					((n & 255) << 24) | ((n & 65280) << 8) | ((e & 255) << 8) | (e >> 8)
				);
			}
		};
	},
	z2 = function (n, e, r, i, s) {
		if (!s && ((s = { l: 1 }), e.dictionary)) {
			var a = e.dictionary.subarray(-32768),
				l = new zr(a.length + n.length);
			l.set(a), l.set(n, a.length), (n = l), (s.w = a.length);
		}
		return q2(
			n,
			e.level == null ? 6 : e.level,
			e.mem == null
				? s.l
					? Math.ceil(Math.max(8, Math.min(13, Math.log(n.length))) * 1.5)
					: 20
				: 12 + e.mem,
			r,
			i,
			s
		);
	},
	fu = function (n, e, r) {
		for (; r; ++e) (n[e] = r), (r >>>= 8);
	},
	U2 = function (n, e) {
		var r = e.level,
			i = r == 0 ? 0 : r < 6 ? 1 : r == 9 ? 3 : 2;
		if (
			((n[0] = 120),
			(n[1] = (i << 6) | (e.dictionary && 32)),
			(n[1] |= 31 - (((n[0] << 8) | n[1]) % 31)),
			e.dictionary)
		) {
			var s = uu();
			s.p(e.dictionary), fu(n, 2, s.d());
		}
	},
	H2 = function (n, e) {
		return (
			((n[0] & 15) != 8 || n[0] >> 4 > 7 || ((n[0] << 8) | n[1]) % 31) &&
				jn(6, 'invalid zlib data'),
			((n[1] >> 5) & 1) == 1 &&
				jn(6, 'invalid zlib data: ' + (n[1] & 32 ? 'need' : 'unexpected') + ' dictionary'),
			((n[1] >> 3) & 4) + 2
		);
	};
function Cl(n, e) {
	e || (e = {});
	var r = uu();
	r.p(n);
	var i = z2(n, e, e.dictionary ? 6 : 2, 4);
	return U2(i, e), fu(i, i.length - 4, r.d()), i;
}
function W2(n, e) {
	return O2(n.subarray(H2(n), -4), { i: 2 }, e, e);
}
var G2 = typeof TextDecoder < 'u' && new TextDecoder(),
	V2 = 0;
try {
	G2.decode(cu, { stream: !0 }), (V2 = 1);
} catch {}
var st = (function () {
	return typeof window < 'u'
		? window
		: typeof global < 'u'
			? global
			: typeof self < 'u'
				? self
				: this;
})();
function ml() {
	st.console && typeof st.console.log == 'function' && st.console.log.apply(st.console, arguments);
}
var Rt = {
	log: ml,
	warn: function (n) {
		st.console &&
			(typeof st.console.warn == 'function'
				? st.console.warn.apply(st.console, arguments)
				: ml.call(null, arguments));
	},
	error: function (n) {
		st.console &&
			(typeof st.console.error == 'function'
				? st.console.error.apply(st.console, arguments)
				: ml(n));
	}
};
function bl(n, e, r) {
	var i = new XMLHttpRequest();
	i.open('GET', n),
		(i.responseType = 'blob'),
		(i.onload = function () {
			Oi(i.response, e, r);
		}),
		(i.onerror = function () {
			Rt.error('could not download file');
		}),
		i.send();
}
function Cc(n) {
	var e = new XMLHttpRequest();
	e.open('HEAD', n, !1);
	try {
		e.send();
	} catch {}
	return e.status >= 200 && e.status <= 299;
}
function ns(n) {
	try {
		n.dispatchEvent(new MouseEvent('click'));
	} catch {
		var e = document.createEvent('MouseEvents');
		e.initMouseEvent('click', !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
			n.dispatchEvent(e);
	}
}
var oo,
	Il,
	Oi =
		st.saveAs ||
		((typeof window > 'u' ? 'undefined' : Bt(window)) !== 'object' || window !== st
			? function () {}
			: typeof HTMLAnchorElement < 'u' && 'download' in HTMLAnchorElement.prototype
				? function (n, e, r) {
						var i = st.URL || st.webkitURL,
							s = document.createElement('a');
						(e = e || n.name || 'download'),
							(s.download = e),
							(s.rel = 'noopener'),
							typeof n == 'string'
								? ((s.href = n),
									s.origin !== location.origin
										? Cc(s.href)
											? bl(n, e, r)
											: ns(s, (s.target = '_blank'))
										: ns(s))
								: ((s.href = i.createObjectURL(n)),
									setTimeout(function () {
										i.revokeObjectURL(s.href);
									}, 4e4),
									setTimeout(function () {
										ns(s);
									}, 0));
					}
				: 'msSaveOrOpenBlob' in navigator
					? function (n, e, r) {
							if (((e = e || n.name || 'download'), typeof n == 'string'))
								if (Cc(n)) bl(n, e, r);
								else {
									var i = document.createElement('a');
									(i.href = n),
										(i.target = '_blank'),
										setTimeout(function () {
											ns(i);
										});
								}
							else
								navigator.msSaveOrOpenBlob(
									(function (s, a) {
										return (
											a === void 0
												? (a = { autoBom: !1 })
												: Bt(a) !== 'object' &&
													(Rt.warn('Deprecated: Expected third argument to be a object'),
													(a = { autoBom: !a })),
											a.autoBom &&
											/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
												s.type
											)
												? new Blob(['\uFEFF', s], { type: s.type })
												: s
										);
									})(n, r),
									e
								);
						}
					: function (n, e, r, i) {
							if (
								((i = i || open('', '_blank')) &&
									(i.document.title = i.document.body.innerText = 'downloading...'),
								typeof n == 'string')
							)
								return bl(n, e, r);
							var s = n.type === 'application/octet-stream',
								a = /constructor/i.test(st.HTMLElement) || st.safari,
								l = /CriOS\/[\d]+/.test(navigator.userAgent);
							if (
								(l || (s && a)) &&
								(typeof FileReader > 'u' ? 'undefined' : Bt(FileReader)) === 'object'
							) {
								var u = new FileReader();
								(u.onloadend = function () {
									var v = u.result;
									(v = l ? v : v.replace(/^data:[^;]*;/, 'data:attachment/file;')),
										i ? (i.location.href = v) : (location = v),
										(i = null);
								}),
									u.readAsDataURL(n);
							} else {
								var h = st.URL || st.webkitURL,
									p = h.createObjectURL(n);
								i ? (i.location = p) : (location.href = p),
									(i = null),
									setTimeout(function () {
										h.revokeObjectURL(p);
									}, 4e4);
							}
						});
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */ function hu(n) {
	var e;
	(n = n || ''),
		(this.ok = !1),
		n.charAt(0) == '#' && (n = n.substr(1, 6)),
		(n =
			{
				aliceblue: 'f0f8ff',
				antiquewhite: 'faebd7',
				aqua: '00ffff',
				aquamarine: '7fffd4',
				azure: 'f0ffff',
				beige: 'f5f5dc',
				bisque: 'ffe4c4',
				black: '000000',
				blanchedalmond: 'ffebcd',
				blue: '0000ff',
				blueviolet: '8a2be2',
				brown: 'a52a2a',
				burlywood: 'deb887',
				cadetblue: '5f9ea0',
				chartreuse: '7fff00',
				chocolate: 'd2691e',
				coral: 'ff7f50',
				cornflowerblue: '6495ed',
				cornsilk: 'fff8dc',
				crimson: 'dc143c',
				cyan: '00ffff',
				darkblue: '00008b',
				darkcyan: '008b8b',
				darkgoldenrod: 'b8860b',
				darkgray: 'a9a9a9',
				darkgreen: '006400',
				darkkhaki: 'bdb76b',
				darkmagenta: '8b008b',
				darkolivegreen: '556b2f',
				darkorange: 'ff8c00',
				darkorchid: '9932cc',
				darkred: '8b0000',
				darksalmon: 'e9967a',
				darkseagreen: '8fbc8f',
				darkslateblue: '483d8b',
				darkslategray: '2f4f4f',
				darkturquoise: '00ced1',
				darkviolet: '9400d3',
				deeppink: 'ff1493',
				deepskyblue: '00bfff',
				dimgray: '696969',
				dodgerblue: '1e90ff',
				feldspar: 'd19275',
				firebrick: 'b22222',
				floralwhite: 'fffaf0',
				forestgreen: '228b22',
				fuchsia: 'ff00ff',
				gainsboro: 'dcdcdc',
				ghostwhite: 'f8f8ff',
				gold: 'ffd700',
				goldenrod: 'daa520',
				gray: '808080',
				green: '008000',
				greenyellow: 'adff2f',
				honeydew: 'f0fff0',
				hotpink: 'ff69b4',
				indianred: 'cd5c5c',
				indigo: '4b0082',
				ivory: 'fffff0',
				khaki: 'f0e68c',
				lavender: 'e6e6fa',
				lavenderblush: 'fff0f5',
				lawngreen: '7cfc00',
				lemonchiffon: 'fffacd',
				lightblue: 'add8e6',
				lightcoral: 'f08080',
				lightcyan: 'e0ffff',
				lightgoldenrodyellow: 'fafad2',
				lightgrey: 'd3d3d3',
				lightgreen: '90ee90',
				lightpink: 'ffb6c1',
				lightsalmon: 'ffa07a',
				lightseagreen: '20b2aa',
				lightskyblue: '87cefa',
				lightslateblue: '8470ff',
				lightslategray: '778899',
				lightsteelblue: 'b0c4de',
				lightyellow: 'ffffe0',
				lime: '00ff00',
				limegreen: '32cd32',
				linen: 'faf0e6',
				magenta: 'ff00ff',
				maroon: '800000',
				mediumaquamarine: '66cdaa',
				mediumblue: '0000cd',
				mediumorchid: 'ba55d3',
				mediumpurple: '9370d8',
				mediumseagreen: '3cb371',
				mediumslateblue: '7b68ee',
				mediumspringgreen: '00fa9a',
				mediumturquoise: '48d1cc',
				mediumvioletred: 'c71585',
				midnightblue: '191970',
				mintcream: 'f5fffa',
				mistyrose: 'ffe4e1',
				moccasin: 'ffe4b5',
				navajowhite: 'ffdead',
				navy: '000080',
				oldlace: 'fdf5e6',
				olive: '808000',
				olivedrab: '6b8e23',
				orange: 'ffa500',
				orangered: 'ff4500',
				orchid: 'da70d6',
				palegoldenrod: 'eee8aa',
				palegreen: '98fb98',
				paleturquoise: 'afeeee',
				palevioletred: 'd87093',
				papayawhip: 'ffefd5',
				peachpuff: 'ffdab9',
				peru: 'cd853f',
				pink: 'ffc0cb',
				plum: 'dda0dd',
				powderblue: 'b0e0e6',
				purple: '800080',
				red: 'ff0000',
				rosybrown: 'bc8f8f',
				royalblue: '4169e1',
				saddlebrown: '8b4513',
				salmon: 'fa8072',
				sandybrown: 'f4a460',
				seagreen: '2e8b57',
				seashell: 'fff5ee',
				sienna: 'a0522d',
				silver: 'c0c0c0',
				skyblue: '87ceeb',
				slateblue: '6a5acd',
				slategray: '708090',
				snow: 'fffafa',
				springgreen: '00ff7f',
				steelblue: '4682b4',
				tan: 'd2b48c',
				teal: '008080',
				thistle: 'd8bfd8',
				tomato: 'ff6347',
				turquoise: '40e0d0',
				violet: 'ee82ee',
				violetred: 'd02090',
				wheat: 'f5deb3',
				white: 'ffffff',
				whitesmoke: 'f5f5f5',
				yellow: 'ffff00',
				yellowgreen: '9acd32'
			}[(n = (n = n.replace(/ /g, '')).toLowerCase())] || n);
	for (
		var r = [
				{
					re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
					example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
					process: function (u) {
						return [parseInt(u[1]), parseInt(u[2]), parseInt(u[3])];
					}
				},
				{
					re: /^(\w{2})(\w{2})(\w{2})$/,
					example: ['#00ff00', '336699'],
					process: function (u) {
						return [parseInt(u[1], 16), parseInt(u[2], 16), parseInt(u[3], 16)];
					}
				},
				{
					re: /^(\w{1})(\w{1})(\w{1})$/,
					example: ['#fb0', 'f0f'],
					process: function (u) {
						return [
							parseInt(u[1] + u[1], 16),
							parseInt(u[2] + u[2], 16),
							parseInt(u[3] + u[3], 16)
						];
					}
				}
			],
			i = 0;
		i < r.length;
		i++
	) {
		var s = r[i].re,
			a = r[i].process,
			l = s.exec(n);
		l && ((e = a(l)), (this.r = e[0]), (this.g = e[1]), (this.b = e[2]), (this.ok = !0));
	}
	(this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
		(this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
		(this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
		(this.toRGB = function () {
			return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
		}),
		(this.toHex = function () {
			var u = this.r.toString(16),
				h = this.g.toString(16),
				p = this.b.toString(16);
			return (
				u.length == 1 && (u = '0' + u),
				h.length == 1 && (h = '0' + h),
				p.length == 1 && (p = '0' + p),
				'#' + u + h + p
			);
		});
}
/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */ function yl(n, e) {
	var r = n[0],
		i = n[1],
		s = n[2],
		a = n[3];
	(r = Br(r, i, s, a, e[0], 7, -680876936)),
		(a = Br(a, r, i, s, e[1], 12, -389564586)),
		(s = Br(s, a, r, i, e[2], 17, 606105819)),
		(i = Br(i, s, a, r, e[3], 22, -1044525330)),
		(r = Br(r, i, s, a, e[4], 7, -176418897)),
		(a = Br(a, r, i, s, e[5], 12, 1200080426)),
		(s = Br(s, a, r, i, e[6], 17, -1473231341)),
		(i = Br(i, s, a, r, e[7], 22, -45705983)),
		(r = Br(r, i, s, a, e[8], 7, 1770035416)),
		(a = Br(a, r, i, s, e[9], 12, -1958414417)),
		(s = Br(s, a, r, i, e[10], 17, -42063)),
		(i = Br(i, s, a, r, e[11], 22, -1990404162)),
		(r = Br(r, i, s, a, e[12], 7, 1804603682)),
		(a = Br(a, r, i, s, e[13], 12, -40341101)),
		(s = Br(s, a, r, i, e[14], 17, -1502002290)),
		(r = Dr(r, (i = Br(i, s, a, r, e[15], 22, 1236535329)), s, a, e[1], 5, -165796510)),
		(a = Dr(a, r, i, s, e[6], 9, -1069501632)),
		(s = Dr(s, a, r, i, e[11], 14, 643717713)),
		(i = Dr(i, s, a, r, e[0], 20, -373897302)),
		(r = Dr(r, i, s, a, e[5], 5, -701558691)),
		(a = Dr(a, r, i, s, e[10], 9, 38016083)),
		(s = Dr(s, a, r, i, e[15], 14, -660478335)),
		(i = Dr(i, s, a, r, e[4], 20, -405537848)),
		(r = Dr(r, i, s, a, e[9], 5, 568446438)),
		(a = Dr(a, r, i, s, e[14], 9, -1019803690)),
		(s = Dr(s, a, r, i, e[3], 14, -187363961)),
		(i = Dr(i, s, a, r, e[8], 20, 1163531501)),
		(r = Dr(r, i, s, a, e[13], 5, -1444681467)),
		(a = Dr(a, r, i, s, e[2], 9, -51403784)),
		(s = Dr(s, a, r, i, e[7], 14, 1735328473)),
		(r = Or(r, (i = Dr(i, s, a, r, e[12], 20, -1926607734)), s, a, e[5], 4, -378558)),
		(a = Or(a, r, i, s, e[8], 11, -2022574463)),
		(s = Or(s, a, r, i, e[11], 16, 1839030562)),
		(i = Or(i, s, a, r, e[14], 23, -35309556)),
		(r = Or(r, i, s, a, e[1], 4, -1530992060)),
		(a = Or(a, r, i, s, e[4], 11, 1272893353)),
		(s = Or(s, a, r, i, e[7], 16, -155497632)),
		(i = Or(i, s, a, r, e[10], 23, -1094730640)),
		(r = Or(r, i, s, a, e[13], 4, 681279174)),
		(a = Or(a, r, i, s, e[0], 11, -358537222)),
		(s = Or(s, a, r, i, e[3], 16, -722521979)),
		(i = Or(i, s, a, r, e[6], 23, 76029189)),
		(r = Or(r, i, s, a, e[9], 4, -640364487)),
		(a = Or(a, r, i, s, e[12], 11, -421815835)),
		(s = Or(s, a, r, i, e[15], 16, 530742520)),
		(r = Rr(r, (i = Or(i, s, a, r, e[2], 23, -995338651)), s, a, e[0], 6, -198630844)),
		(a = Rr(a, r, i, s, e[7], 10, 1126891415)),
		(s = Rr(s, a, r, i, e[14], 15, -1416354905)),
		(i = Rr(i, s, a, r, e[5], 21, -57434055)),
		(r = Rr(r, i, s, a, e[12], 6, 1700485571)),
		(a = Rr(a, r, i, s, e[3], 10, -1894986606)),
		(s = Rr(s, a, r, i, e[10], 15, -1051523)),
		(i = Rr(i, s, a, r, e[1], 21, -2054922799)),
		(r = Rr(r, i, s, a, e[8], 6, 1873313359)),
		(a = Rr(a, r, i, s, e[15], 10, -30611744)),
		(s = Rr(s, a, r, i, e[6], 15, -1560198380)),
		(i = Rr(i, s, a, r, e[13], 21, 1309151649)),
		(r = Rr(r, i, s, a, e[4], 6, -145523070)),
		(a = Rr(a, r, i, s, e[11], 10, -1120210379)),
		(s = Rr(s, a, r, i, e[2], 15, 718787259)),
		(i = Rr(i, s, a, r, e[9], 21, -343485551)),
		(n[0] = Li(r, n[0])),
		(n[1] = Li(i, n[1])),
		(n[2] = Li(s, n[2])),
		(n[3] = Li(a, n[3]));
}
function ms(n, e, r, i, s, a) {
	return (e = Li(Li(e, n), Li(i, a))), Li((e << s) | (e >>> (32 - s)), r);
}
function Br(n, e, r, i, s, a, l) {
	return ms((e & r) | (~e & i), n, e, s, a, l);
}
function Dr(n, e, r, i, s, a, l) {
	return ms((e & i) | (r & ~i), n, e, s, a, l);
}
function Or(n, e, r, i, s, a, l) {
	return ms(e ^ r ^ i, n, e, s, a, l);
}
function Rr(n, e, r, i, s, a, l) {
	return ms(r ^ (e | ~i), n, e, s, a, l);
}
function du(n) {
	var e,
		r = n.length,
		i = [1732584193, -271733879, -1732584194, 271733878];
	for (e = 64; e <= n.length; e += 64) yl(i, Y2(n.substring(e - 64, e)));
	n = n.substring(e - 64);
	var s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (e = 0; e < n.length; e++) s[e >> 2] |= n.charCodeAt(e) << (e % 4 << 3);
	if (((s[e >> 2] |= 128 << (e % 4 << 3)), e > 55)) for (yl(i, s), e = 0; e < 16; e++) s[e] = 0;
	return (s[14] = 8 * r), yl(i, s), i;
}
function Y2(n) {
	var e,
		r = [];
	for (e = 0; e < 64; e += 4)
		r[e >> 2] =
			n.charCodeAt(e) +
			(n.charCodeAt(e + 1) << 8) +
			(n.charCodeAt(e + 2) << 16) +
			(n.charCodeAt(e + 3) << 24);
	return r;
}
(oo = st.atob.bind(st)), (Il = st.btoa.bind(st));
var Ic = '0123456789abcdef'.split('');
function X2(n) {
	for (var e = '', r = 0; r < 4; r++) e += Ic[(n >> (8 * r + 4)) & 15] + Ic[(n >> (8 * r)) & 15];
	return e;
}
function J2(n) {
	return String.fromCharCode(
		(255 & n) >> 0,
		(65280 & n) >> 8,
		(16711680 & n) >> 16,
		(4278190080 & n) >> 24
	);
}
function Fl(n) {
	return du(n).map(J2).join('');
}
var K2 =
	(function (n) {
		for (var e = 0; e < n.length; e++) n[e] = X2(n[e]);
		return n.join('');
	})(du('hello')) != '5d41402abc4b2a76b9719d911017c592';
function Li(n, e) {
	if (K2) {
		var r = (65535 & n) + (65535 & e);
		return (((n >> 16) + (e >> 16) + (r >> 16)) << 16) | (65535 & r);
	}
	return (n + e) & 4294967295;
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */ function El(n, e) {
	var r, i, s, a;
	if (n !== r) {
		for (
			var l = ((s = n), (a = 1 + ((256 / n.length) >> 0)), new Array(a + 1).join(s)), u = [], h = 0;
			h < 256;
			h++
		)
			u[h] = h;
		var p = 0;
		for (h = 0; h < 256; h++) {
			var v = u[h];
			(p = (p + v + l.charCodeAt(h)) % 256), (u[h] = u[p]), (u[p] = v);
		}
		(r = n), (i = u);
	} else u = i;
	var m = e.length,
		y = 0,
		d = 0,
		E = '';
	for (h = 0; h < m; h++)
		(d = (d + (v = u[(y = (y + 1) % 256)])) % 256),
			(u[y] = u[d]),
			(u[d] = v),
			(l = u[(u[y] + u[d]) % 256]),
			(E += String.fromCharCode(e.charCodeAt(h) ^ l));
	return E;
}
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */ var Fc = { print: 4, modify: 8, copy: 16, 'annot-forms': 32 };
function ma(n, e, r, i) {
	(this.v = 1), (this.r = 2);
	var s = 192;
	n.forEach(function (u) {
		if (Fc.perm !== void 0) throw new Error('Invalid permission: ' + u);
		s += Fc[u];
	}),
		(this.padding = '(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz');
	var a = (e + this.padding).substr(0, 32),
		l = (r + this.padding).substr(0, 32);
	(this.O = this.processOwnerPassword(a, l)),
		(this.P = -(1 + (255 ^ s))),
		(this.encryptionKey = Fl(a + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(i)).substr(
			0,
			5
		)),
		(this.U = El(this.encryptionKey, this.padding));
}
function ba(n) {
	if (/[^\u0000-\u00ff]/.test(n))
		throw new Error('Invalid PDF Name Object: ' + n + ', Only accept ASCII characters.');
	for (var e = '', r = n.length, i = 0; i < r; i++) {
		var s = n.charCodeAt(i);
		s < 33 ||
		s === 35 ||
		s === 37 ||
		s === 40 ||
		s === 41 ||
		s === 47 ||
		s === 60 ||
		s === 62 ||
		s === 91 ||
		s === 93 ||
		s === 123 ||
		s === 125 ||
		s > 126
			? (e += '#' + ('0' + s.toString(16)).slice(-2))
			: (e += n[i]);
	}
	return e;
}
function Ec(n) {
	if (Bt(n) !== 'object')
		throw new Error('Invalid Context passed to initialize PubSub (jsPDF-module)');
	var e = {};
	(this.subscribe = function (r, i, s) {
		if (((s = s || !1), typeof r != 'string' || typeof i != 'function' || typeof s != 'boolean'))
			throw new Error('Invalid arguments passed to PubSub.subscribe (jsPDF-module)');
		e.hasOwnProperty(r) || (e[r] = {});
		var a = Math.random().toString(35);
		return (e[r][a] = [i, !!s]), a;
	}),
		(this.unsubscribe = function (r) {
			for (var i in e)
				if (e[i][r]) return delete e[i][r], Object.keys(e[i]).length === 0 && delete e[i], !0;
			return !1;
		}),
		(this.publish = function (r) {
			if (e.hasOwnProperty(r)) {
				var i = Array.prototype.slice.call(arguments, 1),
					s = [];
				for (var a in e[r]) {
					var l = e[r][a];
					try {
						l[0].apply(n, i);
					} catch (u) {
						st.console && Rt.error('jsPDF PubSub Error', u.message, u);
					}
					l[1] && s.push(a);
				}
				s.length && s.forEach(this.unsubscribe);
			}
		}),
		(this.getTopics = function () {
			return e;
		});
}
function hs(n) {
	if (!(this instanceof hs)) return new hs(n);
	var e = 'opacity,stroke-opacity'.split(',');
	for (var r in n) n.hasOwnProperty(r) && e.indexOf(r) >= 0 && (this[r] = n[r]);
	(this.id = ''), (this.objectNumber = -1);
}
function pu(n, e) {
	(this.gState = n), (this.matrix = e), (this.id = ''), (this.objectNumber = -1);
}
function qi(n, e, r, i, s) {
	if (!(this instanceof qi)) return new qi(n, e, r, i, s);
	(this.type = n === 'axial' ? 2 : 3), (this.coords = e), (this.colors = r), pu.call(this, i, s);
}
function ya(n, e, r, i, s) {
	if (!(this instanceof ya)) return new ya(n, e, r, i, s);
	(this.boundingBox = n),
		(this.xStep = e),
		(this.yStep = r),
		(this.stream = ''),
		(this.cloneIndex = 0),
		pu.call(this, i, s);
}
function ot(n) {
	var e,
		r = typeof arguments[0] == 'string' ? arguments[0] : 'p',
		i = arguments[1],
		s = arguments[2],
		a = arguments[3],
		l = [],
		u = 1,
		h = 16,
		p = 'S',
		v = null;
	Bt((n = n || {})) === 'object' &&
		((r = n.orientation),
		(i = n.unit || i),
		(s = n.format || s),
		(a = n.compress || n.compressPdf || a),
		(v = n.encryption || null) !== null &&
			((v.userPassword = v.userPassword || ''),
			(v.ownerPassword = v.ownerPassword || ''),
			(v.userPermissions = v.userPermissions || [])),
		(u = typeof n.userUnit == 'number' ? Math.abs(n.userUnit) : 1),
		n.precision !== void 0 && (e = n.precision),
		n.floatPrecision !== void 0 && (h = n.floatPrecision),
		(p = n.defaultPathOperation || 'S')),
		(l = n.filters || (a === !0 ? ['FlateEncode'] : l)),
		(i = i || 'mm'),
		(r = ('' + (r || 'P')).toLowerCase());
	var m = n.putOnlyUsedFonts || !1,
		y = {},
		d = { internal: {}, __private__: {} };
	d.__private__.PubSub = Ec;
	var E = '1.3',
		N = (d.__private__.getPdfVersion = function () {
			return E;
		});
	d.__private__.setPdfVersion = function (c) {
		E = c;
	};
	var P = {
		a0: [2383.94, 3370.39],
		a1: [1683.78, 2383.94],
		a2: [1190.55, 1683.78],
		a3: [841.89, 1190.55],
		a4: [595.28, 841.89],
		a5: [419.53, 595.28],
		a6: [297.64, 419.53],
		a7: [209.76, 297.64],
		a8: [147.4, 209.76],
		a9: [104.88, 147.4],
		a10: [73.7, 104.88],
		b0: [2834.65, 4008.19],
		b1: [2004.09, 2834.65],
		b2: [1417.32, 2004.09],
		b3: [1000.63, 1417.32],
		b4: [708.66, 1000.63],
		b5: [498.9, 708.66],
		b6: [354.33, 498.9],
		b7: [249.45, 354.33],
		b8: [175.75, 249.45],
		b9: [124.72, 175.75],
		b10: [87.87, 124.72],
		c0: [2599.37, 3676.54],
		c1: [1836.85, 2599.37],
		c2: [1298.27, 1836.85],
		c3: [918.43, 1298.27],
		c4: [649.13, 918.43],
		c5: [459.21, 649.13],
		c6: [323.15, 459.21],
		c7: [229.61, 323.15],
		c8: [161.57, 229.61],
		c9: [113.39, 161.57],
		c10: [79.37, 113.39],
		dl: [311.81, 623.62],
		letter: [612, 792],
		'government-letter': [576, 756],
		legal: [612, 1008],
		'junior-legal': [576, 360],
		ledger: [1224, 792],
		tabloid: [792, 1224],
		'credit-card': [153, 243]
	};
	d.__private__.getPageFormats = function () {
		return P;
	};
	var _ = (d.__private__.getPageFormat = function (c) {
		return P[c];
	});
	s = s || 'a4';
	var j = { COMPAT: 'compat', ADVANCED: 'advanced' },
		O = j.COMPAT;
	function G() {
		this.saveGraphicsState(),
			U(new Ke(Be, 0, 0, -Be, 0, ci() * Be).toString() + ' cm'),
			this.setFontSize(this.getFontSize() / Be),
			(p = 'n'),
			(O = j.ADVANCED);
	}
	function W() {
		this.restoreGraphicsState(), (p = 'S'), (O = j.COMPAT);
	}
	var oe = (d.__private__.combineFontStyleAndFontWeight = function (c, x) {
		if (
			(c == 'bold' && x == 'normal') ||
			(c == 'bold' && x == 400) ||
			(c == 'normal' && x == 'italic') ||
			(c == 'bold' && x == 'italic')
		)
			throw new Error('Invalid Combination of fontweight and fontstyle');
		return (
			x &&
				(c =
					x == 400 || x === 'normal'
						? c === 'italic'
							? 'italic'
							: 'normal'
						: (x != 700 && x !== 'bold') || c !== 'normal'
							? (x == 700 ? 'bold' : x) + '' + c
							: 'bold'),
			c
		);
	});
	(d.advancedAPI = function (c) {
		var x = O === j.COMPAT;
		return x && G.call(this), typeof c != 'function' || (c(this), x && W.call(this)), this;
	}),
		(d.compatAPI = function (c) {
			var x = O === j.ADVANCED;
			return x && W.call(this), typeof c != 'function' || (c(this), x && G.call(this)), this;
		}),
		(d.isAdvancedAPI = function () {
			return O === j.ADVANCED;
		});
	var ee,
		z = function (c) {
			if (O !== j.ADVANCED)
				throw new Error(
					c + " is only available in 'advanced' API mode. You need to call advancedAPI() first."
				);
		},
		re =
			(d.roundToPrecision =
			d.__private__.roundToPrecision =
				function (c, x) {
					var R = e || x;
					if (isNaN(c) || isNaN(R))
						throw new Error('Invalid argument passed to jsPDF.roundToPrecision');
					return c.toFixed(R).replace(/0+$/, '');
				});
	ee =
		d.hpf =
		d.__private__.hpf =
			typeof h == 'number'
				? function (c) {
						if (isNaN(c)) throw new Error('Invalid argument passed to jsPDF.hpf');
						return re(c, h);
					}
				: h === 'smart'
					? function (c) {
							if (isNaN(c)) throw new Error('Invalid argument passed to jsPDF.hpf');
							return re(c, c > -1 && c < 1 ? 16 : 5);
						}
					: function (c) {
							if (isNaN(c)) throw new Error('Invalid argument passed to jsPDF.hpf');
							return re(c, 16);
						};
	var de =
			(d.f2 =
			d.__private__.f2 =
				function (c) {
					if (isNaN(c)) throw new Error('Invalid argument passed to jsPDF.f2');
					return re(c, 2);
				}),
		C = (d.__private__.f3 = function (c) {
			if (isNaN(c)) throw new Error('Invalid argument passed to jsPDF.f3');
			return re(c, 3);
		}),
		L =
			(d.scale =
			d.__private__.scale =
				function (c) {
					if (isNaN(c)) throw new Error('Invalid argument passed to jsPDF.scale');
					return O === j.COMPAT ? c * Be : O === j.ADVANCED ? c : void 0;
				}),
		q = function (c) {
			return O === j.COMPAT ? ci() - c : O === j.ADVANCED ? c : void 0;
		},
		B = function (c) {
			return L(q(c));
		};
	d.__private__.setPrecision = d.setPrecision = function (c) {
		typeof parseInt(c, 10) == 'number' && (e = parseInt(c, 10));
	};
	var Z,
		Q = '00000000000000000000000000000000',
		ie = (d.__private__.getFileId = function () {
			return Q;
		}),
		K = (d.__private__.setFileId = function (c) {
			return (
				(Q =
					c !== void 0 && /^[a-fA-F0-9]{32}$/.test(c)
						? c.toUpperCase()
						: Q.split('')
								.map(function () {
									return 'ABCDEF0123456789'.charAt(Math.floor(16 * Math.random()));
								})
								.join('')),
				v !== null && (jr = new ma(v.userPermissions, v.userPassword, v.ownerPassword, Q)),
				Q
			);
		});
	(d.setFileId = function (c) {
		return K(c), this;
	}),
		(d.getFileId = function () {
			return ie();
		});
	var le = (d.__private__.convertDateToPDFDate = function (c) {
			var x = c.getTimezoneOffset(),
				R = x < 0 ? '+' : '-',
				Y = Math.floor(Math.abs(x / 60)),
				ae = Math.abs(x % 60),
				me = [R, M(Y), "'", M(ae), "'"].join('');
			return [
				'D:',
				c.getFullYear(),
				M(c.getMonth() + 1),
				M(c.getDate()),
				M(c.getHours()),
				M(c.getMinutes()),
				M(c.getSeconds()),
				me
			].join('');
		}),
		ue = (d.__private__.convertPDFDateToDate = function (c) {
			var x = parseInt(c.substr(2, 4), 10),
				R = parseInt(c.substr(6, 2), 10) - 1,
				Y = parseInt(c.substr(8, 2), 10),
				ae = parseInt(c.substr(10, 2), 10),
				me = parseInt(c.substr(12, 2), 10),
				Ie = parseInt(c.substr(14, 2), 10);
			return new Date(x, R, Y, ae, me, Ie, 0);
		}),
		Se = (d.__private__.setCreationDate = function (c) {
			var x;
			if ((c === void 0 && (c = new Date()), c instanceof Date)) x = le(c);
			else {
				if (
					!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(
						c
					)
				)
					throw new Error('Invalid argument passed to jsPDF.setCreationDate');
				x = c;
			}
			return (Z = x);
		}),
		b = (d.__private__.getCreationDate = function (c) {
			var x = Z;
			return c === 'jsDate' && (x = ue(Z)), x;
		});
	(d.setCreationDate = function (c) {
		return Se(c), this;
	}),
		(d.getCreationDate = function (c) {
			return b(c);
		});
	var T,
		M = (d.__private__.padd2 = function (c) {
			return ('0' + parseInt(c)).slice(-2);
		}),
		H = (d.__private__.padd2Hex = function (c) {
			return ('00' + (c = c.toString())).substr(c.length);
		}),
		V = 0,
		te = [],
		se = [],
		ce = 0,
		Ce = [],
		ye = [],
		Te = !1,
		Fe = se,
		Ue = function () {
			(V = 0), (ce = 0), (se = []), (te = []), (Ce = []), (pn = Qt()), (nn = Qt());
		};
	d.__private__.setCustomOutputDestination = function (c) {
		(Te = !0), (Fe = c);
	};
	var pe = function (c) {
		Te || (Fe = c);
	};
	d.__private__.resetCustomOutputDestination = function () {
		(Te = !1), (Fe = se);
	};
	var U = (d.__private__.out = function (c) {
			return (c = c.toString()), (ce += c.length + 1), Fe.push(c), Fe;
		}),
		rt = (d.__private__.write = function (c) {
			return U(arguments.length === 1 ? c.toString() : Array.prototype.join.call(arguments, ' '));
		}),
		He = (d.__private__.getArrayBuffer = function (c) {
			for (var x = c.length, R = new ArrayBuffer(x), Y = new Uint8Array(R); x--; )
				Y[x] = c.charCodeAt(x);
			return R;
		}),
		Pe = [
			['Helvetica', 'helvetica', 'normal', 'WinAnsiEncoding'],
			['Helvetica-Bold', 'helvetica', 'bold', 'WinAnsiEncoding'],
			['Helvetica-Oblique', 'helvetica', 'italic', 'WinAnsiEncoding'],
			['Helvetica-BoldOblique', 'helvetica', 'bolditalic', 'WinAnsiEncoding'],
			['Courier', 'courier', 'normal', 'WinAnsiEncoding'],
			['Courier-Bold', 'courier', 'bold', 'WinAnsiEncoding'],
			['Courier-Oblique', 'courier', 'italic', 'WinAnsiEncoding'],
			['Courier-BoldOblique', 'courier', 'bolditalic', 'WinAnsiEncoding'],
			['Times-Roman', 'times', 'normal', 'WinAnsiEncoding'],
			['Times-Bold', 'times', 'bold', 'WinAnsiEncoding'],
			['Times-Italic', 'times', 'italic', 'WinAnsiEncoding'],
			['Times-BoldItalic', 'times', 'bolditalic', 'WinAnsiEncoding'],
			['ZapfDingbats', 'zapfdingbats', 'normal', null],
			['Symbol', 'symbol', 'normal', null]
		];
	d.__private__.getStandardFonts = function () {
		return Pe;
	};
	var Ee = n.fontSize || 16;
	d.__private__.setFontSize = d.setFontSize = function (c) {
		return (Ee = O === j.ADVANCED ? c / Be : c), this;
	};
	var Me,
		je =
			(d.__private__.getFontSize =
			d.getFontSize =
				function () {
					return O === j.COMPAT ? Ee : Ee * Be;
				}),
		Ye = n.R2L || !1;
	(d.__private__.setR2L = d.setR2L =
		function (c) {
			return (Ye = c), this;
		}),
		(d.__private__.getR2L = d.getR2L =
			function () {
				return Ye;
			});
	var Ze,
		at = (d.__private__.setZoomMode = function (c) {
			var x = [void 0, null, 'fullwidth', 'fullheight', 'fullpage', 'original'];
			if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(c)) Me = c;
			else if (isNaN(c)) {
				if (x.indexOf(c) === -1)
					throw new Error(
						'zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' +
							c +
							'" is not recognized.'
					);
				Me = c;
			} else Me = parseInt(c, 10);
		});
	d.__private__.getZoomMode = function () {
		return Me;
	};
	var lt,
		ft = (d.__private__.setPageMode = function (c) {
			if ([void 0, null, 'UseNone', 'UseOutlines', 'UseThumbs', 'FullScreen'].indexOf(c) == -1)
				throw new Error(
					'Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' +
						c +
						'" is not recognized.'
				);
			Ze = c;
		});
	d.__private__.getPageMode = function () {
		return Ze;
	};
	var bt = (d.__private__.setLayoutMode = function (c) {
		if ([void 0, null, 'continuous', 'single', 'twoleft', 'tworight', 'two'].indexOf(c) == -1)
			throw new Error(
				'Layout mode must be one of continuous, single, twoleft, tworight. "' +
					c +
					'" is not recognized.'
			);
		lt = c;
	});
	(d.__private__.getLayoutMode = function () {
		return lt;
	}),
		(d.__private__.setDisplayMode = d.setDisplayMode =
			function (c, x, R) {
				return at(c), bt(x), ft(R), this;
			});
	var Ge = { title: '', subject: '', author: '', keywords: '', creator: '' };
	(d.__private__.getDocumentProperty = function (c) {
		if (Object.keys(Ge).indexOf(c) === -1)
			throw new Error('Invalid argument passed to jsPDF.getDocumentProperty');
		return Ge[c];
	}),
		(d.__private__.getDocumentProperties = function () {
			return Ge;
		}),
		(d.__private__.setDocumentProperties =
			d.setProperties =
			d.setDocumentProperties =
				function (c) {
					for (var x in Ge) Ge.hasOwnProperty(x) && c[x] && (Ge[x] = c[x]);
					return this;
				}),
		(d.__private__.setDocumentProperty = function (c, x) {
			if (Object.keys(Ge).indexOf(c) === -1)
				throw new Error('Invalid arguments passed to jsPDF.setDocumentProperty');
			return (Ge[c] = x);
		});
	var Qe,
		Be,
		Jt,
		yt,
		ur,
		Pt = {},
		Ft = {},
		xr = [],
		we = {},
		xt = {},
		Oe = {},
		nt = {},
		It = null,
		vt = 0,
		Je = [],
		wt = new Ec(d),
		rn = n.hotfixes || [],
		Zt = {},
		Ur = {},
		_r = [],
		Ke = function c(x, R, Y, ae, me, Ie) {
			if (!(this instanceof c)) return new c(x, R, Y, ae, me, Ie);
			isNaN(x) && (x = 1),
				isNaN(R) && (R = 0),
				isNaN(Y) && (Y = 0),
				isNaN(ae) && (ae = 1),
				isNaN(me) && (me = 0),
				isNaN(Ie) && (Ie = 0),
				(this._matrix = [x, R, Y, ae, me, Ie]);
		};
	Object.defineProperty(Ke.prototype, 'sx', {
		get: function () {
			return this._matrix[0];
		},
		set: function (c) {
			this._matrix[0] = c;
		}
	}),
		Object.defineProperty(Ke.prototype, 'shy', {
			get: function () {
				return this._matrix[1];
			},
			set: function (c) {
				this._matrix[1] = c;
			}
		}),
		Object.defineProperty(Ke.prototype, 'shx', {
			get: function () {
				return this._matrix[2];
			},
			set: function (c) {
				this._matrix[2] = c;
			}
		}),
		Object.defineProperty(Ke.prototype, 'sy', {
			get: function () {
				return this._matrix[3];
			},
			set: function (c) {
				this._matrix[3] = c;
			}
		}),
		Object.defineProperty(Ke.prototype, 'tx', {
			get: function () {
				return this._matrix[4];
			},
			set: function (c) {
				this._matrix[4] = c;
			}
		}),
		Object.defineProperty(Ke.prototype, 'ty', {
			get: function () {
				return this._matrix[5];
			},
			set: function (c) {
				this._matrix[5] = c;
			}
		}),
		Object.defineProperty(Ke.prototype, 'a', {
			get: function () {
				return this._matrix[0];
			},
			set: function (c) {
				this._matrix[0] = c;
			}
		}),
		Object.defineProperty(Ke.prototype, 'b', {
			get: function () {
				return this._matrix[1];
			},
			set: function (c) {
				this._matrix[1] = c;
			}
		}),
		Object.defineProperty(Ke.prototype, 'c', {
			get: function () {
				return this._matrix[2];
			},
			set: function (c) {
				this._matrix[2] = c;
			}
		}),
		Object.defineProperty(Ke.prototype, 'd', {
			get: function () {
				return this._matrix[3];
			},
			set: function (c) {
				this._matrix[3] = c;
			}
		}),
		Object.defineProperty(Ke.prototype, 'e', {
			get: function () {
				return this._matrix[4];
			},
			set: function (c) {
				this._matrix[4] = c;
			}
		}),
		Object.defineProperty(Ke.prototype, 'f', {
			get: function () {
				return this._matrix[5];
			},
			set: function (c) {
				this._matrix[5] = c;
			}
		}),
		Object.defineProperty(Ke.prototype, 'rotation', {
			get: function () {
				return Math.atan2(this.shx, this.sx);
			}
		}),
		Object.defineProperty(Ke.prototype, 'scaleX', {
			get: function () {
				return this.decompose().scale.sx;
			}
		}),
		Object.defineProperty(Ke.prototype, 'scaleY', {
			get: function () {
				return this.decompose().scale.sy;
			}
		}),
		Object.defineProperty(Ke.prototype, 'isIdentity', {
			get: function () {
				return (
					this.sx === 1 &&
					this.shy === 0 &&
					this.shx === 0 &&
					this.sy === 1 &&
					this.tx === 0 &&
					this.ty === 0
				);
			}
		}),
		(Ke.prototype.join = function (c) {
			return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(ee).join(c);
		}),
		(Ke.prototype.multiply = function (c) {
			var x = c.sx * this.sx + c.shy * this.shx,
				R = c.sx * this.shy + c.shy * this.sy,
				Y = c.shx * this.sx + c.sy * this.shx,
				ae = c.shx * this.shy + c.sy * this.sy,
				me = c.tx * this.sx + c.ty * this.shx + this.tx,
				Ie = c.tx * this.shy + c.ty * this.sy + this.ty;
			return new Ke(x, R, Y, ae, me, Ie);
		}),
		(Ke.prototype.decompose = function () {
			var c = this.sx,
				x = this.shy,
				R = this.shx,
				Y = this.sy,
				ae = this.tx,
				me = this.ty,
				Ie = Math.sqrt(c * c + x * x),
				qe = (c /= Ie) * R + (x /= Ie) * Y;
			(R -= c * qe), (Y -= x * qe);
			var et = Math.sqrt(R * R + Y * Y);
			return (
				(qe /= et),
				c * (Y /= et) < x * (R /= et) && ((c = -c), (x = -x), (qe = -qe), (Ie = -Ie)),
				{
					scale: new Ke(Ie, 0, 0, et, 0, 0),
					translate: new Ke(1, 0, 0, 1, ae, me),
					rotate: new Ke(c, x, -x, c, 0, 0),
					skew: new Ke(1, 0, qe, 1, 0, 0)
				}
			);
		}),
		(Ke.prototype.toString = function (c) {
			return this.join(' ');
		}),
		(Ke.prototype.inversed = function () {
			var c = this.sx,
				x = this.shy,
				R = this.shx,
				Y = this.sy,
				ae = this.tx,
				me = this.ty,
				Ie = 1 / (c * Y - x * R),
				qe = Y * Ie,
				et = -x * Ie,
				pt = -R * Ie,
				ht = c * Ie;
			return new Ke(qe, et, pt, ht, -qe * ae - pt * me, -et * ae - ht * me);
		}),
		(Ke.prototype.applyToPoint = function (c) {
			var x = c.x * this.sx + c.y * this.shx + this.tx,
				R = c.x * this.shy + c.y * this.sy + this.ty;
			return new Zi(x, R);
		}),
		(Ke.prototype.applyToRectangle = function (c) {
			var x = this.applyToPoint(c),
				R = this.applyToPoint(new Zi(c.x + c.w, c.y + c.h));
			return new Ba(x.x, x.y, R.x - x.x, R.y - x.y);
		}),
		(Ke.prototype.clone = function () {
			var c = this.sx,
				x = this.shy,
				R = this.shx,
				Y = this.sy,
				ae = this.tx,
				me = this.ty;
			return new Ke(c, x, R, Y, ae, me);
		}),
		(d.Matrix = Ke);
	var Pr = (d.matrixMult = function (c, x) {
			return x.multiply(c);
		}),
		Er = new Ke(1, 0, 0, 1, 0, 0);
	d.unitMatrix = d.identityMatrix = Er;
	var gr = function (c, x) {
		if (!xt[c]) {
			var R = (x instanceof qi ? 'Sh' : 'P') + (Object.keys(we).length + 1).toString(10);
			(x.id = R), (xt[c] = R), (we[R] = x), wt.publish('addPattern', x);
		}
	};
	(d.ShadingPattern = qi),
		(d.TilingPattern = ya),
		(d.addShadingPattern = function (c, x) {
			return z('addShadingPattern()'), gr(c, x), this;
		}),
		(d.beginTilingPattern = function (c) {
			z('beginTilingPattern()'),
				Co(
					c.boundingBox[0],
					c.boundingBox[1],
					c.boundingBox[2] - c.boundingBox[0],
					c.boundingBox[3] - c.boundingBox[1],
					c.matrix
				);
		}),
		(d.endTilingPattern = function (c, x) {
			z('endTilingPattern()'),
				(x.stream = ye[T].join(`
`)),
				gr(c, x),
				wt.publish('endTilingPattern', x),
				_r.pop().restore();
		});
	var nr = (d.__private__.newObject = function () {
			var c = Qt();
			return Lr(c, !0), c;
		}),
		Qt = (d.__private__.newObjectDeferred = function () {
			return (
				V++,
				(te[V] = function () {
					return ce;
				}),
				V
			);
		}),
		Lr = function (c, x) {
			return (x = typeof x == 'boolean' && x), (te[c] = ce), x && U(c + ' 0 obj'), c;
		},
		Vn = (d.__private__.newAdditionalObject = function () {
			var c = { objId: Qt(), content: '' };
			return Ce.push(c), c;
		}),
		pn = Qt(),
		nn = Qt(),
		an = (d.__private__.decodeColorString = function (c) {
			var x = c.split(' ');
			if (x.length !== 2 || (x[1] !== 'g' && x[1] !== 'G'))
				x.length === 5 &&
					(x[4] === 'k' || x[4] === 'K') &&
					(x = [(1 - x[0]) * (1 - x[3]), (1 - x[1]) * (1 - x[3]), (1 - x[2]) * (1 - x[3]), 'r']);
			else {
				var R = parseFloat(x[0]);
				x = [R, R, R, 'r'];
			}
			for (var Y = '#', ae = 0; ae < 3; ae++)
				Y += ('0' + Math.floor(255 * parseFloat(x[ae])).toString(16)).slice(-2);
			return Y;
		}),
		on = (d.__private__.encodeColorString = function (c) {
			var x;
			typeof c == 'string' && (c = { ch1: c });
			var R = c.ch1,
				Y = c.ch2,
				ae = c.ch3,
				me = c.ch4,
				Ie = c.pdfColorType === 'draw' ? ['G', 'RG', 'K'] : ['g', 'rg', 'k'];
			if (typeof R == 'string' && R.charAt(0) !== '#') {
				var qe = new hu(R);
				if (qe.ok) R = qe.toHex();
				else if (!/^\d*\.?\d*$/.test(R))
					throw new Error('Invalid color "' + R + '" passed to jsPDF.encodeColorString.');
			}
			if (
				(typeof R == 'string' &&
					/^#[0-9A-Fa-f]{3}$/.test(R) &&
					(R = '#' + R[1] + R[1] + R[2] + R[2] + R[3] + R[3]),
				typeof R == 'string' && /^#[0-9A-Fa-f]{6}$/.test(R))
			) {
				var et = parseInt(R.substr(1), 16);
				(R = (et >> 16) & 255), (Y = (et >> 8) & 255), (ae = 255 & et);
			}
			if (Y === void 0 || (me === void 0 && R === Y && Y === ae))
				if (typeof R == 'string') x = R + ' ' + Ie[0];
				else
					switch (c.precision) {
						case 2:
							x = de(R / 255) + ' ' + Ie[0];
							break;
						case 3:
						default:
							x = C(R / 255) + ' ' + Ie[0];
					}
			else if (me === void 0 || Bt(me) === 'object') {
				if (me && !isNaN(me.a) && me.a === 0) return (x = ['1.', '1.', '1.', Ie[1]].join(' '));
				if (typeof R == 'string') x = [R, Y, ae, Ie[1]].join(' ');
				else
					switch (c.precision) {
						case 2:
							x = [de(R / 255), de(Y / 255), de(ae / 255), Ie[1]].join(' ');
							break;
						default:
						case 3:
							x = [C(R / 255), C(Y / 255), C(ae / 255), Ie[1]].join(' ');
					}
			} else if (typeof R == 'string') x = [R, Y, ae, me, Ie[2]].join(' ');
			else
				switch (c.precision) {
					case 2:
						x = [de(R), de(Y), de(ae), de(me), Ie[2]].join(' ');
						break;
					case 3:
					default:
						x = [C(R), C(Y), C(ae), C(me), Ie[2]].join(' ');
				}
			return x;
		}),
		Kt = (d.__private__.getFilters = function () {
			return l;
		}),
		fr = (d.__private__.putStream = function (c) {
			var x = (c = c || {}).data || '',
				R = c.filters || Kt(),
				Y = c.alreadyAppliedFilters || [],
				ae = c.addLength1 || !1,
				me = x.length,
				Ie = c.objectId,
				qe = function (Mr) {
					return Mr;
				};
			if (v !== null && Ie === void 0)
				throw new Error('ObjectId must be passed to putStream for file encryption');
			v !== null && (qe = jr.encryptor(Ie, 0));
			var et = {};
			R === !0 && (R = ['FlateEncode']);
			var pt = c.additionalKeyValues || [],
				ht =
					(et =
						ot.API.processDataByFilters !== void 0
							? ot.API.processDataByFilters(x, R)
							: { data: x, reverseChain: [] }).reverseChain +
					(Array.isArray(Y) ? Y.join(' ') : Y.toString());
			if (
				(et.data.length !== 0 &&
					(pt.push({ key: 'Length', value: et.data.length }),
					ae === !0 && pt.push({ key: 'Length1', value: me })),
				ht.length != 0)
			)
				if (ht.split('/').length - 1 == 1) pt.push({ key: 'Filter', value: ht });
				else {
					pt.push({ key: 'Filter', value: '[' + ht + ']' });
					for (var kt = 0; kt < pt.length; kt += 1)
						if (pt[kt].key === 'DecodeParms') {
							for (var $t = [], er = 0; er < et.reverseChain.split('/').length - 1; er += 1)
								$t.push('null');
							$t.push(pt[kt].value), (pt[kt].value = '[' + $t.join(' ') + ']');
						}
				}
			U('<<');
			for (var hr = 0; hr < pt.length; hr++) U('/' + pt[hr].key + ' ' + pt[hr].value);
			U('>>'), et.data.length !== 0 && (U('stream'), U(qe(et.data)), U('endstream'));
		}),
		vr = (d.__private__.putPage = function (c) {
			var x = c.number,
				R = c.data,
				Y = c.objId,
				ae = c.contentsObjId;
			Lr(Y, !0),
				U('<</Type /Page'),
				U('/Parent ' + c.rootDictionaryObjId + ' 0 R'),
				U('/Resources ' + c.resourceDictionaryObjId + ' 0 R'),
				U(
					'/MediaBox [' +
						parseFloat(ee(c.mediaBox.bottomLeftX)) +
						' ' +
						parseFloat(ee(c.mediaBox.bottomLeftY)) +
						' ' +
						ee(c.mediaBox.topRightX) +
						' ' +
						ee(c.mediaBox.topRightY) +
						']'
				),
				c.cropBox !== null &&
					U(
						'/CropBox [' +
							ee(c.cropBox.bottomLeftX) +
							' ' +
							ee(c.cropBox.bottomLeftY) +
							' ' +
							ee(c.cropBox.topRightX) +
							' ' +
							ee(c.cropBox.topRightY) +
							']'
					),
				c.bleedBox !== null &&
					U(
						'/BleedBox [' +
							ee(c.bleedBox.bottomLeftX) +
							' ' +
							ee(c.bleedBox.bottomLeftY) +
							' ' +
							ee(c.bleedBox.topRightX) +
							' ' +
							ee(c.bleedBox.topRightY) +
							']'
					),
				c.trimBox !== null &&
					U(
						'/TrimBox [' +
							ee(c.trimBox.bottomLeftX) +
							' ' +
							ee(c.trimBox.bottomLeftY) +
							' ' +
							ee(c.trimBox.topRightX) +
							' ' +
							ee(c.trimBox.topRightY) +
							']'
					),
				c.artBox !== null &&
					U(
						'/ArtBox [' +
							ee(c.artBox.bottomLeftX) +
							' ' +
							ee(c.artBox.bottomLeftY) +
							' ' +
							ee(c.artBox.topRightX) +
							' ' +
							ee(c.artBox.topRightY) +
							']'
					),
				typeof c.userUnit == 'number' && c.userUnit !== 1 && U('/UserUnit ' + c.userUnit),
				wt.publish('putPage', { objId: Y, pageContext: Je[x], pageNumber: x, page: R }),
				U('/Contents ' + ae + ' 0 R'),
				U('>>'),
				U('endobj');
			var me = R.join(`
`);
			return (
				O === j.ADVANCED &&
					(me += `
Q`),
				Lr(ae, !0),
				fr({ data: me, filters: Kt(), objectId: ae }),
				U('endobj'),
				Y
			);
		}),
		Tr = (d.__private__.putPages = function () {
			var c,
				x,
				R = [];
			for (c = 1; c <= vt; c++) (Je[c].objId = Qt()), (Je[c].contentsObjId = Qt());
			for (c = 1; c <= vt; c++)
				R.push(
					vr({
						number: c,
						data: ye[c],
						objId: Je[c].objId,
						contentsObjId: Je[c].contentsObjId,
						mediaBox: Je[c].mediaBox,
						cropBox: Je[c].cropBox,
						bleedBox: Je[c].bleedBox,
						trimBox: Je[c].trimBox,
						artBox: Je[c].artBox,
						userUnit: Je[c].userUnit,
						rootDictionaryObjId: pn,
						resourceDictionaryObjId: nn
					})
				);
			Lr(pn, !0), U('<</Type /Pages');
			var Y = '/Kids [';
			for (x = 0; x < vt; x++) Y += R[x] + ' 0 R ';
			U(Y + ']'), U('/Count ' + vt), U('>>'), U('endobj'), wt.publish('postPutPages');
		}),
		gn = function (c) {
			wt.publish('putFont', { font: c, out: U, newObject: nr, putStream: fr }),
				c.isAlreadyPutted !== !0 &&
					((c.objectNumber = nr()),
					U('<<'),
					U('/Type /Font'),
					U('/BaseFont /' + ba(c.postScriptName)),
					U('/Subtype /Type1'),
					typeof c.encoding == 'string' && U('/Encoding /' + c.encoding),
					U('/FirstChar 32'),
					U('/LastChar 255'),
					U('>>'),
					U('endobj'));
		},
		ai = function () {
			for (var c in Pt)
				Pt.hasOwnProperty(c) && (m === !1 || (m === !0 && y.hasOwnProperty(c))) && gn(Pt[c]);
		},
		vn = function (c) {
			c.objectNumber = nr();
			var x = [];
			x.push({ key: 'Type', value: '/XObject' }),
				x.push({ key: 'Subtype', value: '/Form' }),
				x.push({
					key: 'BBox',
					value: '[' + [ee(c.x), ee(c.y), ee(c.x + c.width), ee(c.y + c.height)].join(' ') + ']'
				}),
				x.push({ key: 'Matrix', value: '[' + c.matrix.toString() + ']' });
			var R = c.pages[1].join(`
`);
			fr({ data: R, additionalKeyValues: x, objectId: c.objectNumber }), U('endobj');
		},
		oi = function () {
			for (var c in Zt) Zt.hasOwnProperty(c) && vn(Zt[c]);
		},
		uo = function (c, x) {
			var R,
				Y = [],
				ae = 1 / (x - 1);
			for (R = 0; R < 1; R += ae) Y.push(R);
			if ((Y.push(1), c[0].offset != 0)) {
				var me = { offset: 0, color: c[0].color };
				c.unshift(me);
			}
			if (c[c.length - 1].offset != 1) {
				var Ie = { offset: 1, color: c[c.length - 1].color };
				c.push(Ie);
			}
			for (var qe = '', et = 0, pt = 0; pt < Y.length; pt++) {
				for (R = Y[pt]; R > c[et + 1].offset; ) et++;
				var ht = c[et].offset,
					kt = (R - ht) / (c[et + 1].offset - ht),
					$t = c[et].color,
					er = c[et + 1].color;
				qe +=
					H(Math.round((1 - kt) * $t[0] + kt * er[0]).toString(16)) +
					H(Math.round((1 - kt) * $t[1] + kt * er[1]).toString(16)) +
					H(Math.round((1 - kt) * $t[2] + kt * er[2]).toString(16));
			}
			return qe.trim();
		},
		bs = function (c, x) {
			x || (x = 21);
			var R = nr(),
				Y = uo(c.colors, x),
				ae = [];
			ae.push({ key: 'FunctionType', value: '0' }),
				ae.push({ key: 'Domain', value: '[0.0 1.0]' }),
				ae.push({ key: 'Size', value: '[' + x + ']' }),
				ae.push({ key: 'BitsPerSample', value: '8' }),
				ae.push({ key: 'Range', value: '[0.0 1.0 0.0 1.0 0.0 1.0]' }),
				ae.push({ key: 'Decode', value: '[0.0 1.0 0.0 1.0 0.0 1.0]' }),
				fr({
					data: Y,
					additionalKeyValues: ae,
					alreadyAppliedFilters: ['/ASCIIHexDecode'],
					objectId: R
				}),
				U('endobj'),
				(c.objectNumber = nr()),
				U('<< /ShadingType ' + c.type),
				U('/ColorSpace /DeviceRGB');
			var me = '/Coords [' + ee(parseFloat(c.coords[0])) + ' ' + ee(parseFloat(c.coords[1])) + ' ';
			c.type === 2
				? (me += ee(parseFloat(c.coords[2])) + ' ' + ee(parseFloat(c.coords[3])))
				: (me +=
						ee(parseFloat(c.coords[2])) +
						' ' +
						ee(parseFloat(c.coords[3])) +
						' ' +
						ee(parseFloat(c.coords[4])) +
						' ' +
						ee(parseFloat(c.coords[5]))),
				U((me += ']')),
				c.matrix && U('/Matrix [' + c.matrix.toString() + ']'),
				U('/Function ' + R + ' 0 R'),
				U('/Extend [true true]'),
				U('>>'),
				U('endobj');
		},
		ys = function (c, x) {
			var R = Qt(),
				Y = nr();
			x.push({ resourcesOid: R, objectOid: Y }), (c.objectNumber = Y);
			var ae = [];
			ae.push({ key: 'Type', value: '/Pattern' }),
				ae.push({ key: 'PatternType', value: '1' }),
				ae.push({ key: 'PaintType', value: '1' }),
				ae.push({ key: 'TilingType', value: '1' }),
				ae.push({ key: 'BBox', value: '[' + c.boundingBox.map(ee).join(' ') + ']' }),
				ae.push({ key: 'XStep', value: ee(c.xStep) }),
				ae.push({ key: 'YStep', value: ee(c.yStep) }),
				ae.push({ key: 'Resources', value: R + ' 0 R' }),
				c.matrix && ae.push({ key: 'Matrix', value: '[' + c.matrix.toString() + ']' }),
				fr({ data: c.stream, additionalKeyValues: ae, objectId: c.objectNumber }),
				U('endobj');
		},
		Hi = function (c) {
			var x;
			for (x in we)
				we.hasOwnProperty(x) &&
					(we[x] instanceof qi ? bs(we[x]) : we[x] instanceof ya && ys(we[x], c));
		},
		fo = function (c) {
			for (var x in ((c.objectNumber = nr()), U('<<'), c))
				switch (x) {
					case 'opacity':
						U('/ca ' + de(c[x]));
						break;
					case 'stroke-opacity':
						U('/CA ' + de(c[x]));
				}
			U('>>'), U('endobj');
		},
		ws = function () {
			var c;
			for (c in Oe) Oe.hasOwnProperty(c) && fo(Oe[c]);
		},
		Na = function () {
			for (var c in (U('/XObject <<'), Zt))
				Zt.hasOwnProperty(c) &&
					Zt[c].objectNumber >= 0 &&
					U('/' + c + ' ' + Zt[c].objectNumber + ' 0 R');
			wt.publish('putXobjectDict'), U('>>');
		},
		xs = function () {
			(jr.oid = nr()),
				U('<<'),
				U('/Filter /Standard'),
				U('/V ' + jr.v),
				U('/R ' + jr.r),
				U('/U <' + jr.toHexString(jr.U) + '>'),
				U('/O <' + jr.toHexString(jr.O) + '>'),
				U('/P ' + jr.P),
				U('>>'),
				U('endobj');
		},
		ho = function () {
			for (var c in (U('/Font <<'), Pt))
				Pt.hasOwnProperty(c) &&
					(m === !1 || (m === !0 && y.hasOwnProperty(c))) &&
					U('/' + c + ' ' + Pt[c].objectNumber + ' 0 R');
			U('>>');
		},
		_s = function () {
			if (Object.keys(we).length > 0) {
				for (var c in (U('/Shading <<'), we))
					we.hasOwnProperty(c) &&
						we[c] instanceof qi &&
						we[c].objectNumber >= 0 &&
						U('/' + c + ' ' + we[c].objectNumber + ' 0 R');
				wt.publish('putShadingPatternDict'), U('>>');
			}
		},
		Wi = function (c) {
			if (Object.keys(we).length > 0) {
				for (var x in (U('/Pattern <<'), we))
					we.hasOwnProperty(x) &&
						we[x] instanceof d.TilingPattern &&
						we[x].objectNumber >= 0 &&
						we[x].objectNumber < c &&
						U('/' + x + ' ' + we[x].objectNumber + ' 0 R');
				wt.publish('putTilingPatternDict'), U('>>');
			}
		},
		Ls = function () {
			if (Object.keys(Oe).length > 0) {
				var c;
				for (c in (U('/ExtGState <<'), Oe))
					Oe.hasOwnProperty(c) &&
						Oe[c].objectNumber >= 0 &&
						U('/' + c + ' ' + Oe[c].objectNumber + ' 0 R');
				wt.publish('putGStateDict'), U('>>');
			}
		},
		ir = function (c) {
			Lr(c.resourcesOid, !0),
				U('<<'),
				U('/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]'),
				ho(),
				_s(),
				Wi(c.objectOid),
				Ls(),
				Na(),
				U('>>'),
				U('endobj');
		},
		po = function () {
			var c = [];
			ai(),
				ws(),
				oi(),
				Hi(c),
				wt.publish('putResources'),
				c.forEach(ir),
				ir({ resourcesOid: nn, objectOid: Number.MAX_SAFE_INTEGER }),
				wt.publish('postPutResources');
		},
		go = function () {
			wt.publish('putAdditionalObjects');
			for (var c = 0; c < Ce.length; c++) {
				var x = Ce[c];
				Lr(x.objId, !0), U(x.content), U('endobj');
			}
			wt.publish('postPutAdditionalObjects');
		},
		vo = function (c) {
			(Ft[c.fontName] = Ft[c.fontName] || {}), (Ft[c.fontName][c.fontStyle] = c.id);
		},
		ka = function (c, x, R, Y, ae) {
			var me = {
				id: 'F' + (Object.keys(Pt).length + 1).toString(10),
				postScriptName: c,
				fontName: x,
				fontStyle: R,
				encoding: Y,
				isStandardFont: ae || !1,
				metadata: {}
			};
			return wt.publish('addFont', { font: me, instance: this }), (Pt[me.id] = me), vo(me), me.id;
		},
		As = function (c) {
			for (var x = 0, R = Pe.length; x < R; x++) {
				var Y = ka.call(this, c[x][0], c[x][1], c[x][2], Pe[x][3], !0);
				m === !1 && (y[Y] = !0);
				var ae = c[x][0].split('-');
				vo({ id: Y, fontName: ae[0], fontStyle: ae[1] || '' });
			}
			wt.publish('addFonts', { fonts: Pt, dictionary: Ft });
		},
		kn = function (c) {
			return (
				(c.foo = function () {
					try {
						return c.apply(this, arguments);
					} catch (Y) {
						var x = Y.stack || '';
						~x.indexOf(' at ') && (x = x.split(' at ')[1]);
						var R =
							'Error in function ' +
							x
								.split(
									`
`
								)[0]
								.split('<')[0] +
							': ' +
							Y.message;
						if (!st.console) throw new Error(R);
						st.console.error(R, Y), st.alert && alert(R);
					}
				}),
				(c.foo.bar = c),
				c.foo
			);
		},
		Gi = function (c, x) {
			var R, Y, ae, me, Ie, qe, et, pt, ht;
			if (
				((ae = (x = x || {}).sourceEncoding || 'Unicode'),
				(Ie = x.outputEncoding),
				(x.autoencode || Ie) &&
					Pt[Qe].metadata &&
					Pt[Qe].metadata[ae] &&
					Pt[Qe].metadata[ae].encoding &&
					((me = Pt[Qe].metadata[ae].encoding),
					!Ie && Pt[Qe].encoding && (Ie = Pt[Qe].encoding),
					!Ie && me.codePages && (Ie = me.codePages[0]),
					typeof Ie == 'string' && (Ie = me[Ie]),
					Ie))
			) {
				for (et = !1, qe = [], R = 0, Y = c.length; R < Y; R++)
					(pt = Ie[c.charCodeAt(R)]) ? qe.push(String.fromCharCode(pt)) : qe.push(c[R]),
						qe[R].charCodeAt(0) >> 8 && (et = !0);
				c = qe.join('');
			}
			for (R = c.length; et === void 0 && R !== 0; ) c.charCodeAt(R - 1) >> 8 && (et = !0), R--;
			if (!et) return c;
			for (qe = x.noBOM ? [] : [254, 255], R = 0, Y = c.length; R < Y; R++) {
				if ((ht = (pt = c.charCodeAt(R)) >> 8) >> 8)
					throw new Error(
						'Character at position ' +
							R +
							" of string '" +
							c +
							"' exceeds 16bits. Cannot be encoded into UCS-2 BE"
					);
				qe.push(ht), qe.push(pt - (ht << 8));
			}
			return String.fromCharCode.apply(void 0, qe);
		},
		Yr =
			(d.__private__.pdfEscape =
			d.pdfEscape =
				function (c, x) {
					return Gi(c, x).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
				}),
		Pa = (d.__private__.beginPage = function (c) {
			(ye[++vt] = []),
				(Je[vt] = {
					objId: 0,
					contentsObjId: 0,
					userUnit: Number(u),
					artBox: null,
					bleedBox: null,
					cropBox: null,
					trimBox: null,
					mediaBox: {
						bottomLeftX: 0,
						bottomLeftY: 0,
						topRightX: Number(c[0]),
						topRightY: Number(c[1])
					}
				}),
				bo(vt),
				pe(ye[T]);
		}),
		mo = function (c, x) {
			var R, Y, ae;
			switch (
				((r = x || r),
				typeof c == 'string' &&
					((R = _(c.toLowerCase())), Array.isArray(R) && ((Y = R[0]), (ae = R[1]))),
				Array.isArray(c) && ((Y = c[0] * Be), (ae = c[1] * Be)),
				isNaN(Y) && ((Y = s[0]), (ae = s[1])),
				(Y > 14400 || ae > 14400) &&
					(Rt.warn(
						'A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400'
					),
					(Y = Math.min(14400, Y)),
					(ae = Math.min(14400, ae))),
				(s = [Y, ae]),
				r.substr(0, 1))
			) {
				case 'l':
					ae > Y && (s = [ae, Y]);
					break;
				case 'p':
					Y > ae && (s = [ae, Y]);
			}
			Pa(s),
				Ao(Ea),
				U(Pn),
				ja !== 0 && U(ja + ' J'),
				Ma !== 0 && U(Ma + ' j'),
				wt.publish('addPage', { pageNumber: vt });
		},
		Ss = function (c) {
			c > 0 &&
				c <= vt &&
				(ye.splice(c, 1), Je.splice(c, 1), vt--, T > vt && (T = vt), this.setPage(T));
		},
		bo = function (c) {
			c > 0 && c <= vt && (T = c);
		},
		Ns =
			(d.__private__.getNumberOfPages =
			d.getNumberOfPages =
				function () {
					return ye.length - 1;
				}),
		yo = function (c, x, R) {
			var Y,
				ae = void 0;
			return (
				(R = R || {}),
				(c = c !== void 0 ? c : Pt[Qe].fontName),
				(x = x !== void 0 ? x : Pt[Qe].fontStyle),
				(Y = c.toLowerCase()),
				Ft[Y] !== void 0 && Ft[Y][x] !== void 0
					? (ae = Ft[Y][x])
					: Ft[c] !== void 0 && Ft[c][x] !== void 0
						? (ae = Ft[c][x])
						: R.disableWarning === !1 &&
							Rt.warn(
								"Unable to look up font label for font '" +
									c +
									"', '" +
									x +
									"'. Refer to getFontList() for available fonts."
							),
				ae || R.noFallback || ((ae = Ft.times[x]) == null && (ae = Ft.times.normal)),
				ae
			);
		},
		ks = (d.__private__.putInfo = function () {
			var c = nr(),
				x = function (Y) {
					return Y;
				};
			for (var R in (v !== null && (x = jr.encryptor(c, 0)),
			U('<<'),
			U('/Producer (' + Yr(x('jsPDF ' + ot.version)) + ')'),
			Ge))
				Ge.hasOwnProperty(R) &&
					Ge[R] &&
					U('/' + R.substr(0, 1).toUpperCase() + R.substr(1) + ' (' + Yr(x(Ge[R])) + ')');
			U('/CreationDate (' + Yr(x(Z)) + ')'), U('>>'), U('endobj');
		}),
		Ca = (d.__private__.putCatalog = function (c) {
			var x = (c = c || {}).rootDictionaryObjId || pn;
			switch (
				(nr(),
				U('<<'),
				U('/Type /Catalog'),
				U('/Pages ' + x + ' 0 R'),
				Me || (Me = 'fullwidth'),
				Me)
			) {
				case 'fullwidth':
					U('/OpenAction [3 0 R /FitH null]');
					break;
				case 'fullheight':
					U('/OpenAction [3 0 R /FitV null]');
					break;
				case 'fullpage':
					U('/OpenAction [3 0 R /Fit]');
					break;
				case 'original':
					U('/OpenAction [3 0 R /XYZ null null 1]');
					break;
				default:
					var R = '' + Me;
					R.substr(R.length - 1) === '%' && (Me = parseInt(Me) / 100),
						typeof Me == 'number' && U('/OpenAction [3 0 R /XYZ null null ' + de(Me) + ']');
			}
			switch ((lt || (lt = 'continuous'), lt)) {
				case 'continuous':
					U('/PageLayout /OneColumn');
					break;
				case 'single':
					U('/PageLayout /SinglePage');
					break;
				case 'two':
				case 'twoleft':
					U('/PageLayout /TwoColumnLeft');
					break;
				case 'tworight':
					U('/PageLayout /TwoColumnRight');
			}
			Ze && U('/PageMode /' + Ze), wt.publish('putCatalog'), U('>>'), U('endobj');
		}),
		Ps = (d.__private__.putTrailer = function () {
			U('trailer'),
				U('<<'),
				U('/Size ' + (V + 1)),
				U('/Root ' + V + ' 0 R'),
				U('/Info ' + (V - 1) + ' 0 R'),
				v !== null && U('/Encrypt ' + jr.oid + ' 0 R'),
				U('/ID [ <' + Q + '> <' + Q + '> ]'),
				U('>>');
		}),
		Cs = (d.__private__.putHeader = function () {
			U('%PDF-' + E), U('%ºß¬à');
		}),
		Is = (d.__private__.putXRef = function () {
			var c = '0000000000';
			U('xref'), U('0 ' + (V + 1)), U('0000000000 65535 f ');
			for (var x = 1; x <= V; x++)
				typeof te[x] == 'function'
					? U((c + te[x]()).slice(-10) + ' 00000 n ')
					: te[x] !== void 0
						? U((c + te[x]).slice(-10) + ' 00000 n ')
						: U('0000000000 00000 n ');
		}),
		Yn = (d.__private__.buildDocument = function () {
			Ue(),
				pe(se),
				wt.publish('buildDocument'),
				Cs(),
				Tr(),
				go(),
				po(),
				v !== null && xs(),
				ks(),
				Ca();
			var c = ce;
			return (
				Is(),
				Ps(),
				U('startxref'),
				U('' + c),
				U('%%EOF'),
				pe(ye[T]),
				se.join(`
`)
			);
		}),
		Vi = (d.__private__.getBlob = function (c) {
			return new Blob([He(c)], { type: 'application/pdf' });
		}),
		Yi =
			(d.output =
			d.__private__.output =
				kn(function (c, x) {
					switch (
						(typeof (x = x || {}) == 'string'
							? (x = { filename: x })
							: (x.filename = x.filename || 'generated.pdf'),
						c)
					) {
						case void 0:
							return Yn();
						case 'save':
							d.save(x.filename);
							break;
						case 'arraybuffer':
							return He(Yn());
						case 'blob':
							return Vi(Yn());
						case 'bloburi':
						case 'bloburl':
							if (st.URL !== void 0 && typeof st.URL.createObjectURL == 'function')
								return (st.URL && st.URL.createObjectURL(Vi(Yn()))) || void 0;
							Rt.warn(
								'bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.'
							);
							break;
						case 'datauristring':
						case 'dataurlstring':
							var R = '',
								Y = Yn();
							try {
								R = Il(Y);
							} catch {
								R = Il(unescape(encodeURIComponent(Y)));
							}
							return 'data:application/pdf;filename=' + x.filename + ';base64,' + R;
						case 'pdfobjectnewwindow':
							if (Object.prototype.toString.call(st) === '[object Window]') {
								var ae = 'https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js',
									me =
										' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
								x.pdfObjectUrl && ((ae = x.pdfObjectUrl), (me = ''));
								var Ie =
										'<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' +
										ae +
										'"' +
										me +
										'><\/script><script >PDFObject.embed("' +
										this.output('dataurlstring') +
										'", ' +
										JSON.stringify(x) +
										');<\/script></body></html>',
									qe = st.open();
								return qe !== null && qe.document.write(Ie), qe;
							}
							throw new Error('The option pdfobjectnewwindow just works in a browser-environment.');
						case 'pdfjsnewwindow':
							if (Object.prototype.toString.call(st) === '[object Window]') {
								var et =
										'<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' +
										(x.pdfJsUrl || 'examples/PDF.js/web/viewer.html') +
										'?file=&downloadName=' +
										x.filename +
										'" width="500px" height="400px" /></body></html>',
									pt = st.open();
								if (pt !== null) {
									pt.document.write(et);
									var ht = this;
									pt.document.documentElement.querySelector('#pdfViewer').onload = function () {
										(pt.document.title = x.filename),
											pt.document.documentElement
												.querySelector('#pdfViewer')
												.contentWindow.PDFViewerApplication.open(ht.output('bloburl'));
									};
								}
								return pt;
							}
							throw new Error('The option pdfjsnewwindow just works in a browser-environment.');
						case 'dataurlnewwindow':
							if (Object.prototype.toString.call(st) !== '[object Window]')
								throw new Error('The option dataurlnewwindow just works in a browser-environment.');
							var kt =
									'<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' +
									this.output('datauristring', x) +
									'"></iframe></body></html>',
								$t = st.open();
							if (
								($t !== null && ($t.document.write(kt), ($t.document.title = x.filename)),
								$t || typeof safari > 'u')
							)
								return $t;
							break;
						case 'datauri':
						case 'dataurl':
							return (st.document.location.href = this.output('datauristring', x));
						default:
							return null;
					}
				})),
		wo = function (c) {
			return Array.isArray(rn) === !0 && rn.indexOf(c) > -1;
		};
	switch (i) {
		case 'pt':
			Be = 1;
			break;
		case 'mm':
			Be = 72 / 25.4;
			break;
		case 'cm':
			Be = 72 / 2.54;
			break;
		case 'in':
			Be = 72;
			break;
		case 'px':
			Be = wo('px_scaling') == 1 ? 0.75 : 96 / 72;
			break;
		case 'pc':
		case 'em':
			Be = 12;
			break;
		case 'ex':
			Be = 6;
			break;
		default:
			if (typeof i != 'number') throw new Error('Invalid unit: ' + i);
			Be = i;
	}
	var jr = null;
	Se(), K();
	var Fs = function (c) {
			return v !== null
				? jr.encryptor(c, 0)
				: function (x) {
						return x;
					};
		},
		xo =
			(d.__private__.getPageInfo =
			d.getPageInfo =
				function (c) {
					if (isNaN(c) || c % 1 != 0)
						throw new Error('Invalid argument passed to jsPDF.getPageInfo');
					return { objId: Je[c].objId, pageNumber: c, pageContext: Je[c] };
				}),
		ct = (d.__private__.getPageInfoByObjId = function (c) {
			if (isNaN(c) || c % 1 != 0)
				throw new Error('Invalid argument passed to jsPDF.getPageInfoByObjId');
			for (var x in Je) if (Je[x].objId === c) break;
			return xo(x);
		}),
		Es =
			(d.__private__.getCurrentPageInfo =
			d.getCurrentPageInfo =
				function () {
					return { objId: Je[T].objId, pageNumber: T, pageContext: Je[T] };
				});
	(d.addPage = function () {
		return mo.apply(this, arguments), this;
	}),
		(d.setPage = function () {
			return bo.apply(this, arguments), pe.call(this, ye[T]), this;
		}),
		(d.insertPage = function (c) {
			return this.addPage(), this.movePage(T, c), this;
		}),
		(d.movePage = function (c, x) {
			var R, Y;
			if (c > x) {
				(R = ye[c]), (Y = Je[c]);
				for (var ae = c; ae > x; ae--) (ye[ae] = ye[ae - 1]), (Je[ae] = Je[ae - 1]);
				(ye[x] = R), (Je[x] = Y), this.setPage(x);
			} else if (c < x) {
				(R = ye[c]), (Y = Je[c]);
				for (var me = c; me < x; me++) (ye[me] = ye[me + 1]), (Je[me] = Je[me + 1]);
				(ye[x] = R), (Je[x] = Y), this.setPage(x);
			}
			return this;
		}),
		(d.deletePage = function () {
			return Ss.apply(this, arguments), this;
		}),
		(d.__private__.text = d.text =
			function (c, x, R, Y, ae) {
				var me,
					Ie,
					qe,
					et,
					pt,
					ht,
					kt,
					$t,
					er,
					hr = (Y = Y || {}).scope || this;
				if (
					typeof c == 'number' &&
					typeof x == 'number' &&
					(typeof R == 'string' || Array.isArray(R))
				) {
					var Mr = R;
					(R = x), (x = c), (c = Mr);
				}
				if (
					(arguments[3] instanceof Ke
						? (z('The transform parameter of text() with a Matrix value'), (er = ae))
						: ((qe = arguments[4]),
							(et = arguments[5]),
							(Bt((kt = arguments[3])) === 'object' && kt !== null) ||
								(typeof qe == 'string' && ((et = qe), (qe = null)),
								typeof kt == 'string' && ((et = kt), (kt = null)),
								typeof kt == 'number' && ((qe = kt), (kt = null)),
								(Y = { flags: kt, angle: qe, align: et }))),
					isNaN(x) || isNaN(R) || c == null)
				)
					throw new Error('Invalid arguments passed to jsPDF.text');
				if (c.length === 0) return hr;
				var Ar = '',
					Cn = !1,
					sn = typeof Y.lineHeightFactor == 'number' ? Y.lineHeightFactor : Ci,
					Rn = hr.internal.scaleFactor;
				function Io(zt) {
					return (zt = zt.split('	').join(Array(Y.TabLen || 9).join(' '))), Yr(zt, kt);
				}
				function qa(zt) {
					for (var Ut, or = zt.concat(), mr = [], Qn = or.length; Qn--; )
						typeof (Ut = or.shift()) == 'string'
							? mr.push(Ut)
							: Array.isArray(zt) && (Ut.length === 1 || (Ut[1] === void 0 && Ut[2] === void 0))
								? mr.push(Ut[0])
								: mr.push([Ut[0], Ut[1], Ut[2]]);
					return mr;
				}
				function za(zt, Ut) {
					var or;
					if (typeof zt == 'string') or = Ut(zt)[0];
					else if (Array.isArray(zt)) {
						for (var mr, Qn, Ja = zt.concat(), la = [], Mo = Ja.length; Mo--; )
							typeof (mr = Ja.shift()) == 'string'
								? la.push(Ut(mr)[0])
								: Array.isArray(mr) &&
									typeof mr[0] == 'string' &&
									((Qn = Ut(mr[0], mr[1], mr[2])), la.push([Qn[0], Qn[1], Qn[2]]));
						or = la;
					}
					return or;
				}
				var $i = !1,
					Ua = !0;
				if (typeof c == 'string') $i = !0;
				else if (Array.isArray(c)) {
					var Ha = c.concat();
					Ie = [];
					for (var ea, Cr = Ha.length; Cr--; )
						(typeof (ea = Ha.shift()) != 'string' ||
							(Array.isArray(ea) && typeof ea[0] != 'string')) &&
							(Ua = !1);
					$i = Ua;
				}
				if ($i === !1)
					throw new Error('Type of text must be string or Array. "' + c + '" is not recognized.');
				typeof c == 'string' && (c = c.match(/[\r?\n]/) ? c.split(/\r\n|\r|\n/g) : [c]);
				var ta = Ee / hr.internal.scaleFactor,
					ra = ta * (sn - 1);
				switch (Y.baseline) {
					case 'bottom':
						R -= ra;
						break;
					case 'top':
						R += ta - ra;
						break;
					case 'hanging':
						R += ta - 2 * ra;
						break;
					case 'middle':
						R += ta / 2 - ra;
				}
				if (
					((ht = Y.maxWidth || 0) > 0 &&
						(typeof c == 'string'
							? (c = hr.splitTextToSize(c, ht))
							: Object.prototype.toString.call(c) === '[object Array]' &&
								(c = c.reduce(function (zt, Ut) {
									return zt.concat(hr.splitTextToSize(Ut, ht));
								}, []))),
					(me = {
						text: c,
						x,
						y: R,
						options: Y,
						mutex: { pdfEscape: Yr, activeFontKey: Qe, fonts: Pt, activeFontSize: Ee }
					}),
					wt.publish('preProcessText', me),
					(c = me.text),
					(qe = (Y = me.options).angle),
					!(er instanceof Ke) && qe && typeof qe == 'number')
				) {
					(qe *= Math.PI / 180),
						Y.rotationDirection === 0 && (qe = -qe),
						O === j.ADVANCED && (qe = -qe);
					var na = Math.cos(qe),
						Wa = Math.sin(qe);
					er = new Ke(na, Wa, -Wa, na, 0, 0);
				} else qe && qe instanceof Ke && (er = qe);
				O !== j.ADVANCED || er || (er = Er),
					(pt = Y.charSpace || Ki) !== void 0 &&
						((Ar +=
							ee(L(pt)) +
							` Tc
`),
						this.setCharSpace(this.getCharSpace() || 0)),
					($t = Y.horizontalScale) !== void 0 &&
						(Ar +=
							ee(100 * $t) +
							` Tz
`),
					Y.lang;
				var Xr = -1,
					Us = Y.renderingMode !== void 0 ? Y.renderingMode : Y.stroke,
					Ga = hr.internal.getCurrentPageInfo().pageContext;
				switch (Us) {
					case 0:
					case !1:
					case 'fill':
						Xr = 0;
						break;
					case 1:
					case !0:
					case 'stroke':
						Xr = 1;
						break;
					case 2:
					case 'fillThenStroke':
						Xr = 2;
						break;
					case 3:
					case 'invisible':
						Xr = 3;
						break;
					case 4:
					case 'fillAndAddForClipping':
						Xr = 4;
						break;
					case 5:
					case 'strokeAndAddPathForClipping':
						Xr = 5;
						break;
					case 6:
					case 'fillThenStrokeAndAddToPathForClipping':
						Xr = 6;
						break;
					case 7:
					case 'addToPathForClipping':
						Xr = 7;
				}
				var Fo = Ga.usedRenderingMode !== void 0 ? Ga.usedRenderingMode : -1;
				Xr !== -1
					? (Ar +=
							Xr +
							` Tr
`)
					: Fo !== -1 &&
						(Ar += `0 Tr
`),
					Xr !== -1 && (Ga.usedRenderingMode = Xr),
					(et = Y.align || 'left');
				var mn,
					ia = Ee * sn,
					Eo = hr.internal.pageSize.getWidth(),
					To = Pt[Qe];
				(pt = Y.charSpace || Ki),
					(ht = Y.maxWidth || 0),
					(kt = Object.assign({ autoencode: !0, noBOM: !0 }, Y.flags));
				var ui = [],
					Ei = function (zt) {
						return (
							(hr.getStringUnitWidth(zt, { font: To, charSpace: pt, fontSize: Ee, doKerning: !1 }) *
								Ee) /
							Rn
						);
					};
				if (Object.prototype.toString.call(c) === '[object Array]') {
					var Jr;
					(Ie = qa(c)), et !== 'left' && (mn = Ie.map(Ei));
					var Hr,
						fi = 0;
					if (et === 'right') {
						(x -= mn[0]), (c = []), (Cr = Ie.length);
						for (var Jn = 0; Jn < Cr; Jn++)
							Jn === 0 ? ((Hr = On(x)), (Jr = Xn(R))) : ((Hr = L(fi - mn[Jn])), (Jr = -ia)),
								c.push([Ie[Jn], Hr, Jr]),
								(fi = mn[Jn]);
					} else if (et === 'center') {
						(x -= mn[0] / 2), (c = []), (Cr = Ie.length);
						for (var Kn = 0; Kn < Cr; Kn++)
							Kn === 0 ? ((Hr = On(x)), (Jr = Xn(R))) : ((Hr = L((fi - mn[Kn]) / 2)), (Jr = -ia)),
								c.push([Ie[Kn], Hr, Jr]),
								(fi = mn[Kn]);
					} else if (et === 'left') {
						(c = []), (Cr = Ie.length);
						for (var aa = 0; aa < Cr; aa++) c.push(Ie[aa]);
					} else if (et === 'justify' && To.encoding === 'Identity-H') {
						(c = []), (Cr = Ie.length), (ht = ht !== 0 ? ht : Eo);
						for (var Zn = 0, ar = 0; ar < Cr; ar++)
							if (((Jr = ar === 0 ? Xn(R) : -ia), (Hr = ar === 0 ? On(x) : Zn), ar < Cr - 1)) {
								var Va = L((ht - mn[ar]) / (Ie[ar].split(' ').length - 1)),
									Wr = Ie[ar].split(' ');
								c.push([Wr[0] + ' ', Hr, Jr]), (Zn = 0);
								for (var bn = 1; bn < Wr.length; bn++) {
									var oa = (Ei(Wr[bn - 1] + ' ' + Wr[bn]) - Ei(Wr[bn])) * Rn + Va;
									bn == Wr.length - 1 ? c.push([Wr[bn], oa, 0]) : c.push([Wr[bn] + ' ', oa, 0]),
										(Zn -= oa);
								}
							} else c.push([Ie[ar], Hr, Jr]);
						c.push(['', Zn, 0]);
					} else {
						if (et !== 'justify')
							throw new Error(
								'Unrecognized alignment option, use "left", "center", "right" or "justify".'
							);
						for (c = [], Cr = Ie.length, ht = ht !== 0 ? ht : Eo, ar = 0; ar < Cr; ar++)
							(Jr = ar === 0 ? Xn(R) : -ia),
								(Hr = ar === 0 ? On(x) : 0),
								ar < Cr - 1
									? ui.push(ee(L((ht - mn[ar]) / (Ie[ar].split(' ').length - 1))))
									: ui.push(0),
								c.push([Ie[ar], Hr, Jr]);
					}
				}
				var jo = typeof Y.R2L == 'boolean' ? Y.R2L : Ye;
				jo === !0 &&
					(c = za(c, function (zt, Ut, or) {
						return [zt.split('').reverse().join(''), Ut, or];
					})),
					(me = {
						text: c,
						x,
						y: R,
						options: Y,
						mutex: { pdfEscape: Yr, activeFontKey: Qe, fonts: Pt, activeFontSize: Ee }
					}),
					wt.publish('postProcessText', me),
					(c = me.text),
					(Cn = me.mutex.isHex || !1);
				var Ya = Pt[Qe].encoding;
				(Ya !== 'WinAnsiEncoding' && Ya !== 'StandardEncoding') ||
					(c = za(c, function (zt, Ut, or) {
						return [Io(zt), Ut, or];
					})),
					(Ie = qa(c)),
					(c = []);
				for (
					var Ti,
						ji,
						hi,
						Mi = 0,
						sa = 1,
						Bi = Array.isArray(Ie[0]) ? sa : Mi,
						di = '',
						Xa = function (zt, Ut, or) {
							var mr = '';
							return (
								or instanceof Ke
									? ((or =
											typeof Y.angle == 'number'
												? Pr(or, new Ke(1, 0, 0, 1, zt, Ut))
												: Pr(new Ke(1, 0, 0, 1, zt, Ut), or)),
										O === j.ADVANCED && (or = Pr(new Ke(1, 0, 0, -1, 0, 0), or)),
										(mr =
											or.join(' ') +
											` Tm
`))
									: (mr =
											ee(zt) +
											' ' +
											ee(Ut) +
											` Td
`),
								mr
							);
						},
						yn = 0;
					yn < Ie.length;
					yn++
				) {
					switch (((di = ''), Bi)) {
						case sa:
							(hi = (Cn ? '<' : '(') + Ie[yn][0] + (Cn ? '>' : ')')),
								(Ti = parseFloat(Ie[yn][1])),
								(ji = parseFloat(Ie[yn][2]));
							break;
						case Mi:
							(hi = (Cn ? '<' : '(') + Ie[yn] + (Cn ? '>' : ')')), (Ti = On(x)), (ji = Xn(R));
					}
					ui !== void 0 &&
						ui[yn] !== void 0 &&
						(di =
							ui[yn] +
							` Tw
`),
						yn === 0
							? c.push(di + Xa(Ti, ji, er) + hi)
							: Bi === Mi
								? c.push(di + hi)
								: Bi === sa && c.push(di + Xa(Ti, ji, er) + hi);
				}
				(c =
					Bi === Mi
						? c.join(` Tj
T* `)
						: c.join(` Tj
`)),
					(c += ` Tj
`);
				var wn = `BT
/`;
				return (
					(wn +=
						Qe +
						' ' +
						Ee +
						` Tf
`),
					(wn +=
						ee(Ee * sn) +
						` TL
`),
					(wn +=
						Ii +
						`
`),
					(wn += Ar),
					(wn += c),
					U((wn += 'ET')),
					(y[Qe] = !0),
					hr
				);
			});
	var Ts =
		(d.__private__.clip =
		d.clip =
			function (c) {
				return U(c === 'evenodd' ? 'W*' : 'W'), this;
			});
	(d.clipEvenOdd = function () {
		return Ts('evenodd');
	}),
		(d.__private__.discardPath = d.discardPath =
			function () {
				return U('n'), this;
			});
	var Dn = (d.__private__.isValidStyle = function (c) {
		var x = !1;
		return (
			[void 0, null, 'S', 'D', 'F', 'DF', 'FD', 'f', 'f*', 'B', 'B*', 'n'].indexOf(c) !== -1 &&
				(x = !0),
			x
		);
	});
	d.__private__.setDefaultPathOperation = d.setDefaultPathOperation = function (c) {
		return Dn(c) && (p = c), this;
	};
	var _o =
			(d.__private__.getStyle =
			d.getStyle =
				function (c) {
					var x = p;
					switch (c) {
						case 'D':
						case 'S':
							x = 'S';
							break;
						case 'F':
							x = 'f';
							break;
						case 'FD':
						case 'DF':
							x = 'B';
							break;
						case 'f':
						case 'f*':
						case 'B':
						case 'B*':
							x = c;
					}
					return x;
				}),
		Lo = (d.close = function () {
			return U('h'), this;
		});
	(d.stroke = function () {
		return U('S'), this;
	}),
		(d.fill = function (c) {
			return Xi('f', c), this;
		}),
		(d.fillEvenOdd = function (c) {
			return Xi('f*', c), this;
		}),
		(d.fillStroke = function (c) {
			return Xi('B', c), this;
		}),
		(d.fillStrokeEvenOdd = function (c) {
			return Xi('B*', c), this;
		});
	var Xi = function (c, x) {
			Bt(x) === 'object' ? Ms(x, c) : U(c);
		},
		Ia = function (c) {
			c === null || (O === j.ADVANCED && c === void 0) || ((c = _o(c)), U(c));
		};
	function js(c, x, R, Y, ae) {
		var me = new ya(
			x || this.boundingBox,
			R || this.xStep,
			Y || this.yStep,
			this.gState,
			ae || this.matrix
		);
		me.stream = this.stream;
		var Ie = c + '$$' + this.cloneIndex++ + '$$';
		return gr(Ie, me), me;
	}
	var Ms = function (c, x) {
			var R = xt[c.key],
				Y = we[R];
			if (Y instanceof qi)
				U('q'),
					U(Bs(x)),
					Y.gState && d.setGState(Y.gState),
					U(c.matrix.toString() + ' cm'),
					U('/' + R + ' sh'),
					U('Q');
			else if (Y instanceof ya) {
				var ae = new Ke(1, 0, 0, -1, 0, ci());
				c.matrix &&
					((ae = ae.multiply(c.matrix || Er)),
					(R = js.call(Y, c.key, c.boundingBox, c.xStep, c.yStep, ae).id)),
					U('q'),
					U('/Pattern cs'),
					U('/' + R + ' scn'),
					Y.gState && d.setGState(Y.gState),
					U(x),
					U('Q');
			}
		},
		Bs = function (c) {
			switch (c) {
				case 'f':
				case 'F':
					return 'W n';
				case 'f*':
					return 'W* n';
				case 'B':
					return 'W S';
				case 'B*':
					return 'W* S';
				case 'S':
					return 'W S';
				case 'n':
					return 'W n';
			}
		},
		Fa = (d.moveTo = function (c, x) {
			return U(ee(L(c)) + ' ' + ee(B(x)) + ' m'), this;
		}),
		Pi = (d.lineTo = function (c, x) {
			return U(ee(L(c)) + ' ' + ee(B(x)) + ' l'), this;
		}),
		si = (d.curveTo = function (c, x, R, Y, ae, me) {
			return U([ee(L(c)), ee(B(x)), ee(L(R)), ee(B(Y)), ee(L(ae)), ee(B(me)), 'c'].join(' ')), this;
		});
	(d.__private__.line = d.line =
		function (c, x, R, Y, ae) {
			if (isNaN(c) || isNaN(x) || isNaN(R) || isNaN(Y) || !Dn(ae))
				throw new Error('Invalid arguments passed to jsPDF.line');
			return O === j.COMPAT
				? this.lines([[R - c, Y - x]], c, x, [1, 1], ae || 'S')
				: this.lines([[R - c, Y - x]], c, x, [1, 1]).stroke();
		}),
		(d.__private__.lines = d.lines =
			function (c, x, R, Y, ae, me) {
				var Ie, qe, et, pt, ht, kt, $t, er, hr, Mr, Ar, Cn;
				if (
					(typeof c == 'number' && ((Cn = R), (R = x), (x = c), (c = Cn)),
					(Y = Y || [1, 1]),
					(me = me || !1),
					isNaN(x) ||
						isNaN(R) ||
						!Array.isArray(c) ||
						!Array.isArray(Y) ||
						!Dn(ae) ||
						typeof me != 'boolean')
				)
					throw new Error('Invalid arguments passed to jsPDF.lines');
				for (Fa(x, R), Ie = Y[0], qe = Y[1], pt = c.length, Mr = x, Ar = R, et = 0; et < pt; et++)
					(ht = c[et]).length === 2
						? ((Mr = ht[0] * Ie + Mr), (Ar = ht[1] * qe + Ar), Pi(Mr, Ar))
						: ((kt = ht[0] * Ie + Mr),
							($t = ht[1] * qe + Ar),
							(er = ht[2] * Ie + Mr),
							(hr = ht[3] * qe + Ar),
							(Mr = ht[4] * Ie + Mr),
							(Ar = ht[5] * qe + Ar),
							si(kt, $t, er, hr, Mr, Ar));
				return me && Lo(), Ia(ae), this;
			}),
		(d.path = function (c) {
			for (var x = 0; x < c.length; x++) {
				var R = c[x],
					Y = R.c;
				switch (R.op) {
					case 'm':
						Fa(Y[0], Y[1]);
						break;
					case 'l':
						Pi(Y[0], Y[1]);
						break;
					case 'c':
						si.apply(this, Y);
						break;
					case 'h':
						Lo();
				}
			}
			return this;
		}),
		(d.__private__.rect = d.rect =
			function (c, x, R, Y, ae) {
				if (isNaN(c) || isNaN(x) || isNaN(R) || isNaN(Y) || !Dn(ae))
					throw new Error('Invalid arguments passed to jsPDF.rect');
				return (
					O === j.COMPAT && (Y = -Y),
					U([ee(L(c)), ee(B(x)), ee(L(R)), ee(L(Y)), 're'].join(' ')),
					Ia(ae),
					this
				);
			}),
		(d.__private__.triangle = d.triangle =
			function (c, x, R, Y, ae, me, Ie) {
				if (isNaN(c) || isNaN(x) || isNaN(R) || isNaN(Y) || isNaN(ae) || isNaN(me) || !Dn(Ie))
					throw new Error('Invalid arguments passed to jsPDF.triangle');
				return (
					this.lines(
						[
							[R - c, Y - x],
							[ae - R, me - Y],
							[c - ae, x - me]
						],
						c,
						x,
						[1, 1],
						Ie,
						!0
					),
					this
				);
			}),
		(d.__private__.roundedRect = d.roundedRect =
			function (c, x, R, Y, ae, me, Ie) {
				if (isNaN(c) || isNaN(x) || isNaN(R) || isNaN(Y) || isNaN(ae) || isNaN(me) || !Dn(Ie))
					throw new Error('Invalid arguments passed to jsPDF.roundedRect');
				var qe = (4 / 3) * (Math.SQRT2 - 1);
				return (
					(ae = Math.min(ae, 0.5 * R)),
					(me = Math.min(me, 0.5 * Y)),
					this.lines(
						[
							[R - 2 * ae, 0],
							[ae * qe, 0, ae, me - me * qe, ae, me],
							[0, Y - 2 * me],
							[0, me * qe, -ae * qe, me, -ae, me],
							[2 * ae - R, 0],
							[-ae * qe, 0, -ae, -me * qe, -ae, -me],
							[0, 2 * me - Y],
							[0, -me * qe, ae * qe, -me, ae, -me]
						],
						c + ae,
						x,
						[1, 1],
						Ie,
						!0
					),
					this
				);
			}),
		(d.__private__.ellipse = d.ellipse =
			function (c, x, R, Y, ae) {
				if (isNaN(c) || isNaN(x) || isNaN(R) || isNaN(Y) || !Dn(ae))
					throw new Error('Invalid arguments passed to jsPDF.ellipse');
				var me = (4 / 3) * (Math.SQRT2 - 1) * R,
					Ie = (4 / 3) * (Math.SQRT2 - 1) * Y;
				return (
					Fa(c + R, x),
					si(c + R, x - Ie, c + me, x - Y, c, x - Y),
					si(c - me, x - Y, c - R, x - Ie, c - R, x),
					si(c - R, x + Ie, c - me, x + Y, c, x + Y),
					si(c + me, x + Y, c + R, x + Ie, c + R, x),
					Ia(ae),
					this
				);
			}),
		(d.__private__.circle = d.circle =
			function (c, x, R, Y) {
				if (isNaN(c) || isNaN(x) || isNaN(R) || !Dn(Y))
					throw new Error('Invalid arguments passed to jsPDF.circle');
				return this.ellipse(c, x, R, R, Y);
			}),
		(d.setFont = function (c, x, R) {
			return R && (x = oe(x, R)), (Qe = yo(c, x, { disableWarning: !1 })), this;
		});
	var Ds =
		(d.__private__.getFont =
		d.getFont =
			function () {
				return Pt[yo.apply(d, arguments)];
			});
	(d.__private__.getFontList = d.getFontList =
		function () {
			var c,
				x,
				R = {};
			for (c in Ft)
				if (Ft.hasOwnProperty(c))
					for (x in ((R[c] = []), Ft[c])) Ft[c].hasOwnProperty(x) && R[c].push(x);
			return R;
		}),
		(d.addFont = function (c, x, R, Y, ae) {
			var me = ['StandardEncoding', 'MacRomanEncoding', 'Identity-H', 'WinAnsiEncoding'];
			return (
				arguments[3] && me.indexOf(arguments[3]) !== -1
					? (ae = arguments[3])
					: arguments[3] && me.indexOf(arguments[3]) == -1 && (R = oe(R, Y)),
				(ae = ae || 'Identity-H'),
				ka.call(this, c, x, R, ae)
			);
		});
	var Ci,
		Ea = n.lineWidth || 0.200025,
		Ji =
			(d.__private__.getLineWidth =
			d.getLineWidth =
				function () {
					return Ea;
				}),
		Ao =
			(d.__private__.setLineWidth =
			d.setLineWidth =
				function (c) {
					return (Ea = c), U(ee(L(c)) + ' w'), this;
				});
	d.__private__.setLineDash =
		ot.API.setLineDash =
		ot.API.setLineDashPattern =
			function (c, x) {
				if (((c = c || []), (x = x || 0), isNaN(x) || !Array.isArray(c)))
					throw new Error('Invalid arguments passed to jsPDF.setLineDash');
				return (
					(c = c
						.map(function (R) {
							return ee(L(R));
						})
						.join(' ')),
					(x = ee(L(x))),
					U('[' + c + '] ' + x + ' d'),
					this
				);
			};
	var So =
		(d.__private__.getLineHeight =
		d.getLineHeight =
			function () {
				return Ee * Ci;
			});
	d.__private__.getLineHeight = d.getLineHeight = function () {
		return Ee * Ci;
	};
	var No =
			(d.__private__.setLineHeightFactor =
			d.setLineHeightFactor =
				function (c) {
					return typeof (c = c || 1.15) == 'number' && (Ci = c), this;
				}),
		ko =
			(d.__private__.getLineHeightFactor =
			d.getLineHeightFactor =
				function () {
					return Ci;
				});
	No(n.lineHeight);
	var On = (d.__private__.getHorizontalCoordinate = function (c) {
			return L(c);
		}),
		Xn = (d.__private__.getVerticalCoordinate = function (c) {
			return O === j.ADVANCED ? c : Je[T].mediaBox.topRightY - Je[T].mediaBox.bottomLeftY - L(c);
		}),
		Os =
			(d.__private__.getHorizontalCoordinateString =
			d.getHorizontalCoordinateString =
				function (c) {
					return ee(On(c));
				}),
		li =
			(d.__private__.getVerticalCoordinateString =
			d.getVerticalCoordinateString =
				function (c) {
					return ee(Xn(c));
				}),
		Pn = n.strokeColor || '0 G';
	(d.__private__.getStrokeColor = d.getDrawColor =
		function () {
			return an(Pn);
		}),
		(d.__private__.setStrokeColor = d.setDrawColor =
			function (c, x, R, Y) {
				return (
					(Pn = on({ ch1: c, ch2: x, ch3: R, ch4: Y, pdfColorType: 'draw', precision: 2 })),
					U(Pn),
					this
				);
			});
	var Ta = n.fillColor || '0 g';
	(d.__private__.getFillColor = d.getFillColor =
		function () {
			return an(Ta);
		}),
		(d.__private__.setFillColor = d.setFillColor =
			function (c, x, R, Y) {
				return (
					(Ta = on({ ch1: c, ch2: x, ch3: R, ch4: Y, pdfColorType: 'fill', precision: 2 })),
					U(Ta),
					this
				);
			});
	var Ii = n.textColor || '0 g',
		Rs =
			(d.__private__.getTextColor =
			d.getTextColor =
				function () {
					return an(Ii);
				});
	d.__private__.setTextColor = d.setTextColor = function (c, x, R, Y) {
		return (Ii = on({ ch1: c, ch2: x, ch3: R, ch4: Y, pdfColorType: 'text', precision: 3 })), this;
	};
	var Ki = n.charSpace,
		qs =
			(d.__private__.getCharSpace =
			d.getCharSpace =
				function () {
					return parseFloat(Ki || 0);
				});
	d.__private__.setCharSpace = d.setCharSpace = function (c) {
		if (isNaN(c)) throw new Error('Invalid argument passed to jsPDF.setCharSpace');
		return (Ki = c), this;
	};
	var ja = 0;
	(d.CapJoinStyles = {
		0: 0,
		butt: 0,
		but: 0,
		miter: 0,
		1: 1,
		round: 1,
		rounded: 1,
		circle: 1,
		2: 2,
		projecting: 2,
		project: 2,
		square: 2,
		bevel: 2
	}),
		(d.__private__.setLineCap = d.setLineCap =
			function (c) {
				var x = d.CapJoinStyles[c];
				if (x === void 0)
					throw new Error(
						"Line cap style of '" +
							c +
							"' is not recognized. See or extend .CapJoinStyles property for valid styles"
					);
				return (ja = x), U(x + ' J'), this;
			});
	var Ma = 0;
	(d.__private__.setLineJoin = d.setLineJoin =
		function (c) {
			var x = d.CapJoinStyles[c];
			if (x === void 0)
				throw new Error(
					"Line join style of '" +
						c +
						"' is not recognized. See or extend .CapJoinStyles property for valid styles"
				);
			return (Ma = x), U(x + ' j'), this;
		}),
		(d.__private__.setLineMiterLimit =
			d.__private__.setMiterLimit =
			d.setLineMiterLimit =
			d.setMiterLimit =
				function (c) {
					if (((c = c || 0), isNaN(c)))
						throw new Error('Invalid argument passed to jsPDF.setLineMiterLimit');
					return U(ee(L(c)) + ' M'), this;
				}),
		(d.GState = hs),
		(d.setGState = function (c) {
			(c = typeof c == 'string' ? Oe[nt[c]] : Po(null, c)).equals(It) ||
				(U('/' + c.id + ' gs'), (It = c));
		});
	var Po = function (c, x) {
		if (!c || !nt[c]) {
			var R = !1;
			for (var Y in Oe)
				if (Oe.hasOwnProperty(Y) && Oe[Y].equals(x)) {
					R = !0;
					break;
				}
			if (R) x = Oe[Y];
			else {
				var ae = 'GS' + (Object.keys(Oe).length + 1).toString(10);
				(Oe[ae] = x), (x.id = ae);
			}
			return c && (nt[c] = x.id), wt.publish('addGState', x), x;
		}
	};
	(d.addGState = function (c, x) {
		return Po(c, x), this;
	}),
		(d.saveGraphicsState = function () {
			return U('q'), xr.push({ key: Qe, size: Ee, color: Ii }), this;
		}),
		(d.restoreGraphicsState = function () {
			U('Q');
			var c = xr.pop();
			return (Qe = c.key), (Ee = c.size), (Ii = c.color), (It = null), this;
		}),
		(d.setCurrentTransformationMatrix = function (c) {
			return U(c.toString() + ' cm'), this;
		}),
		(d.comment = function (c) {
			return U('#' + c), this;
		});
	var Zi = function (c, x) {
			var R = c || 0;
			Object.defineProperty(this, 'x', {
				enumerable: !0,
				get: function () {
					return R;
				},
				set: function (me) {
					isNaN(me) || (R = parseFloat(me));
				}
			});
			var Y = x || 0;
			Object.defineProperty(this, 'y', {
				enumerable: !0,
				get: function () {
					return Y;
				},
				set: function (me) {
					isNaN(me) || (Y = parseFloat(me));
				}
			});
			var ae = 'pt';
			return (
				Object.defineProperty(this, 'type', {
					enumerable: !0,
					get: function () {
						return ae;
					},
					set: function (me) {
						ae = me.toString();
					}
				}),
				this
			);
		},
		Ba = function (c, x, R, Y) {
			Zi.call(this, c, x), (this.type = 'rect');
			var ae = R || 0;
			Object.defineProperty(this, 'w', {
				enumerable: !0,
				get: function () {
					return ae;
				},
				set: function (Ie) {
					isNaN(Ie) || (ae = parseFloat(Ie));
				}
			});
			var me = Y || 0;
			return (
				Object.defineProperty(this, 'h', {
					enumerable: !0,
					get: function () {
						return me;
					},
					set: function (Ie) {
						isNaN(Ie) || (me = parseFloat(Ie));
					}
				}),
				this
			);
		},
		Da = function () {
			(this.page = vt),
				(this.currentPage = T),
				(this.pages = ye.slice(0)),
				(this.pagesContext = Je.slice(0)),
				(this.x = Jt),
				(this.y = yt),
				(this.matrix = ur),
				(this.width = Fi(T)),
				(this.height = ci(T)),
				(this.outputDestination = Fe),
				(this.id = ''),
				(this.objectNumber = -1);
		};
	Da.prototype.restore = function () {
		(vt = this.page),
			(T = this.currentPage),
			(Je = this.pagesContext),
			(ye = this.pages),
			(Jt = this.x),
			(yt = this.y),
			(ur = this.matrix),
			Oa(T, this.width),
			Ra(T, this.height),
			(Fe = this.outputDestination);
	};
	var Co = function (c, x, R, Y, ae) {
			_r.push(new Da()), (vt = T = 0), (ye = []), (Jt = c), (yt = x), (ur = ae), Pa([R, Y]);
		},
		zs = function (c) {
			if (Ur[c]) _r.pop().restore();
			else {
				var x = new Da(),
					R = 'Xo' + (Object.keys(Zt).length + 1).toString(10);
				(x.id = R), (Ur[c] = R), (Zt[R] = x), wt.publish('addFormObject', x), _r.pop().restore();
			}
		};
	for (var Qi in ((d.beginFormObject = function (c, x, R, Y, ae) {
		return Co(c, x, R, Y, ae), this;
	}),
	(d.endFormObject = function (c) {
		return zs(c), this;
	}),
	(d.doFormObject = function (c, x) {
		var R = Zt[Ur[c]];
		return U('q'), U(x.toString() + ' cm'), U('/' + R.id + ' Do'), U('Q'), this;
	}),
	(d.getFormObject = function (c) {
		var x = Zt[Ur[c]];
		return { x: x.x, y: x.y, width: x.width, height: x.height, matrix: x.matrix };
	}),
	(d.save = function (c, x) {
		return (
			(c = c || 'generated.pdf'),
			((x = x || {}).returnPromise = x.returnPromise || !1),
			x.returnPromise === !1
				? (Oi(Vi(Yn()), c),
					typeof Oi.unload == 'function' && st.setTimeout && setTimeout(Oi.unload, 911),
					this)
				: new Promise(function (R, Y) {
						try {
							var ae = Oi(Vi(Yn()), c);
							typeof Oi.unload == 'function' && st.setTimeout && setTimeout(Oi.unload, 911), R(ae);
						} catch (me) {
							Y(me.message);
						}
					})
		);
	}),
	ot.API))
		ot.API.hasOwnProperty(Qi) &&
			(Qi === 'events' && ot.API.events.length
				? (function (c, x) {
						var R, Y, ae;
						for (ae = x.length - 1; ae !== -1; ae--)
							(R = x[ae][0]),
								(Y = x[ae][1]),
								c.subscribe.apply(c, [R].concat(typeof Y == 'function' ? [Y] : Y));
					})(wt, ot.API.events)
				: (d[Qi] = ot.API[Qi]));
	var Fi = (d.getPageWidth = function (c) {
			return (Je[(c = c || T)].mediaBox.topRightX - Je[c].mediaBox.bottomLeftX) / Be;
		}),
		Oa = (d.setPageWidth = function (c, x) {
			Je[c].mediaBox.topRightX = x * Be + Je[c].mediaBox.bottomLeftX;
		}),
		ci = (d.getPageHeight = function (c) {
			return (Je[(c = c || T)].mediaBox.topRightY - Je[c].mediaBox.bottomLeftY) / Be;
		}),
		Ra = (d.setPageHeight = function (c, x) {
			Je[c].mediaBox.topRightY = x * Be + Je[c].mediaBox.bottomLeftY;
		});
	return (
		(d.internal = {
			pdfEscape: Yr,
			getStyle: _o,
			getFont: Ds,
			getFontSize: je,
			getCharSpace: qs,
			getTextColor: Rs,
			getLineHeight: So,
			getLineHeightFactor: ko,
			getLineWidth: Ji,
			write: rt,
			getHorizontalCoordinate: On,
			getVerticalCoordinate: Xn,
			getCoordinateString: Os,
			getVerticalCoordinateString: li,
			collections: {},
			newObject: nr,
			newAdditionalObject: Vn,
			newObjectDeferred: Qt,
			newObjectDeferredBegin: Lr,
			getFilters: Kt,
			putStream: fr,
			events: wt,
			scaleFactor: Be,
			pageSize: {
				getWidth: function () {
					return Fi(T);
				},
				setWidth: function (c) {
					Oa(T, c);
				},
				getHeight: function () {
					return ci(T);
				},
				setHeight: function (c) {
					Ra(T, c);
				}
			},
			encryptionOptions: v,
			encryption: jr,
			getEncryptor: Fs,
			output: Yi,
			getNumberOfPages: Ns,
			pages: ye,
			out: U,
			f2: de,
			f3: C,
			getPageInfo: xo,
			getPageInfoByObjId: ct,
			getCurrentPageInfo: Es,
			getPDFVersion: N,
			Point: Zi,
			Rectangle: Ba,
			Matrix: Ke,
			hasHotfix: wo
		}),
		Object.defineProperty(d.internal.pageSize, 'width', {
			get: function () {
				return Fi(T);
			},
			set: function (c) {
				Oa(T, c);
			},
			enumerable: !0,
			configurable: !0
		}),
		Object.defineProperty(d.internal.pageSize, 'height', {
			get: function () {
				return ci(T);
			},
			set: function (c) {
				Ra(T, c);
			},
			enumerable: !0,
			configurable: !0
		}),
		As.call(d, Pe),
		(Qe = 'F1'),
		mo(s, r),
		wt.publish('initialized'),
		d
	);
}
(ma.prototype.lsbFirstWord = function (n) {
	return String.fromCharCode((n >> 0) & 255, (n >> 8) & 255, (n >> 16) & 255, (n >> 24) & 255);
}),
	(ma.prototype.toHexString = function (n) {
		return n
			.split('')
			.map(function (e) {
				return ('0' + (255 & e.charCodeAt(0)).toString(16)).slice(-2);
			})
			.join('');
	}),
	(ma.prototype.hexToBytes = function (n) {
		for (var e = [], r = 0; r < n.length; r += 2)
			e.push(String.fromCharCode(parseInt(n.substr(r, 2), 16)));
		return e.join('');
	}),
	(ma.prototype.processOwnerPassword = function (n, e) {
		return El(Fl(e).substr(0, 5), n);
	}),
	(ma.prototype.encryptor = function (n, e) {
		var r = Fl(
			this.encryptionKey +
				String.fromCharCode(255 & n, (n >> 8) & 255, (n >> 16) & 255, 255 & e, (e >> 8) & 255)
		).substr(0, 10);
		return function (i) {
			return El(r, i);
		};
	}),
	(hs.prototype.equals = function (n) {
		var e,
			r = 'id,objectNumber,equals';
		if (!n || Bt(n) !== Bt(this)) return !1;
		var i = 0;
		for (e in this)
			if (!(r.indexOf(e) >= 0)) {
				if ((this.hasOwnProperty(e) && !n.hasOwnProperty(e)) || this[e] !== n[e]) return !1;
				i++;
			}
		for (e in n) n.hasOwnProperty(e) && r.indexOf(e) < 0 && i--;
		return i === 0;
	}),
	(ot.API = { events: [] }),
	(ot.version = '3.0.1');
var rr = ot.API,
	Wl = 1,
	Ui = function (n) {
		return n.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
	},
	da = function (n) {
		return n.replace(/\\\\/g, '\\').replace(/\\\(/g, '(').replace(/\\\)/g, ')');
	},
	dt = function (n) {
		return n.toFixed(2);
	},
	_i = function (n) {
		return n.toFixed(5);
	};
rr.__acroform__ = {};
var tn = function (n, e) {
		(n.prototype = Object.create(e.prototype)), (n.prototype.constructor = n);
	},
	Tc = function (n) {
		return n * Wl;
	},
	zn = function (n) {
		var e = new vu(),
			r = Ve.internal.getHeight(n) || 0,
			i = Ve.internal.getWidth(n) || 0;
		return (e.BBox = [0, 0, Number(dt(i)), Number(dt(r))]), e;
	},
	Z2 = (rr.__acroform__.setBit = function (n, e) {
		if (((n = n || 0), (e = e || 0), isNaN(n) || isNaN(e)))
			throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.setBit');
		return (n |= 1 << e);
	}),
	Q2 = (rr.__acroform__.clearBit = function (n, e) {
		if (((n = n || 0), (e = e || 0), isNaN(n) || isNaN(e)))
			throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.clearBit');
		return (n &= ~(1 << e));
	}),
	$2 = (rr.__acroform__.getBit = function (n, e) {
		if (isNaN(n) || isNaN(e))
			throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.getBit');
		return (n & (1 << e)) == 0 ? 0 : 1;
	}),
	sr = (rr.__acroform__.getBitForPdf = function (n, e) {
		if (isNaN(n) || isNaN(e))
			throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf');
		return $2(n, e - 1);
	}),
	lr = (rr.__acroform__.setBitForPdf = function (n, e) {
		if (isNaN(n) || isNaN(e))
			throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf');
		return Z2(n, e - 1);
	}),
	cr = (rr.__acroform__.clearBitForPdf = function (n, e) {
		if (isNaN(n) || isNaN(e))
			throw new Error('Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf');
		return Q2(n, e - 1);
	}),
	e1 = (rr.__acroform__.calculateCoordinates = function (n, e) {
		var r = e.internal.getHorizontalCoordinate,
			i = e.internal.getVerticalCoordinate,
			s = n[0],
			a = n[1],
			l = n[2],
			u = n[3],
			h = {};
		return (
			(h.lowerLeft_X = r(s) || 0),
			(h.lowerLeft_Y = i(a + u) || 0),
			(h.upperRight_X = r(s + l) || 0),
			(h.upperRight_Y = i(a) || 0),
			[
				Number(dt(h.lowerLeft_X)),
				Number(dt(h.lowerLeft_Y)),
				Number(dt(h.upperRight_X)),
				Number(dt(h.upperRight_Y))
			]
		);
	}),
	t1 = function (n) {
		if (n.appearanceStreamContent) return n.appearanceStreamContent;
		if (n.V || n.DV) {
			var e = [],
				r = n._V || n.DV,
				i = Tl(n, r),
				s = n.scope.internal.getFont(n.fontName, n.fontStyle).id;
			e.push('/Tx BMC'),
				e.push('q'),
				e.push('BT'),
				e.push(n.scope.__private__.encodeColorString(n.color)),
				e.push('/' + s + ' ' + dt(i.fontSize) + ' Tf'),
				e.push('1 0 0 1 0 0 Tm'),
				e.push(i.text),
				e.push('ET'),
				e.push('Q'),
				e.push('EMC');
			var a = zn(n);
			return (
				(a.scope = n.scope),
				(a.stream = e.join(`
`)),
				a
			);
		}
	},
	Tl = function (n, e) {
		var r = n.fontSize === 0 ? n.maxFontSize : n.fontSize,
			i = { text: '', fontSize: '' },
			s = (e =
				(e = e.substr(0, 1) == '(' ? e.substr(1) : e).substr(e.length - 1) == ')'
					? e.substr(0, e.length - 1)
					: e).split(' ');
		s = n.multiline
			? s.map(function (C) {
					return C.split(`
`);
				})
			: s.map(function (C) {
					return [C];
				});
		var a = r,
			l = Ve.internal.getHeight(n) || 0;
		l = l < 0 ? -l : l;
		var u = Ve.internal.getWidth(n) || 0;
		u = u < 0 ? -u : u;
		var h = function (C, L, q) {
			if (C + 1 < s.length) {
				var B = L + ' ' + s[C + 1][0];
				return is(B, n, q).width <= u - 4;
			}
			return !1;
		};
		a++;
		e: for (; a > 0; ) {
			(e = ''), a--;
			var p,
				v,
				m = is('3', n, a).height,
				y = n.multiline ? l - a : (l - m) / 2,
				d = (y += 2),
				E = 0,
				N = 0,
				P = 0;
			if (a <= 0) {
				(e = `(...) Tj
`),
					(e +=
						'% Width of Text: ' +
						is(e, n, (a = 12)).width +
						', FieldWidth:' +
						u +
						`
`);
				break;
			}
			for (var _ = '', j = 0, O = 0; O < s.length; O++)
				if (s.hasOwnProperty(O)) {
					var G = !1;
					if (s[O].length !== 1 && P !== s[O].length - 1) {
						if ((m + 2) * (j + 2) + 2 > l) continue e;
						(_ += s[O][P]), (G = !0), (N = O), O--;
					} else {
						_ = (_ += s[O][P] + ' ').substr(_.length - 1) == ' ' ? _.substr(0, _.length - 1) : _;
						var W = parseInt(O),
							oe = h(W, _, a),
							ee = O >= s.length - 1;
						if (oe && !ee) {
							(_ += ' '), (P = 0);
							continue;
						}
						if (oe || ee) {
							if (ee) N = W;
							else if (n.multiline && (m + 2) * (j + 2) + 2 > l) continue e;
						} else {
							if (!n.multiline || (m + 2) * (j + 2) + 2 > l) continue e;
							N = W;
						}
					}
					for (var z = '', re = E; re <= N; re++) {
						var de = s[re];
						if (n.multiline) {
							if (re === N) {
								(z += de[P] + ' '), (P = (P + 1) % de.length);
								continue;
							}
							if (re === E) {
								z += de[de.length - 1] + ' ';
								continue;
							}
						}
						z += de[0] + ' ';
					}
					switch (
						((z = z.substr(z.length - 1) == ' ' ? z.substr(0, z.length - 1) : z),
						(v = is(z, n, a).width),
						n.textAlign)
					) {
						case 'right':
							p = u - v - 2;
							break;
						case 'center':
							p = (u - v) / 2;
							break;
						case 'left':
						default:
							p = 2;
					}
					(e +=
						dt(p) +
						' ' +
						dt(d) +
						` Td
`),
						(e +=
							'(' +
							Ui(z) +
							`) Tj
`),
						(e +=
							-dt(p) +
							` 0 Td
`),
						(d = -(a + 2)),
						(v = 0),
						(E = G ? N : N + 1),
						j++,
						(_ = '');
				}
			break;
		}
		return (i.text = e), (i.fontSize = a), i;
	},
	is = function (n, e, r) {
		var i = e.scope.internal.getFont(e.fontName, e.fontStyle),
			s =
				e.scope.getStringUnitWidth(n, { font: i, fontSize: parseFloat(r), charSpace: 0 }) *
				parseFloat(r);
		return {
			height:
				e.scope.getStringUnitWidth('3', { font: i, fontSize: parseFloat(r), charSpace: 0 }) *
				parseFloat(r) *
				1.5,
			width: s
		};
	},
	r1 = {
		fields: [],
		xForms: [],
		acroFormDictionaryRoot: null,
		printedOut: !1,
		internal: null,
		isInitialized: !1
	},
	n1 = function (n, e) {
		var r = { type: 'reference', object: n };
		e.internal.getPageInfo(n.page).pageContext.annotations.find(function (i) {
			return i.type === r.type && i.object === r.object;
		}) === void 0 && e.internal.getPageInfo(n.page).pageContext.annotations.push(r);
	},
	i1 = function (n, e) {
		for (var r in n)
			if (n.hasOwnProperty(r)) {
				var i = r,
					s = n[r];
				e.internal.newObjectDeferredBegin(s.objId, !0),
					Bt(s) === 'object' && typeof s.putStream == 'function' && s.putStream(),
					delete n[i];
			}
	},
	a1 = function (n, e) {
		if (
			((e.scope = n),
			n.internal !== void 0 &&
				(n.internal.acroformPlugin === void 0 || n.internal.acroformPlugin.isInitialized === !1))
		) {
			if (
				((Mn.FieldNum = 0),
				(n.internal.acroformPlugin = JSON.parse(JSON.stringify(r1))),
				n.internal.acroformPlugin.acroFormDictionaryRoot)
			)
				throw new Error('Exception while creating AcroformDictionary');
			(Wl = n.internal.scaleFactor),
				(n.internal.acroformPlugin.acroFormDictionaryRoot = new mu()),
				(n.internal.acroformPlugin.acroFormDictionaryRoot.scope = n),
				(n.internal.acroformPlugin.acroFormDictionaryRoot._eventID = n.internal.events.subscribe(
					'postPutResources',
					function () {
						(function (r) {
							r.internal.events.unsubscribe(
								r.internal.acroformPlugin.acroFormDictionaryRoot._eventID
							),
								delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID,
								(r.internal.acroformPlugin.printedOut = !0);
						})(n);
					}
				)),
				n.internal.events.subscribe('buildDocument', function () {
					(function (r) {
						r.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
						var i = r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
						for (var s in i)
							if (i.hasOwnProperty(s)) {
								var a = i[s];
								(a.objId = void 0), a.hasAnnotation && n1(a, r);
							}
					})(n);
				}),
				n.internal.events.subscribe('putCatalog', function () {
					(function (r) {
						if (r.internal.acroformPlugin.acroFormDictionaryRoot === void 0)
							throw new Error('putCatalogCallback: Root missing.');
						r.internal.write(
							'/AcroForm ' + r.internal.acroformPlugin.acroFormDictionaryRoot.objId + ' 0 R'
						);
					})(n);
				}),
				n.internal.events.subscribe('postPutPages', function (r) {
					(function (i, s) {
						var a = !i;
						for (var l in (i ||
							(s.internal.newObjectDeferredBegin(
								s.internal.acroformPlugin.acroFormDictionaryRoot.objId,
								!0
							),
							s.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),
						(i = i || s.internal.acroformPlugin.acroFormDictionaryRoot.Kids)))
							if (i.hasOwnProperty(l)) {
								var u = i[l],
									h = [],
									p = u.Rect;
								if (
									(u.Rect && (u.Rect = e1(u.Rect, s)),
									s.internal.newObjectDeferredBegin(u.objId, !0),
									(u.DA = Ve.createDefaultAppearanceStream(u)),
									Bt(u) === 'object' &&
										typeof u.getKeyValueListForStream == 'function' &&
										(h = u.getKeyValueListForStream()),
									(u.Rect = p),
									u.hasAppearanceStream && !u.appearanceStreamContent)
								) {
									var v = t1(u);
									h.push({ key: 'AP', value: '<</N ' + v + '>>' }),
										s.internal.acroformPlugin.xForms.push(v);
								}
								if (u.appearanceStreamContent) {
									var m = '';
									for (var y in u.appearanceStreamContent)
										if (u.appearanceStreamContent.hasOwnProperty(y)) {
											var d = u.appearanceStreamContent[y];
											if (
												((m += '/' + y + ' '),
												(m += '<<'),
												Object.keys(d).length >= 1 || Array.isArray(d))
											) {
												for (var l in d)
													if (d.hasOwnProperty(l)) {
														var E = d[l];
														typeof E == 'function' && (E = E.call(s, u)),
															(m += '/' + l + ' ' + E + ' '),
															s.internal.acroformPlugin.xForms.indexOf(E) >= 0 ||
																s.internal.acroformPlugin.xForms.push(E);
													}
											} else
												typeof (E = d) == 'function' && (E = E.call(s, u)),
													(m += '/' + l + ' ' + E),
													s.internal.acroformPlugin.xForms.indexOf(E) >= 0 ||
														s.internal.acroformPlugin.xForms.push(E);
											m += '>>';
										}
									h.push({
										key: 'AP',
										value:
											`<<
` +
											m +
											'>>'
									});
								}
								s.internal.putStream({ additionalKeyValues: h, objectId: u.objId }),
									s.internal.out('endobj');
							}
						a && i1(s.internal.acroformPlugin.xForms, s);
					})(r, n);
				}),
				(n.internal.acroformPlugin.isInitialized = !0);
		}
	},
	gu = (rr.__acroform__.arrayToPdfArray = function (n, e, r) {
		var i = function (l) {
			return l;
		};
		if (Array.isArray(n)) {
			for (var s = '[', a = 0; a < n.length; a++)
				switch ((a !== 0 && (s += ' '), Bt(n[a]))) {
					case 'boolean':
					case 'number':
					case 'object':
						s += n[a].toString();
						break;
					case 'string':
						n[a].substr(0, 1) !== '/'
							? (e !== void 0 && r && (i = r.internal.getEncryptor(e)),
								(s += '(' + Ui(i(n[a].toString())) + ')'))
							: (s += n[a].toString());
				}
			return (s += ']');
		}
		throw new Error('Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray');
	}),
	wl = function (n, e, r) {
		var i = function (s) {
			return s;
		};
		return (
			e !== void 0 && r && (i = r.internal.getEncryptor(e)),
			(n = n || '').toString(),
			(n = '(' + Ui(i(n)) + ')')
		);
	},
	Un = function () {
		(this._objId = void 0),
			(this._scope = void 0),
			Object.defineProperty(this, 'objId', {
				get: function () {
					if (this._objId === void 0) {
						if (this.scope === void 0) return;
						this._objId = this.scope.internal.newObjectDeferred();
					}
					return this._objId;
				},
				set: function (n) {
					this._objId = n;
				}
			}),
			Object.defineProperty(this, 'scope', { value: this._scope, writable: !0 });
	};
(Un.prototype.toString = function () {
	return this.objId + ' 0 R';
}),
	(Un.prototype.putStream = function () {
		var n = this.getKeyValueListForStream();
		this.scope.internal.putStream({
			data: this.stream,
			additionalKeyValues: n,
			objectId: this.objId
		}),
			this.scope.internal.out('endobj');
	}),
	(Un.prototype.getKeyValueListForStream = function () {
		var n = [],
			e = Object.getOwnPropertyNames(this).filter(function (a) {
				return (
					a != 'content' &&
					a != 'appearanceStreamContent' &&
					a != 'scope' &&
					a != 'objId' &&
					a.substring(0, 1) != '_'
				);
			});
		for (var r in e)
			if (Object.getOwnPropertyDescriptor(this, e[r]).configurable === !1) {
				var i = e[r],
					s = this[i];
				s &&
					(Array.isArray(s)
						? n.push({ key: i, value: gu(s, this.objId, this.scope) })
						: s instanceof Un
							? ((s.scope = this.scope), n.push({ key: i, value: s.objId + ' 0 R' }))
							: typeof s != 'function' && n.push({ key: i, value: s }));
			}
		return n;
	});
var vu = function () {
	Un.call(this),
		Object.defineProperty(this, 'Type', { value: '/XObject', configurable: !1, writable: !0 }),
		Object.defineProperty(this, 'Subtype', { value: '/Form', configurable: !1, writable: !0 }),
		Object.defineProperty(this, 'FormType', { value: 1, configurable: !1, writable: !0 });
	var n,
		e = [];
	Object.defineProperty(this, 'BBox', {
		configurable: !1,
		get: function () {
			return e;
		},
		set: function (r) {
			e = r;
		}
	}),
		Object.defineProperty(this, 'Resources', { value: '2 0 R', configurable: !1, writable: !0 }),
		Object.defineProperty(this, 'stream', {
			enumerable: !1,
			configurable: !0,
			set: function (r) {
				n = r.trim();
			},
			get: function () {
				return n || null;
			}
		});
};
tn(vu, Un);
var mu = function () {
	Un.call(this);
	var n,
		e = [];
	Object.defineProperty(this, 'Kids', {
		enumerable: !1,
		configurable: !0,
		get: function () {
			return e.length > 0 ? e : void 0;
		}
	}),
		Object.defineProperty(this, 'Fields', {
			enumerable: !1,
			configurable: !1,
			get: function () {
				return e;
			}
		}),
		Object.defineProperty(this, 'DA', {
			enumerable: !1,
			configurable: !1,
			get: function () {
				if (n) {
					var r = function (i) {
						return i;
					};
					return (
						this.scope && (r = this.scope.internal.getEncryptor(this.objId)), '(' + Ui(r(n)) + ')'
					);
				}
			},
			set: function (r) {
				n = r;
			}
		});
};
tn(mu, Un);
var Mn = function n() {
	Un.call(this);
	var e = 4;
	Object.defineProperty(this, 'F', {
		enumerable: !1,
		configurable: !1,
		get: function () {
			return e;
		},
		set: function (_) {
			if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute F supplied.');
			e = _;
		}
	}),
		Object.defineProperty(this, 'showWhenPrinted', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(e, 3);
			},
			set: function (_) {
				_ ? (this.F = lr(e, 3)) : (this.F = cr(e, 3));
			}
		});
	var r = 0;
	Object.defineProperty(this, 'Ff', {
		enumerable: !1,
		configurable: !1,
		get: function () {
			return r;
		},
		set: function (_) {
			if (isNaN(_)) throw new Error('Invalid value "' + _ + '" for attribute Ff supplied.');
			r = _;
		}
	});
	var i = [];
	Object.defineProperty(this, 'Rect', {
		enumerable: !1,
		configurable: !1,
		get: function () {
			if (i.length !== 0) return i;
		},
		set: function (_) {
			i = _ !== void 0 ? _ : [];
		}
	}),
		Object.defineProperty(this, 'x', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !i || isNaN(i[0]) ? 0 : i[0];
			},
			set: function (_) {
				i[0] = _;
			}
		}),
		Object.defineProperty(this, 'y', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !i || isNaN(i[1]) ? 0 : i[1];
			},
			set: function (_) {
				i[1] = _;
			}
		}),
		Object.defineProperty(this, 'width', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !i || isNaN(i[2]) ? 0 : i[2];
			},
			set: function (_) {
				i[2] = _;
			}
		}),
		Object.defineProperty(this, 'height', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !i || isNaN(i[3]) ? 0 : i[3];
			},
			set: function (_) {
				i[3] = _;
			}
		});
	var s = '';
	Object.defineProperty(this, 'FT', {
		enumerable: !0,
		configurable: !1,
		get: function () {
			return s;
		},
		set: function (_) {
			switch (_) {
				case '/Btn':
				case '/Tx':
				case '/Ch':
				case '/Sig':
					s = _;
					break;
				default:
					throw new Error('Invalid value "' + _ + '" for attribute FT supplied.');
			}
		}
	});
	var a = null;
	Object.defineProperty(this, 'T', {
		enumerable: !0,
		configurable: !1,
		get: function () {
			if (!a || a.length < 1) {
				if (this instanceof ds) return;
				a = 'FieldObject' + n.FieldNum++;
			}
			var _ = function (j) {
				return j;
			};
			return this.scope && (_ = this.scope.internal.getEncryptor(this.objId)), '(' + Ui(_(a)) + ')';
		},
		set: function (_) {
			a = _.toString();
		}
	}),
		Object.defineProperty(this, 'fieldName', {
			configurable: !0,
			enumerable: !0,
			get: function () {
				return a;
			},
			set: function (_) {
				a = _;
			}
		});
	var l = 'helvetica';
	Object.defineProperty(this, 'fontName', {
		enumerable: !0,
		configurable: !0,
		get: function () {
			return l;
		},
		set: function (_) {
			l = _;
		}
	});
	var u = 'normal';
	Object.defineProperty(this, 'fontStyle', {
		enumerable: !0,
		configurable: !0,
		get: function () {
			return u;
		},
		set: function (_) {
			u = _;
		}
	});
	var h = 0;
	Object.defineProperty(this, 'fontSize', {
		enumerable: !0,
		configurable: !0,
		get: function () {
			return h;
		},
		set: function (_) {
			h = _;
		}
	});
	var p = void 0;
	Object.defineProperty(this, 'maxFontSize', {
		enumerable: !0,
		configurable: !0,
		get: function () {
			return p === void 0 ? 50 / Wl : p;
		},
		set: function (_) {
			p = _;
		}
	});
	var v = 'black';
	Object.defineProperty(this, 'color', {
		enumerable: !0,
		configurable: !0,
		get: function () {
			return v;
		},
		set: function (_) {
			v = _;
		}
	});
	var m = '/F1 0 Tf 0 g';
	Object.defineProperty(this, 'DA', {
		enumerable: !0,
		configurable: !1,
		get: function () {
			if (!(!m || this instanceof ds || this instanceof zi)) return wl(m, this.objId, this.scope);
		},
		set: function (_) {
			(_ = _.toString()), (m = _);
		}
	});
	var y = null;
	Object.defineProperty(this, 'DV', {
		enumerable: !1,
		configurable: !1,
		get: function () {
			if (y) return this instanceof kr ? y : wl(y, this.objId, this.scope);
		},
		set: function (_) {
			(_ = _.toString()),
				(y =
					this instanceof kr ? _ : _.substr(0, 1) === '(' ? da(_.substr(1, _.length - 2)) : da(_));
		}
	}),
		Object.defineProperty(this, 'defaultValue', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return this instanceof kr ? da(y.substr(1, y.length - 1)) : y;
			},
			set: function (_) {
				(_ = _.toString()), (y = this instanceof kr ? '/' + _ : _);
			}
		});
	var d = null;
	Object.defineProperty(this, '_V', {
		enumerable: !1,
		configurable: !1,
		get: function () {
			if (d) return d;
		},
		set: function (_) {
			this.V = _;
		}
	}),
		Object.defineProperty(this, 'V', {
			enumerable: !1,
			configurable: !1,
			get: function () {
				if (d) return this instanceof kr ? d : wl(d, this.objId, this.scope);
			},
			set: function (_) {
				(_ = _.toString()),
					(d =
						this instanceof kr
							? _
							: _.substr(0, 1) === '('
								? da(_.substr(1, _.length - 2))
								: da(_));
			}
		}),
		Object.defineProperty(this, 'value', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return this instanceof kr ? da(d.substr(1, d.length - 1)) : d;
			},
			set: function (_) {
				(_ = _.toString()), (d = this instanceof kr ? '/' + _ : _);
			}
		}),
		Object.defineProperty(this, 'hasAnnotation', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return this.Rect;
			}
		}),
		Object.defineProperty(this, 'Type', {
			enumerable: !0,
			configurable: !1,
			get: function () {
				return this.hasAnnotation ? '/Annot' : null;
			}
		}),
		Object.defineProperty(this, 'Subtype', {
			enumerable: !0,
			configurable: !1,
			get: function () {
				return this.hasAnnotation ? '/Widget' : null;
			}
		});
	var E,
		N = !1;
	Object.defineProperty(this, 'hasAppearanceStream', {
		enumerable: !0,
		configurable: !0,
		get: function () {
			return N;
		},
		set: function (_) {
			(_ = !!_), (N = _);
		}
	}),
		Object.defineProperty(this, 'page', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				if (E) return E;
			},
			set: function (_) {
				E = _;
			}
		}),
		Object.defineProperty(this, 'readOnly', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 1);
			},
			set: function (_) {
				_ ? (this.Ff = lr(this.Ff, 1)) : (this.Ff = cr(this.Ff, 1));
			}
		}),
		Object.defineProperty(this, 'required', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 2);
			},
			set: function (_) {
				_ ? (this.Ff = lr(this.Ff, 2)) : (this.Ff = cr(this.Ff, 2));
			}
		}),
		Object.defineProperty(this, 'noExport', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 3);
			},
			set: function (_) {
				_ ? (this.Ff = lr(this.Ff, 3)) : (this.Ff = cr(this.Ff, 3));
			}
		});
	var P = null;
	Object.defineProperty(this, 'Q', {
		enumerable: !0,
		configurable: !1,
		get: function () {
			if (P !== null) return P;
		},
		set: function (_) {
			if ([0, 1, 2].indexOf(_) === -1)
				throw new Error('Invalid value "' + _ + '" for attribute Q supplied.');
			P = _;
		}
	}),
		Object.defineProperty(this, 'textAlign', {
			get: function () {
				var _;
				switch (P) {
					case 0:
					default:
						_ = 'left';
						break;
					case 1:
						_ = 'center';
						break;
					case 2:
						_ = 'right';
				}
				return _;
			},
			configurable: !0,
			enumerable: !0,
			set: function (_) {
				switch (_) {
					case 'right':
					case 2:
						P = 2;
						break;
					case 'center':
					case 1:
						P = 1;
						break;
					case 'left':
					case 0:
					default:
						P = 0;
				}
			}
		});
};
tn(Mn, Un);
var xa = function () {
	Mn.call(this), (this.FT = '/Ch'), (this.V = '()'), (this.fontName = 'zapfdingbats');
	var n = 0;
	Object.defineProperty(this, 'TI', {
		enumerable: !0,
		configurable: !1,
		get: function () {
			return n;
		},
		set: function (r) {
			n = r;
		}
	}),
		Object.defineProperty(this, 'topIndex', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return n;
			},
			set: function (r) {
				n = r;
			}
		});
	var e = [];
	Object.defineProperty(this, 'Opt', {
		enumerable: !0,
		configurable: !1,
		get: function () {
			return gu(e, this.objId, this.scope);
		},
		set: function (r) {
			var i, s;
			(s = []),
				typeof (i = r) == 'string' &&
					(s = (function (a, l, u) {
						u || (u = 1);
						for (var h, p = []; (h = l.exec(a)); ) p.push(h[u]);
						return p;
					})(i, /\((.*?)\)/g)),
				(e = s);
		}
	}),
		(this.getOptions = function () {
			return e;
		}),
		(this.setOptions = function (r) {
			(e = r), this.sort && e.sort();
		}),
		(this.addOption = function (r) {
			(r = (r = r || '').toString()), e.push(r), this.sort && e.sort();
		}),
		(this.removeOption = function (r, i) {
			for (
				i = i || !1, r = (r = r || '').toString();
				e.indexOf(r) !== -1 && (e.splice(e.indexOf(r), 1), i !== !1);

			);
		}),
		Object.defineProperty(this, 'combo', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 18);
			},
			set: function (r) {
				r ? (this.Ff = lr(this.Ff, 18)) : (this.Ff = cr(this.Ff, 18));
			}
		}),
		Object.defineProperty(this, 'edit', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 19);
			},
			set: function (r) {
				this.combo === !0 && (r ? (this.Ff = lr(this.Ff, 19)) : (this.Ff = cr(this.Ff, 19)));
			}
		}),
		Object.defineProperty(this, 'sort', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 20);
			},
			set: function (r) {
				r ? ((this.Ff = lr(this.Ff, 20)), e.sort()) : (this.Ff = cr(this.Ff, 20));
			}
		}),
		Object.defineProperty(this, 'multiSelect', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 22);
			},
			set: function (r) {
				r ? (this.Ff = lr(this.Ff, 22)) : (this.Ff = cr(this.Ff, 22));
			}
		}),
		Object.defineProperty(this, 'doNotSpellCheck', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 23);
			},
			set: function (r) {
				r ? (this.Ff = lr(this.Ff, 23)) : (this.Ff = cr(this.Ff, 23));
			}
		}),
		Object.defineProperty(this, 'commitOnSelChange', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 27);
			},
			set: function (r) {
				r ? (this.Ff = lr(this.Ff, 27)) : (this.Ff = cr(this.Ff, 27));
			}
		}),
		(this.hasAppearanceStream = !1);
};
tn(xa, Mn);
var _a = function () {
	xa.call(this), (this.fontName = 'helvetica'), (this.combo = !1);
};
tn(_a, xa);
var La = function () {
	_a.call(this), (this.combo = !0);
};
tn(La, _a);
var ss = function () {
	La.call(this), (this.edit = !0);
};
tn(ss, La);
var kr = function () {
	Mn.call(this),
		(this.FT = '/Btn'),
		Object.defineProperty(this, 'noToggleToOff', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 15);
			},
			set: function (r) {
				r ? (this.Ff = lr(this.Ff, 15)) : (this.Ff = cr(this.Ff, 15));
			}
		}),
		Object.defineProperty(this, 'radio', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 16);
			},
			set: function (r) {
				r ? (this.Ff = lr(this.Ff, 16)) : (this.Ff = cr(this.Ff, 16));
			}
		}),
		Object.defineProperty(this, 'pushButton', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 17);
			},
			set: function (r) {
				r ? (this.Ff = lr(this.Ff, 17)) : (this.Ff = cr(this.Ff, 17));
			}
		}),
		Object.defineProperty(this, 'radioIsUnison', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 26);
			},
			set: function (r) {
				r ? (this.Ff = lr(this.Ff, 26)) : (this.Ff = cr(this.Ff, 26));
			}
		});
	var n,
		e = {};
	Object.defineProperty(this, 'MK', {
		enumerable: !1,
		configurable: !1,
		get: function () {
			var r = function (a) {
				return a;
			};
			if (
				(this.scope && (r = this.scope.internal.getEncryptor(this.objId)),
				Object.keys(e).length !== 0)
			) {
				var i,
					s = [];
				for (i in (s.push('<<'), e)) s.push('/' + i + ' (' + Ui(r(e[i])) + ')');
				return (
					s.push('>>'),
					s.join(`
`)
				);
			}
		},
		set: function (r) {
			Bt(r) === 'object' && (e = r);
		}
	}),
		Object.defineProperty(this, 'caption', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return e.CA || '';
			},
			set: function (r) {
				typeof r == 'string' && (e.CA = r);
			}
		}),
		Object.defineProperty(this, 'AS', {
			enumerable: !1,
			configurable: !1,
			get: function () {
				return n;
			},
			set: function (r) {
				n = r;
			}
		}),
		Object.defineProperty(this, 'appearanceState', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return n.substr(1, n.length - 1);
			},
			set: function (r) {
				n = '/' + r;
			}
		});
};
tn(kr, Mn);
var ls = function () {
	kr.call(this), (this.pushButton = !0);
};
tn(ls, kr);
var Aa = function () {
	kr.call(this), (this.radio = !0), (this.pushButton = !1);
	var n = [];
	Object.defineProperty(this, 'Kids', {
		enumerable: !0,
		configurable: !1,
		get: function () {
			return n;
		},
		set: function (e) {
			n = e !== void 0 ? e : [];
		}
	});
};
tn(Aa, kr);
var ds = function () {
	var n, e;
	Mn.call(this),
		Object.defineProperty(this, 'Parent', {
			enumerable: !1,
			configurable: !1,
			get: function () {
				return n;
			},
			set: function (s) {
				n = s;
			}
		}),
		Object.defineProperty(this, 'optionName', {
			enumerable: !1,
			configurable: !0,
			get: function () {
				return e;
			},
			set: function (s) {
				e = s;
			}
		});
	var r,
		i = {};
	Object.defineProperty(this, 'MK', {
		enumerable: !1,
		configurable: !1,
		get: function () {
			var s = function (u) {
				return u;
			};
			this.scope && (s = this.scope.internal.getEncryptor(this.objId));
			var a,
				l = [];
			for (a in (l.push('<<'), i)) l.push('/' + a + ' (' + Ui(s(i[a])) + ')');
			return (
				l.push('>>'),
				l.join(`
`)
			);
		},
		set: function (s) {
			Bt(s) === 'object' && (i = s);
		}
	}),
		Object.defineProperty(this, 'caption', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return i.CA || '';
			},
			set: function (s) {
				typeof s == 'string' && (i.CA = s);
			}
		}),
		Object.defineProperty(this, 'AS', {
			enumerable: !1,
			configurable: !1,
			get: function () {
				return r;
			},
			set: function (s) {
				r = s;
			}
		}),
		Object.defineProperty(this, 'appearanceState', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return r.substr(1, r.length - 1);
			},
			set: function (s) {
				r = '/' + s;
			}
		}),
		(this.caption = 'l'),
		(this.appearanceState = 'Off'),
		(this._AppearanceType = Ve.RadioButton.Circle),
		(this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName));
};
tn(ds, Mn),
	(Aa.prototype.setAppearance = function (n) {
		if (!('createAppearanceStream' in n) || !('getCA' in n))
			throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
		for (var e in this.Kids)
			if (this.Kids.hasOwnProperty(e)) {
				var r = this.Kids[e];
				(r.appearanceStreamContent = n.createAppearanceStream(r.optionName)),
					(r.caption = n.getCA());
			}
	}),
	(Aa.prototype.createOption = function (n) {
		var e = new ds();
		return (e.Parent = this), (e.optionName = n), this.Kids.push(e), o1.call(this.scope, e), e;
	});
var cs = function () {
	kr.call(this),
		(this.fontName = 'zapfdingbats'),
		(this.caption = '3'),
		(this.appearanceState = 'On'),
		(this.value = 'On'),
		(this.textAlign = 'center'),
		(this.appearanceStreamContent = Ve.CheckBox.createAppearanceStream());
};
tn(cs, kr);
var zi = function () {
	Mn.call(this),
		(this.FT = '/Tx'),
		Object.defineProperty(this, 'multiline', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 13);
			},
			set: function (e) {
				e ? (this.Ff = lr(this.Ff, 13)) : (this.Ff = cr(this.Ff, 13));
			}
		}),
		Object.defineProperty(this, 'fileSelect', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 21);
			},
			set: function (e) {
				e ? (this.Ff = lr(this.Ff, 21)) : (this.Ff = cr(this.Ff, 21));
			}
		}),
		Object.defineProperty(this, 'doNotSpellCheck', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 23);
			},
			set: function (e) {
				e ? (this.Ff = lr(this.Ff, 23)) : (this.Ff = cr(this.Ff, 23));
			}
		}),
		Object.defineProperty(this, 'doNotScroll', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 24);
			},
			set: function (e) {
				e ? (this.Ff = lr(this.Ff, 24)) : (this.Ff = cr(this.Ff, 24));
			}
		}),
		Object.defineProperty(this, 'comb', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 25);
			},
			set: function (e) {
				e ? (this.Ff = lr(this.Ff, 25)) : (this.Ff = cr(this.Ff, 25));
			}
		}),
		Object.defineProperty(this, 'richText', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 26);
			},
			set: function (e) {
				e ? (this.Ff = lr(this.Ff, 26)) : (this.Ff = cr(this.Ff, 26));
			}
		});
	var n = null;
	Object.defineProperty(this, 'MaxLen', {
		enumerable: !0,
		configurable: !1,
		get: function () {
			return n;
		},
		set: function (e) {
			n = e;
		}
	}),
		Object.defineProperty(this, 'maxLength', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return n;
			},
			set: function (e) {
				Number.isInteger(e) && (n = e);
			}
		}),
		Object.defineProperty(this, 'hasAppearanceStream', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return this.V || this.DV;
			}
		});
};
tn(zi, Mn);
var us = function () {
	zi.call(this),
		Object.defineProperty(this, 'password', {
			enumerable: !0,
			configurable: !0,
			get: function () {
				return !!sr(this.Ff, 14);
			},
			set: function (n) {
				n ? (this.Ff = lr(this.Ff, 14)) : (this.Ff = cr(this.Ff, 14));
			}
		}),
		(this.password = !0);
};
tn(us, zi);
var Ve = {
	CheckBox: {
		createAppearanceStream: function () {
			return {
				N: { On: Ve.CheckBox.YesNormal },
				D: { On: Ve.CheckBox.YesPushDown, Off: Ve.CheckBox.OffPushDown }
			};
		},
		YesPushDown: function (n) {
			var e = zn(n);
			e.scope = n.scope;
			var r = [],
				i = n.scope.internal.getFont(n.fontName, n.fontStyle).id,
				s = n.scope.__private__.encodeColorString(n.color),
				a = Tl(n, n.caption);
			return (
				r.push('0.749023 g'),
				r.push('0 0 ' + dt(Ve.internal.getWidth(n)) + ' ' + dt(Ve.internal.getHeight(n)) + ' re'),
				r.push('f'),
				r.push('BMC'),
				r.push('q'),
				r.push('0 0 1 rg'),
				r.push('/' + i + ' ' + dt(a.fontSize) + ' Tf ' + s),
				r.push('BT'),
				r.push(a.text),
				r.push('ET'),
				r.push('Q'),
				r.push('EMC'),
				(e.stream = r.join(`
`)),
				e
			);
		},
		YesNormal: function (n) {
			var e = zn(n);
			e.scope = n.scope;
			var r = n.scope.internal.getFont(n.fontName, n.fontStyle).id,
				i = n.scope.__private__.encodeColorString(n.color),
				s = [],
				a = Ve.internal.getHeight(n),
				l = Ve.internal.getWidth(n),
				u = Tl(n, n.caption);
			return (
				s.push('1 g'),
				s.push('0 0 ' + dt(l) + ' ' + dt(a) + ' re'),
				s.push('f'),
				s.push('q'),
				s.push('0 0 1 rg'),
				s.push('0 0 ' + dt(l - 1) + ' ' + dt(a - 1) + ' re'),
				s.push('W'),
				s.push('n'),
				s.push('0 g'),
				s.push('BT'),
				s.push('/' + r + ' ' + dt(u.fontSize) + ' Tf ' + i),
				s.push(u.text),
				s.push('ET'),
				s.push('Q'),
				(e.stream = s.join(`
`)),
				e
			);
		},
		OffPushDown: function (n) {
			var e = zn(n);
			e.scope = n.scope;
			var r = [];
			return (
				r.push('0.749023 g'),
				r.push('0 0 ' + dt(Ve.internal.getWidth(n)) + ' ' + dt(Ve.internal.getHeight(n)) + ' re'),
				r.push('f'),
				(e.stream = r.join(`
`)),
				e
			);
		}
	},
	RadioButton: {
		Circle: {
			createAppearanceStream: function (n) {
				var e = { D: { Off: Ve.RadioButton.Circle.OffPushDown }, N: {} };
				return (
					(e.N[n] = Ve.RadioButton.Circle.YesNormal),
					(e.D[n] = Ve.RadioButton.Circle.YesPushDown),
					e
				);
			},
			getCA: function () {
				return 'l';
			},
			YesNormal: function (n) {
				var e = zn(n);
				e.scope = n.scope;
				var r = [],
					i =
						Ve.internal.getWidth(n) <= Ve.internal.getHeight(n)
							? Ve.internal.getWidth(n) / 4
							: Ve.internal.getHeight(n) / 4;
				i = Number((0.9 * i).toFixed(5));
				var s = Ve.internal.Bezier_C,
					a = Number((i * s).toFixed(5));
				return (
					r.push('q'),
					r.push(
						'1 0 0 1 ' +
							_i(Ve.internal.getWidth(n) / 2) +
							' ' +
							_i(Ve.internal.getHeight(n) / 2) +
							' cm'
					),
					r.push(i + ' 0 m'),
					r.push(i + ' ' + a + ' ' + a + ' ' + i + ' 0 ' + i + ' c'),
					r.push('-' + a + ' ' + i + ' -' + i + ' ' + a + ' -' + i + ' 0 c'),
					r.push('-' + i + ' -' + a + ' -' + a + ' -' + i + ' 0 -' + i + ' c'),
					r.push(a + ' -' + i + ' ' + i + ' -' + a + ' ' + i + ' 0 c'),
					r.push('f'),
					r.push('Q'),
					(e.stream = r.join(`
`)),
					e
				);
			},
			YesPushDown: function (n) {
				var e = zn(n);
				e.scope = n.scope;
				var r = [],
					i =
						Ve.internal.getWidth(n) <= Ve.internal.getHeight(n)
							? Ve.internal.getWidth(n) / 4
							: Ve.internal.getHeight(n) / 4;
				i = Number((0.9 * i).toFixed(5));
				var s = Number((2 * i).toFixed(5)),
					a = Number((s * Ve.internal.Bezier_C).toFixed(5)),
					l = Number((i * Ve.internal.Bezier_C).toFixed(5));
				return (
					r.push('0.749023 g'),
					r.push('q'),
					r.push(
						'1 0 0 1 ' +
							_i(Ve.internal.getWidth(n) / 2) +
							' ' +
							_i(Ve.internal.getHeight(n) / 2) +
							' cm'
					),
					r.push(s + ' 0 m'),
					r.push(s + ' ' + a + ' ' + a + ' ' + s + ' 0 ' + s + ' c'),
					r.push('-' + a + ' ' + s + ' -' + s + ' ' + a + ' -' + s + ' 0 c'),
					r.push('-' + s + ' -' + a + ' -' + a + ' -' + s + ' 0 -' + s + ' c'),
					r.push(a + ' -' + s + ' ' + s + ' -' + a + ' ' + s + ' 0 c'),
					r.push('f'),
					r.push('Q'),
					r.push('0 g'),
					r.push('q'),
					r.push(
						'1 0 0 1 ' +
							_i(Ve.internal.getWidth(n) / 2) +
							' ' +
							_i(Ve.internal.getHeight(n) / 2) +
							' cm'
					),
					r.push(i + ' 0 m'),
					r.push(i + ' ' + l + ' ' + l + ' ' + i + ' 0 ' + i + ' c'),
					r.push('-' + l + ' ' + i + ' -' + i + ' ' + l + ' -' + i + ' 0 c'),
					r.push('-' + i + ' -' + l + ' -' + l + ' -' + i + ' 0 -' + i + ' c'),
					r.push(l + ' -' + i + ' ' + i + ' -' + l + ' ' + i + ' 0 c'),
					r.push('f'),
					r.push('Q'),
					(e.stream = r.join(`
`)),
					e
				);
			},
			OffPushDown: function (n) {
				var e = zn(n);
				e.scope = n.scope;
				var r = [],
					i =
						Ve.internal.getWidth(n) <= Ve.internal.getHeight(n)
							? Ve.internal.getWidth(n) / 4
							: Ve.internal.getHeight(n) / 4;
				i = Number((0.9 * i).toFixed(5));
				var s = Number((2 * i).toFixed(5)),
					a = Number((s * Ve.internal.Bezier_C).toFixed(5));
				return (
					r.push('0.749023 g'),
					r.push('q'),
					r.push(
						'1 0 0 1 ' +
							_i(Ve.internal.getWidth(n) / 2) +
							' ' +
							_i(Ve.internal.getHeight(n) / 2) +
							' cm'
					),
					r.push(s + ' 0 m'),
					r.push(s + ' ' + a + ' ' + a + ' ' + s + ' 0 ' + s + ' c'),
					r.push('-' + a + ' ' + s + ' -' + s + ' ' + a + ' -' + s + ' 0 c'),
					r.push('-' + s + ' -' + a + ' -' + a + ' -' + s + ' 0 -' + s + ' c'),
					r.push(a + ' -' + s + ' ' + s + ' -' + a + ' ' + s + ' 0 c'),
					r.push('f'),
					r.push('Q'),
					(e.stream = r.join(`
`)),
					e
				);
			}
		},
		Cross: {
			createAppearanceStream: function (n) {
				var e = { D: { Off: Ve.RadioButton.Cross.OffPushDown }, N: {} };
				return (
					(e.N[n] = Ve.RadioButton.Cross.YesNormal), (e.D[n] = Ve.RadioButton.Cross.YesPushDown), e
				);
			},
			getCA: function () {
				return '8';
			},
			YesNormal: function (n) {
				var e = zn(n);
				e.scope = n.scope;
				var r = [],
					i = Ve.internal.calculateCross(n);
				return (
					r.push('q'),
					r.push(
						'1 1 ' +
							dt(Ve.internal.getWidth(n) - 2) +
							' ' +
							dt(Ve.internal.getHeight(n) - 2) +
							' re'
					),
					r.push('W'),
					r.push('n'),
					r.push(dt(i.x1.x) + ' ' + dt(i.x1.y) + ' m'),
					r.push(dt(i.x2.x) + ' ' + dt(i.x2.y) + ' l'),
					r.push(dt(i.x4.x) + ' ' + dt(i.x4.y) + ' m'),
					r.push(dt(i.x3.x) + ' ' + dt(i.x3.y) + ' l'),
					r.push('s'),
					r.push('Q'),
					(e.stream = r.join(`
`)),
					e
				);
			},
			YesPushDown: function (n) {
				var e = zn(n);
				e.scope = n.scope;
				var r = Ve.internal.calculateCross(n),
					i = [];
				return (
					i.push('0.749023 g'),
					i.push('0 0 ' + dt(Ve.internal.getWidth(n)) + ' ' + dt(Ve.internal.getHeight(n)) + ' re'),
					i.push('f'),
					i.push('q'),
					i.push(
						'1 1 ' +
							dt(Ve.internal.getWidth(n) - 2) +
							' ' +
							dt(Ve.internal.getHeight(n) - 2) +
							' re'
					),
					i.push('W'),
					i.push('n'),
					i.push(dt(r.x1.x) + ' ' + dt(r.x1.y) + ' m'),
					i.push(dt(r.x2.x) + ' ' + dt(r.x2.y) + ' l'),
					i.push(dt(r.x4.x) + ' ' + dt(r.x4.y) + ' m'),
					i.push(dt(r.x3.x) + ' ' + dt(r.x3.y) + ' l'),
					i.push('s'),
					i.push('Q'),
					(e.stream = i.join(`
`)),
					e
				);
			},
			OffPushDown: function (n) {
				var e = zn(n);
				e.scope = n.scope;
				var r = [];
				return (
					r.push('0.749023 g'),
					r.push('0 0 ' + dt(Ve.internal.getWidth(n)) + ' ' + dt(Ve.internal.getHeight(n)) + ' re'),
					r.push('f'),
					(e.stream = r.join(`
`)),
					e
				);
			}
		}
	},
	createDefaultAppearanceStream: function (n) {
		var e = n.scope.internal.getFont(n.fontName, n.fontStyle).id,
			r = n.scope.__private__.encodeColorString(n.color);
		return '/' + e + ' ' + n.fontSize + ' Tf ' + r;
	}
};
(Ve.internal = {
	Bezier_C: 0.551915024494,
	calculateCross: function (n) {
		var e = Ve.internal.getWidth(n),
			r = Ve.internal.getHeight(n),
			i = Math.min(e, r);
		return {
			x1: { x: (e - i) / 2, y: (r - i) / 2 + i },
			x2: { x: (e - i) / 2 + i, y: (r - i) / 2 },
			x3: { x: (e - i) / 2, y: (r - i) / 2 },
			x4: { x: (e - i) / 2 + i, y: (r - i) / 2 + i }
		};
	}
}),
	(Ve.internal.getWidth = function (n) {
		var e = 0;
		return Bt(n) === 'object' && (e = Tc(n.Rect[2])), e;
	}),
	(Ve.internal.getHeight = function (n) {
		var e = 0;
		return Bt(n) === 'object' && (e = Tc(n.Rect[3])), e;
	});
var o1 = (rr.addField = function (n) {
	if ((a1(this, n), !(n instanceof Mn)))
		throw new Error('Invalid argument passed to jsPDF.addField.');
	var e;
	return (
		(e = n).scope.internal.acroformPlugin.printedOut &&
			((e.scope.internal.acroformPlugin.printedOut = !1),
			(e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null)),
		e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e),
		(n.page = n.scope.internal.getCurrentPageInfo().pageNumber),
		this
	);
});
(rr.AcroFormChoiceField = xa),
	(rr.AcroFormListBox = _a),
	(rr.AcroFormComboBox = La),
	(rr.AcroFormEditBox = ss),
	(rr.AcroFormButton = kr),
	(rr.AcroFormPushButton = ls),
	(rr.AcroFormRadioButton = Aa),
	(rr.AcroFormCheckBox = cs),
	(rr.AcroFormTextField = zi),
	(rr.AcroFormPasswordField = us),
	(rr.AcroFormAppearance = Ve),
	(rr.AcroForm = {
		ChoiceField: xa,
		ListBox: _a,
		ComboBox: La,
		EditBox: ss,
		Button: kr,
		PushButton: ls,
		RadioButton: Aa,
		CheckBox: cs,
		TextField: zi,
		PasswordField: us,
		Appearance: Ve
	}),
	(ot.AcroForm = {
		ChoiceField: xa,
		ListBox: _a,
		ComboBox: La,
		EditBox: ss,
		Button: kr,
		PushButton: ls,
		RadioButton: Aa,
		CheckBox: cs,
		TextField: zi,
		PasswordField: us,
		Appearance: Ve
	});
ot.AcroForm;
function bu(n) {
	return n.reduce(function (e, r, i) {
		return (e[r] = i), e;
	}, {});
}
(function (n) {
	n.__addimage__ = {};
	var e = 'UNKNOWN',
		r = {
			PNG: [[137, 80, 78, 71]],
			TIFF: [
				[77, 77, 0, 42],
				[73, 73, 42, 0]
			],
			JPEG: [
				[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
				[255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0],
				[255, 216, 255, 219],
				[255, 216, 255, 238]
			],
			JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]],
			GIF87a: [[71, 73, 70, 56, 55, 97]],
			GIF89a: [[71, 73, 70, 56, 57, 97]],
			WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]],
			BMP: [
				[66, 77],
				[66, 65],
				[67, 73],
				[67, 80],
				[73, 67],
				[80, 84]
			]
		},
		i = (n.__addimage__.getImageFileTypeByImageData = function (C, L) {
			var q,
				B,
				Z,
				Q,
				ie,
				K = e;
			if (
				(L = L || e) === 'RGBA' ||
				(C.data !== void 0 && C.data instanceof Uint8ClampedArray && 'height' in C && 'width' in C)
			)
				return 'RGBA';
			if (oe(C))
				for (ie in r)
					for (Z = r[ie], q = 0; q < Z.length; q += 1) {
						for (Q = !0, B = 0; B < Z[q].length; B += 1)
							if (Z[q][B] !== void 0 && Z[q][B] !== C[B]) {
								Q = !1;
								break;
							}
						if (Q === !0) {
							K = ie;
							break;
						}
					}
			else
				for (ie in r)
					for (Z = r[ie], q = 0; q < Z.length; q += 1) {
						for (Q = !0, B = 0; B < Z[q].length; B += 1)
							if (Z[q][B] !== void 0 && Z[q][B] !== C.charCodeAt(B)) {
								Q = !1;
								break;
							}
						if (Q === !0) {
							K = ie;
							break;
						}
					}
			return K === e && L !== e && (K = L), K;
		}),
		s = function C(L) {
			for (
				var q = this.internal.write,
					B = this.internal.putStream,
					Z = (0, this.internal.getFilters)();
				Z.indexOf('FlateEncode') !== -1;

			)
				Z.splice(Z.indexOf('FlateEncode'), 1);
			L.objectId = this.internal.newObject();
			var Q = [];
			if (
				(Q.push({ key: 'Type', value: '/XObject' }),
				Q.push({ key: 'Subtype', value: '/Image' }),
				Q.push({ key: 'Width', value: L.width }),
				Q.push({ key: 'Height', value: L.height }),
				L.colorSpace === P.INDEXED
					? Q.push({
							key: 'ColorSpace',
							value:
								'[/Indexed /DeviceRGB ' +
								(L.palette.length / 3 - 1) +
								' ' +
								('sMask' in L && L.sMask !== void 0 ? L.objectId + 2 : L.objectId + 1) +
								' 0 R]'
						})
					: (Q.push({ key: 'ColorSpace', value: '/' + L.colorSpace }),
						L.colorSpace === P.DEVICE_CMYK &&
							Q.push({ key: 'Decode', value: '[1 0 1 0 1 0 1 0]' })),
				Q.push({ key: 'BitsPerComponent', value: L.bitsPerComponent }),
				'decodeParameters' in L &&
					L.decodeParameters !== void 0 &&
					Q.push({ key: 'DecodeParms', value: '<<' + L.decodeParameters + '>>' }),
				'transparency' in L && Array.isArray(L.transparency))
			) {
				for (var ie = '', K = 0, le = L.transparency.length; K < le; K++)
					ie += L.transparency[K] + ' ' + L.transparency[K] + ' ';
				Q.push({ key: 'Mask', value: '[' + ie + ']' });
			}
			L.sMask !== void 0 && Q.push({ key: 'SMask', value: L.objectId + 1 + ' 0 R' });
			var ue = L.filter !== void 0 ? ['/' + L.filter] : void 0;
			if (
				(B({
					data: L.data,
					additionalKeyValues: Q,
					alreadyAppliedFilters: ue,
					objectId: L.objectId
				}),
				q('endobj'),
				'sMask' in L && L.sMask !== void 0)
			) {
				var Se =
						'/Predictor ' +
						L.predictor +
						' /Colors 1 /BitsPerComponent ' +
						L.bitsPerComponent +
						' /Columns ' +
						L.width,
					b = {
						width: L.width,
						height: L.height,
						colorSpace: 'DeviceGray',
						bitsPerComponent: L.bitsPerComponent,
						decodeParameters: Se,
						data: L.sMask
					};
				'filter' in L && (b.filter = L.filter), C.call(this, b);
			}
			if (L.colorSpace === P.INDEXED) {
				var T = this.internal.newObject();
				B({ data: z(new Uint8Array(L.palette)), objectId: T }), q('endobj');
			}
		},
		a = function () {
			var C = this.internal.collections.addImage_images;
			for (var L in C) s.call(this, C[L]);
		},
		l = function () {
			var C,
				L = this.internal.collections.addImage_images,
				q = this.internal.write;
			for (var B in L) q('/I' + (C = L[B]).index, C.objectId, '0', 'R');
		},
		u = function () {
			this.internal.collections.addImage_images ||
				((this.internal.collections.addImage_images = {}),
				this.internal.events.subscribe('putResources', a),
				this.internal.events.subscribe('putXobjectDict', l));
		},
		h = function () {
			var C = this.internal.collections.addImage_images;
			return u.call(this), C;
		},
		p = function () {
			return Object.keys(this.internal.collections.addImage_images).length;
		},
		v = function (C) {
			return typeof n['process' + C.toUpperCase()] == 'function';
		},
		m = function (C) {
			return Bt(C) === 'object' && C.nodeType === 1;
		},
		y = function (C, L) {
			if (C.nodeName === 'IMG' && C.hasAttribute('src')) {
				var q = '' + C.getAttribute('src');
				if (q.indexOf('data:image/') === 0) return oo(unescape(q).split('base64,').pop());
				var B = n.loadFile(q, !0);
				if (B !== void 0) return B;
			}
			if (C.nodeName === 'CANVAS') {
				if (C.width === 0 || C.height === 0)
					throw new Error(
						'Given canvas must have data. Canvas width: ' + C.width + ', height: ' + C.height
					);
				var Z;
				switch (L) {
					case 'PNG':
						Z = 'image/png';
						break;
					case 'WEBP':
						Z = 'image/webp';
						break;
					case 'JPEG':
					case 'JPG':
					default:
						Z = 'image/jpeg';
				}
				return oo(C.toDataURL(Z, 1).split('base64,').pop());
			}
		},
		d = function (C) {
			var L = this.internal.collections.addImage_images;
			if (L) {
				for (var q in L) if (C === L[q].alias) return L[q];
			}
		},
		E = function (C, L, q) {
			return (
				C || L || ((C = -96), (L = -96)),
				C < 0 && (C = (-1 * q.width * 72) / C / this.internal.scaleFactor),
				L < 0 && (L = (-1 * q.height * 72) / L / this.internal.scaleFactor),
				C === 0 && (C = (L * q.width) / q.height),
				L === 0 && (L = (C * q.height) / q.width),
				[C, L]
			);
		},
		N = function (C, L, q, B, Z, Q) {
			var ie = E.call(this, q, B, Z),
				K = this.internal.getCoordinateString,
				le = this.internal.getVerticalCoordinateString,
				ue = h.call(this);
			if (((q = ie[0]), (B = ie[1]), (ue[Z.index] = Z), Q)) {
				Q *= Math.PI / 180;
				var Se = Math.cos(Q),
					b = Math.sin(Q),
					T = function (H) {
						return H.toFixed(4);
					},
					M = [T(Se), T(b), T(-1 * b), T(Se), 0, 0, 'cm'];
			}
			this.internal.write('q'),
				Q
					? (this.internal.write([1, '0', '0', 1, K(C), le(L + B), 'cm'].join(' ')),
						this.internal.write(M.join(' ')),
						this.internal.write([K(q), '0', '0', K(B), '0', '0', 'cm'].join(' ')))
					: this.internal.write([K(q), '0', '0', K(B), K(C), le(L + B), 'cm'].join(' ')),
				this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, 'cm'].join(' ')),
				this.internal.write('/I' + Z.index + ' Do'),
				this.internal.write('Q');
		},
		P = (n.color_spaces = {
			DEVICE_RGB: 'DeviceRGB',
			DEVICE_GRAY: 'DeviceGray',
			DEVICE_CMYK: 'DeviceCMYK',
			CAL_GREY: 'CalGray',
			CAL_RGB: 'CalRGB',
			LAB: 'Lab',
			ICC_BASED: 'ICCBased',
			INDEXED: 'Indexed',
			PATTERN: 'Pattern',
			SEPARATION: 'Separation',
			DEVICE_N: 'DeviceN'
		});
	n.decode = {
		DCT_DECODE: 'DCTDecode',
		FLATE_DECODE: 'FlateDecode',
		LZW_DECODE: 'LZWDecode',
		JPX_DECODE: 'JPXDecode',
		JBIG2_DECODE: 'JBIG2Decode',
		ASCII85_DECODE: 'ASCII85Decode',
		ASCII_HEX_DECODE: 'ASCIIHexDecode',
		RUN_LENGTH_DECODE: 'RunLengthDecode',
		CCITT_FAX_DECODE: 'CCITTFaxDecode'
	};
	var _ = (n.image_compression = { NONE: 'NONE', FAST: 'FAST', MEDIUM: 'MEDIUM', SLOW: 'SLOW' }),
		j = (n.__addimage__.sHashCode = function (C) {
			var L,
				q,
				B = 0;
			if (typeof C == 'string')
				for (q = C.length, L = 0; L < q; L++) (B = (B << 5) - B + C.charCodeAt(L)), (B |= 0);
			else if (oe(C))
				for (q = C.byteLength / 2, L = 0; L < q; L++) (B = (B << 5) - B + C[L]), (B |= 0);
			return B;
		}),
		O = (n.__addimage__.validateStringAsBase64 = function (C) {
			(C = C || '').toString().trim();
			var L = !0;
			return (
				C.length === 0 && (L = !1),
				C.length % 4 != 0 && (L = !1),
				/^[A-Za-z0-9+/]+$/.test(C.substr(0, C.length - 2)) === !1 && (L = !1),
				/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(C.substr(-2)) === !1 && (L = !1),
				L
			);
		}),
		G = (n.__addimage__.extractImageFromDataUrl = function (C) {
			if (C == null || !(C = C.trim()).startsWith('data:')) return null;
			var L = C.indexOf(',');
			return L < 0 ? null : C.substring(0, L).trim().endsWith('base64') ? C.substring(L + 1) : null;
		}),
		W = (n.__addimage__.supportsArrayBuffer = function () {
			return typeof ArrayBuffer < 'u' && typeof Uint8Array < 'u';
		});
	n.__addimage__.isArrayBuffer = function (C) {
		return W() && C instanceof ArrayBuffer;
	};
	var oe = (n.__addimage__.isArrayBufferView = function (C) {
			return (
				W() &&
				typeof Uint32Array < 'u' &&
				(C instanceof Int8Array ||
					C instanceof Uint8Array ||
					(typeof Uint8ClampedArray < 'u' && C instanceof Uint8ClampedArray) ||
					C instanceof Int16Array ||
					C instanceof Uint16Array ||
					C instanceof Int32Array ||
					C instanceof Uint32Array ||
					C instanceof Float32Array ||
					C instanceof Float64Array)
			);
		}),
		ee = (n.__addimage__.binaryStringToUint8Array = function (C) {
			for (var L = C.length, q = new Uint8Array(L), B = 0; B < L; B++) q[B] = C.charCodeAt(B);
			return q;
		}),
		z = (n.__addimage__.arrayBufferToBinaryString = function (C) {
			for (var L = '', q = oe(C) ? C : new Uint8Array(C), B = 0; B < q.length; B += 8192)
				L += String.fromCharCode.apply(null, q.subarray(B, B + 8192));
			return L;
		});
	n.addImage = function () {
		var C, L, q, B, Z, Q, ie, K, le;
		if (
			(typeof arguments[1] == 'number'
				? ((L = e),
					(q = arguments[1]),
					(B = arguments[2]),
					(Z = arguments[3]),
					(Q = arguments[4]),
					(ie = arguments[5]),
					(K = arguments[6]),
					(le = arguments[7]))
				: ((L = arguments[1]),
					(q = arguments[2]),
					(B = arguments[3]),
					(Z = arguments[4]),
					(Q = arguments[5]),
					(ie = arguments[6]),
					(K = arguments[7]),
					(le = arguments[8])),
			Bt((C = arguments[0])) === 'object' && !m(C) && 'imageData' in C)
		) {
			var ue = C;
			(C = ue.imageData),
				(L = ue.format || L || e),
				(q = ue.x || q || 0),
				(B = ue.y || B || 0),
				(Z = ue.w || ue.width || Z),
				(Q = ue.h || ue.height || Q),
				(ie = ue.alias || ie),
				(K = ue.compression || K),
				(le = ue.rotation || ue.angle || le);
		}
		var Se = this.internal.getFilters();
		if ((K === void 0 && Se.indexOf('FlateEncode') !== -1 && (K = 'SLOW'), isNaN(q) || isNaN(B)))
			throw new Error('Invalid coordinates passed to jsPDF.addImage');
		u.call(this);
		var b = re.call(this, C, L, ie, K);
		return N.call(this, q, B, Z, Q, b, le), this;
	};
	var re = function (C, L, q, B) {
			var Z, Q, ie;
			if (typeof C == 'string' && i(C) === e) {
				C = unescape(C);
				var K = de(C, !1);
				(K !== '' || (K = n.loadFile(C, !0)) !== void 0) && (C = K);
			}
			if ((m(C) && (C = y(C, L)), (L = i(C, L)), !v(L)))
				throw new Error(
					"addImage does not support files of type '" +
						L +
						"', please ensure that a plugin for '" +
						L +
						"' support is added."
				);
			if (
				(((ie = q) == null || ie.length === 0) &&
					(q = (function (le) {
						return typeof le == 'string' || oe(le) ? j(le) : oe(le.data) ? j(le.data) : null;
					})(C)),
				(Z = d.call(this, q)) ||
					(W() && (C instanceof Uint8Array || L === 'RGBA' || ((Q = C), (C = ee(C)))),
					(Z = this['process' + L.toUpperCase()](
						C,
						p.call(this),
						q,
						(function (le) {
							return (
								le && typeof le == 'string' && (le = le.toUpperCase()),
								le in n.image_compression ? le : _.NONE
							);
						})(B),
						Q
					))),
				!Z)
			)
				throw new Error('An unknown error occurred whilst processing the image.');
			return Z;
		},
		de = (n.__addimage__.convertBase64ToBinaryString = function (C, L) {
			L = typeof L != 'boolean' || L;
			var q,
				B = '';
			if (typeof C == 'string') {
				var Z;
				q = (Z = G(C)) !== null && Z !== void 0 ? Z : C;
				try {
					B = oo(q);
				} catch (Q) {
					if (L)
						throw O(q)
							? new Error('atob-Error in jsPDF.convertBase64ToBinaryString ' + Q.message)
							: new Error(
									'Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString '
								);
				}
			}
			return B;
		});
	n.getImageProperties = function (C) {
		var L,
			q,
			B = '';
		if (
			(m(C) && (C = y(C)),
			typeof C == 'string' &&
				i(C) === e &&
				((B = de(C, !1)) === '' && (B = n.loadFile(C) || ''), (C = B)),
			(q = i(C)),
			!v(q))
		)
			throw new Error(
				"addImage does not support files of type '" +
					q +
					"', please ensure that a plugin for '" +
					q +
					"' support is added."
			);
		if (
			(!W() || C instanceof Uint8Array || (C = ee(C)), !(L = this['process' + q.toUpperCase()](C)))
		)
			throw new Error('An unknown error occurred whilst processing the image');
		return (L.fileType = q), L;
	};
})(ot.API),
	(function (n) {
		var e = function (r) {
			if (r !== void 0 && r != '') return !0;
		};
		ot.API.events.push([
			'addPage',
			function (r) {
				this.internal.getPageInfo(r.pageNumber).pageContext.annotations = [];
			}
		]),
			n.events.push([
				'putPage',
				function (r) {
					for (
						var i,
							s,
							a,
							l = this.internal.getCoordinateString,
							u = this.internal.getVerticalCoordinateString,
							h = this.internal.getPageInfoByObjId(r.objId),
							p = r.pageContext.annotations,
							v = !1,
							m = 0;
						m < p.length && !v;
						m++
					)
						switch ((i = p[m]).type) {
							case 'link':
								(e(i.options.url) || e(i.options.pageNumber)) && (v = !0);
								break;
							case 'reference':
							case 'text':
							case 'freetext':
								v = !0;
						}
					if (v != 0) {
						this.internal.write('/Annots [');
						for (var y = 0; y < p.length; y++) {
							i = p[y];
							var d = this.internal.pdfEscape,
								E = this.internal.getEncryptor(r.objId);
							switch (i.type) {
								case 'reference':
									this.internal.write(' ' + i.object.objId + ' 0 R ');
									break;
								case 'text':
									var N = this.internal.newAdditionalObject(),
										P = this.internal.newAdditionalObject(),
										_ = this.internal.getEncryptor(N.objId),
										j = i.title || 'Note';
									(a =
										'<</Type /Annot /Subtype /Text ' +
										(s =
											'/Rect [' +
											l(i.bounds.x) +
											' ' +
											u(i.bounds.y + i.bounds.h) +
											' ' +
											l(i.bounds.x + i.bounds.w) +
											' ' +
											u(i.bounds.y) +
											'] ') +
										'/Contents (' +
										d(_(i.contents)) +
										')'),
										(a += ' /Popup ' + P.objId + ' 0 R'),
										(a += ' /P ' + h.objId + ' 0 R'),
										(a += ' /T (' + d(_(j)) + ') >>'),
										(N.content = a);
									var O = N.objId + ' 0 R';
									(a =
										'<</Type /Annot /Subtype /Popup ' +
										(s =
											'/Rect [' +
											l(i.bounds.x + 30) +
											' ' +
											u(i.bounds.y + i.bounds.h) +
											' ' +
											l(i.bounds.x + i.bounds.w + 30) +
											' ' +
											u(i.bounds.y) +
											'] ') +
										' /Parent ' +
										O),
										i.open && (a += ' /Open true'),
										(a += ' >>'),
										(P.content = a),
										this.internal.write(N.objId, '0 R', P.objId, '0 R');
									break;
								case 'freetext':
									s =
										'/Rect [' +
										l(i.bounds.x) +
										' ' +
										u(i.bounds.y) +
										' ' +
										l(i.bounds.x + i.bounds.w) +
										' ' +
										u(i.bounds.y + i.bounds.h) +
										'] ';
									var G = i.color || '#000000';
									(a =
										'<</Type /Annot /Subtype /FreeText ' +
										s +
										'/Contents (' +
										d(E(i.contents)) +
										')'),
										(a +=
											' /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#' + G + ')'),
										(a += ' /Border [0 0 0]'),
										(a += ' >>'),
										this.internal.write(a);
									break;
								case 'link':
									if (i.options.name) {
										var W = this.annotations._nameMap[i.options.name];
										(i.options.pageNumber = W.page), (i.options.top = W.y);
									} else i.options.top || (i.options.top = 0);
									if (
										((s =
											'/Rect [' +
											i.finalBounds.x +
											' ' +
											i.finalBounds.y +
											' ' +
											i.finalBounds.w +
											' ' +
											i.finalBounds.h +
											'] '),
										(a = ''),
										i.options.url)
									)
										a =
											'<</Type /Annot /Subtype /Link ' +
											s +
											'/Border [0 0 0] /A <</S /URI /URI (' +
											d(E(i.options.url)) +
											') >>';
									else if (i.options.pageNumber)
										switch (
											((a =
												'<</Type /Annot /Subtype /Link ' +
												s +
												'/Border [0 0 0] /Dest [' +
												this.internal.getPageInfo(i.options.pageNumber).objId +
												' 0 R'),
											(i.options.magFactor = i.options.magFactor || 'XYZ'),
											i.options.magFactor)
										) {
											case 'Fit':
												a += ' /Fit]';
												break;
											case 'FitH':
												a += ' /FitH ' + i.options.top + ']';
												break;
											case 'FitV':
												(i.options.left = i.options.left || 0),
													(a += ' /FitV ' + i.options.left + ']');
												break;
											case 'XYZ':
											default:
												var oe = u(i.options.top);
												(i.options.left = i.options.left || 0),
													i.options.zoom === void 0 && (i.options.zoom = 0),
													(a += ' /XYZ ' + i.options.left + ' ' + oe + ' ' + i.options.zoom + ']');
										}
									a != '' && ((a += ' >>'), this.internal.write(a));
							}
						}
						this.internal.write(']');
					}
				}
			]),
			(n.createAnnotation = function (r) {
				var i = this.internal.getCurrentPageInfo();
				switch (r.type) {
					case 'link':
						this.link(r.bounds.x, r.bounds.y, r.bounds.w, r.bounds.h, r);
						break;
					case 'text':
					case 'freetext':
						i.pageContext.annotations.push(r);
				}
			}),
			(n.link = function (r, i, s, a, l) {
				var u = this.internal.getCurrentPageInfo(),
					h = this.internal.getCoordinateString,
					p = this.internal.getVerticalCoordinateString;
				u.pageContext.annotations.push({
					finalBounds: { x: h(r), y: p(i), w: h(r + s), h: p(i + a) },
					options: l,
					type: 'link'
				});
			}),
			(n.textWithLink = function (r, i, s, a) {
				var l,
					u,
					h = this.getTextWidth(r),
					p = this.internal.getLineHeight() / this.internal.scaleFactor;
				if (a.maxWidth !== void 0) {
					u = a.maxWidth;
					var v = this.splitTextToSize(r, u).length;
					l = Math.ceil(p * v);
				} else (u = h), (l = p);
				return (
					this.text(r, i, s, a),
					(s += 0.2 * p),
					a.align === 'center' && (i -= h / 2),
					a.align === 'right' && (i -= h),
					this.link(i, s - p, u, l, a),
					h
				);
			}),
			(n.getTextWidth = function (r) {
				var i = this.internal.getFontSize();
				return (this.getStringUnitWidth(r) * i) / this.internal.scaleFactor;
			});
	})(ot.API),
	(function (n) {
		var e = {
				1569: [65152],
				1570: [65153, 65154],
				1571: [65155, 65156],
				1572: [65157, 65158],
				1573: [65159, 65160],
				1574: [65161, 65162, 65163, 65164],
				1575: [65165, 65166],
				1576: [65167, 65168, 65169, 65170],
				1577: [65171, 65172],
				1578: [65173, 65174, 65175, 65176],
				1579: [65177, 65178, 65179, 65180],
				1580: [65181, 65182, 65183, 65184],
				1581: [65185, 65186, 65187, 65188],
				1582: [65189, 65190, 65191, 65192],
				1583: [65193, 65194],
				1584: [65195, 65196],
				1585: [65197, 65198],
				1586: [65199, 65200],
				1587: [65201, 65202, 65203, 65204],
				1588: [65205, 65206, 65207, 65208],
				1589: [65209, 65210, 65211, 65212],
				1590: [65213, 65214, 65215, 65216],
				1591: [65217, 65218, 65219, 65220],
				1592: [65221, 65222, 65223, 65224],
				1593: [65225, 65226, 65227, 65228],
				1594: [65229, 65230, 65231, 65232],
				1601: [65233, 65234, 65235, 65236],
				1602: [65237, 65238, 65239, 65240],
				1603: [65241, 65242, 65243, 65244],
				1604: [65245, 65246, 65247, 65248],
				1605: [65249, 65250, 65251, 65252],
				1606: [65253, 65254, 65255, 65256],
				1607: [65257, 65258, 65259, 65260],
				1608: [65261, 65262],
				1609: [65263, 65264, 64488, 64489],
				1610: [65265, 65266, 65267, 65268],
				1649: [64336, 64337],
				1655: [64477],
				1657: [64358, 64359, 64360, 64361],
				1658: [64350, 64351, 64352, 64353],
				1659: [64338, 64339, 64340, 64341],
				1662: [64342, 64343, 64344, 64345],
				1663: [64354, 64355, 64356, 64357],
				1664: [64346, 64347, 64348, 64349],
				1667: [64374, 64375, 64376, 64377],
				1668: [64370, 64371, 64372, 64373],
				1670: [64378, 64379, 64380, 64381],
				1671: [64382, 64383, 64384, 64385],
				1672: [64392, 64393],
				1676: [64388, 64389],
				1677: [64386, 64387],
				1678: [64390, 64391],
				1681: [64396, 64397],
				1688: [64394, 64395],
				1700: [64362, 64363, 64364, 64365],
				1702: [64366, 64367, 64368, 64369],
				1705: [64398, 64399, 64400, 64401],
				1709: [64467, 64468, 64469, 64470],
				1711: [64402, 64403, 64404, 64405],
				1713: [64410, 64411, 64412, 64413],
				1715: [64406, 64407, 64408, 64409],
				1722: [64414, 64415],
				1723: [64416, 64417, 64418, 64419],
				1726: [64426, 64427, 64428, 64429],
				1728: [64420, 64421],
				1729: [64422, 64423, 64424, 64425],
				1733: [64480, 64481],
				1734: [64473, 64474],
				1735: [64471, 64472],
				1736: [64475, 64476],
				1737: [64482, 64483],
				1739: [64478, 64479],
				1740: [64508, 64509, 64510, 64511],
				1744: [64484, 64485, 64486, 64487],
				1746: [64430, 64431],
				1747: [64432, 64433]
			},
			r = {
				65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 },
				65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 },
				65165: { 65247: { 65248: { 65258: 65010 } } },
				1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }
			},
			i = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 },
			s = [1570, 1571, 1573, 1575];
		n.__arabicParser__ = {};
		var a = (n.__arabicParser__.isInArabicSubstitutionA = function (N) {
				return e[N.charCodeAt(0)] !== void 0;
			}),
			l = (n.__arabicParser__.isArabicLetter = function (N) {
				return (
					typeof N == 'string' &&
					/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(N)
				);
			}),
			u = (n.__arabicParser__.isArabicEndLetter = function (N) {
				return l(N) && a(N) && e[N.charCodeAt(0)].length <= 2;
			}),
			h = (n.__arabicParser__.isArabicAlfLetter = function (N) {
				return l(N) && s.indexOf(N.charCodeAt(0)) >= 0;
			});
		n.__arabicParser__.arabicLetterHasIsolatedForm = function (N) {
			return l(N) && a(N) && e[N.charCodeAt(0)].length >= 1;
		};
		var p = (n.__arabicParser__.arabicLetterHasFinalForm = function (N) {
			return l(N) && a(N) && e[N.charCodeAt(0)].length >= 2;
		});
		n.__arabicParser__.arabicLetterHasInitialForm = function (N) {
			return l(N) && a(N) && e[N.charCodeAt(0)].length >= 3;
		};
		var v = (n.__arabicParser__.arabicLetterHasMedialForm = function (N) {
				return l(N) && a(N) && e[N.charCodeAt(0)].length == 4;
			}),
			m = (n.__arabicParser__.resolveLigatures = function (N) {
				var P = 0,
					_ = r,
					j = '',
					O = 0;
				for (P = 0; P < N.length; P += 1)
					_[N.charCodeAt(P)] !== void 0
						? (O++,
							typeof (_ = _[N.charCodeAt(P)]) == 'number' &&
								((j += String.fromCharCode(_)), (_ = r), (O = 0)),
							P === N.length - 1 && ((_ = r), (j += N.charAt(P - (O - 1))), (P -= O - 1), (O = 0)))
						: ((_ = r), (j += N.charAt(P - O)), (P -= O), (O = 0));
				return j;
			});
		n.__arabicParser__.isArabicDiacritic = function (N) {
			return N !== void 0 && i[N.charCodeAt(0)] !== void 0;
		};
		var y = (n.__arabicParser__.getCorrectForm = function (N, P, _) {
				return l(N)
					? a(N) === !1
						? -1
						: !p(N) ||
							  (!l(P) && !l(_)) ||
							  (!l(_) && u(P)) ||
							  (u(N) && !l(P)) ||
							  (u(N) && h(P)) ||
							  (u(N) && u(P))
							? 0
							: v(N) && l(P) && !u(P) && l(_) && p(_)
								? 3
								: u(N) || !l(_)
									? 1
									: 2
					: -1;
			}),
			d = function (N) {
				var P = 0,
					_ = 0,
					j = 0,
					O = '',
					G = '',
					W = '',
					oe = (N = N || '').split('\\s+'),
					ee = [];
				for (P = 0; P < oe.length; P += 1) {
					for (ee.push(''), _ = 0; _ < oe[P].length; _ += 1)
						(O = oe[P][_]),
							(G = oe[P][_ - 1]),
							(W = oe[P][_ + 1]),
							l(O)
								? ((j = y(O, G, W)),
									(ee[P] += j !== -1 ? String.fromCharCode(e[O.charCodeAt(0)][j]) : O))
								: (ee[P] += O);
					ee[P] = m(ee[P]);
				}
				return ee.join(' ');
			},
			E =
				(n.__arabicParser__.processArabic =
				n.processArabic =
					function () {
						var N,
							P = typeof arguments[0] == 'string' ? arguments[0] : arguments[0].text,
							_ = [];
						if (Array.isArray(P)) {
							var j = 0;
							for (_ = [], j = 0; j < P.length; j += 1)
								Array.isArray(P[j]) ? _.push([d(P[j][0]), P[j][1], P[j][2]]) : _.push([d(P[j])]);
							N = _;
						} else N = d(P);
						return typeof arguments[0] == 'string' ? N : ((arguments[0].text = N), arguments[0]);
					});
		n.events.push(['preProcessText', E]);
	})(ot.API),
	(ot.API.autoPrint = function (n) {
		var e;
		switch ((((n = n || {}).variant = n.variant || 'non-conform'), n.variant)) {
			case 'javascript':
				this.addJS('print({});');
				break;
			case 'non-conform':
			default:
				this.internal.events.subscribe('postPutResources', function () {
					(e = this.internal.newObject()),
						this.internal.out('<<'),
						this.internal.out('/S /Named'),
						this.internal.out('/Type /Action'),
						this.internal.out('/N /Print'),
						this.internal.out('>>'),
						this.internal.out('endobj');
				}),
					this.internal.events.subscribe('putCatalog', function () {
						this.internal.out('/OpenAction ' + e + ' 0 R');
					});
		}
		return this;
	}),
	(function (n) {
		var e = function () {
			var r = void 0;
			Object.defineProperty(this, 'pdf', {
				get: function () {
					return r;
				},
				set: function (u) {
					r = u;
				}
			});
			var i = 150;
			Object.defineProperty(this, 'width', {
				get: function () {
					return i;
				},
				set: function (u) {
					(i = isNaN(u) || Number.isInteger(u) === !1 || u < 0 ? 150 : u),
						this.getContext('2d').pageWrapXEnabled && (this.getContext('2d').pageWrapX = i + 1);
				}
			});
			var s = 300;
			Object.defineProperty(this, 'height', {
				get: function () {
					return s;
				},
				set: function (u) {
					(s = isNaN(u) || Number.isInteger(u) === !1 || u < 0 ? 300 : u),
						this.getContext('2d').pageWrapYEnabled && (this.getContext('2d').pageWrapY = s + 1);
				}
			});
			var a = [];
			Object.defineProperty(this, 'childNodes', {
				get: function () {
					return a;
				},
				set: function (u) {
					a = u;
				}
			});
			var l = {};
			Object.defineProperty(this, 'style', {
				get: function () {
					return l;
				},
				set: function (u) {
					l = u;
				}
			}),
				Object.defineProperty(this, 'parentNode', {});
		};
		(e.prototype.getContext = function (r, i) {
			var s;
			if ((r = r || '2d') !== '2d') return null;
			for (s in i) this.pdf.context2d.hasOwnProperty(s) && (this.pdf.context2d[s] = i[s]);
			return (this.pdf.context2d._canvas = this), this.pdf.context2d;
		}),
			(e.prototype.toDataURL = function () {
				throw new Error('toDataURL is not implemented.');
			}),
			n.events.push([
				'initialized',
				function () {
					(this.canvas = new e()), (this.canvas.pdf = this);
				}
			]);
	})(ot.API),
	(function (n) {
		var e = { left: 0, top: 0, bottom: 0, right: 0 },
			r = !1,
			i = function () {
				this.internal.__cell__ === void 0 &&
					((this.internal.__cell__ = {}),
					(this.internal.__cell__.padding = 3),
					(this.internal.__cell__.headerFunction = void 0),
					(this.internal.__cell__.margins = Object.assign({}, e)),
					(this.internal.__cell__.margins.width = this.getPageWidth()),
					s.call(this));
			},
			s = function () {
				(this.internal.__cell__.lastCell = new a()), (this.internal.__cell__.pages = 1);
			},
			a = function () {
				var h = arguments[0];
				Object.defineProperty(this, 'x', {
					enumerable: !0,
					get: function () {
						return h;
					},
					set: function (N) {
						h = N;
					}
				});
				var p = arguments[1];
				Object.defineProperty(this, 'y', {
					enumerable: !0,
					get: function () {
						return p;
					},
					set: function (N) {
						p = N;
					}
				});
				var v = arguments[2];
				Object.defineProperty(this, 'width', {
					enumerable: !0,
					get: function () {
						return v;
					},
					set: function (N) {
						v = N;
					}
				});
				var m = arguments[3];
				Object.defineProperty(this, 'height', {
					enumerable: !0,
					get: function () {
						return m;
					},
					set: function (N) {
						m = N;
					}
				});
				var y = arguments[4];
				Object.defineProperty(this, 'text', {
					enumerable: !0,
					get: function () {
						return y;
					},
					set: function (N) {
						y = N;
					}
				});
				var d = arguments[5];
				Object.defineProperty(this, 'lineNumber', {
					enumerable: !0,
					get: function () {
						return d;
					},
					set: function (N) {
						d = N;
					}
				});
				var E = arguments[6];
				return (
					Object.defineProperty(this, 'align', {
						enumerable: !0,
						get: function () {
							return E;
						},
						set: function (N) {
							E = N;
						}
					}),
					this
				);
			};
		(a.prototype.clone = function () {
			return new a(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
		}),
			(a.prototype.toArray = function () {
				return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align];
			}),
			(n.setHeaderFunction = function (h) {
				return (
					i.call(this),
					(this.internal.__cell__.headerFunction = typeof h == 'function' ? h : void 0),
					this
				);
			}),
			(n.getTextDimensions = function (h, p) {
				i.call(this);
				var v = (p = p || {}).fontSize || this.getFontSize(),
					m = p.font || this.getFont(),
					y = p.scaleFactor || this.internal.scaleFactor,
					d = 0,
					E = 0,
					N = 0,
					P = this;
				if (!Array.isArray(h) && typeof h != 'string') {
					if (typeof h != 'number')
						throw new Error(
							'getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.'
						);
					h = String(h);
				}
				var _ = p.maxWidth;
				_ > 0
					? typeof h == 'string'
						? (h = this.splitTextToSize(h, _))
						: Object.prototype.toString.call(h) === '[object Array]' &&
							(h = h.reduce(function (O, G) {
								return O.concat(P.splitTextToSize(G, _));
							}, []))
					: (h = Array.isArray(h) ? h : [h]);
				for (var j = 0; j < h.length; j++)
					d < (N = this.getStringUnitWidth(h[j], { font: m }) * v) && (d = N);
				return (
					d !== 0 && (E = h.length),
					{
						w: (d /= y),
						h: Math.max(
							(E * v * this.getLineHeightFactor() - v * (this.getLineHeightFactor() - 1)) / y,
							0
						)
					}
				);
			}),
			(n.cellAddPage = function () {
				i.call(this), this.addPage();
				var h = this.internal.__cell__.margins || e;
				return (
					(this.internal.__cell__.lastCell = new a(h.left, h.top, void 0, void 0)),
					(this.internal.__cell__.pages += 1),
					this
				);
			});
		var l = (n.cell = function () {
			var h;
			(h =
				arguments[0] instanceof a
					? arguments[0]
					: new a(
							arguments[0],
							arguments[1],
							arguments[2],
							arguments[3],
							arguments[4],
							arguments[5]
						)),
				i.call(this);
			var p = this.internal.__cell__.lastCell,
				v = this.internal.__cell__.padding,
				m = this.internal.__cell__.margins || e,
				y = this.internal.__cell__.tableHeaderRow,
				d = this.internal.__cell__.printHeaders;
			return (
				p.lineNumber !== void 0 &&
					(p.lineNumber === h.lineNumber
						? ((h.x = (p.x || 0) + (p.width || 0)), (h.y = p.y || 0))
						: p.y + p.height + h.height + m.bottom > this.getPageHeight()
							? (this.cellAddPage(),
								(h.y = m.top),
								d && y && (this.printHeaderRow(h.lineNumber, !0), (h.y += y[0].height)))
							: (h.y = p.y + p.height || h.y)),
				h.text[0] !== void 0 &&
					(this.rect(h.x, h.y, h.width, h.height, r === !0 ? 'FD' : void 0),
					h.align === 'right'
						? this.text(h.text, h.x + h.width - v, h.y + v, { align: 'right', baseline: 'top' })
						: h.align === 'center'
							? this.text(h.text, h.x + h.width / 2, h.y + v, {
									align: 'center',
									baseline: 'top',
									maxWidth: h.width - v - v
								})
							: this.text(h.text, h.x + v, h.y + v, {
									align: 'left',
									baseline: 'top',
									maxWidth: h.width - v - v
								})),
				(this.internal.__cell__.lastCell = h),
				this
			);
		});
		n.table = function (h, p, v, m, y) {
			if ((i.call(this), !v)) throw new Error('No data for PDF table.');
			var d,
				E,
				N,
				P,
				_ = [],
				j = [],
				O = [],
				G = {},
				W = {},
				oe = [],
				ee = [],
				z = (y = y || {}).autoSize || !1,
				re = y.printHeaders !== !1,
				de = y.css && y.css['font-size'] !== void 0 ? 16 * y.css['font-size'] : y.fontSize || 12,
				C = y.margins || Object.assign({ width: this.getPageWidth() }, e),
				L = typeof y.padding == 'number' ? y.padding : 3,
				q = y.headerBackgroundColor || '#c8c8c8',
				B = y.headerTextColor || '#000';
			if (
				(s.call(this),
				(this.internal.__cell__.printHeaders = re),
				(this.internal.__cell__.margins = C),
				(this.internal.__cell__.table_font_size = de),
				(this.internal.__cell__.padding = L),
				(this.internal.__cell__.headerBackgroundColor = q),
				(this.internal.__cell__.headerTextColor = B),
				this.setFontSize(de),
				m == null)
			)
				(j = _ = Object.keys(v[0])),
					(O = _.map(function () {
						return 'left';
					}));
			else if (Array.isArray(m) && Bt(m[0]) === 'object')
				for (
					_ = m.map(function (ue) {
						return ue.name;
					}),
						j = m.map(function (ue) {
							return ue.prompt || ue.name || '';
						}),
						O = m.map(function (ue) {
							return ue.align || 'left';
						}),
						d = 0;
					d < m.length;
					d += 1
				)
					W[m[d].name] = m[d].width * (19.049976 / 25.4);
			else
				Array.isArray(m) &&
					typeof m[0] == 'string' &&
					((j = _ = m),
					(O = _.map(function () {
						return 'left';
					})));
			if (z || (Array.isArray(m) && typeof m[0] == 'string'))
				for (d = 0; d < _.length; d += 1) {
					for (
						G[(P = _[d])] = v.map(function (ue) {
							return ue[P];
						}),
							this.setFont(void 0, 'bold'),
							oe.push(
								this.getTextDimensions(j[d], {
									fontSize: this.internal.__cell__.table_font_size,
									scaleFactor: this.internal.scaleFactor
								}).w
							),
							E = G[P],
							this.setFont(void 0, 'normal'),
							N = 0;
						N < E.length;
						N += 1
					)
						oe.push(
							this.getTextDimensions(E[N], {
								fontSize: this.internal.__cell__.table_font_size,
								scaleFactor: this.internal.scaleFactor
							}).w
						);
					(W[P] = Math.max.apply(null, oe) + L + L), (oe = []);
				}
			if (re) {
				var Z = {};
				for (d = 0; d < _.length; d += 1)
					(Z[_[d]] = {}), (Z[_[d]].text = j[d]), (Z[_[d]].align = O[d]);
				var Q = u.call(this, Z, W);
				(ee = _.map(function (ue) {
					return new a(h, p, W[ue], Q, Z[ue].text, void 0, Z[ue].align);
				})),
					this.setTableHeaderRow(ee),
					this.printHeaderRow(1, !1);
			}
			var ie = m.reduce(function (ue, Se) {
				return (ue[Se.name] = Se.align), ue;
			}, {});
			for (d = 0; d < v.length; d += 1) {
				'rowStart' in y &&
					y.rowStart instanceof Function &&
					y.rowStart({ row: d, data: v[d] }, this);
				var K = u.call(this, v[d], W);
				for (N = 0; N < _.length; N += 1) {
					var le = v[d][_[N]];
					'cellStart' in y &&
						y.cellStart instanceof Function &&
						y.cellStart({ row: d, col: N, data: le }, this),
						l.call(this, new a(h, p, W[_[N]], K, le, d + 2, ie[_[N]]));
				}
			}
			return (this.internal.__cell__.table_x = h), (this.internal.__cell__.table_y = p), this;
		};
		var u = function (h, p) {
			var v = this.internal.__cell__.padding,
				m = this.internal.__cell__.table_font_size,
				y = this.internal.scaleFactor;
			return Object.keys(h)
				.map(function (d) {
					var E = h[d];
					return this.splitTextToSize(E.hasOwnProperty('text') ? E.text : E, p[d] - v - v);
				}, this)
				.map(function (d) {
					return (this.getLineHeightFactor() * d.length * m) / y + v + v;
				}, this)
				.reduce(function (d, E) {
					return Math.max(d, E);
				}, 0);
		};
		(n.setTableHeaderRow = function (h) {
			i.call(this), (this.internal.__cell__.tableHeaderRow = h);
		}),
			(n.printHeaderRow = function (h, p) {
				if ((i.call(this), !this.internal.__cell__.tableHeaderRow))
					throw new Error('Property tableHeaderRow does not exist.');
				var v;
				if (((r = !0), typeof this.internal.__cell__.headerFunction == 'function')) {
					var m = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
					this.internal.__cell__.lastCell = new a(m[0], m[1], m[2], m[3], void 0, -1);
				}
				this.setFont(void 0, 'bold');
				for (var y = [], d = 0; d < this.internal.__cell__.tableHeaderRow.length; d += 1) {
					(v = this.internal.__cell__.tableHeaderRow[d].clone()),
						p && ((v.y = this.internal.__cell__.margins.top || 0), y.push(v)),
						(v.lineNumber = h);
					var E = this.getTextColor();
					this.setTextColor(this.internal.__cell__.headerTextColor),
						this.setFillColor(this.internal.__cell__.headerBackgroundColor),
						l.call(this, v),
						this.setTextColor(E);
				}
				y.length > 0 && this.setTableHeaderRow(y), this.setFont(void 0, 'normal'), (r = !1);
			});
	})(ot.API);
var yu = {
		italic: ['italic', 'oblique', 'normal'],
		oblique: ['oblique', 'italic', 'normal'],
		normal: ['normal', 'oblique', 'italic']
	},
	wu = [
		'ultra-condensed',
		'extra-condensed',
		'condensed',
		'semi-condensed',
		'normal',
		'semi-expanded',
		'expanded',
		'extra-expanded',
		'ultra-expanded'
	],
	jl = bu(wu),
	xu = [100, 200, 300, 400, 500, 600, 700, 800, 900],
	s1 = bu(xu);
function Ml(n) {
	var e = n.family.replace(/"|'/g, '').toLowerCase(),
		r = (function (a) {
			return yu[(a = a || 'normal')] ? a : 'normal';
		})(n.style),
		i = (function (a) {
			if (!a) return 400;
			if (typeof a == 'number') return a >= 100 && a <= 900 && a % 100 == 0 ? a : 400;
			if (/^\d00$/.test(a)) return parseInt(a);
			switch (a) {
				case 'bold':
					return 700;
				case 'normal':
				default:
					return 400;
			}
		})(n.weight),
		s = (function (a) {
			return typeof jl[(a = a || 'normal')] == 'number' ? a : 'normal';
		})(n.stretch);
	return {
		family: e,
		style: r,
		weight: i,
		stretch: s,
		src: n.src || [],
		ref: n.ref || { name: e, style: [s, r, i].join(' ') }
	};
}
function jc(n, e, r, i) {
	var s;
	for (s = r; s >= 0 && s < e.length; s += i) if (n[e[s]]) return n[e[s]];
	for (s = r; s >= 0 && s < e.length; s -= i) if (n[e[s]]) return n[e[s]];
}
var l1 = {
		'sans-serif': 'helvetica',
		fixed: 'courier',
		monospace: 'courier',
		terminal: 'courier',
		cursive: 'times',
		fantasy: 'times',
		serif: 'times'
	},
	Mc = {
		caption: 'times',
		icon: 'times',
		menu: 'times',
		'message-box': 'times',
		'small-caption': 'times',
		'status-bar': 'times'
	};
function Bc(n) {
	return [n.stretch, n.style, n.weight, n.family].join(' ');
}
function c1(n, e, r) {
	for (
		var i = (r = r || {}).defaultFontFamily || 'times',
			s = Object.assign({}, l1, r.genericFontFamilies || {}),
			a = null,
			l = null,
			u = 0;
		u < e.length;
		++u
	)
		if ((s[(a = Ml(e[u])).family] && (a.family = s[a.family]), n.hasOwnProperty(a.family))) {
			l = n[a.family];
			break;
		}
	if (!(l = l || n[i]))
		throw new Error(
			"Could not find a font-family for the rule '" + Bc(a) + "' and default family '" + i + "'."
		);
	if (
		((l = (function (h, p) {
			if (p[h]) return p[h];
			var v = jl[h],
				m = v <= jl.normal ? -1 : 1,
				y = jc(p, wu, v, m);
			if (!y) throw new Error('Could not find a matching font-stretch value for ' + h);
			return y;
		})(a.stretch, l)),
		(l = (function (h, p) {
			if (p[h]) return p[h];
			for (var v = yu[h], m = 0; m < v.length; ++m) if (p[v[m]]) return p[v[m]];
			throw new Error('Could not find a matching font-style for ' + h);
		})(a.style, l)),
		!(l = (function (h, p) {
			if (p[h]) return p[h];
			if (h === 400 && p[500]) return p[500];
			if (h === 500 && p[400]) return p[400];
			var v = s1[h],
				m = jc(p, xu, v, h < 400 ? -1 : 1);
			if (!m) throw new Error('Could not find a matching font-weight for value ' + h);
			return m;
		})(a.weight, l)))
	)
		throw new Error("Failed to resolve a font for the rule '" + Bc(a) + "'.");
	return l;
}
function Dc(n) {
	return n.trimLeft();
}
function u1(n, e) {
	for (var r = 0; r < n.length; ) {
		if (n.charAt(r) === e) return [n.substring(0, r), n.substring(r + 1)];
		r += 1;
	}
	return null;
}
function f1(n) {
	var e = n.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
	return e === null ? null : [e[0], n.substring(e[0].length)];
}
var as,
	Oc,
	Rc,
	xl = ['times'];
(function (n) {
	var e,
		r,
		i,
		s,
		a,
		l,
		u,
		h,
		p,
		v = function (b) {
			return (
				(b = b || {}),
				(this.isStrokeTransparent = b.isStrokeTransparent || !1),
				(this.strokeOpacity = b.strokeOpacity || 1),
				(this.strokeStyle = b.strokeStyle || '#000000'),
				(this.fillStyle = b.fillStyle || '#000000'),
				(this.isFillTransparent = b.isFillTransparent || !1),
				(this.fillOpacity = b.fillOpacity || 1),
				(this.font = b.font || '10px sans-serif'),
				(this.textBaseline = b.textBaseline || 'alphabetic'),
				(this.textAlign = b.textAlign || 'left'),
				(this.lineWidth = b.lineWidth || 1),
				(this.lineJoin = b.lineJoin || 'miter'),
				(this.lineCap = b.lineCap || 'butt'),
				(this.path = b.path || []),
				(this.transform = b.transform !== void 0 ? b.transform.clone() : new h()),
				(this.globalCompositeOperation = b.globalCompositeOperation || 'normal'),
				(this.globalAlpha = b.globalAlpha || 1),
				(this.clip_path = b.clip_path || []),
				(this.currentPoint = b.currentPoint || new l()),
				(this.miterLimit = b.miterLimit || 10),
				(this.lastPoint = b.lastPoint || new l()),
				(this.lineDashOffset = b.lineDashOffset || 0),
				(this.lineDash = b.lineDash || []),
				(this.margin = b.margin || [0, 0, 0, 0]),
				(this.prevPageLastElemOffset = b.prevPageLastElemOffset || 0),
				(this.ignoreClearRect = typeof b.ignoreClearRect != 'boolean' || b.ignoreClearRect),
				this
			);
		};
	n.events.push([
		'initialized',
		function () {
			(this.context2d = new m(this)),
				(e = this.internal.f2),
				(r = this.internal.getCoordinateString),
				(i = this.internal.getVerticalCoordinateString),
				(s = this.internal.getHorizontalCoordinate),
				(a = this.internal.getVerticalCoordinate),
				(l = this.internal.Point),
				(u = this.internal.Rectangle),
				(h = this.internal.Matrix),
				(p = new v());
		}
	]);
	var m = function (b) {
		Object.defineProperty(this, 'canvas', {
			get: function () {
				return { parentNode: !1, style: !1 };
			}
		});
		var T = b;
		Object.defineProperty(this, 'pdf', {
			get: function () {
				return T;
			}
		});
		var M = !1;
		Object.defineProperty(this, 'pageWrapXEnabled', {
			get: function () {
				return M;
			},
			set: function (pe) {
				M = !!pe;
			}
		});
		var H = !1;
		Object.defineProperty(this, 'pageWrapYEnabled', {
			get: function () {
				return H;
			},
			set: function (pe) {
				H = !!pe;
			}
		});
		var V = 0;
		Object.defineProperty(this, 'posX', {
			get: function () {
				return V;
			},
			set: function (pe) {
				isNaN(pe) || (V = pe);
			}
		});
		var te = 0;
		Object.defineProperty(this, 'posY', {
			get: function () {
				return te;
			},
			set: function (pe) {
				isNaN(pe) || (te = pe);
			}
		}),
			Object.defineProperty(this, 'margin', {
				get: function () {
					return p.margin;
				},
				set: function (pe) {
					var U;
					typeof pe == 'number'
						? (U = [pe, pe, pe, pe])
						: (((U = new Array(4))[0] = pe[0]),
							(U[1] = pe.length >= 2 ? pe[1] : U[0]),
							(U[2] = pe.length >= 3 ? pe[2] : U[0]),
							(U[3] = pe.length >= 4 ? pe[3] : U[1])),
						(p.margin = U);
				}
			});
		var se = !1;
		Object.defineProperty(this, 'autoPaging', {
			get: function () {
				return se;
			},
			set: function (pe) {
				se = pe;
			}
		});
		var ce = 0;
		Object.defineProperty(this, 'lastBreak', {
			get: function () {
				return ce;
			},
			set: function (pe) {
				ce = pe;
			}
		});
		var Ce = [];
		Object.defineProperty(this, 'pageBreaks', {
			get: function () {
				return Ce;
			},
			set: function (pe) {
				Ce = pe;
			}
		}),
			Object.defineProperty(this, 'ctx', {
				get: function () {
					return p;
				},
				set: function (pe) {
					pe instanceof v && (p = pe);
				}
			}),
			Object.defineProperty(this, 'path', {
				get: function () {
					return p.path;
				},
				set: function (pe) {
					p.path = pe;
				}
			});
		var ye = [];
		Object.defineProperty(this, 'ctxStack', {
			get: function () {
				return ye;
			},
			set: function (pe) {
				ye = pe;
			}
		}),
			Object.defineProperty(this, 'fillStyle', {
				get: function () {
					return this.ctx.fillStyle;
				},
				set: function (pe) {
					var U;
					(U = y(pe)),
						(this.ctx.fillStyle = U.style),
						(this.ctx.isFillTransparent = U.a === 0),
						(this.ctx.fillOpacity = U.a),
						this.pdf.setFillColor(U.r, U.g, U.b, { a: U.a }),
						this.pdf.setTextColor(U.r, U.g, U.b, { a: U.a });
				}
			}),
			Object.defineProperty(this, 'strokeStyle', {
				get: function () {
					return this.ctx.strokeStyle;
				},
				set: function (pe) {
					var U = y(pe);
					(this.ctx.strokeStyle = U.style),
						(this.ctx.isStrokeTransparent = U.a === 0),
						(this.ctx.strokeOpacity = U.a),
						U.a === 0
							? this.pdf.setDrawColor(255, 255, 255)
							: (U.a, this.pdf.setDrawColor(U.r, U.g, U.b));
				}
			}),
			Object.defineProperty(this, 'lineCap', {
				get: function () {
					return this.ctx.lineCap;
				},
				set: function (pe) {
					['butt', 'round', 'square'].indexOf(pe) !== -1 &&
						((this.ctx.lineCap = pe), this.pdf.setLineCap(pe));
				}
			}),
			Object.defineProperty(this, 'lineWidth', {
				get: function () {
					return this.ctx.lineWidth;
				},
				set: function (pe) {
					isNaN(pe) || ((this.ctx.lineWidth = pe), this.pdf.setLineWidth(pe));
				}
			}),
			Object.defineProperty(this, 'lineJoin', {
				get: function () {
					return this.ctx.lineJoin;
				},
				set: function (pe) {
					['bevel', 'round', 'miter'].indexOf(pe) !== -1 &&
						((this.ctx.lineJoin = pe), this.pdf.setLineJoin(pe));
				}
			}),
			Object.defineProperty(this, 'miterLimit', {
				get: function () {
					return this.ctx.miterLimit;
				},
				set: function (pe) {
					isNaN(pe) || ((this.ctx.miterLimit = pe), this.pdf.setMiterLimit(pe));
				}
			}),
			Object.defineProperty(this, 'textBaseline', {
				get: function () {
					return this.ctx.textBaseline;
				},
				set: function (pe) {
					this.ctx.textBaseline = pe;
				}
			}),
			Object.defineProperty(this, 'textAlign', {
				get: function () {
					return this.ctx.textAlign;
				},
				set: function (pe) {
					['right', 'end', 'center', 'left', 'start'].indexOf(pe) !== -1 &&
						(this.ctx.textAlign = pe);
				}
			});
		var Te = null;
		function Fe(pe, U) {
			if (Te === null) {
				var rt = (function (He) {
					var Pe = [];
					return (
						Object.keys(He).forEach(function (Ee) {
							He[Ee].forEach(function (Me) {
								var je = null;
								switch (Me) {
									case 'bold':
										je = { family: Ee, weight: 'bold' };
										break;
									case 'italic':
										je = { family: Ee, style: 'italic' };
										break;
									case 'bolditalic':
										je = { family: Ee, weight: 'bold', style: 'italic' };
										break;
									case '':
									case 'normal':
										je = { family: Ee };
								}
								je !== null && ((je.ref = { name: Ee, style: Me }), Pe.push(je));
							});
						}),
						Pe
					);
				})(pe.getFontList());
				Te = (function (He) {
					for (var Pe = {}, Ee = 0; Ee < He.length; ++Ee) {
						var Me = Ml(He[Ee]),
							je = Me.family,
							Ye = Me.stretch,
							Ze = Me.style,
							at = Me.weight;
						(Pe[je] = Pe[je] || {}),
							(Pe[je][Ye] = Pe[je][Ye] || {}),
							(Pe[je][Ye][Ze] = Pe[je][Ye][Ze] || {}),
							(Pe[je][Ye][Ze][at] = Me);
					}
					return Pe;
				})(rt.concat(U));
			}
			return Te;
		}
		var Ue = null;
		Object.defineProperty(this, 'fontFaces', {
			get: function () {
				return Ue;
			},
			set: function (pe) {
				(Te = null), (Ue = pe);
			}
		}),
			Object.defineProperty(this, 'font', {
				get: function () {
					return this.ctx.font;
				},
				set: function (pe) {
					var U;
					if (
						((this.ctx.font = pe),
						(U =
							/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(
								pe
							)) !== null)
					) {
						var rt = U[1];
						U[2];
						var He = U[3],
							Pe = U[4];
						U[5];
						var Ee = U[6],
							Me = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Pe)[2];
						(Pe = Math.floor(
							Me === 'px'
								? parseFloat(Pe) * this.pdf.internal.scaleFactor
								: Me === 'em'
									? parseFloat(Pe) * this.pdf.getFontSize()
									: parseFloat(Pe) * this.pdf.internal.scaleFactor
						)),
							this.pdf.setFontSize(Pe);
						var je = (function (Ge) {
							var Qe,
								Be,
								Jt = [],
								yt = Ge.trim();
							if (yt === '') return xl;
							if (yt in Mc) return [Mc[yt]];
							for (; yt !== ''; ) {
								switch (((Be = null), (Qe = (yt = Dc(yt)).charAt(0)))) {
									case '"':
									case "'":
										Be = u1(yt.substring(1), Qe);
										break;
									default:
										Be = f1(yt);
								}
								if (
									Be === null ||
									(Jt.push(Be[0]), (yt = Dc(Be[1])) !== '' && yt.charAt(0) !== ',')
								)
									return xl;
								yt = yt.replace(/^,/, '');
							}
							return Jt;
						})(Ee);
						if (this.fontFaces) {
							var Ye = c1(
								Fe(this.pdf, this.fontFaces),
								je.map(function (Ge) {
									return { family: Ge, stretch: 'normal', weight: He, style: rt };
								})
							);
							this.pdf.setFont(Ye.ref.name, Ye.ref.style);
						} else {
							var Ze = '';
							(He === 'bold' || parseInt(He, 10) >= 700 || rt === 'bold') && (Ze = 'bold'),
								rt === 'italic' && (Ze += 'italic'),
								Ze.length === 0 && (Ze = 'normal');
							for (
								var at = '',
									lt = {
										arial: 'Helvetica',
										Arial: 'Helvetica',
										verdana: 'Helvetica',
										Verdana: 'Helvetica',
										helvetica: 'Helvetica',
										Helvetica: 'Helvetica',
										'sans-serif': 'Helvetica',
										fixed: 'Courier',
										monospace: 'Courier',
										terminal: 'Courier',
										cursive: 'Times',
										fantasy: 'Times',
										serif: 'Times'
									},
									ft = 0;
								ft < je.length;
								ft++
							) {
								if (
									this.pdf.internal.getFont(je[ft], Ze, { noFallback: !0, disableWarning: !0 }) !==
									void 0
								) {
									at = je[ft];
									break;
								}
								if (
									Ze === 'bolditalic' &&
									this.pdf.internal.getFont(je[ft], 'bold', {
										noFallback: !0,
										disableWarning: !0
									}) !== void 0
								)
									(at = je[ft]), (Ze = 'bold');
								else if (
									this.pdf.internal.getFont(je[ft], 'normal', {
										noFallback: !0,
										disableWarning: !0
									}) !== void 0
								) {
									(at = je[ft]), (Ze = 'normal');
									break;
								}
							}
							if (at === '') {
								for (var bt = 0; bt < je.length; bt++)
									if (lt[je[bt]]) {
										at = lt[je[bt]];
										break;
									}
							}
							(at = at === '' ? 'Times' : at), this.pdf.setFont(at, Ze);
						}
					}
				}
			}),
			Object.defineProperty(this, 'globalCompositeOperation', {
				get: function () {
					return this.ctx.globalCompositeOperation;
				},
				set: function (pe) {
					this.ctx.globalCompositeOperation = pe;
				}
			}),
			Object.defineProperty(this, 'globalAlpha', {
				get: function () {
					return this.ctx.globalAlpha;
				},
				set: function (pe) {
					this.ctx.globalAlpha = pe;
				}
			}),
			Object.defineProperty(this, 'lineDashOffset', {
				get: function () {
					return this.ctx.lineDashOffset;
				},
				set: function (pe) {
					(this.ctx.lineDashOffset = pe), Se.call(this);
				}
			}),
			Object.defineProperty(this, 'lineDash', {
				get: function () {
					return this.ctx.lineDash;
				},
				set: function (pe) {
					(this.ctx.lineDash = pe), Se.call(this);
				}
			}),
			Object.defineProperty(this, 'ignoreClearRect', {
				get: function () {
					return this.ctx.ignoreClearRect;
				},
				set: function (pe) {
					this.ctx.ignoreClearRect = !!pe;
				}
			});
	};
	(m.prototype.setLineDash = function (b) {
		this.lineDash = b;
	}),
		(m.prototype.getLineDash = function () {
			return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
		}),
		(m.prototype.fill = function () {
			G.call(this, 'fill', !1);
		}),
		(m.prototype.stroke = function () {
			G.call(this, 'stroke', !1);
		}),
		(m.prototype.beginPath = function () {
			this.path = [{ type: 'begin' }];
		}),
		(m.prototype.moveTo = function (b, T) {
			if (isNaN(b) || isNaN(T))
				throw (
					(Rt.error('jsPDF.context2d.moveTo: Invalid arguments', arguments),
					new Error('Invalid arguments passed to jsPDF.context2d.moveTo'))
				);
			var M = this.ctx.transform.applyToPoint(new l(b, T));
			this.path.push({ type: 'mt', x: M.x, y: M.y }), (this.ctx.lastPoint = new l(b, T));
		}),
		(m.prototype.closePath = function () {
			var b = new l(0, 0),
				T = 0;
			for (T = this.path.length - 1; T !== -1; T--)
				if (
					this.path[T].type === 'begin' &&
					Bt(this.path[T + 1]) === 'object' &&
					typeof this.path[T + 1].x == 'number'
				) {
					b = new l(this.path[T + 1].x, this.path[T + 1].y);
					break;
				}
			this.path.push({ type: 'close' }), (this.ctx.lastPoint = new l(b.x, b.y));
		}),
		(m.prototype.lineTo = function (b, T) {
			if (isNaN(b) || isNaN(T))
				throw (
					(Rt.error('jsPDF.context2d.lineTo: Invalid arguments', arguments),
					new Error('Invalid arguments passed to jsPDF.context2d.lineTo'))
				);
			var M = this.ctx.transform.applyToPoint(new l(b, T));
			this.path.push({ type: 'lt', x: M.x, y: M.y }), (this.ctx.lastPoint = new l(M.x, M.y));
		}),
		(m.prototype.clip = function () {
			(this.ctx.clip_path = JSON.parse(JSON.stringify(this.path))), G.call(this, null, !0);
		}),
		(m.prototype.quadraticCurveTo = function (b, T, M, H) {
			if (isNaN(M) || isNaN(H) || isNaN(b) || isNaN(T))
				throw (
					(Rt.error('jsPDF.context2d.quadraticCurveTo: Invalid arguments', arguments),
					new Error('Invalid arguments passed to jsPDF.context2d.quadraticCurveTo'))
				);
			var V = this.ctx.transform.applyToPoint(new l(M, H)),
				te = this.ctx.transform.applyToPoint(new l(b, T));
			this.path.push({ type: 'qct', x1: te.x, y1: te.y, x: V.x, y: V.y }),
				(this.ctx.lastPoint = new l(V.x, V.y));
		}),
		(m.prototype.bezierCurveTo = function (b, T, M, H, V, te) {
			if (isNaN(V) || isNaN(te) || isNaN(b) || isNaN(T) || isNaN(M) || isNaN(H))
				throw (
					(Rt.error('jsPDF.context2d.bezierCurveTo: Invalid arguments', arguments),
					new Error('Invalid arguments passed to jsPDF.context2d.bezierCurveTo'))
				);
			var se = this.ctx.transform.applyToPoint(new l(V, te)),
				ce = this.ctx.transform.applyToPoint(new l(b, T)),
				Ce = this.ctx.transform.applyToPoint(new l(M, H));
			this.path.push({ type: 'bct', x1: ce.x, y1: ce.y, x2: Ce.x, y2: Ce.y, x: se.x, y: se.y }),
				(this.ctx.lastPoint = new l(se.x, se.y));
		}),
		(m.prototype.arc = function (b, T, M, H, V, te) {
			if (isNaN(b) || isNaN(T) || isNaN(M) || isNaN(H) || isNaN(V))
				throw (
					(Rt.error('jsPDF.context2d.arc: Invalid arguments', arguments),
					new Error('Invalid arguments passed to jsPDF.context2d.arc'))
				);
			if (((te = !!te), !this.ctx.transform.isIdentity)) {
				var se = this.ctx.transform.applyToPoint(new l(b, T));
				(b = se.x), (T = se.y);
				var ce = this.ctx.transform.applyToPoint(new l(0, M)),
					Ce = this.ctx.transform.applyToPoint(new l(0, 0));
				M = Math.sqrt(Math.pow(ce.x - Ce.x, 2) + Math.pow(ce.y - Ce.y, 2));
			}
			Math.abs(V - H) >= 2 * Math.PI && ((H = 0), (V = 2 * Math.PI)),
				this.path.push({
					type: 'arc',
					x: b,
					y: T,
					radius: M,
					startAngle: H,
					endAngle: V,
					counterclockwise: te
				});
		}),
		(m.prototype.arcTo = function (b, T, M, H, V) {
			throw new Error('arcTo not implemented.');
		}),
		(m.prototype.rect = function (b, T, M, H) {
			if (isNaN(b) || isNaN(T) || isNaN(M) || isNaN(H))
				throw (
					(Rt.error('jsPDF.context2d.rect: Invalid arguments', arguments),
					new Error('Invalid arguments passed to jsPDF.context2d.rect'))
				);
			this.moveTo(b, T),
				this.lineTo(b + M, T),
				this.lineTo(b + M, T + H),
				this.lineTo(b, T + H),
				this.lineTo(b, T),
				this.lineTo(b + M, T),
				this.lineTo(b, T);
		}),
		(m.prototype.fillRect = function (b, T, M, H) {
			if (isNaN(b) || isNaN(T) || isNaN(M) || isNaN(H))
				throw (
					(Rt.error('jsPDF.context2d.fillRect: Invalid arguments', arguments),
					new Error('Invalid arguments passed to jsPDF.context2d.fillRect'))
				);
			if (!d.call(this)) {
				var V = {};
				this.lineCap !== 'butt' && ((V.lineCap = this.lineCap), (this.lineCap = 'butt')),
					this.lineJoin !== 'miter' && ((V.lineJoin = this.lineJoin), (this.lineJoin = 'miter')),
					this.beginPath(),
					this.rect(b, T, M, H),
					this.fill(),
					V.hasOwnProperty('lineCap') && (this.lineCap = V.lineCap),
					V.hasOwnProperty('lineJoin') && (this.lineJoin = V.lineJoin);
			}
		}),
		(m.prototype.strokeRect = function (b, T, M, H) {
			if (isNaN(b) || isNaN(T) || isNaN(M) || isNaN(H))
				throw (
					(Rt.error('jsPDF.context2d.strokeRect: Invalid arguments', arguments),
					new Error('Invalid arguments passed to jsPDF.context2d.strokeRect'))
				);
			E.call(this) || (this.beginPath(), this.rect(b, T, M, H), this.stroke());
		}),
		(m.prototype.clearRect = function (b, T, M, H) {
			if (isNaN(b) || isNaN(T) || isNaN(M) || isNaN(H))
				throw (
					(Rt.error('jsPDF.context2d.clearRect: Invalid arguments', arguments),
					new Error('Invalid arguments passed to jsPDF.context2d.clearRect'))
				);
			this.ignoreClearRect || ((this.fillStyle = '#ffffff'), this.fillRect(b, T, M, H));
		}),
		(m.prototype.save = function (b) {
			b = typeof b != 'boolean' || b;
			for (
				var T = this.pdf.internal.getCurrentPageInfo().pageNumber, M = 0;
				M < this.pdf.internal.getNumberOfPages();
				M++
			)
				this.pdf.setPage(M + 1), this.pdf.internal.out('q');
			if ((this.pdf.setPage(T), b)) {
				this.ctx.fontSize = this.pdf.internal.getFontSize();
				var H = new v(this.ctx);
				this.ctxStack.push(this.ctx), (this.ctx = H);
			}
		}),
		(m.prototype.restore = function (b) {
			b = typeof b != 'boolean' || b;
			for (
				var T = this.pdf.internal.getCurrentPageInfo().pageNumber, M = 0;
				M < this.pdf.internal.getNumberOfPages();
				M++
			)
				this.pdf.setPage(M + 1), this.pdf.internal.out('Q');
			this.pdf.setPage(T),
				b &&
					this.ctxStack.length !== 0 &&
					((this.ctx = this.ctxStack.pop()),
					(this.fillStyle = this.ctx.fillStyle),
					(this.strokeStyle = this.ctx.strokeStyle),
					(this.font = this.ctx.font),
					(this.lineCap = this.ctx.lineCap),
					(this.lineWidth = this.ctx.lineWidth),
					(this.lineJoin = this.ctx.lineJoin),
					(this.lineDash = this.ctx.lineDash),
					(this.lineDashOffset = this.ctx.lineDashOffset));
		}),
		(m.prototype.toDataURL = function () {
			throw new Error('toDataUrl not implemented.');
		});
	var y = function (b) {
			var T, M, H, V;
			if ((b.isCanvasGradient === !0 && (b = b.getColor()), !b))
				return { r: 0, g: 0, b: 0, a: 0, style: b };
			if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(b))
				(T = 0), (M = 0), (H = 0), (V = 0);
			else {
				var te = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(b);
				if (te !== null)
					(T = parseInt(te[1])), (M = parseInt(te[2])), (H = parseInt(te[3])), (V = 1);
				else if (
					(te = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(b)) !== null
				)
					(T = parseInt(te[1])),
						(M = parseInt(te[2])),
						(H = parseInt(te[3])),
						(V = parseFloat(te[4]));
				else {
					if (((V = 1), typeof b == 'string' && b.charAt(0) !== '#')) {
						var se = new hu(b);
						b = se.ok ? se.toHex() : '#000000';
					}
					b.length === 4
						? ((T = b.substring(1, 2)),
							(T += T),
							(M = b.substring(2, 3)),
							(M += M),
							(H = b.substring(3, 4)),
							(H += H))
						: ((T = b.substring(1, 3)), (M = b.substring(3, 5)), (H = b.substring(5, 7))),
						(T = parseInt(T, 16)),
						(M = parseInt(M, 16)),
						(H = parseInt(H, 16));
				}
			}
			return { r: T, g: M, b: H, a: V, style: b };
		},
		d = function () {
			return this.ctx.isFillTransparent || this.globalAlpha == 0;
		},
		E = function () {
			return !!(this.ctx.isStrokeTransparent || this.globalAlpha == 0);
		};
	(m.prototype.fillText = function (b, T, M, H) {
		if (isNaN(T) || isNaN(M) || typeof b != 'string')
			throw (
				(Rt.error('jsPDF.context2d.fillText: Invalid arguments', arguments),
				new Error('Invalid arguments passed to jsPDF.context2d.fillText'))
			);
		if (((H = isNaN(H) ? void 0 : H), !d.call(this))) {
			var V = K(this.ctx.transform.rotation),
				te = this.ctx.transform.scaleX;
			L.call(this, {
				text: b,
				x: T,
				y: M,
				scale: te,
				angle: V,
				align: this.textAlign,
				maxWidth: H
			});
		}
	}),
		(m.prototype.strokeText = function (b, T, M, H) {
			if (isNaN(T) || isNaN(M) || typeof b != 'string')
				throw (
					(Rt.error('jsPDF.context2d.strokeText: Invalid arguments', arguments),
					new Error('Invalid arguments passed to jsPDF.context2d.strokeText'))
				);
			if (!E.call(this)) {
				H = isNaN(H) ? void 0 : H;
				var V = K(this.ctx.transform.rotation),
					te = this.ctx.transform.scaleX;
				L.call(this, {
					text: b,
					x: T,
					y: M,
					scale: te,
					renderingMode: 'stroke',
					angle: V,
					align: this.textAlign,
					maxWidth: H
				});
			}
		}),
		(m.prototype.measureText = function (b) {
			if (typeof b != 'string')
				throw (
					(Rt.error('jsPDF.context2d.measureText: Invalid arguments', arguments),
					new Error('Invalid arguments passed to jsPDF.context2d.measureText'))
				);
			var T = this.pdf,
				M = this.pdf.internal.scaleFactor,
				H = T.internal.getFontSize(),
				V = (T.getStringUnitWidth(b) * H) / T.internal.scaleFactor,
				te = function (se) {
					var ce = (se = se || {}).width || 0;
					return (
						Object.defineProperty(this, 'width', {
							get: function () {
								return ce;
							}
						}),
						this
					);
				};
			return new te({ width: (V *= Math.round(((96 * M) / 72) * 1e4) / 1e4) });
		}),
		(m.prototype.scale = function (b, T) {
			if (isNaN(b) || isNaN(T))
				throw (
					(Rt.error('jsPDF.context2d.scale: Invalid arguments', arguments),
					new Error('Invalid arguments passed to jsPDF.context2d.scale'))
				);
			var M = new h(b, 0, 0, T, 0, 0);
			this.ctx.transform = this.ctx.transform.multiply(M);
		}),
		(m.prototype.rotate = function (b) {
			if (isNaN(b))
				throw (
					(Rt.error('jsPDF.context2d.rotate: Invalid arguments', arguments),
					new Error('Invalid arguments passed to jsPDF.context2d.rotate'))
				);
			var T = new h(Math.cos(b), Math.sin(b), -Math.sin(b), Math.cos(b), 0, 0);
			this.ctx.transform = this.ctx.transform.multiply(T);
		}),
		(m.prototype.translate = function (b, T) {
			if (isNaN(b) || isNaN(T))
				throw (
					(Rt.error('jsPDF.context2d.translate: Invalid arguments', arguments),
					new Error('Invalid arguments passed to jsPDF.context2d.translate'))
				);
			var M = new h(1, 0, 0, 1, b, T);
			this.ctx.transform = this.ctx.transform.multiply(M);
		}),
		(m.prototype.transform = function (b, T, M, H, V, te) {
			if (isNaN(b) || isNaN(T) || isNaN(M) || isNaN(H) || isNaN(V) || isNaN(te))
				throw (
					(Rt.error('jsPDF.context2d.transform: Invalid arguments', arguments),
					new Error('Invalid arguments passed to jsPDF.context2d.transform'))
				);
			var se = new h(b, T, M, H, V, te);
			this.ctx.transform = this.ctx.transform.multiply(se);
		}),
		(m.prototype.setTransform = function (b, T, M, H, V, te) {
			(b = isNaN(b) ? 1 : b),
				(T = isNaN(T) ? 0 : T),
				(M = isNaN(M) ? 0 : M),
				(H = isNaN(H) ? 1 : H),
				(V = isNaN(V) ? 0 : V),
				(te = isNaN(te) ? 0 : te),
				(this.ctx.transform = new h(b, T, M, H, V, te));
		});
	var N = function () {
		return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
	};
	m.prototype.drawImage = function (b, T, M, H, V, te, se, ce, Ce) {
		var ye = this.pdf.getImageProperties(b),
			Te = 1,
			Fe = 1,
			Ue = 1,
			pe = 1;
		H !== void 0 &&
			ce !== void 0 &&
			((Ue = ce / H),
			(pe = Ce / V),
			(Te = ((ye.width / H) * ce) / H),
			(Fe = ((ye.height / V) * Ce) / V)),
			te === void 0 && ((te = T), (se = M), (T = 0), (M = 0)),
			H !== void 0 && ce === void 0 && ((ce = H), (Ce = V)),
			H === void 0 && ce === void 0 && ((ce = ye.width), (Ce = ye.height));
		for (
			var U,
				rt = this.ctx.transform.decompose(),
				He = K(rt.rotate.shx),
				Pe = new h(),
				Ee = (Pe = (Pe = (Pe = Pe.multiply(rt.translate)).multiply(rt.skew)).multiply(
					rt.scale
				)).applyToRectangle(new u(te - T * Ue, se - M * pe, H * Te, V * Fe)),
				Me = P.call(this, Ee),
				je = [],
				Ye = 0;
			Ye < Me.length;
			Ye += 1
		)
			je.indexOf(Me[Ye]) === -1 && je.push(Me[Ye]);
		if ((O(je), this.autoPaging))
			for (var Ze = je[0], at = je[je.length - 1], lt = Ze; lt < at + 1; lt++) {
				this.pdf.setPage(lt);
				var ft = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1],
					bt = lt === 1 ? this.posY + this.margin[0] : this.margin[0],
					Ge = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
					Qe = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2],
					Be = lt === 1 ? 0 : Ge + (lt - 2) * Qe;
				if (this.ctx.clip_path.length !== 0) {
					var Jt = this.path;
					(U = JSON.parse(JSON.stringify(this.ctx.clip_path))),
						(this.path = j(
							U,
							this.posX + this.margin[3],
							-Be + bt + this.ctx.prevPageLastElemOffset
						)),
						W.call(this, 'fill', !0),
						(this.path = Jt);
				}
				var yt = JSON.parse(JSON.stringify(Ee));
				yt = j([yt], this.posX + this.margin[3], -Be + bt + this.ctx.prevPageLastElemOffset)[0];
				var ur = (lt > Ze || lt < at) && N.call(this);
				ur &&
					(this.pdf.saveGraphicsState(),
					this.pdf.rect(this.margin[3], this.margin[0], ft, Qe, null).clip().discardPath()),
					this.pdf.addImage(b, 'JPEG', yt.x, yt.y, yt.w, yt.h, null, null, He),
					ur && this.pdf.restoreGraphicsState();
			}
		else this.pdf.addImage(b, 'JPEG', Ee.x, Ee.y, Ee.w, Ee.h, null, null, He);
	};
	var P = function (b, T, M) {
			var H = [];
			(T = T || this.pdf.internal.pageSize.width),
				(M = M || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2]);
			var V = this.posY + this.ctx.prevPageLastElemOffset;
			switch (b.type) {
				default:
				case 'mt':
				case 'lt':
					H.push(Math.floor((b.y + V) / M) + 1);
					break;
				case 'arc':
					H.push(Math.floor((b.y + V - b.radius) / M) + 1),
						H.push(Math.floor((b.y + V + b.radius) / M) + 1);
					break;
				case 'qct':
					var te = le(this.ctx.lastPoint.x, this.ctx.lastPoint.y, b.x1, b.y1, b.x, b.y);
					H.push(Math.floor((te.y + V) / M) + 1), H.push(Math.floor((te.y + te.h + V) / M) + 1);
					break;
				case 'bct':
					var se = ue(this.ctx.lastPoint.x, this.ctx.lastPoint.y, b.x1, b.y1, b.x2, b.y2, b.x, b.y);
					H.push(Math.floor((se.y + V) / M) + 1), H.push(Math.floor((se.y + se.h + V) / M) + 1);
					break;
				case 'rect':
					H.push(Math.floor((b.y + V) / M) + 1), H.push(Math.floor((b.y + b.h + V) / M) + 1);
			}
			for (var ce = 0; ce < H.length; ce += 1)
				for (; this.pdf.internal.getNumberOfPages() < H[ce]; ) _.call(this);
			return H;
		},
		_ = function () {
			var b = this.fillStyle,
				T = this.strokeStyle,
				M = this.font,
				H = this.lineCap,
				V = this.lineWidth,
				te = this.lineJoin;
			this.pdf.addPage(),
				(this.fillStyle = b),
				(this.strokeStyle = T),
				(this.font = M),
				(this.lineCap = H),
				(this.lineWidth = V),
				(this.lineJoin = te);
		},
		j = function (b, T, M) {
			for (var H = 0; H < b.length; H++)
				switch (b[H].type) {
					case 'bct':
						(b[H].x2 += T), (b[H].y2 += M);
					case 'qct':
						(b[H].x1 += T), (b[H].y1 += M);
					case 'mt':
					case 'lt':
					case 'arc':
					default:
						(b[H].x += T), (b[H].y += M);
				}
			return b;
		},
		O = function (b) {
			return b.sort(function (T, M) {
				return T - M;
			});
		},
		G = function (b, T) {
			for (
				var M,
					H,
					V = this.fillStyle,
					te = this.strokeStyle,
					se = this.lineCap,
					ce = this.lineWidth,
					Ce = Math.abs(ce * this.ctx.transform.scaleX),
					ye = this.lineJoin,
					Te = JSON.parse(JSON.stringify(this.path)),
					Fe = JSON.parse(JSON.stringify(this.path)),
					Ue = [],
					pe = 0;
				pe < Fe.length;
				pe++
			)
				if (Fe[pe].x !== void 0)
					for (var U = P.call(this, Fe[pe]), rt = 0; rt < U.length; rt += 1)
						Ue.indexOf(U[rt]) === -1 && Ue.push(U[rt]);
			for (var He = 0; He < Ue.length; He++)
				for (; this.pdf.internal.getNumberOfPages() < Ue[He]; ) _.call(this);
			if ((O(Ue), this.autoPaging))
				for (var Pe = Ue[0], Ee = Ue[Ue.length - 1], Me = Pe; Me < Ee + 1; Me++) {
					this.pdf.setPage(Me),
						(this.fillStyle = V),
						(this.strokeStyle = te),
						(this.lineCap = se),
						(this.lineWidth = Ce),
						(this.lineJoin = ye);
					var je = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1],
						Ye = Me === 1 ? this.posY + this.margin[0] : this.margin[0],
						Ze = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
						at = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2],
						lt = Me === 1 ? 0 : Ze + (Me - 2) * at;
					if (this.ctx.clip_path.length !== 0) {
						var ft = this.path;
						(M = JSON.parse(JSON.stringify(this.ctx.clip_path))),
							(this.path = j(
								M,
								this.posX + this.margin[3],
								-lt + Ye + this.ctx.prevPageLastElemOffset
							)),
							W.call(this, b, !0),
							(this.path = ft);
					}
					if (
						((H = JSON.parse(JSON.stringify(Te))),
						(this.path = j(
							H,
							this.posX + this.margin[3],
							-lt + Ye + this.ctx.prevPageLastElemOffset
						)),
						T === !1 || Me === 0)
					) {
						var bt = (Me > Pe || Me < Ee) && N.call(this);
						bt &&
							(this.pdf.saveGraphicsState(),
							this.pdf.rect(this.margin[3], this.margin[0], je, at, null).clip().discardPath()),
							W.call(this, b, T),
							bt && this.pdf.restoreGraphicsState();
					}
					this.lineWidth = ce;
				}
			else (this.lineWidth = Ce), W.call(this, b, T), (this.lineWidth = ce);
			this.path = Te;
		},
		W = function (b, T) {
			if ((b !== 'stroke' || T || !E.call(this)) && (b === 'stroke' || T || !d.call(this))) {
				for (var M, H, V = [], te = this.path, se = 0; se < te.length; se++) {
					var ce = te[se];
					switch (ce.type) {
						case 'begin':
							V.push({ begin: !0 });
							break;
						case 'close':
							V.push({ close: !0 });
							break;
						case 'mt':
							V.push({ start: ce, deltas: [], abs: [] });
							break;
						case 'lt':
							var Ce = V.length;
							if (
								te[se - 1] &&
								!isNaN(te[se - 1].x) &&
								((M = [ce.x - te[se - 1].x, ce.y - te[se - 1].y]), Ce > 0)
							) {
								for (; Ce >= 0; Ce--)
									if (V[Ce - 1].close !== !0 && V[Ce - 1].begin !== !0) {
										V[Ce - 1].deltas.push(M), V[Ce - 1].abs.push(ce);
										break;
									}
							}
							break;
						case 'bct':
							(M = [
								ce.x1 - te[se - 1].x,
								ce.y1 - te[se - 1].y,
								ce.x2 - te[se - 1].x,
								ce.y2 - te[se - 1].y,
								ce.x - te[se - 1].x,
								ce.y - te[se - 1].y
							]),
								V[V.length - 1].deltas.push(M);
							break;
						case 'qct':
							var ye = te[se - 1].x + (2 / 3) * (ce.x1 - te[se - 1].x),
								Te = te[se - 1].y + (2 / 3) * (ce.y1 - te[se - 1].y),
								Fe = ce.x + (2 / 3) * (ce.x1 - ce.x),
								Ue = ce.y + (2 / 3) * (ce.y1 - ce.y),
								pe = ce.x,
								U = ce.y;
							(M = [
								ye - te[se - 1].x,
								Te - te[se - 1].y,
								Fe - te[se - 1].x,
								Ue - te[se - 1].y,
								pe - te[se - 1].x,
								U - te[se - 1].y
							]),
								V[V.length - 1].deltas.push(M);
							break;
						case 'arc':
							V.push({ deltas: [], abs: [], arc: !0 }),
								Array.isArray(V[V.length - 1].abs) && V[V.length - 1].abs.push(ce);
					}
				}
				H = T ? null : b === 'stroke' ? 'stroke' : 'fill';
				for (var rt = !1, He = 0; He < V.length; He++)
					if (V[He].arc)
						for (var Pe = V[He].abs, Ee = 0; Ee < Pe.length; Ee++) {
							var Me = Pe[Ee];
							Me.type === 'arc'
								? z.call(
										this,
										Me.x,
										Me.y,
										Me.radius,
										Me.startAngle,
										Me.endAngle,
										Me.counterclockwise,
										void 0,
										T,
										!rt
									)
								: q.call(this, Me.x, Me.y),
								(rt = !0);
						}
					else if (V[He].close === !0) this.pdf.internal.out('h'), (rt = !1);
					else if (V[He].begin !== !0) {
						var je = V[He].start.x,
							Ye = V[He].start.y;
						B.call(this, V[He].deltas, je, Ye), (rt = !0);
					}
				H && re.call(this, H), T && de.call(this);
			}
		},
		oe = function (b) {
			var T = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor,
				M = T * (this.pdf.internal.getLineHeightFactor() - 1);
			switch (this.ctx.textBaseline) {
				case 'bottom':
					return b - M;
				case 'top':
					return b + T - M;
				case 'hanging':
					return b + T - 2 * M;
				case 'middle':
					return b + T / 2 - M;
				case 'ideographic':
					return b;
				case 'alphabetic':
				default:
					return b;
			}
		},
		ee = function (b) {
			return (
				b +
				(this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor) *
					(this.pdf.internal.getLineHeightFactor() - 1)
			);
		};
	(m.prototype.createLinearGradient = function () {
		var b = function () {};
		return (
			(b.colorStops = []),
			(b.addColorStop = function (T, M) {
				this.colorStops.push([T, M]);
			}),
			(b.getColor = function () {
				return this.colorStops.length === 0 ? '#000000' : this.colorStops[0][1];
			}),
			(b.isCanvasGradient = !0),
			b
		);
	}),
		(m.prototype.createPattern = function () {
			return this.createLinearGradient();
		}),
		(m.prototype.createRadialGradient = function () {
			return this.createLinearGradient();
		});
	var z = function (b, T, M, H, V, te, se, ce, Ce) {
			for (var ye = Q.call(this, M, H, V, te), Te = 0; Te < ye.length; Te++) {
				var Fe = ye[Te];
				Te === 0 && (Ce ? C.call(this, Fe.x1 + b, Fe.y1 + T) : q.call(this, Fe.x1 + b, Fe.y1 + T)),
					Z.call(this, b, T, Fe.x2, Fe.y2, Fe.x3, Fe.y3, Fe.x4, Fe.y4);
			}
			ce ? de.call(this) : re.call(this, se);
		},
		re = function (b) {
			switch (b) {
				case 'stroke':
					this.pdf.internal.out('S');
					break;
				case 'fill':
					this.pdf.internal.out('f');
			}
		},
		de = function () {
			this.pdf.clip(), this.pdf.discardPath();
		},
		C = function (b, T) {
			this.pdf.internal.out(r(b) + ' ' + i(T) + ' m');
		},
		L = function (b) {
			var T;
			switch (b.align) {
				case 'right':
				case 'end':
					T = 'right';
					break;
				case 'center':
					T = 'center';
					break;
				case 'left':
				case 'start':
				default:
					T = 'left';
			}
			var M = this.pdf.getTextDimensions(b.text),
				H = oe.call(this, b.y),
				V = ee.call(this, H) - M.h,
				te = this.ctx.transform.applyToPoint(new l(b.x, H)),
				se = this.ctx.transform.decompose(),
				ce = new h();
			ce = (ce = (ce = ce.multiply(se.translate)).multiply(se.skew)).multiply(se.scale);
			for (
				var Ce,
					ye,
					Te,
					Fe = this.ctx.transform.applyToRectangle(new u(b.x, H, M.w, M.h)),
					Ue = ce.applyToRectangle(new u(b.x, V, M.w, M.h)),
					pe = P.call(this, Ue),
					U = [],
					rt = 0;
				rt < pe.length;
				rt += 1
			)
				U.indexOf(pe[rt]) === -1 && U.push(pe[rt]);
			if ((O(U), this.autoPaging))
				for (var He = U[0], Pe = U[U.length - 1], Ee = He; Ee < Pe + 1; Ee++) {
					this.pdf.setPage(Ee);
					var Me = Ee === 1 ? this.posY + this.margin[0] : this.margin[0],
						je = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2],
						Ye = this.pdf.internal.pageSize.height - this.margin[2],
						Ze = Ye - this.margin[0],
						at = this.pdf.internal.pageSize.width - this.margin[1],
						lt = at - this.margin[3],
						ft = Ee === 1 ? 0 : je + (Ee - 2) * Ze;
					if (this.ctx.clip_path.length !== 0) {
						var bt = this.path;
						(Ce = JSON.parse(JSON.stringify(this.ctx.clip_path))),
							(this.path = j(Ce, this.posX + this.margin[3], -1 * ft + Me)),
							W.call(this, 'fill', !0),
							(this.path = bt);
					}
					var Ge = j(
						[JSON.parse(JSON.stringify(Ue))],
						this.posX + this.margin[3],
						-ft + Me + this.ctx.prevPageLastElemOffset
					)[0];
					b.scale >= 0.01 &&
						((ye = this.pdf.internal.getFontSize()),
						this.pdf.setFontSize(ye * b.scale),
						(Te = this.lineWidth),
						(this.lineWidth = Te * b.scale));
					var Qe = this.autoPaging !== 'text';
					if (Qe || Ge.y + Ge.h <= Ye) {
						if (Qe || (Ge.y >= Me && Ge.x <= at)) {
							var Be = Qe ? b.text : this.pdf.splitTextToSize(b.text, b.maxWidth || at - Ge.x)[0],
								Jt = j(
									[JSON.parse(JSON.stringify(Fe))],
									this.posX + this.margin[3],
									-ft + Me + this.ctx.prevPageLastElemOffset
								)[0],
								yt = Qe && (Ee > He || Ee < Pe) && N.call(this);
							yt &&
								(this.pdf.saveGraphicsState(),
								this.pdf.rect(this.margin[3], this.margin[0], lt, Ze, null).clip().discardPath()),
								this.pdf.text(Be, Jt.x, Jt.y, {
									angle: b.angle,
									align: T,
									renderingMode: b.renderingMode
								}),
								yt && this.pdf.restoreGraphicsState();
						}
					} else Ge.y < Ye && (this.ctx.prevPageLastElemOffset += Ye - Ge.y);
					b.scale >= 0.01 && (this.pdf.setFontSize(ye), (this.lineWidth = Te));
				}
			else
				b.scale >= 0.01 &&
					((ye = this.pdf.internal.getFontSize()),
					this.pdf.setFontSize(ye * b.scale),
					(Te = this.lineWidth),
					(this.lineWidth = Te * b.scale)),
					this.pdf.text(b.text, te.x + this.posX, te.y + this.posY, {
						angle: b.angle,
						align: T,
						renderingMode: b.renderingMode,
						maxWidth: b.maxWidth
					}),
					b.scale >= 0.01 && (this.pdf.setFontSize(ye), (this.lineWidth = Te));
		},
		q = function (b, T, M, H) {
			(M = M || 0), (H = H || 0), this.pdf.internal.out(r(b + M) + ' ' + i(T + H) + ' l');
		},
		B = function (b, T, M) {
			return this.pdf.lines(b, T, M, null, null);
		},
		Z = function (b, T, M, H, V, te, se, ce) {
			this.pdf.internal.out(
				[e(s(M + b)), e(a(H + T)), e(s(V + b)), e(a(te + T)), e(s(se + b)), e(a(ce + T)), 'c'].join(
					' '
				)
			);
		},
		Q = function (b, T, M, H) {
			for (var V = 2 * Math.PI, te = Math.PI / 2; T > M; ) T -= V;
			var se = Math.abs(M - T);
			se < V && H && (se = V - se);
			for (var ce = [], Ce = H ? -1 : 1, ye = T; se > 1e-5; ) {
				var Te = ye + Ce * Math.min(se, te);
				ce.push(ie.call(this, b, ye, Te)), (se -= Math.abs(Te - ye)), (ye = Te);
			}
			return ce;
		},
		ie = function (b, T, M) {
			var H = (M - T) / 2,
				V = b * Math.cos(H),
				te = b * Math.sin(H),
				se = V,
				ce = -te,
				Ce = se * se + ce * ce,
				ye = Ce + se * V + ce * te,
				Te = ((4 / 3) * (Math.sqrt(2 * Ce * ye) - ye)) / (se * te - ce * V),
				Fe = se - Te * ce,
				Ue = ce + Te * se,
				pe = Fe,
				U = -Ue,
				rt = H + T,
				He = Math.cos(rt),
				Pe = Math.sin(rt);
			return {
				x1: b * Math.cos(T),
				y1: b * Math.sin(T),
				x2: Fe * He - Ue * Pe,
				y2: Fe * Pe + Ue * He,
				x3: pe * He - U * Pe,
				y3: pe * Pe + U * He,
				x4: b * Math.cos(M),
				y4: b * Math.sin(M)
			};
		},
		K = function (b) {
			return (180 * b) / Math.PI;
		},
		le = function (b, T, M, H, V, te) {
			var se = b + 0.5 * (M - b),
				ce = T + 0.5 * (H - T),
				Ce = V + 0.5 * (M - V),
				ye = te + 0.5 * (H - te),
				Te = Math.min(b, V, se, Ce),
				Fe = Math.max(b, V, se, Ce),
				Ue = Math.min(T, te, ce, ye),
				pe = Math.max(T, te, ce, ye);
			return new u(Te, Ue, Fe - Te, pe - Ue);
		},
		ue = function (b, T, M, H, V, te, se, ce) {
			var Ce,
				ye,
				Te,
				Fe,
				Ue,
				pe,
				U,
				rt,
				He,
				Pe,
				Ee,
				Me,
				je,
				Ye,
				Ze = M - b,
				at = H - T,
				lt = V - M,
				ft = te - H,
				bt = se - V,
				Ge = ce - te;
			for (ye = 0; ye < 41; ye++)
				(He =
					(U = (Te = b + (Ce = ye / 40) * Ze) + Ce * ((Ue = M + Ce * lt) - Te)) +
					Ce * (Ue + Ce * (V + Ce * bt - Ue) - U)),
					(Pe =
						(rt = (Fe = T + Ce * at) + Ce * ((pe = H + Ce * ft) - Fe)) +
						Ce * (pe + Ce * (te + Ce * Ge - pe) - rt)),
					ye == 0
						? ((Ee = He), (Me = Pe), (je = He), (Ye = Pe))
						: ((Ee = Math.min(Ee, He)),
							(Me = Math.min(Me, Pe)),
							(je = Math.max(je, He)),
							(Ye = Math.max(Ye, Pe)));
			return new u(Math.round(Ee), Math.round(Me), Math.round(je - Ee), Math.round(Ye - Me));
		},
		Se = function () {
			if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
				var b,
					T,
					M =
						((b = this.ctx.lineDash),
						(T = this.ctx.lineDashOffset),
						JSON.stringify({ lineDash: b, lineDashOffset: T }));
				this.prevLineDash !== M &&
					(this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset),
					(this.prevLineDash = M));
			}
		};
})(ot.API),
	(function (n) {
		var e = function (a) {
				var l, u, h, p, v, m, y, d, E, N;
				for (
					u = [], h = 0, p = (a += l = '\0\0\0\0'.slice(a.length % 4 || 4)).length;
					p > h;
					h += 4
				)
					(v =
						(a.charCodeAt(h) << 24) +
						(a.charCodeAt(h + 1) << 16) +
						(a.charCodeAt(h + 2) << 8) +
						a.charCodeAt(h + 3)) !== 0
						? ((m =
								(v =
									((v =
										((v = ((v = (v - (N = v % 85)) / 85) - (E = v % 85)) / 85) - (d = v % 85)) /
										85) -
										(y = v % 85)) /
									85) % 85),
							u.push(m + 33, y + 33, d + 33, E + 33, N + 33))
						: u.push(122);
				return (
					(function (P, _) {
						for (var j = _; j > 0; j--) P.pop();
					})(u, l.length),
					String.fromCharCode.apply(String, u) + '~>'
				);
			},
			r = function (a) {
				var l,
					u,
					h,
					p,
					v,
					m = String,
					y = 'length',
					d = 255,
					E = 'charCodeAt',
					N = 'slice',
					P = 'replace';
				for (
					a[N](-2),
						a = a[N](0, -2)[P](/\s/g, '')[P]('z', '!!!!!'),
						h = [],
						p = 0,
						v = (a += l = 'uuuuu'[N](a[y] % 5 || 5))[y];
					v > p;
					p += 5
				)
					(u =
						52200625 * (a[E](p) - 33) +
						614125 * (a[E](p + 1) - 33) +
						7225 * (a[E](p + 2) - 33) +
						85 * (a[E](p + 3) - 33) +
						(a[E](p + 4) - 33)),
						h.push(d & (u >> 24), d & (u >> 16), d & (u >> 8), d & u);
				return (
					(function (_, j) {
						for (var O = j; O > 0; O--) _.pop();
					})(h, l[y]),
					m.fromCharCode.apply(m, h)
				);
			},
			i = function (a) {
				var l = new RegExp(/^([0-9A-Fa-f]{2})+$/);
				if (
					((a = a.replace(/\s/g, '')).indexOf('>') !== -1 && (a = a.substr(0, a.indexOf('>'))),
					a.length % 2 && (a += '0'),
					l.test(a) === !1)
				)
					return '';
				for (var u = '', h = 0; h < a.length; h += 2)
					u += String.fromCharCode('0x' + (a[h] + a[h + 1]));
				return u;
			},
			s = function (a) {
				for (var l = new Uint8Array(a.length), u = a.length; u--; ) l[u] = a.charCodeAt(u);
				return (a = (l = Cl(l)).reduce(function (h, p) {
					return h + String.fromCharCode(p);
				}, ''));
			};
		n.processDataByFilters = function (a, l) {
			var u = 0,
				h = a || '',
				p = [];
			for (typeof (l = l || []) == 'string' && (l = [l]), u = 0; u < l.length; u += 1)
				switch (l[u]) {
					case 'ASCII85Decode':
					case '/ASCII85Decode':
						(h = r(h)), p.push('/ASCII85Encode');
						break;
					case 'ASCII85Encode':
					case '/ASCII85Encode':
						(h = e(h)), p.push('/ASCII85Decode');
						break;
					case 'ASCIIHexDecode':
					case '/ASCIIHexDecode':
						(h = i(h)), p.push('/ASCIIHexEncode');
						break;
					case 'ASCIIHexEncode':
					case '/ASCIIHexEncode':
						(h =
							h
								.split('')
								.map(function (v) {
									return ('0' + v.charCodeAt().toString(16)).slice(-2);
								})
								.join('') + '>'),
							p.push('/ASCIIHexDecode');
						break;
					case 'FlateEncode':
					case '/FlateEncode':
						(h = s(h)), p.push('/FlateDecode');
						break;
					default:
						throw new Error('The filter: "' + l[u] + '" is not implemented');
				}
			return { data: h, reverseChain: p.reverse().join(' ') };
		};
	})(ot.API),
	(function (n) {
		(n.loadFile = function (e, r, i) {
			return (function (s, a, l) {
				(a = a !== !1), (l = typeof l == 'function' ? l : function () {});
				var u = void 0;
				try {
					u = (function (h, p, v) {
						var m = new XMLHttpRequest(),
							y = 0,
							d = function (E) {
								var N = E.length,
									P = [],
									_ = String.fromCharCode;
								for (y = 0; y < N; y += 1) P.push(_(255 & E.charCodeAt(y)));
								return P.join('');
							};
						if (
							(m.open('GET', h, !p),
							m.overrideMimeType('text/plain; charset=x-user-defined'),
							p === !1 &&
								(m.onload = function () {
									m.status === 200 ? v(d(this.responseText)) : v(void 0);
								}),
							m.send(null),
							p && m.status === 200)
						)
							return d(m.responseText);
					})(s, a, l);
				} catch {}
				return u;
			})(e, r, i);
		}),
			(n.loadImageFile = n.loadFile);
	})(ot.API),
	(function (n) {
		function e() {
			return (
				st.html2canvas
					? Promise.resolve(st.html2canvas)
					: Ll(() => import('./CBrSDip1.js'), [], import.meta.url)
			)
				.catch(function (l) {
					return Promise.reject(new Error('Could not load html2canvas: ' + l));
				})
				.then(function (l) {
					return l.default ? l.default : l;
				});
		}
		function r() {
			return (
				st.DOMPurify
					? Promise.resolve(st.DOMPurify)
					: Ll(() => import('./CQJ0hv7W.js'), [], import.meta.url)
			)
				.catch(function (l) {
					return Promise.reject(new Error('Could not load dompurify: ' + l));
				})
				.then(function (l) {
					return l.default ? l.default : l;
				});
		}
		var i = function (l) {
				var u = Bt(l);
				return u === 'undefined'
					? 'undefined'
					: u === 'string' || l instanceof String
						? 'string'
						: u === 'number' || l instanceof Number
							? 'number'
							: u === 'function' || l instanceof Function
								? 'function'
								: l && l.constructor === Array
									? 'array'
									: l && l.nodeType === 1
										? 'element'
										: u === 'object'
											? 'object'
											: 'unknown';
			},
			s = function (l, u) {
				var h = document.createElement(l);
				for (var p in (u.className && (h.className = u.className),
				u.innerHTML && u.dompurify && (h.innerHTML = u.dompurify.sanitize(u.innerHTML)),
				u.style))
					h.style[p] = u.style[p];
				return h;
			},
			a = function l(u) {
				var h = Object.assign(l.convert(Promise.resolve()), JSON.parse(JSON.stringify(l.template))),
					p = l.convert(Promise.resolve(), h);
				return (p = (p = p.setProgress(1, l, 1, [l])).set(u));
			};
		((a.prototype = Object.create(Promise.prototype)).constructor = a),
			(a.convert = function (l, u) {
				return (l.__proto__ = u || a.prototype), l;
			}),
			(a.template = {
				prop: {
					src: null,
					container: null,
					overlay: null,
					canvas: null,
					img: null,
					pdf: null,
					pageSize: null,
					callback: function () {}
				},
				progress: { val: 0, state: null, n: 0, stack: [] },
				opt: {
					filename: 'file.pdf',
					margin: [0, 0, 0, 0],
					enableLinks: !0,
					x: 0,
					y: 0,
					html2canvas: {},
					jsPDF: {},
					backgroundColor: 'transparent'
				}
			}),
			(a.prototype.from = function (l, u) {
				return this.then(function () {
					switch (
						(u =
							u ||
							(function (h) {
								switch (i(h)) {
									case 'string':
										return 'string';
									case 'element':
										return h.nodeName.toLowerCase() === 'canvas' ? 'canvas' : 'element';
									default:
										return 'unknown';
								}
							})(l))
					) {
						case 'string':
							return this.then(r).then(function (h) {
								return this.set({ src: s('div', { innerHTML: l, dompurify: h }) });
							});
						case 'element':
							return this.set({ src: l });
						case 'canvas':
							return this.set({ canvas: l });
						case 'img':
							return this.set({ img: l });
						default:
							return this.error('Unknown source type.');
					}
				});
			}),
			(a.prototype.to = function (l) {
				switch (l) {
					case 'container':
						return this.toContainer();
					case 'canvas':
						return this.toCanvas();
					case 'img':
						return this.toImg();
					case 'pdf':
						return this.toPdf();
					default:
						return this.error('Invalid target.');
				}
			}),
			(a.prototype.toContainer = function () {
				return this.thenList([
					function () {
						return this.prop.src || this.error('Cannot duplicate - no source HTML.');
					},
					function () {
						return this.prop.pageSize || this.setPageSize();
					}
				]).then(function () {
					var l = {
							position: 'relative',
							display: 'inline-block',
							width:
								(typeof this.opt.width != 'number' ||
								isNaN(this.opt.width) ||
								typeof this.opt.windowWidth != 'number' ||
								isNaN(this.opt.windowWidth)
									? Math.max(
											this.prop.src.clientWidth,
											this.prop.src.scrollWidth,
											this.prop.src.offsetWidth
										)
									: this.opt.windowWidth) + 'px',
							left: 0,
							right: 0,
							top: 0,
							margin: 'auto',
							backgroundColor: this.opt.backgroundColor
						},
						u = (function h(p, v) {
							for (
								var m = p.nodeType === 3 ? document.createTextNode(p.nodeValue) : p.cloneNode(!1),
									y = p.firstChild;
								y;
								y = y.nextSibling
							)
								(v !== !0 && y.nodeType === 1 && y.nodeName === 'SCRIPT') || m.appendChild(h(y, v));
							return (
								p.nodeType === 1 &&
									(p.nodeName === 'CANVAS'
										? ((m.width = p.width),
											(m.height = p.height),
											m.getContext('2d').drawImage(p, 0, 0))
										: (p.nodeName !== 'TEXTAREA' && p.nodeName !== 'SELECT') || (m.value = p.value),
									m.addEventListener(
										'load',
										function () {
											(m.scrollTop = p.scrollTop), (m.scrollLeft = p.scrollLeft);
										},
										!0
									)),
								m
							);
						})(this.prop.src, this.opt.html2canvas.javascriptEnabled);
					u.tagName === 'BODY' &&
						(l.height =
							Math.max(
								document.body.scrollHeight,
								document.body.offsetHeight,
								document.documentElement.clientHeight,
								document.documentElement.scrollHeight,
								document.documentElement.offsetHeight
							) + 'px'),
						(this.prop.overlay = s('div', {
							className: 'html2pdf__overlay',
							style: {
								position: 'fixed',
								overflow: 'hidden',
								zIndex: 1e3,
								left: '-100000px',
								right: 0,
								bottom: 0,
								top: 0
							}
						})),
						(this.prop.container = s('div', { className: 'html2pdf__container', style: l })),
						this.prop.container.appendChild(u),
						this.prop.container.firstChild.appendChild(
							s('div', {
								style: {
									clear: 'both',
									border: '0 none transparent',
									margin: 0,
									padding: 0,
									height: 0
								}
							})
						),
						(this.prop.container.style.float = 'none'),
						this.prop.overlay.appendChild(this.prop.container),
						document.body.appendChild(this.prop.overlay),
						(this.prop.container.firstChild.style.position = 'relative'),
						(this.prop.container.height =
							Math.max(
								this.prop.container.firstChild.clientHeight,
								this.prop.container.firstChild.scrollHeight,
								this.prop.container.firstChild.offsetHeight
							) + 'px');
				});
			}),
			(a.prototype.toCanvas = function () {
				var l = [
					function () {
						return document.body.contains(this.prop.container) || this.toContainer();
					}
				];
				return this.thenList(l)
					.then(e)
					.then(function (u) {
						var h = Object.assign({}, this.opt.html2canvas);
						return delete h.onrendered, u(this.prop.container, h);
					})
					.then(function (u) {
						(this.opt.html2canvas.onrendered || function () {})(u),
							(this.prop.canvas = u),
							document.body.removeChild(this.prop.overlay);
					});
			}),
			(a.prototype.toContext2d = function () {
				var l = [
					function () {
						return document.body.contains(this.prop.container) || this.toContainer();
					}
				];
				return this.thenList(l)
					.then(e)
					.then(function (u) {
						var h = this.opt.jsPDF,
							p = this.opt.fontFaces,
							v =
								typeof this.opt.width != 'number' ||
								isNaN(this.opt.width) ||
								typeof this.opt.windowWidth != 'number' ||
								isNaN(this.opt.windowWidth)
									? 1
									: this.opt.width / this.opt.windowWidth,
							m = Object.assign(
								{
									async: !0,
									allowTaint: !0,
									scale: v,
									scrollX: this.opt.scrollX || 0,
									scrollY: this.opt.scrollY || 0,
									backgroundColor: '#ffffff',
									imageTimeout: 15e3,
									logging: !0,
									proxy: null,
									removeContainer: !0,
									foreignObjectRendering: !1,
									useCORS: !1
								},
								this.opt.html2canvas
							);
						if (
							(delete m.onrendered,
							(h.context2d.autoPaging = this.opt.autoPaging === void 0 || this.opt.autoPaging),
							(h.context2d.posX = this.opt.x),
							(h.context2d.posY = this.opt.y),
							(h.context2d.margin = this.opt.margin),
							(h.context2d.fontFaces = p),
							p)
						)
							for (var y = 0; y < p.length; ++y) {
								var d = p[y],
									E = d.src.find(function (N) {
										return N.format === 'truetype';
									});
								E && h.addFont(E.url, d.ref.name, d.ref.style);
							}
						return (
							(m.windowHeight = m.windowHeight || 0),
							(m.windowHeight =
								m.windowHeight == 0
									? Math.max(
											this.prop.container.clientHeight,
											this.prop.container.scrollHeight,
											this.prop.container.offsetHeight
										)
									: m.windowHeight),
							h.context2d.save(!0),
							u(this.prop.container, m)
						);
					})
					.then(function (u) {
						this.opt.jsPDF.context2d.restore(!0),
							(this.opt.html2canvas.onrendered || function () {})(u),
							(this.prop.canvas = u),
							document.body.removeChild(this.prop.overlay);
					});
			}),
			(a.prototype.toImg = function () {
				return this.thenList([
					function () {
						return this.prop.canvas || this.toCanvas();
					}
				]).then(function () {
					var l = this.prop.canvas.toDataURL(
						'image/' + this.opt.image.type,
						this.opt.image.quality
					);
					(this.prop.img = document.createElement('img')), (this.prop.img.src = l);
				});
			}),
			(a.prototype.toPdf = function () {
				return this.thenList([
					function () {
						return this.toContext2d();
					}
				]).then(function () {
					this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
				});
			}),
			(a.prototype.output = function (l, u, h) {
				return (h = h || 'pdf').toLowerCase() === 'img' || h.toLowerCase() === 'image'
					? this.outputImg(l, u)
					: this.outputPdf(l, u);
			}),
			(a.prototype.outputPdf = function (l, u) {
				return this.thenList([
					function () {
						return this.prop.pdf || this.toPdf();
					}
				]).then(function () {
					return this.prop.pdf.output(l, u);
				});
			}),
			(a.prototype.outputImg = function (l) {
				return this.thenList([
					function () {
						return this.prop.img || this.toImg();
					}
				]).then(function () {
					switch (l) {
						case void 0:
						case 'img':
							return this.prop.img;
						case 'datauristring':
						case 'dataurlstring':
							return this.prop.img.src;
						case 'datauri':
						case 'dataurl':
							return (document.location.href = this.prop.img.src);
						default:
							throw 'Image output type "' + l + '" is not supported.';
					}
				});
			}),
			(a.prototype.save = function (l) {
				return this.thenList([
					function () {
						return this.prop.pdf || this.toPdf();
					}
				])
					.set(l ? { filename: l } : null)
					.then(function () {
						this.prop.pdf.save(this.opt.filename);
					});
			}),
			(a.prototype.doCallback = function () {
				return this.thenList([
					function () {
						return this.prop.pdf || this.toPdf();
					}
				]).then(function () {
					this.prop.callback(this.prop.pdf);
				});
			}),
			(a.prototype.set = function (l) {
				if (i(l) !== 'object') return this;
				var u = Object.keys(l || {}).map(function (h) {
					if (h in a.template.prop)
						return function () {
							this.prop[h] = l[h];
						};
					switch (h) {
						case 'margin':
							return this.setMargin.bind(this, l.margin);
						case 'jsPDF':
							return function () {
								return (this.opt.jsPDF = l.jsPDF), this.setPageSize();
							};
						case 'pageSize':
							return this.setPageSize.bind(this, l.pageSize);
						default:
							return function () {
								this.opt[h] = l[h];
							};
					}
				}, this);
				return this.then(function () {
					return this.thenList(u);
				});
			}),
			(a.prototype.get = function (l, u) {
				return this.then(function () {
					var h = l in a.template.prop ? this.prop[l] : this.opt[l];
					return u ? u(h) : h;
				});
			}),
			(a.prototype.setMargin = function (l) {
				return this.then(function () {
					switch (i(l)) {
						case 'number':
							l = [l, l, l, l];
						case 'array':
							if ((l.length === 2 && (l = [l[0], l[1], l[0], l[1]]), l.length === 4)) break;
						default:
							return this.error('Invalid margin array.');
					}
					this.opt.margin = l;
				}).then(this.setPageSize);
			}),
			(a.prototype.setPageSize = function (l) {
				function u(h, p) {
					return Math.floor(((h * p) / 72) * 96);
				}
				return this.then(function () {
					(l = l || ot.getPageSize(this.opt.jsPDF)).hasOwnProperty('inner') ||
						((l.inner = {
							width: l.width - this.opt.margin[1] - this.opt.margin[3],
							height: l.height - this.opt.margin[0] - this.opt.margin[2]
						}),
						(l.inner.px = { width: u(l.inner.width, l.k), height: u(l.inner.height, l.k) }),
						(l.inner.ratio = l.inner.height / l.inner.width)),
						(this.prop.pageSize = l);
				});
			}),
			(a.prototype.setProgress = function (l, u, h, p) {
				return (
					l != null && (this.progress.val = l),
					u != null && (this.progress.state = u),
					h != null && (this.progress.n = h),
					p != null && (this.progress.stack = p),
					(this.progress.ratio = this.progress.val / this.progress.state),
					this
				);
			}),
			(a.prototype.updateProgress = function (l, u, h, p) {
				return this.setProgress(
					l ? this.progress.val + l : null,
					u || null,
					h ? this.progress.n + h : null,
					p ? this.progress.stack.concat(p) : null
				);
			}),
			(a.prototype.then = function (l, u) {
				var h = this;
				return this.thenCore(l, u, function (p, v) {
					return (
						h.updateProgress(null, null, 1, [p]),
						Promise.prototype.then
							.call(this, function (m) {
								return h.updateProgress(null, p), m;
							})
							.then(p, v)
							.then(function (m) {
								return h.updateProgress(1), m;
							})
					);
				});
			}),
			(a.prototype.thenCore = function (l, u, h) {
				(h = h || Promise.prototype.then), l && (l = l.bind(this)), u && (u = u.bind(this));
				var p =
						Promise.toString().indexOf('[native code]') !== -1 && Promise.name === 'Promise'
							? this
							: a.convert(Object.assign({}, this), Promise.prototype),
					v = h.call(p, l, u);
				return a.convert(v, this.__proto__);
			}),
			(a.prototype.thenExternal = function (l, u) {
				return Promise.prototype.then.call(this, l, u);
			}),
			(a.prototype.thenList = function (l) {
				var u = this;
				return (
					l.forEach(function (h) {
						u = u.thenCore(h);
					}),
					u
				);
			}),
			(a.prototype.catch = function (l) {
				l && (l = l.bind(this));
				var u = Promise.prototype.catch.call(this, l);
				return a.convert(u, this);
			}),
			(a.prototype.catchExternal = function (l) {
				return Promise.prototype.catch.call(this, l);
			}),
			(a.prototype.error = function (l) {
				return this.then(function () {
					throw new Error(l);
				});
			}),
			(a.prototype.using = a.prototype.set),
			(a.prototype.saveAs = a.prototype.save),
			(a.prototype.export = a.prototype.output),
			(a.prototype.run = a.prototype.then),
			(ot.getPageSize = function (l, u, h) {
				if (Bt(l) === 'object') {
					var p = l;
					(l = p.orientation), (u = p.unit || u), (h = p.format || h);
				}
				(u = u || 'mm'), (h = h || 'a4'), (l = ('' + (l || 'P')).toLowerCase());
				var v,
					m = ('' + h).toLowerCase(),
					y = {
						a0: [2383.94, 3370.39],
						a1: [1683.78, 2383.94],
						a2: [1190.55, 1683.78],
						a3: [841.89, 1190.55],
						a4: [595.28, 841.89],
						a5: [419.53, 595.28],
						a6: [297.64, 419.53],
						a7: [209.76, 297.64],
						a8: [147.4, 209.76],
						a9: [104.88, 147.4],
						a10: [73.7, 104.88],
						b0: [2834.65, 4008.19],
						b1: [2004.09, 2834.65],
						b2: [1417.32, 2004.09],
						b3: [1000.63, 1417.32],
						b4: [708.66, 1000.63],
						b5: [498.9, 708.66],
						b6: [354.33, 498.9],
						b7: [249.45, 354.33],
						b8: [175.75, 249.45],
						b9: [124.72, 175.75],
						b10: [87.87, 124.72],
						c0: [2599.37, 3676.54],
						c1: [1836.85, 2599.37],
						c2: [1298.27, 1836.85],
						c3: [918.43, 1298.27],
						c4: [649.13, 918.43],
						c5: [459.21, 649.13],
						c6: [323.15, 459.21],
						c7: [229.61, 323.15],
						c8: [161.57, 229.61],
						c9: [113.39, 161.57],
						c10: [79.37, 113.39],
						dl: [311.81, 623.62],
						letter: [612, 792],
						'government-letter': [576, 756],
						legal: [612, 1008],
						'junior-legal': [576, 360],
						ledger: [1224, 792],
						tabloid: [792, 1224],
						'credit-card': [153, 243]
					};
				switch (u) {
					case 'pt':
						v = 1;
						break;
					case 'mm':
						v = 72 / 25.4;
						break;
					case 'cm':
						v = 72 / 2.54;
						break;
					case 'in':
						v = 72;
						break;
					case 'px':
						v = 0.75;
						break;
					case 'pc':
					case 'em':
						v = 12;
						break;
					case 'ex':
						v = 6;
						break;
					default:
						throw 'Invalid unit: ' + u;
				}
				var d,
					E = 0,
					N = 0;
				if (y.hasOwnProperty(m)) (E = y[m][1] / v), (N = y[m][0] / v);
				else
					try {
						(E = h[1]), (N = h[0]);
					} catch {
						throw new Error('Invalid format: ' + h);
					}
				if (l === 'p' || l === 'portrait') (l = 'p'), N > E && ((d = N), (N = E), (E = d));
				else {
					if (l !== 'l' && l !== 'landscape') throw 'Invalid orientation: ' + l;
					(l = 'l'), E > N && ((d = N), (N = E), (E = d));
				}
				return { width: N, height: E, unit: u, k: v, orientation: l };
			}),
			(n.html = function (l, u) {
				((u = u || {}).callback = u.callback || function () {}),
					(u.html2canvas = u.html2canvas || {}),
					(u.html2canvas.canvas = u.html2canvas.canvas || this.canvas),
					(u.jsPDF = u.jsPDF || this),
					(u.fontFaces = u.fontFaces ? u.fontFaces.map(Ml) : null);
				var h = new a(u);
				return u.worker ? h : h.from(l).doCallback();
			});
	})(ot.API),
	(ot.API.addJS = function (n) {
		return (
			(Rc = n),
			this.internal.events.subscribe('postPutResources', function () {
				(as = this.internal.newObject()),
					this.internal.out('<<'),
					this.internal.out('/Names [(EmbeddedJS) ' + (as + 1) + ' 0 R]'),
					this.internal.out('>>'),
					this.internal.out('endobj'),
					(Oc = this.internal.newObject()),
					this.internal.out('<<'),
					this.internal.out('/S /JavaScript'),
					this.internal.out('/JS (' + Rc + ')'),
					this.internal.out('>>'),
					this.internal.out('endobj');
			}),
			this.internal.events.subscribe('putCatalog', function () {
				as !== void 0 &&
					Oc !== void 0 &&
					this.internal.out('/Names <</JavaScript ' + as + ' 0 R>>');
			}),
			this
		);
	}),
	(function (n) {
		var e;
		n.events.push([
			'postPutResources',
			function () {
				var r = this,
					i = /^(\d+) 0 obj$/;
				if (this.outline.root.children.length > 0)
					for (var s = r.outline.render().split(/\r\n/), a = 0; a < s.length; a++) {
						var l = s[a],
							u = i.exec(l);
						if (u != null) {
							var h = u[1];
							r.internal.newObjectDeferredBegin(h, !1);
						}
						r.internal.write(l);
					}
				if (this.outline.createNamedDestinations) {
					var p = this.internal.pages.length,
						v = [];
					for (a = 0; a < p; a++) {
						var m = r.internal.newObject();
						v.push(m);
						var y = r.internal.getPageInfo(a + 1);
						r.internal.write('<< /D[' + y.objId + ' 0 R /XYZ null null null]>> endobj');
					}
					var d = r.internal.newObject();
					for (r.internal.write('<< /Names [ '), a = 0; a < v.length; a++)
						r.internal.write('(page_' + (a + 1) + ')' + v[a] + ' 0 R');
					r.internal.write(' ] >>', 'endobj'),
						(e = r.internal.newObject()),
						r.internal.write('<< /Dests ' + d + ' 0 R'),
						r.internal.write('>>', 'endobj');
				}
			}
		]),
			n.events.push([
				'putCatalog',
				function () {
					this.outline.root.children.length > 0 &&
						(this.internal.write('/Outlines', this.outline.makeRef(this.outline.root)),
						this.outline.createNamedDestinations && this.internal.write('/Names ' + e + ' 0 R'));
				}
			]),
			n.events.push([
				'initialized',
				function () {
					var r = this;
					(r.outline = { createNamedDestinations: !1, root: { children: [] } }),
						(r.outline.add = function (i, s, a) {
							var l = { title: s, options: a, children: [] };
							return i == null && (i = this.root), i.children.push(l), l;
						}),
						(r.outline.render = function () {
							return (
								(this.ctx = {}),
								(this.ctx.val = ''),
								(this.ctx.pdf = r),
								this.genIds_r(this.root),
								this.renderRoot(this.root),
								this.renderItems(this.root),
								this.ctx.val
							);
						}),
						(r.outline.genIds_r = function (i) {
							i.id = r.internal.newObjectDeferred();
							for (var s = 0; s < i.children.length; s++) this.genIds_r(i.children[s]);
						}),
						(r.outline.renderRoot = function (i) {
							this.objStart(i),
								this.line('/Type /Outlines'),
								i.children.length > 0 &&
									(this.line('/First ' + this.makeRef(i.children[0])),
									this.line('/Last ' + this.makeRef(i.children[i.children.length - 1]))),
								this.line('/Count ' + this.count_r({ count: 0 }, i)),
								this.objEnd();
						}),
						(r.outline.renderItems = function (i) {
							for (
								var s = this.ctx.pdf.internal.getVerticalCoordinateString, a = 0;
								a < i.children.length;
								a++
							) {
								var l = i.children[a];
								this.objStart(l),
									this.line('/Title ' + this.makeString(l.title)),
									this.line('/Parent ' + this.makeRef(i)),
									a > 0 && this.line('/Prev ' + this.makeRef(i.children[a - 1])),
									a < i.children.length - 1 &&
										this.line('/Next ' + this.makeRef(i.children[a + 1])),
									l.children.length > 0 &&
										(this.line('/First ' + this.makeRef(l.children[0])),
										this.line('/Last ' + this.makeRef(l.children[l.children.length - 1])));
								var u = (this.count = this.count_r({ count: 0 }, l));
								if ((u > 0 && this.line('/Count ' + u), l.options && l.options.pageNumber)) {
									var h = r.internal.getPageInfo(l.options.pageNumber);
									this.line('/Dest [' + h.objId + ' 0 R /XYZ 0 ' + s(0) + ' 0]');
								}
								this.objEnd();
							}
							for (var p = 0; p < i.children.length; p++) this.renderItems(i.children[p]);
						}),
						(r.outline.line = function (i) {
							this.ctx.val +=
								i +
								`\r
`;
						}),
						(r.outline.makeRef = function (i) {
							return i.id + ' 0 R';
						}),
						(r.outline.makeString = function (i) {
							return '(' + r.internal.pdfEscape(i) + ')';
						}),
						(r.outline.objStart = function (i) {
							this.ctx.val +=
								`\r
` +
								i.id +
								` 0 obj\r
<<\r
`;
						}),
						(r.outline.objEnd = function () {
							this.ctx.val += `>> \r
endobj\r
`;
						}),
						(r.outline.count_r = function (i, s) {
							for (var a = 0; a < s.children.length; a++) i.count++, this.count_r(i, s.children[a]);
							return i.count;
						});
				}
			]);
	})(ot.API),
	(function (n) {
		var e = [192, 193, 194, 195, 196, 197, 198, 199];
		n.processJPEG = function (r, i, s, a, l, u) {
			var h,
				p = this.decode.DCT_DECODE,
				v = null;
			if (
				typeof r == 'string' ||
				this.__addimage__.isArrayBuffer(r) ||
				this.__addimage__.isArrayBufferView(r)
			) {
				switch (
					((r = l || r),
					(r = this.__addimage__.isArrayBuffer(r) ? new Uint8Array(r) : r),
					(h = (function (m) {
						for (
							var y,
								d = 256 * m.charCodeAt(4) + m.charCodeAt(5),
								E = m.length,
								N = { width: 0, height: 0, numcomponents: 1 },
								P = 4;
							P < E;
							P += 2
						) {
							if (((P += d), e.indexOf(m.charCodeAt(P + 1)) !== -1)) {
								(y = 256 * m.charCodeAt(P + 5) + m.charCodeAt(P + 6)),
									(N = {
										width: 256 * m.charCodeAt(P + 7) + m.charCodeAt(P + 8),
										height: y,
										numcomponents: m.charCodeAt(P + 9)
									});
								break;
							}
							d = 256 * m.charCodeAt(P + 2) + m.charCodeAt(P + 3);
						}
						return N;
					})(
						(r = this.__addimage__.isArrayBufferView(r)
							? this.__addimage__.arrayBufferToBinaryString(r)
							: r)
					)).numcomponents)
				) {
					case 1:
						u = this.color_spaces.DEVICE_GRAY;
						break;
					case 4:
						u = this.color_spaces.DEVICE_CMYK;
						break;
					case 3:
						u = this.color_spaces.DEVICE_RGB;
				}
				v = {
					data: r,
					width: h.width,
					height: h.height,
					colorSpace: u,
					bitsPerComponent: 8,
					filter: p,
					index: i,
					alias: s
				};
			}
			return v;
		};
	})(ot.API);
var pa,
	os,
	qc,
	zc,
	Uc,
	h1 = (function () {
		var n, e, r;
		function i(a) {
			var l, u, h, p, v, m, y, d, E, N, P, _, j, O;
			for (
				this.data = a,
					this.pos = 8,
					this.palette = [],
					this.imgData = [],
					this.transparency = {},
					this.animation = null,
					this.text = {},
					m = null;
				;

			) {
				switch (
					((l = this.readUInt32()),
					(E = function () {
						var G, W;
						for (W = [], G = 0; G < 4; ++G) W.push(String.fromCharCode(this.data[this.pos++]));
						return W;
					}
						.call(this)
						.join('')))
				) {
					case 'IHDR':
						(this.width = this.readUInt32()),
							(this.height = this.readUInt32()),
							(this.bits = this.data[this.pos++]),
							(this.colorType = this.data[this.pos++]),
							(this.compressionMethod = this.data[this.pos++]),
							(this.filterMethod = this.data[this.pos++]),
							(this.interlaceMethod = this.data[this.pos++]);
						break;
					case 'acTL':
						this.animation = {
							numFrames: this.readUInt32(),
							numPlays: this.readUInt32() || 1 / 0,
							frames: []
						};
						break;
					case 'PLTE':
						this.palette = this.read(l);
						break;
					case 'fcTL':
						m && this.animation.frames.push(m),
							(this.pos += 4),
							(m = {
								width: this.readUInt32(),
								height: this.readUInt32(),
								xOffset: this.readUInt32(),
								yOffset: this.readUInt32()
							}),
							(v = this.readUInt16()),
							(p = this.readUInt16() || 100),
							(m.delay = (1e3 * v) / p),
							(m.disposeOp = this.data[this.pos++]),
							(m.blendOp = this.data[this.pos++]),
							(m.data = []);
						break;
					case 'IDAT':
					case 'fdAT':
						for (
							E === 'fdAT' && ((this.pos += 4), (l -= 4)),
								a = (m != null ? m.data : void 0) || this.imgData,
								_ = 0;
							0 <= l ? _ < l : _ > l;
							0 <= l ? ++_ : --_
						)
							a.push(this.data[this.pos++]);
						break;
					case 'tRNS':
						switch (((this.transparency = {}), this.colorType)) {
							case 3:
								if (
									((h = this.palette.length / 3),
									(this.transparency.indexed = this.read(l)),
									this.transparency.indexed.length > h)
								)
									throw new Error('More transparent colors than palette size');
								if ((N = h - this.transparency.indexed.length) > 0)
									for (j = 0; 0 <= N ? j < N : j > N; 0 <= N ? ++j : --j)
										this.transparency.indexed.push(255);
								break;
							case 0:
								this.transparency.grayscale = this.read(l)[0];
								break;
							case 2:
								this.transparency.rgb = this.read(l);
						}
						break;
					case 'tEXt':
						(y = (P = this.read(l)).indexOf(0)),
							(d = String.fromCharCode.apply(String, P.slice(0, y))),
							(this.text[d] = String.fromCharCode.apply(String, P.slice(y + 1)));
						break;
					case 'IEND':
						return (
							m && this.animation.frames.push(m),
							(this.colors = function () {
								switch (this.colorType) {
									case 0:
									case 3:
									case 4:
										return 1;
									case 2:
									case 6:
										return 3;
								}
							}.call(this)),
							(this.hasAlphaChannel = (O = this.colorType) === 4 || O === 6),
							(u = this.colors + (this.hasAlphaChannel ? 1 : 0)),
							(this.pixelBitlength = this.bits * u),
							(this.colorSpace = function () {
								switch (this.colors) {
									case 1:
										return 'DeviceGray';
									case 3:
										return 'DeviceRGB';
								}
							}.call(this)),
							void (this.imgData = new Uint8Array(this.imgData))
						);
					default:
						this.pos += l;
				}
				if (((this.pos += 4), this.pos > this.data.length))
					throw new Error('Incomplete or corrupt PNG file');
			}
		}
		(i.prototype.read = function (a) {
			var l, u;
			for (u = [], l = 0; 0 <= a ? l < a : l > a; 0 <= a ? ++l : --l) u.push(this.data[this.pos++]);
			return u;
		}),
			(i.prototype.readUInt32 = function () {
				return (
					(this.data[this.pos++] << 24) |
					(this.data[this.pos++] << 16) |
					(this.data[this.pos++] << 8) |
					this.data[this.pos++]
				);
			}),
			(i.prototype.readUInt16 = function () {
				return (this.data[this.pos++] << 8) | this.data[this.pos++];
			}),
			(i.prototype.decodePixels = function (a) {
				var l = this.pixelBitlength / 8,
					u = new Uint8Array(this.width * this.height * l),
					h = 0,
					p = this;
				if ((a == null && (a = this.imgData), a.length === 0)) return new Uint8Array(0);
				function v(m, y, d, E) {
					var N,
						P,
						_,
						j,
						O,
						G,
						W,
						oe,
						ee,
						z,
						re,
						de,
						C,
						L,
						q,
						B,
						Z,
						Q,
						ie,
						K,
						le,
						ue = Math.ceil((p.width - m) / d),
						Se = Math.ceil((p.height - y) / E),
						b = p.width == ue && p.height == Se;
					for (
						L = l * ue, de = b ? u : new Uint8Array(L * Se), G = a.length, C = 0, P = 0;
						C < Se && h < G;

					) {
						switch (a[h++]) {
							case 0:
								for (j = Z = 0; Z < L; j = Z += 1) de[P++] = a[h++];
								break;
							case 1:
								for (j = Q = 0; Q < L; j = Q += 1)
									(N = a[h++]), (O = j < l ? 0 : de[P - l]), (de[P++] = (N + O) % 256);
								break;
							case 2:
								for (j = ie = 0; ie < L; j = ie += 1)
									(N = a[h++]),
										(_ = (j - (j % l)) / l),
										(q = C && de[(C - 1) * L + _ * l + (j % l)]),
										(de[P++] = (q + N) % 256);
								break;
							case 3:
								for (j = K = 0; K < L; j = K += 1)
									(N = a[h++]),
										(_ = (j - (j % l)) / l),
										(O = j < l ? 0 : de[P - l]),
										(q = C && de[(C - 1) * L + _ * l + (j % l)]),
										(de[P++] = (N + Math.floor((O + q) / 2)) % 256);
								break;
							case 4:
								for (j = le = 0; le < L; j = le += 1)
									(N = a[h++]),
										(_ = (j - (j % l)) / l),
										(O = j < l ? 0 : de[P - l]),
										C === 0
											? (q = B = 0)
											: ((q = de[(C - 1) * L + _ * l + (j % l)]),
												(B = _ && de[(C - 1) * L + (_ - 1) * l + (j % l)])),
										(W = O + q - B),
										(oe = Math.abs(W - O)),
										(z = Math.abs(W - q)),
										(re = Math.abs(W - B)),
										(ee = oe <= z && oe <= re ? O : z <= re ? q : B),
										(de[P++] = (N + ee) % 256);
								break;
							default:
								throw new Error('Invalid filter algorithm: ' + a[h - 1]);
						}
						if (!b) {
							var T = ((y + C * E) * p.width + m) * l,
								M = C * L;
							for (j = 0; j < ue; j += 1) {
								for (var H = 0; H < l; H += 1) u[T++] = de[M++];
								T += (d - 1) * l;
							}
						}
						C++;
					}
				}
				return (
					(a = W2(a)),
					p.interlaceMethod == 1
						? (v(0, 0, 8, 8),
							v(4, 0, 8, 8),
							v(0, 4, 4, 8),
							v(2, 0, 4, 4),
							v(0, 2, 2, 4),
							v(1, 0, 2, 2),
							v(0, 1, 1, 2))
						: v(0, 0, 1, 1),
					u
				);
			}),
			(i.prototype.decodePalette = function () {
				var a, l, u, h, p, v, m, y, d;
				for (
					u = this.palette,
						v = this.transparency.indexed || [],
						p = new Uint8Array((v.length || 0) + u.length),
						h = 0,
						a = 0,
						l = m = 0,
						y = u.length;
					m < y;
					l = m += 3
				)
					(p[h++] = u[l]),
						(p[h++] = u[l + 1]),
						(p[h++] = u[l + 2]),
						(p[h++] = (d = v[a++]) != null ? d : 255);
				return p;
			}),
			(i.prototype.copyToImageData = function (a, l) {
				var u, h, p, v, m, y, d, E, N, P, _;
				if (
					((h = this.colors),
					(N = null),
					(u = this.hasAlphaChannel),
					this.palette.length &&
						((N =
							(_ = this._decodedPalette) != null
								? _
								: (this._decodedPalette = this.decodePalette())),
						(h = 4),
						(u = !0)),
					(E = (p = a.data || a).length),
					(m = N || l),
					(v = y = 0),
					h === 1)
				)
					for (; v < E; )
						(d = N ? 4 * l[v / 4] : y),
							(P = m[d++]),
							(p[v++] = P),
							(p[v++] = P),
							(p[v++] = P),
							(p[v++] = u ? m[d++] : 255),
							(y = d);
				else
					for (; v < E; )
						(d = N ? 4 * l[v / 4] : y),
							(p[v++] = m[d++]),
							(p[v++] = m[d++]),
							(p[v++] = m[d++]),
							(p[v++] = u ? m[d++] : 255),
							(y = d);
			}),
			(i.prototype.decode = function () {
				var a;
				return (
					(a = new Uint8Array(this.width * this.height * 4)),
					this.copyToImageData(a, this.decodePixels()),
					a
				);
			});
		var s = function () {
			if (Object.prototype.toString.call(st) === '[object Window]') {
				try {
					(e = st.document.createElement('canvas')), (r = e.getContext('2d'));
				} catch {
					return !1;
				}
				return !0;
			}
			return !1;
		};
		return (
			s(),
			(n = function (a) {
				var l;
				if (s() === !0)
					return (
						(r.width = a.width),
						(r.height = a.height),
						r.clearRect(0, 0, a.width, a.height),
						r.putImageData(a, 0, 0),
						((l = new Image()).src = e.toDataURL()),
						l
					);
				throw new Error('This method requires a Browser with Canvas-capability.');
			}),
			(i.prototype.decodeFrames = function (a) {
				var l, u, h, p, v, m, y, d;
				if (this.animation) {
					for (d = [], u = v = 0, m = (y = this.animation.frames).length; v < m; u = ++v)
						(l = y[u]),
							(h = a.createImageData(l.width, l.height)),
							(p = this.decodePixels(new Uint8Array(l.data))),
							this.copyToImageData(h, p),
							(l.imageData = h),
							d.push((l.image = n(h)));
					return d;
				}
			}),
			(i.prototype.renderFrame = function (a, l) {
				var u, h, p;
				return (
					(u = (h = this.animation.frames)[l]),
					(p = h[l - 1]),
					l === 0 && a.clearRect(0, 0, this.width, this.height),
					(p != null ? p.disposeOp : void 0) === 1
						? a.clearRect(p.xOffset, p.yOffset, p.width, p.height)
						: (p != null ? p.disposeOp : void 0) === 2 &&
							a.putImageData(p.imageData, p.xOffset, p.yOffset),
					u.blendOp === 0 && a.clearRect(u.xOffset, u.yOffset, u.width, u.height),
					a.drawImage(u.image, u.xOffset, u.yOffset)
				);
			}),
			(i.prototype.animate = function (a) {
				var l,
					u,
					h,
					p,
					v,
					m,
					y = this;
				return (
					(u = 0),
					(m = this.animation),
					(p = m.numFrames),
					(h = m.frames),
					(v = m.numPlays),
					(l = function () {
						var d, E;
						if (((d = u++ % p), (E = h[d]), y.renderFrame(a, d), p > 1 && u / p < v))
							return (y.animation._timeout = setTimeout(l, E.delay));
					})()
				);
			}),
			(i.prototype.stopAnimation = function () {
				var a;
				return clearTimeout((a = this.animation) != null ? a._timeout : void 0);
			}),
			(i.prototype.render = function (a) {
				var l, u;
				return (
					a._png && a._png.stopAnimation(),
					(a._png = this),
					(a.width = this.width),
					(a.height = this.height),
					(l = a.getContext('2d')),
					this.animation
						? (this.decodeFrames(l), this.animate(l))
						: ((u = l.createImageData(this.width, this.height)),
							this.copyToImageData(u, this.decodePixels()),
							l.putImageData(u, 0, 0))
				);
			}),
			i
		);
	})();
/**
 * @license
 *
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 *//**
 * @license
 * (c) Dean McNamee <dean@gmail.com>, 2013.
 *
 * https://github.com/deanm/omggif
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
 * including animation and compression.  It does not rely on any specific
 * underlying system, so should run in the browser, Node, or Plask.
 */ function d1(n) {
	var e = 0;
	if (
		n[e++] !== 71 ||
		n[e++] !== 73 ||
		n[e++] !== 70 ||
		n[e++] !== 56 ||
		((n[e++] + 1) & 253) != 56 ||
		n[e++] !== 97
	)
		throw new Error('Invalid GIF 87a/89a header.');
	var r = n[e++] | (n[e++] << 8),
		i = n[e++] | (n[e++] << 8),
		s = n[e++],
		a = s >> 7,
		l = 1 << ((7 & s) + 1);
	n[e++], n[e++];
	var u = null,
		h = null;
	a && ((u = e), (h = l), (e += 3 * l));
	var p = !0,
		v = [],
		m = 0,
		y = null,
		d = 0,
		E = null;
	for (this.width = r, this.height = i; p && e < n.length; )
		switch (n[e++]) {
			case 33:
				switch (n[e++]) {
					case 255:
						if (
							n[e] !== 11 ||
							(n[e + 1] == 78 &&
								n[e + 2] == 69 &&
								n[e + 3] == 84 &&
								n[e + 4] == 83 &&
								n[e + 5] == 67 &&
								n[e + 6] == 65 &&
								n[e + 7] == 80 &&
								n[e + 8] == 69 &&
								n[e + 9] == 50 &&
								n[e + 10] == 46 &&
								n[e + 11] == 48 &&
								n[e + 12] == 3 &&
								n[e + 13] == 1 &&
								n[e + 16] == 0)
						)
							(e += 14), (E = n[e++] | (n[e++] << 8)), e++;
						else
							for (e += 12; ; ) {
								if (!((C = n[e++]) >= 0)) throw Error('Invalid block size');
								if (C === 0) break;
								e += C;
							}
						break;
					case 249:
						if (n[e++] !== 4 || n[e + 4] !== 0)
							throw new Error('Invalid graphics extension block.');
						var N = n[e++];
						(m = n[e++] | (n[e++] << 8)),
							(y = n[e++]),
							(1 & N) == 0 && (y = null),
							(d = (N >> 2) & 7),
							e++;
						break;
					case 254:
						for (;;) {
							if (!((C = n[e++]) >= 0)) throw Error('Invalid block size');
							if (C === 0) break;
							e += C;
						}
						break;
					default:
						throw new Error('Unknown graphic control label: 0x' + n[e - 1].toString(16));
				}
				break;
			case 44:
				var P = n[e++] | (n[e++] << 8),
					_ = n[e++] | (n[e++] << 8),
					j = n[e++] | (n[e++] << 8),
					O = n[e++] | (n[e++] << 8),
					G = n[e++],
					W = (G >> 6) & 1,
					oe = 1 << ((7 & G) + 1),
					ee = u,
					z = h,
					re = !1;
				G >> 7 && ((re = !0), (ee = e), (z = oe), (e += 3 * oe));
				var de = e;
				for (e++; ; ) {
					var C;
					if (!((C = n[e++]) >= 0)) throw Error('Invalid block size');
					if (C === 0) break;
					e += C;
				}
				v.push({
					x: P,
					y: _,
					width: j,
					height: O,
					has_local_palette: re,
					palette_offset: ee,
					palette_size: z,
					data_offset: de,
					data_length: e - de,
					transparent_index: y,
					interlaced: !!W,
					delay: m,
					disposal: d
				});
				break;
			case 59:
				p = !1;
				break;
			default:
				throw new Error('Unknown gif block: 0x' + n[e - 1].toString(16));
		}
	(this.numFrames = function () {
		return v.length;
	}),
		(this.loopCount = function () {
			return E;
		}),
		(this.frameInfo = function (L) {
			if (L < 0 || L >= v.length) throw new Error('Frame index out of range.');
			return v[L];
		}),
		(this.decodeAndBlitFrameBGRA = function (L, q) {
			var B = this.frameInfo(L),
				Z = B.width * B.height,
				Q = new Uint8Array(Z);
			Hc(n, B.data_offset, Q, Z);
			var ie = B.palette_offset,
				K = B.transparent_index;
			K === null && (K = 256);
			var le = B.width,
				ue = r - le,
				Se = le,
				b = 4 * (B.y * r + B.x),
				T = 4 * ((B.y + B.height) * r + B.x),
				M = b,
				H = 4 * ue;
			B.interlaced === !0 && (H += 4 * r * 7);
			for (var V = 8, te = 0, se = Q.length; te < se; ++te) {
				var ce = Q[te];
				if (
					(Se === 0 &&
						((Se = le),
						(M += H) >= T &&
							((H = 4 * ue + 4 * r * (V - 1)), (M = b + (le + ue) * (V << 1)), (V >>= 1))),
					ce === K)
				)
					M += 4;
				else {
					var Ce = n[ie + 3 * ce],
						ye = n[ie + 3 * ce + 1],
						Te = n[ie + 3 * ce + 2];
					(q[M++] = Te), (q[M++] = ye), (q[M++] = Ce), (q[M++] = 255);
				}
				--Se;
			}
		}),
		(this.decodeAndBlitFrameRGBA = function (L, q) {
			var B = this.frameInfo(L),
				Z = B.width * B.height,
				Q = new Uint8Array(Z);
			Hc(n, B.data_offset, Q, Z);
			var ie = B.palette_offset,
				K = B.transparent_index;
			K === null && (K = 256);
			var le = B.width,
				ue = r - le,
				Se = le,
				b = 4 * (B.y * r + B.x),
				T = 4 * ((B.y + B.height) * r + B.x),
				M = b,
				H = 4 * ue;
			B.interlaced === !0 && (H += 4 * r * 7);
			for (var V = 8, te = 0, se = Q.length; te < se; ++te) {
				var ce = Q[te];
				if (
					(Se === 0 &&
						((Se = le),
						(M += H) >= T &&
							((H = 4 * ue + 4 * r * (V - 1)), (M = b + (le + ue) * (V << 1)), (V >>= 1))),
					ce === K)
				)
					M += 4;
				else {
					var Ce = n[ie + 3 * ce],
						ye = n[ie + 3 * ce + 1],
						Te = n[ie + 3 * ce + 2];
					(q[M++] = Ce), (q[M++] = ye), (q[M++] = Te), (q[M++] = 255);
				}
				--Se;
			}
		});
}
function Hc(n, e, r, i) {
	for (
		var s = n[e++],
			a = 1 << s,
			l = a + 1,
			u = l + 1,
			h = s + 1,
			p = (1 << h) - 1,
			v = 0,
			m = 0,
			y = 0,
			d = n[e++],
			E = new Int32Array(4096),
			N = null;
		;

	) {
		for (; v < 16 && d !== 0; ) (m |= n[e++] << v), (v += 8), d === 1 ? (d = n[e++]) : --d;
		if (v < h) break;
		var P = m & p;
		if (((m >>= h), (v -= h), P !== a)) {
			if (P === l) break;
			for (var _ = P < u ? P : N, j = 0, O = _; O > a; ) (O = E[O] >> 8), ++j;
			var G = O;
			if (y + j + (_ !== P ? 1 : 0) > i)
				return void Rt.log('Warning, gif stream longer than expected.');
			r[y++] = G;
			var W = (y += j);
			for (_ !== P && (r[y++] = G), O = _; j--; ) (O = E[O]), (r[--W] = 255 & O), (O >>= 8);
			N !== null &&
				u < 4096 &&
				((E[u++] = (N << 8) | G), u >= p + 1 && h < 12 && (++h, (p = (p << 1) | 1))),
				(N = P);
		} else (u = l + 1), (p = (1 << (h = s + 1)) - 1), (N = null);
	}
	return y !== i && Rt.log('Warning, gif stream shorter than expected.'), r;
}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/ function _l(n) {
	var e,
		r,
		i,
		s,
		a,
		l = Math.floor,
		u = new Array(64),
		h = new Array(64),
		p = new Array(64),
		v = new Array(64),
		m = new Array(65535),
		y = new Array(65535),
		d = new Array(64),
		E = new Array(64),
		N = [],
		P = 0,
		_ = 7,
		j = new Array(64),
		O = new Array(64),
		G = new Array(64),
		W = new Array(256),
		oe = new Array(2048),
		ee = [
			0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11,
			18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21,
			34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63
		],
		z = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
		re = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		de = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
		C = [
			1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35,
			66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39,
			40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87,
			88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122,
			131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163,
			164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196,
			197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228,
			229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250
		],
		L = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
		q = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		B = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
		Z = [
			0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161,
			177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26,
			38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86,
			87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122,
			130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162,
			163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195,
			196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228,
			229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250
		];
	function Q(b, T) {
		for (var M = 0, H = 0, V = new Array(), te = 1; te <= 16; te++) {
			for (var se = 1; se <= b[te]; se++)
				(V[T[H]] = []), (V[T[H]][0] = M), (V[T[H]][1] = te), H++, M++;
			M *= 2;
		}
		return V;
	}
	function ie(b) {
		for (var T = b[0], M = b[1] - 1; M >= 0; )
			T & (1 << M) && (P |= 1 << _),
				M--,
				--_ < 0 && (P == 255 ? (K(255), K(0)) : K(P), (_ = 7), (P = 0));
	}
	function K(b) {
		N.push(b);
	}
	function le(b) {
		K((b >> 8) & 255), K(255 & b);
	}
	function ue(b, T, M, H, V) {
		for (
			var te,
				se = V[0],
				ce = V[240],
				Ce = (function (Pe, Ee) {
					var Me,
						je,
						Ye,
						Ze,
						at,
						lt,
						ft,
						bt,
						Ge,
						Qe,
						Be = 0;
					for (Ge = 0; Ge < 8; ++Ge) {
						(Me = Pe[Be]),
							(je = Pe[Be + 1]),
							(Ye = Pe[Be + 2]),
							(Ze = Pe[Be + 3]),
							(at = Pe[Be + 4]),
							(lt = Pe[Be + 5]),
							(ft = Pe[Be + 6]);
						var Jt = Me + (bt = Pe[Be + 7]),
							yt = Me - bt,
							ur = je + ft,
							Pt = je - ft,
							Ft = Ye + lt,
							xr = Ye - lt,
							we = Ze + at,
							xt = Ze - at,
							Oe = Jt + we,
							nt = Jt - we,
							It = ur + Ft,
							vt = ur - Ft;
						(Pe[Be] = Oe + It), (Pe[Be + 4] = Oe - It);
						var Je = 0.707106781 * (vt + nt);
						(Pe[Be + 2] = nt + Je), (Pe[Be + 6] = nt - Je);
						var wt = 0.382683433 * ((Oe = xt + xr) - (vt = Pt + yt)),
							rn = 0.5411961 * Oe + wt,
							Zt = 1.306562965 * vt + wt,
							Ur = 0.707106781 * (It = xr + Pt),
							_r = yt + Ur,
							Ke = yt - Ur;
						(Pe[Be + 5] = Ke + rn),
							(Pe[Be + 3] = Ke - rn),
							(Pe[Be + 1] = _r + Zt),
							(Pe[Be + 7] = _r - Zt),
							(Be += 8);
					}
					for (Be = 0, Ge = 0; Ge < 8; ++Ge) {
						(Me = Pe[Be]),
							(je = Pe[Be + 8]),
							(Ye = Pe[Be + 16]),
							(Ze = Pe[Be + 24]),
							(at = Pe[Be + 32]),
							(lt = Pe[Be + 40]),
							(ft = Pe[Be + 48]);
						var Pr = Me + (bt = Pe[Be + 56]),
							Er = Me - bt,
							gr = je + ft,
							nr = je - ft,
							Qt = Ye + lt,
							Lr = Ye - lt,
							Vn = Ze + at,
							pn = Ze - at,
							nn = Pr + Vn,
							an = Pr - Vn,
							on = gr + Qt,
							Kt = gr - Qt;
						(Pe[Be] = nn + on), (Pe[Be + 32] = nn - on);
						var fr = 0.707106781 * (Kt + an);
						(Pe[Be + 16] = an + fr), (Pe[Be + 48] = an - fr);
						var vr = 0.382683433 * ((nn = pn + Lr) - (Kt = nr + Er)),
							Tr = 0.5411961 * nn + vr,
							gn = 1.306562965 * Kt + vr,
							ai = 0.707106781 * (on = Lr + nr),
							vn = Er + ai,
							oi = Er - ai;
						(Pe[Be + 40] = oi + Tr),
							(Pe[Be + 24] = oi - Tr),
							(Pe[Be + 8] = vn + gn),
							(Pe[Be + 56] = vn - gn),
							Be++;
					}
					for (Ge = 0; Ge < 64; ++Ge)
						(Qe = Pe[Ge] * Ee[Ge]), (d[Ge] = Qe > 0 ? (Qe + 0.5) | 0 : (Qe - 0.5) | 0);
					return d;
				})(b, T),
				ye = 0;
			ye < 64;
			++ye
		)
			E[ee[ye]] = Ce[ye];
		var Te = E[0] - M;
		(M = E[0]), Te == 0 ? ie(H[0]) : (ie(H[y[(te = 32767 + Te)]]), ie(m[te]));
		for (var Fe = 63; Fe > 0 && E[Fe] == 0; ) Fe--;
		if (Fe == 0) return ie(se), M;
		for (var Ue, pe = 1; pe <= Fe; ) {
			for (var U = pe; E[pe] == 0 && pe <= Fe; ) ++pe;
			var rt = pe - U;
			if (rt >= 16) {
				Ue = rt >> 4;
				for (var He = 1; He <= Ue; ++He) ie(ce);
				rt &= 15;
			}
			(te = 32767 + E[pe]), ie(V[(rt << 4) + y[te]]), ie(m[te]), pe++;
		}
		return Fe != 63 && ie(se), M;
	}
	function Se(b) {
		(b = Math.min(Math.max(b, 1), 100)),
			a != b &&
				((function (T) {
					for (
						var M = [
								16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40,
								57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24,
								35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98,
								112, 100, 103, 99
							],
							H = 0;
						H < 64;
						H++
					) {
						var V = l((M[H] * T + 50) / 100);
						(V = Math.min(Math.max(V, 1), 255)), (u[ee[H]] = V);
					}
					for (
						var te = [
								17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99,
								99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
								99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
								99
							],
							se = 0;
						se < 64;
						se++
					) {
						var ce = l((te[se] * T + 50) / 100);
						(ce = Math.min(Math.max(ce, 1), 255)), (h[ee[se]] = ce);
					}
					for (
						var Ce = [
								1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379
							],
							ye = 0,
							Te = 0;
						Te < 8;
						Te++
					)
						for (var Fe = 0; Fe < 8; Fe++)
							(p[ye] = 1 / (u[ee[ye]] * Ce[Te] * Ce[Fe] * 8)),
								(v[ye] = 1 / (h[ee[ye]] * Ce[Te] * Ce[Fe] * 8)),
								ye++;
				})(b < 50 ? Math.floor(5e3 / b) : Math.floor(200 - 2 * b)),
				(a = b));
	}
	(this.encode = function (b, T) {
		T && Se(T),
			(N = new Array()),
			(P = 0),
			(_ = 7),
			le(65496),
			le(65504),
			le(16),
			K(74),
			K(70),
			K(73),
			K(70),
			K(0),
			K(1),
			K(1),
			K(0),
			le(1),
			le(1),
			K(0),
			K(0),
			(function () {
				le(65499), le(132), K(0);
				for (var je = 0; je < 64; je++) K(u[je]);
				K(1);
				for (var Ye = 0; Ye < 64; Ye++) K(h[Ye]);
			})(),
			(function (je, Ye) {
				le(65472),
					le(17),
					K(8),
					le(Ye),
					le(je),
					K(3),
					K(1),
					K(17),
					K(0),
					K(2),
					K(17),
					K(1),
					K(3),
					K(17),
					K(1);
			})(b.width, b.height),
			(function () {
				le(65476), le(418), K(0);
				for (var je = 0; je < 16; je++) K(z[je + 1]);
				for (var Ye = 0; Ye <= 11; Ye++) K(re[Ye]);
				K(16);
				for (var Ze = 0; Ze < 16; Ze++) K(de[Ze + 1]);
				for (var at = 0; at <= 161; at++) K(C[at]);
				K(1);
				for (var lt = 0; lt < 16; lt++) K(L[lt + 1]);
				for (var ft = 0; ft <= 11; ft++) K(q[ft]);
				K(17);
				for (var bt = 0; bt < 16; bt++) K(B[bt + 1]);
				for (var Ge = 0; Ge <= 161; Ge++) K(Z[Ge]);
			})(),
			le(65498),
			le(12),
			K(3),
			K(1),
			K(0),
			K(2),
			K(17),
			K(3),
			K(17),
			K(0),
			K(63),
			K(0);
		var M = 0,
			H = 0,
			V = 0;
		(P = 0), (_ = 7), (this.encode.displayName = '_encode_');
		for (
			var te,
				se,
				ce,
				Ce,
				ye,
				Te,
				Fe,
				Ue,
				pe,
				U = b.data,
				rt = b.width,
				He = b.height,
				Pe = 4 * rt,
				Ee = 0;
			Ee < He;

		) {
			for (te = 0; te < Pe; ) {
				for (ye = Pe * Ee + te, Fe = -1, Ue = 0, pe = 0; pe < 64; pe++)
					(Te = ye + (Ue = pe >> 3) * Pe + (Fe = 4 * (7 & pe))),
						Ee + Ue >= He && (Te -= Pe * (Ee + 1 + Ue - He)),
						te + Fe >= Pe && (Te -= te + Fe - Pe + 4),
						(se = U[Te++]),
						(ce = U[Te++]),
						(Ce = U[Te++]),
						(j[pe] = ((oe[se] + oe[(ce + 256) >> 0] + oe[(Ce + 512) >> 0]) >> 16) - 128),
						(O[pe] =
							((oe[(se + 768) >> 0] + oe[(ce + 1024) >> 0] + oe[(Ce + 1280) >> 0]) >> 16) - 128),
						(G[pe] =
							((oe[(se + 1280) >> 0] + oe[(ce + 1536) >> 0] + oe[(Ce + 1792) >> 0]) >> 16) - 128);
				(M = ue(j, p, M, e, i)), (H = ue(O, v, H, r, s)), (V = ue(G, v, V, r, s)), (te += 32);
			}
			Ee += 8;
		}
		if (_ >= 0) {
			var Me = [];
			(Me[1] = _ + 1), (Me[0] = (1 << (_ + 1)) - 1), ie(Me);
		}
		return le(65497), new Uint8Array(N);
	}),
		(n = n || 50),
		(function () {
			for (var b = String.fromCharCode, T = 0; T < 256; T++) W[T] = b(T);
		})(),
		(e = Q(z, re)),
		(r = Q(L, q)),
		(i = Q(de, C)),
		(s = Q(B, Z)),
		(function () {
			for (var b = 1, T = 2, M = 1; M <= 15; M++) {
				for (var H = b; H < T; H++)
					(y[32767 + H] = M), (m[32767 + H] = []), (m[32767 + H][1] = M), (m[32767 + H][0] = H);
				for (var V = -(T - 1); V <= -b; V++)
					(y[32767 + V] = M),
						(m[32767 + V] = []),
						(m[32767 + V][1] = M),
						(m[32767 + V][0] = T - 1 + V);
				(b <<= 1), (T <<= 1);
			}
		})(),
		(function () {
			for (var b = 0; b < 256; b++)
				(oe[b] = 19595 * b),
					(oe[(b + 256) >> 0] = 38470 * b),
					(oe[(b + 512) >> 0] = 7471 * b + 32768),
					(oe[(b + 768) >> 0] = -11059 * b),
					(oe[(b + 1024) >> 0] = -21709 * b),
					(oe[(b + 1280) >> 0] = 32768 * b + 8421375),
					(oe[(b + 1536) >> 0] = -27439 * b),
					(oe[(b + 1792) >> 0] = -5329 * b);
		})(),
		Se(n);
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function Tn(n, e) {
	if (
		((this.pos = 0),
		(this.buffer = n),
		(this.datav = new DataView(n.buffer)),
		(this.is_with_alpha = !!e),
		(this.bottom_up = !0),
		(this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1])),
		(this.pos += 2),
		['BM', 'BA', 'CI', 'CP', 'IC', 'PT'].indexOf(this.flag) === -1)
	)
		throw new Error('Invalid BMP File');
	this.parseHeader(), this.parseBGR();
}
function Wc(n) {
	function e(z) {
		if (!z) throw Error('assert :P');
	}
	function r(z, re, de) {
		for (var C = 0; 4 > C; C++) if (z[re + C] != de.charCodeAt(C)) return !0;
		return !1;
	}
	function i(z, re, de, C, L) {
		for (var q = 0; q < L; q++) z[re + q] = de[C + q];
	}
	function s(z, re, de, C) {
		for (var L = 0; L < C; L++) z[re + L] = de;
	}
	function a(z) {
		return new Int32Array(z);
	}
	function l(z, re) {
		for (var de = [], C = 0; C < z; C++) de.push(new re());
		return de;
	}
	function u(z, re) {
		var de = [];
		return (
			(function C(L, q, B) {
				for (
					var Z = B[q], Q = 0;
					Q < Z && (L.push(B.length > q + 1 ? [] : new re()), !(B.length < q + 1));
					Q++
				)
					C(L[Q], q + 1, B);
			})(de, 0, z),
			de
		);
	}
	var h = function () {
		var z = this;
		function re(t, o) {
			for (var f = (1 << (o - 1)) >>> 0; t & f; ) f >>>= 1;
			return f ? (t & (f - 1)) + f : t;
		}
		function de(t, o, f, g, w) {
			e(!(g % f));
			do t[o + (g -= f)] = w;
			while (0 < g);
		}
		function C(t, o, f, g, w) {
			if ((e(2328 >= w), 512 >= w)) var A = a(512);
			else if ((A = a(w)) == null) return 0;
			return (function (S, k, I, D, X, fe) {
				var he,
					ne,
					Ae = k,
					ge = 1 << I,
					J = a(16),
					$ = a(16);
				for (e(X != 0), e(D != null), e(S != null), e(0 < I), ne = 0; ne < X; ++ne) {
					if (15 < D[ne]) return 0;
					++J[D[ne]];
				}
				if (J[0] == X) return 0;
				for ($[1] = 0, he = 1; 15 > he; ++he) {
					if (J[he] > 1 << he) return 0;
					$[he + 1] = $[he] + J[he];
				}
				for (ne = 0; ne < X; ++ne) (he = D[ne]), 0 < D[ne] && (fe[$[he]++] = ne);
				if ($[15] == 1) return ((D = new L()).g = 0), (D.value = fe[0]), de(S, Ae, 1, ge, D), ge;
				var _e,
					ke = -1,
					Le = ge - 1,
					ze = 0,
					De = 1,
					it = 1,
					Re = 1 << I;
				for (ne = 0, he = 1, X = 2; he <= I; ++he, X <<= 1) {
					if (((De += it <<= 1), 0 > (it -= J[he]))) return 0;
					for (; 0 < J[he]; --J[he])
						((D = new L()).g = he),
							(D.value = fe[ne++]),
							de(S, Ae + ze, X, Re, D),
							(ze = re(ze, he));
				}
				for (he = I + 1, X = 2; 15 >= he; ++he, X <<= 1) {
					if (((De += it <<= 1), 0 > (it -= J[he]))) return 0;
					for (; 0 < J[he]; --J[he]) {
						if (((D = new L()), (ze & Le) != ke)) {
							for (Ae += Re, _e = 1 << ((ke = he) - I); 15 > ke && !(0 >= (_e -= J[ke])); )
								++ke, (_e <<= 1);
							(ge += Re = 1 << (_e = ke - I)),
								(S[k + (ke = ze & Le)].g = _e + I),
								(S[k + ke].value = Ae - k - ke);
						}
						(D.g = he - I),
							(D.value = fe[ne++]),
							de(S, Ae + (ze >> I), X, Re, D),
							(ze = re(ze, he));
					}
				}
				return De != 2 * $[15] - 1 ? 0 : ge;
			})(t, o, f, g, w, A);
		}
		function L() {
			this.value = this.g = 0;
		}
		function q() {
			this.value = this.g = 0;
		}
		function B() {
			(this.G = l(5, L)),
				(this.H = a(5)),
				(this.jc = this.Qb = this.qb = this.nd = 0),
				(this.pd = l(Cr, q));
		}
		function Z(t, o, f, g) {
			e(t != null),
				e(o != null),
				e(2147483648 > g),
				(t.Ca = 254),
				(t.I = 0),
				(t.b = -8),
				(t.Ka = 0),
				(t.oa = o),
				(t.pa = f),
				(t.Jd = o),
				(t.Yc = f + g),
				(t.Zc = 4 <= g ? f + g - 4 + 1 : f),
				te(t);
		}
		function Q(t, o) {
			for (var f = 0; 0 < o--; ) f |= ce(t, 128) << o;
			return f;
		}
		function ie(t, o) {
			var f = Q(t, o);
			return se(t) ? -f : f;
		}
		function K(t, o, f, g) {
			var w,
				A = 0;
			for (
				e(t != null),
					e(o != null),
					e(4294967288 > g),
					t.Sb = g,
					t.Ra = 0,
					t.u = 0,
					t.h = 0,
					4 < g && (g = 4),
					w = 0;
				w < g;
				++w
			)
				A += o[f + w] << (8 * w);
			(t.Ra = A), (t.bb = g), (t.oa = o), (t.pa = f);
		}
		function le(t) {
			for (; 8 <= t.u && t.bb < t.Sb; )
				(t.Ra >>>= 8), (t.Ra += (t.oa[t.pa + t.bb] << (na - 8)) >>> 0), ++t.bb, (t.u -= 8);
			M(t) && ((t.h = 1), (t.u = 0));
		}
		function ue(t, o) {
			if ((e(0 <= o), !t.h && o <= ra)) {
				var f = T(t) & ta[o];
				return (t.u += o), le(t), f;
			}
			return (t.h = 1), (t.u = 0);
		}
		function Se() {
			(this.b = this.Ca = this.I = 0),
				(this.oa = []),
				(this.pa = 0),
				(this.Jd = []),
				(this.Yc = 0),
				(this.Zc = []),
				(this.Ka = 0);
		}
		function b() {
			(this.Ra = 0), (this.oa = []), (this.h = this.u = this.bb = this.Sb = this.pa = 0);
		}
		function T(t) {
			return (t.Ra >>> (t.u & (na - 1))) >>> 0;
		}
		function M(t) {
			return e(t.bb <= t.Sb), t.h || (t.bb == t.Sb && t.u > na);
		}
		function H(t, o) {
			(t.u = o), (t.h = M(t));
		}
		function V(t) {
			t.u >= Wa && (e(t.u >= Wa), le(t));
		}
		function te(t) {
			e(t != null && t.oa != null),
				t.pa < t.Zc
					? ((t.I = (t.oa[t.pa++] | (t.I << 8)) >>> 0), (t.b += 8))
					: (e(t != null && t.oa != null),
						t.pa < t.Yc
							? ((t.b += 8), (t.I = t.oa[t.pa++] | (t.I << 8)))
							: t.Ka
								? (t.b = 0)
								: ((t.I <<= 8), (t.b += 8), (t.Ka = 1)));
		}
		function se(t) {
			return Q(t, 1);
		}
		function ce(t, o) {
			var f = t.Ca;
			0 > t.b && te(t);
			var g = t.b,
				w = (f * o) >>> 8,
				A = (t.I >>> g > w) + 0;
			for (A ? ((f -= w), (t.I -= ((w + 1) << g) >>> 0)) : (f = w + 1), g = f, w = 0; 256 <= g; )
				(w += 8), (g >>= 8);
			return (g = 7 ^ (w + Xr[g])), (t.b -= g), (t.Ca = (f << g) - 1), A;
		}
		function Ce(t, o, f) {
			(t[o + 0] = (f >> 24) & 255),
				(t[o + 1] = (f >> 16) & 255),
				(t[o + 2] = (f >> 8) & 255),
				(t[o + 3] = (f >> 0) & 255);
		}
		function ye(t, o) {
			return (t[o + 0] << 0) | (t[o + 1] << 8);
		}
		function Te(t, o) {
			return ye(t, o) | (t[o + 2] << 16);
		}
		function Fe(t, o) {
			return ye(t, o) | (ye(t, o + 2) << 16);
		}
		function Ue(t, o) {
			var f = 1 << o;
			return (
				e(t != null), e(0 < o), (t.X = a(f)), t.X == null ? 0 : ((t.Mb = 32 - o), (t.Xa = o), 1)
			);
		}
		function pe(t, o) {
			e(t != null), e(o != null), e(t.Xa == o.Xa), i(o.X, 0, t.X, 0, 1 << o.Xa);
		}
		function U() {
			(this.X = []), (this.Xa = this.Mb = 0);
		}
		function rt(t, o, f, g) {
			e(f != null), e(g != null);
			var w = f[0],
				A = g[0];
			return (
				w == 0 && (w = (t * A + o / 2) / o),
				A == 0 && (A = (o * w + t / 2) / t),
				0 >= w || 0 >= A ? 0 : ((f[0] = w), (g[0] = A), 1)
			);
		}
		function He(t, o) {
			return (t + (1 << o) - 1) >>> o;
		}
		function Pe(t, o) {
			return (
				(((((4278255360 & t) + (4278255360 & o)) >>> 0) & 4278255360) +
					((((16711935 & t) + (16711935 & o)) >>> 0) & 16711935)) >>>
				0
			);
		}
		function Ee(t, o) {
			z[o] = function (f, g, w, A, S, k, I) {
				var D;
				for (D = 0; D < S; ++D) {
					var X = z[t](k[I + D - 1], w, A + D);
					k[I + D] = Pe(f[g + D], X);
				}
			};
		}
		function Me() {
			this.ud = this.hd = this.jd = 0;
		}
		function je(t, o) {
			return (((4278124286 & (t ^ o)) >>> 1) + (t & o)) >>> 0;
		}
		function Ye(t) {
			return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0;
		}
		function Ze(t, o) {
			return Ye(t + ((t - o + 0.5) >> 1));
		}
		function at(t, o, f) {
			return Math.abs(o - f) - Math.abs(t - f);
		}
		function lt(t, o, f, g, w, A, S) {
			for (g = A[S - 1], f = 0; f < w; ++f) A[S + f] = g = Pe(t[o + f], g);
		}
		function ft(t, o, f, g, w) {
			var A;
			for (A = 0; A < f; ++A) {
				var S = t[o + A],
					k = (S >> 8) & 255,
					I = 16711935 & (I = (I = 16711935 & S) + ((k << 16) + k));
				g[w + A] = ((4278255360 & S) + I) >>> 0;
			}
		}
		function bt(t, o) {
			(o.jd = (t >> 0) & 255), (o.hd = (t >> 8) & 255), (o.ud = (t >> 16) & 255);
		}
		function Ge(t, o, f, g, w, A) {
			var S;
			for (S = 0; S < g; ++S) {
				var k = o[f + S],
					I = k >>> 8,
					D = k,
					X = 255 & (X = (X = k >>> 16) + ((((t.jd << 24) >> 24) * ((I << 24) >> 24)) >>> 5));
				(D =
					255 &
					(D =
						(D = D + ((((t.hd << 24) >> 24) * ((I << 24) >> 24)) >>> 5)) +
						((((t.ud << 24) >> 24) * ((X << 24) >> 24)) >>> 5))),
					(w[A + S] = (4278255360 & k) + (X << 16) + D);
			}
		}
		function Qe(t, o, f, g, w) {
			(z[o] = function (A, S, k, I, D, X, fe, he, ne) {
				for (I = fe; I < he; ++I) for (fe = 0; fe < ne; ++fe) D[X++] = w(k[g(A[S++])]);
			}),
				(z[t] = function (A, S, k, I, D, X, fe) {
					var he = 8 >> A.b,
						ne = A.Ea,
						Ae = A.K[0],
						ge = A.w;
					if (8 > he)
						for (A = (1 << A.b) - 1, ge = (1 << he) - 1; S < k; ++S) {
							var J,
								$ = 0;
							for (J = 0; J < ne; ++J)
								J & A || ($ = g(I[D++])), (X[fe++] = w(Ae[$ & ge])), ($ >>= he);
						}
					else z['VP8LMapColor' + f](I, D, Ae, ge, X, fe, S, k, ne);
				});
		}
		function Be(t, o, f, g, w) {
			for (f = o + f; o < f; ) {
				var A = t[o++];
				(g[w++] = (A >> 16) & 255), (g[w++] = (A >> 8) & 255), (g[w++] = (A >> 0) & 255);
			}
		}
		function Jt(t, o, f, g, w) {
			for (f = o + f; o < f; ) {
				var A = t[o++];
				(g[w++] = (A >> 16) & 255),
					(g[w++] = (A >> 8) & 255),
					(g[w++] = (A >> 0) & 255),
					(g[w++] = (A >> 24) & 255);
			}
		}
		function yt(t, o, f, g, w) {
			for (f = o + f; o < f; ) {
				var A = (((S = t[o++]) >> 16) & 240) | ((S >> 12) & 15),
					S = ((S >> 0) & 240) | ((S >> 28) & 15);
				(g[w++] = A), (g[w++] = S);
			}
		}
		function ur(t, o, f, g, w) {
			for (f = o + f; o < f; ) {
				var A = (((S = t[o++]) >> 16) & 248) | ((S >> 13) & 7),
					S = ((S >> 5) & 224) | ((S >> 3) & 31);
				(g[w++] = A), (g[w++] = S);
			}
		}
		function Pt(t, o, f, g, w) {
			for (f = o + f; o < f; ) {
				var A = t[o++];
				(g[w++] = (A >> 0) & 255), (g[w++] = (A >> 8) & 255), (g[w++] = (A >> 16) & 255);
			}
		}
		function Ft(t, o, f, g, w, A) {
			if (A == 0)
				for (f = o + f; o < f; )
					Ce(
						g,
						(((A = t[o++])[0] >> 24) |
							((A[1] >> 8) & 65280) |
							((A[2] << 8) & 16711680) |
							(A[3] << 24)) >>>
							0
					),
						(w += 32);
			else i(g, w, t, o, f);
		}
		function xr(t, o) {
			(z[o][0] = z[t + '0']),
				(z[o][1] = z[t + '1']),
				(z[o][2] = z[t + '2']),
				(z[o][3] = z[t + '3']),
				(z[o][4] = z[t + '4']),
				(z[o][5] = z[t + '5']),
				(z[o][6] = z[t + '6']),
				(z[o][7] = z[t + '7']),
				(z[o][8] = z[t + '8']),
				(z[o][9] = z[t + '9']),
				(z[o][10] = z[t + '10']),
				(z[o][11] = z[t + '11']),
				(z[o][12] = z[t + '12']),
				(z[o][13] = z[t + '13']),
				(z[o][14] = z[t + '0']),
				(z[o][15] = z[t + '0']);
		}
		function we(t) {
			return t == Gs || t == Vs || t == zo || t == Ys;
		}
		function xt() {
			(this.eb = []), (this.size = this.A = this.fb = 0);
		}
		function Oe() {
			(this.y = []),
				(this.f = []),
				(this.ea = []),
				(this.F = []),
				(this.Tc =
					this.Ed =
					this.Cd =
					this.Fd =
					this.lb =
					this.Db =
					this.Ab =
					this.fa =
					this.J =
					this.W =
					this.N =
					this.O =
						0);
		}
		function nt() {
			(this.Rd = this.height = this.width = this.S = 0),
				(this.f = {}),
				(this.f.RGBA = new xt()),
				(this.f.kb = new Oe()),
				(this.sd = null);
		}
		function It() {
			(this.width = [0]),
				(this.height = [0]),
				(this.Pd = [0]),
				(this.Qd = [0]),
				(this.format = [0]);
		}
		function vt() {
			this.Id =
				this.fd =
				this.Md =
				this.hb =
				this.ib =
				this.da =
				this.bd =
				this.cd =
				this.j =
				this.v =
				this.Da =
				this.Sd =
				this.ob =
					0;
		}
		function Je(t) {
			return alert('todo:WebPSamplerProcessPlane'), t.T;
		}
		function wt(t, o) {
			var f = t.T,
				g = o.ba.f.RGBA,
				w = g.eb,
				A = g.fb + t.ka * g.A,
				S = _n[o.ba.S],
				k = t.y,
				I = t.O,
				D = t.f,
				X = t.N,
				fe = t.ea,
				he = t.W,
				ne = o.cc,
				Ae = o.dc,
				ge = o.Mc,
				J = o.Nc,
				$ = t.ka,
				_e = t.ka + t.T,
				ke = t.U,
				Le = (ke + 1) >> 1;
			for (
				$ == 0
					? S(k, I, null, null, D, X, fe, he, D, X, fe, he, w, A, null, null, ke)
					: (S(o.ec, o.fc, k, I, ne, Ae, ge, J, D, X, fe, he, w, A - g.A, w, A, ke), ++f);
				$ + 2 < _e;
				$ += 2
			)
				(ne = D),
					(Ae = X),
					(ge = fe),
					(J = he),
					(X += t.Rc),
					(he += t.Rc),
					(A += 2 * g.A),
					S(k, (I += 2 * t.fa) - t.fa, k, I, ne, Ae, ge, J, D, X, fe, he, w, A - g.A, w, A, ke);
			return (
				(I += t.fa),
				t.j + _e < t.o
					? (i(o.ec, o.fc, k, I, ke), i(o.cc, o.dc, D, X, Le), i(o.Mc, o.Nc, fe, he, Le), f--)
					: 1 & _e || S(k, I, null, null, D, X, fe, he, D, X, fe, he, w, A + g.A, null, null, ke),
				f
			);
		}
		function rn(t, o, f) {
			var g = t.F,
				w = [t.J];
			if (g != null) {
				var A = t.U,
					S = o.ba.S,
					k = S == qo || S == zo;
				o = o.ba.f.RGBA;
				var I = [0],
					D = t.ka;
				(I[0] = t.T),
					t.Kb &&
						(D == 0 ? --I[0] : (--D, (w[0] -= t.width)),
						t.j + t.ka + t.T == t.o && (I[0] = t.o - t.j - D));
				var X = o.eb;
				(D = o.fb + D * o.A),
					(t = Ut(g, w[0], t.width, A, I, X, D + (k ? 0 : 3), o.A)),
					e(f == I),
					t && we(S) && wn(X, D, k, A, I, o.A);
			}
			return 0;
		}
		function Zt(t) {
			var o = t.ma,
				f = o.ba.S,
				g = 11 > f,
				w = f == Oo || f == Ro || f == qo || f == Ws || f == 12 || we(f);
			if (
				((o.memory = null), (o.Ib = null), (o.Jb = null), (o.Nd = null), !Ua(o.Oa, t, w ? 11 : 12))
			)
				return 0;
			if ((w && we(f) && Ie(), t.da)) alert('todo:use_scaling');
			else {
				if (g) {
					if (((o.Ib = Je), t.Kb)) {
						if (((f = (t.U + 1) >> 1), (o.memory = a(t.U + 2 * f)), o.memory == null)) return 0;
						(o.ec = o.memory),
							(o.fc = 0),
							(o.cc = o.ec),
							(o.dc = o.fc + t.U),
							(o.Mc = o.cc),
							(o.Nc = o.dc + f),
							(o.Ib = wt),
							Ie();
					}
				} else alert('todo:EmitYUV');
				w && ((o.Jb = rn), g && ae());
			}
			if (g && !tc) {
				for (t = 0; 256 > t; ++t)
					(Wu[t] = (89858 * (t - 128) + Ho) >> Uo),
						(Yu[t] = -22014 * (t - 128) + Ho),
						(Vu[t] = -45773 * (t - 128)),
						(Gu[t] = (113618 * (t - 128) + Ho) >> Uo);
				for (t = Za; t < Ks; ++t)
					(o = (76283 * (t - 16) + Ho) >> Uo),
						(Xu[t - Za] = sn(o, 255)),
						(Ju[t - Za] = sn((o + 8) >> 4, 15));
				tc = 1;
			}
			return 1;
		}
		function Ur(t) {
			var o = t.ma,
				f = t.U,
				g = t.T;
			return (
				e(!(1 & t.ka)),
				0 >= f || 0 >= g ? 0 : ((f = o.Ib(t, o)), o.Jb != null && o.Jb(t, o, f), (o.Dc += f), 1)
			);
		}
		function _r(t) {
			t.ma.memory = null;
		}
		function Ke(t, o, f, g) {
			return ue(t, 8) != 47
				? 0
				: ((o[0] = ue(t, 14) + 1),
					(f[0] = ue(t, 14) + 1),
					(g[0] = ue(t, 1)),
					ue(t, 3) != 0 ? 0 : !t.h);
		}
		function Pr(t, o) {
			if (4 > t) return t + 1;
			var f = (t - 2) >> 1;
			return ((2 + (1 & t)) << f) + ue(o, f) + 1;
		}
		function Er(t, o) {
			return 120 < o ? o - 120 : 1 <= (f = ((f = Iu[o - 1]) >> 4) * t + (8 - (15 & f))) ? f : 1;
			var f;
		}
		function gr(t, o, f) {
			var g = T(f),
				w = t[(o += 255 & g)].g - 8;
			return (
				0 < w && (H(f, f.u + 8), (g = T(f)), (o += t[o].value), (o += g & ((1 << w) - 1))),
				H(f, f.u + t[o].g),
				t[o].value
			);
		}
		function nr(t, o, f) {
			return (f.g += t.g), (f.value += (t.value << o) >>> 0), e(8 >= f.g), t.g;
		}
		function Qt(t, o, f) {
			var g = t.xc;
			return e((o = g == 0 ? 0 : t.vc[t.md * (f >> g) + (o >> g)]) < t.Wb), t.Ya[o];
		}
		function Lr(t, o, f, g) {
			var w = t.ab,
				A = t.c * o,
				S = t.C;
			o = S + o;
			var k = f,
				I = g;
			for (g = t.Ta, f = t.Ua; 0 < w--; ) {
				var D = t.gc[w],
					X = S,
					fe = o,
					he = k,
					ne = I,
					Ae = ((I = g), (k = f), D.Ea);
				switch ((e(X < fe), e(fe <= D.nc), D.hc)) {
					case 2:
						Fo(he, ne, (fe - X) * Ae, I, k);
						break;
					case 0:
						var ge = X,
							J = fe,
							$ = I,
							_e = k,
							ke = (Re = D).Ea;
						ge == 0 &&
							(Us(he, ne, null, null, 1, $, _e),
							lt(he, ne + 1, 0, 0, ke - 1, $, _e + 1),
							(ne += ke),
							(_e += ke),
							++ge);
						for (
							var Le = 1 << Re.b,
								ze = Le - 1,
								De = He(ke, Re.b),
								it = Re.K,
								Re = Re.w + (ge >> Re.b) * De;
							ge < J;

						) {
							var Et = it,
								Tt = Re,
								Ct = 1;
							for (Ga(he, ne, $, _e - ke, 1, $, _e); Ct < ke; ) {
								var _t = (Ct & ~ze) + Le;
								_t > ke && (_t = ke),
									(0, ui[(Et[Tt++] >> 8) & 15])(he, ne + +Ct, $, _e + Ct - ke, _t - Ct, $, _e + Ct),
									(Ct = _t);
							}
							(ne += ke), (_e += ke), ++ge & ze || (Re += De);
						}
						fe != D.nc && i(I, k - Ae, I, k + (fe - X - 1) * Ae, Ae);
						break;
					case 1:
						for (
							Ae = he,
								J = ne,
								ke = (he = D.Ea) - (_e = he & ~($ = (ne = 1 << D.b) - 1)),
								ge = He(he, D.b),
								Le = D.K,
								D = D.w + (X >> D.b) * ge;
							X < fe;

						) {
							for (ze = Le, De = D, it = new Me(), Re = J + _e, Et = J + he; J < Re; )
								bt(ze[De++], it), Ei(it, Ae, J, ne, I, k), (J += ne), (k += ne);
							J < Et && (bt(ze[De++], it), Ei(it, Ae, J, ke, I, k), (J += ke), (k += ke)),
								++X & $ || (D += ge);
						}
						break;
					case 3:
						if (he == I && ne == k && 0 < D.b) {
							for (
								J = I,
									he = Ae = k + (fe - X) * Ae - (_e = (fe - X) * He(D.Ea, D.b)),
									ne = I,
									$ = k,
									ge = [],
									_e = (ke = _e) - 1;
								0 <= _e;
								--_e
							)
								ge[_e] = ne[$ + _e];
							for (_e = ke - 1; 0 <= _e; --_e) J[he + _e] = ge[_e];
							mn(D, X, fe, I, Ae, I, k);
						} else mn(D, X, fe, he, ne, I, k);
				}
				(k = g), (I = f);
			}
			I != f && i(g, f, k, I, A);
		}
		function Vn(t, o) {
			var f = t.V,
				g = t.Ba + t.c * t.C,
				w = o - t.C;
			if ((e(o <= t.l.o), e(16 >= w), 0 < w)) {
				var A = t.l,
					S = t.Ta,
					k = t.Ua,
					I = A.width;
				if (
					(Lr(t, w, f, g),
					(w = k = [k]),
					e((f = t.C) < (g = o)),
					e(A.v < A.va),
					g > A.o && (g = A.o),
					f < A.j)
				) {
					var D = A.j - f;
					(f = A.j), (w[0] += D * I);
				}
				if (
					(f >= g
						? (f = 0)
						: ((w[0] += 4 * A.v), (A.ka = f - A.j), (A.U = A.va - A.v), (A.T = g - f), (f = 1)),
					f)
				) {
					if (((k = k[0]), 11 > (f = t.ca).S)) {
						var X = f.f.RGBA,
							fe = ((g = f.S), (w = A.U), (A = A.T), (D = X.eb), X.A),
							he = A;
						for (X = X.fb + t.Ma * X.A; 0 < he--; ) {
							var ne = S,
								Ae = k,
								ge = w,
								J = D,
								$ = X;
							switch (g) {
								case Do:
									Jr(ne, Ae, ge, J, $);
									break;
								case Oo:
									Hr(ne, Ae, ge, J, $);
									break;
								case Gs:
									Hr(ne, Ae, ge, J, $), wn(J, $, 0, ge, 1, 0);
									break;
								case Vl:
									Kn(ne, Ae, ge, J, $);
									break;
								case Ro:
									Ft(ne, Ae, ge, J, $, 1);
									break;
								case Vs:
									Ft(ne, Ae, ge, J, $, 1), wn(J, $, 0, ge, 1, 0);
									break;
								case qo:
									Ft(ne, Ae, ge, J, $, 0);
									break;
								case zo:
									Ft(ne, Ae, ge, J, $, 0), wn(J, $, 1, ge, 1, 0);
									break;
								case Ws:
									fi(ne, Ae, ge, J, $);
									break;
								case Ys:
									fi(ne, Ae, ge, J, $), zt(J, $, ge, 1, 0);
									break;
								case Yl:
									Jn(ne, Ae, ge, J, $);
									break;
								default:
									e(0);
							}
							(k += I), (X += fe);
						}
						t.Ma += A;
					} else alert('todo:EmitRescaledRowsYUVA');
					e(t.Ma <= f.height);
				}
			}
			(t.C = o), e(t.C <= t.i);
		}
		function pn(t) {
			var o;
			if (0 < t.ua) return 0;
			for (o = 0; o < t.Wb; ++o) {
				var f = t.Ya[o].G,
					g = t.Ya[o].H;
				if (0 < f[1][g[1] + 0].g || 0 < f[2][g[2] + 0].g || 0 < f[3][g[3] + 0].g) return 0;
			}
			return 1;
		}
		function nn(t, o, f, g, w, A) {
			if (t.Z != 0) {
				var S = t.qd,
					k = t.rd;
				for (e(gi[t.Z] != null); o < f; ++o)
					gi[t.Z](S, k, g, w, g, w, A), (S = g), (k = w), (w += A);
				(t.qd = S), (t.rd = k);
			}
		}
		function an(t, o) {
			var f = t.l.ma,
				g = f.Z == 0 || f.Z == 1 ? t.l.j : t.C;
			if (((g = t.C < g ? g : t.C), e(o <= t.l.o), o > g)) {
				var w = t.l.width,
					A = f.ca,
					S = f.tb + w * g,
					k = t.V,
					I = t.Ba + t.c * g,
					D = t.gc;
				e(t.ab == 1), e(D[0].hc == 3), Eo(D[0], g, o, k, I, A, S), nn(f, g, o, A, S, w);
			}
			t.C = t.Ma = o;
		}
		function on(t, o, f, g, w, A, S) {
			var k = t.$ / g,
				I = t.$ % g,
				D = t.m,
				X = t.s,
				fe = f + t.$,
				he = fe;
			w = f + g * w;
			var ne = f + g * A,
				Ae = 280 + X.ua,
				ge = t.Pb ? k : 16777216,
				J = 0 < X.ua ? X.Wa : null,
				$ = X.wc,
				_e = fe < ne ? Qt(X, I, k) : null;
			e(t.C < A), e(ne <= w);
			var ke = !1;
			e: for (;;) {
				for (; ke || fe < ne; ) {
					var Le = 0;
					if (k >= ge) {
						var ze = fe - f;
						e((ge = t).Pb),
							(ge.wd = ge.m),
							(ge.xd = ze),
							0 < ge.s.ua && pe(ge.s.Wa, ge.s.vb),
							(ge = k + Eu);
					}
					if (
						(I & $ || (_e = Qt(X, I, k)), e(_e != null), _e.Qb && ((o[fe] = _e.qb), (ke = !0)), !ke)
					)
						if ((V(D), _e.jc)) {
							(Le = D), (ze = o);
							var De = fe,
								it = _e.pd[T(Le) & (Cr - 1)];
							e(_e.jc),
								256 > it.g
									? (H(Le, Le.u + it.g), (ze[De] = it.value), (Le = 0))
									: (H(Le, Le.u + it.g - 256), e(256 <= it.value), (Le = it.value)),
								Le == 0 && (ke = !0);
						} else Le = gr(_e.G[0], _e.H[0], D);
					if (D.h) break;
					if (ke || 256 > Le) {
						if (!ke)
							if (_e.nd) o[fe] = (_e.qb | (Le << 8)) >>> 0;
							else {
								if (
									(V(D),
									(ke = gr(_e.G[1], _e.H[1], D)),
									V(D),
									(ze = gr(_e.G[2], _e.H[2], D)),
									(De = gr(_e.G[3], _e.H[3], D)),
									D.h)
								)
									break;
								o[fe] = ((De << 24) | (ke << 16) | (Le << 8) | ze) >>> 0;
							}
						if (
							((ke = !1),
							++fe,
							++I >= g && ((I = 0), ++k, S != null && k <= A && !(k % 16) && S(t, k), J != null))
						)
							for (; he < fe; )
								(Le = o[he++]), (J.X[((506832829 * Le) & 4294967295) >>> J.Mb] = Le);
					} else if (280 > Le) {
						if (
							((Le = Pr(Le - 256, D)),
							(ze = gr(_e.G[4], _e.H[4], D)),
							V(D),
							(ze = Er(g, (ze = Pr(ze, D)))),
							D.h)
						)
							break;
						if (fe - f < ze || w - fe < Le) break e;
						for (De = 0; De < Le; ++De) o[fe + De] = o[fe + De - ze];
						for (fe += Le, I += Le; I >= g; )
							(I -= g), ++k, S != null && k <= A && !(k % 16) && S(t, k);
						if ((e(fe <= w), I & $ && (_e = Qt(X, I, k)), J != null))
							for (; he < fe; )
								(Le = o[he++]), (J.X[((506832829 * Le) & 4294967295) >>> J.Mb] = Le);
					} else {
						if (!(Le < Ae)) break e;
						for (ke = Le - 280, e(J != null); he < fe; )
							(Le = o[he++]), (J.X[((506832829 * Le) & 4294967295) >>> J.Mb] = Le);
						(Le = fe), e(!(ke >>> (ze = J).Xa)), (o[Le] = ze.X[ke]), (ke = !0);
					}
					ke || e(D.h == M(D));
				}
				if (t.Pb && D.h && fe < w)
					e(t.m.h), (t.a = 5), (t.m = t.wd), (t.$ = t.xd), 0 < t.s.ua && pe(t.s.vb, t.s.Wa);
				else {
					if (D.h) break e;
					S != null && S(t, k > A ? A : k), (t.a = 0), (t.$ = fe - f);
				}
				return 1;
			}
			return (t.a = 3), 0;
		}
		function Kt(t) {
			e(t != null), (t.vc = null), (t.yc = null), (t.Ya = null);
			var o = t.Wa;
			o != null && (o.X = null), (t.vb = null), e(t != null);
		}
		function fr() {
			var t = new zs();
			return t == null
				? null
				: ((t.a = 0),
					(t.xb = Kl),
					xr('Predictor', 'VP8LPredictors'),
					xr('Predictor', 'VP8LPredictors_C'),
					xr('PredictorAdd', 'VP8LPredictorsAdd'),
					xr('PredictorAdd', 'VP8LPredictorsAdd_C'),
					(Fo = ft),
					(Ei = Ge),
					(Jr = Be),
					(Hr = Jt),
					(fi = yt),
					(Jn = ur),
					(Kn = Pt),
					(z.VP8LMapColor32b = ia),
					(z.VP8LMapColor8b = To),
					t);
		}
		function vr(t, o, f, g, w) {
			var A = 1,
				S = [t],
				k = [o],
				I = g.m,
				D = g.s,
				X = null,
				fe = 0;
			e: for (;;) {
				if (f)
					for (; A && ue(I, 1); ) {
						var he = S,
							ne = k,
							Ae = g,
							ge = 1,
							J = Ae.m,
							$ = Ae.gc[Ae.ab],
							_e = ue(J, 2);
						if (Ae.Oc & (1 << _e)) A = 0;
						else {
							switch (
								((Ae.Oc |= 1 << _e),
								($.hc = _e),
								($.Ea = he[0]),
								($.nc = ne[0]),
								($.K = [null]),
								++Ae.ab,
								e(4 >= Ae.ab),
								_e)
							) {
								case 0:
								case 1:
									($.b = ue(J, 3) + 2),
										(ge = vr(He($.Ea, $.b), He($.nc, $.b), 0, Ae, $.K)),
										($.K = $.K[0]);
									break;
								case 3:
									var ke,
										Le = ue(J, 8) + 1,
										ze = 16 < Le ? 0 : 4 < Le ? 1 : 2 < Le ? 2 : 3;
									if (((he[0] = He($.Ea, ze)), ($.b = ze), (ke = ge = vr(Le, 1, 0, Ae, $.K)))) {
										var De,
											it = Le,
											Re = $,
											Et = 1 << (8 >> Re.b),
											Tt = a(Et);
										if (Tt == null) ke = 0;
										else {
											var Ct = Re.K[0],
												_t = Re.w;
											for (Tt[0] = Re.K[0][0], De = 1; De < 1 * it; ++De)
												Tt[De] = Pe(Ct[_t + De], Tt[De - 1]);
											for (; De < 4 * Et; ++De) Tt[De] = 0;
											(Re.K[0] = null), (Re.K[0] = Tt), (ke = 1);
										}
									}
									ge = ke;
									break;
								case 2:
									break;
								default:
									e(0);
							}
							A = ge;
						}
					}
				if (((S = S[0]), (k = k[0]), A && ue(I, 1) && !(A = 1 <= (fe = ue(I, 4)) && 11 >= fe))) {
					g.a = 3;
					break e;
				}
				var Ot;
				if ((Ot = A))
					t: {
						var Dt,
							mt,
							dr,
							Kr = g,
							pr = S,
							Zr = k,
							jt = fe,
							cn = f,
							un = Kr.m,
							Sr = Kr.s,
							Ir = [null],
							Gr = 1,
							Ln = 0,
							qn = Fu[jt];
						r: for (;;) {
							if (cn && ue(un, 1)) {
								var Nr = ue(un, 3) + 2,
									ei = He(pr, Nr),
									Di = He(Zr, Nr),
									ca = ei * Di;
								if (!vr(ei, Di, 0, Kr, Ir)) break r;
								for (Ir = Ir[0], Sr.xc = Nr, Dt = 0; Dt < ca; ++Dt) {
									var vi = (Ir[Dt] >> 8) & 65535;
									(Ir[Dt] = vi), vi >= Gr && (Gr = vi + 1);
								}
							}
							if (un.h) break r;
							for (mt = 0; 5 > mt; ++mt) {
								var tr = Xl[mt];
								!mt && 0 < jt && (tr += 1 << jt), Ln < tr && (Ln = tr);
							}
							var Zs = l(Gr * qn, L),
								ic = Gr,
								ac = l(ic, B);
							if (ac == null) var Go = null;
							else e(65536 >= ic), (Go = ac);
							var Qa = a(Ln);
							if (Go == null || Qa == null || Zs == null) {
								Kr.a = 1;
								break r;
							}
							var Vo = Zs;
							for (Dt = dr = 0; Dt < Gr; ++Dt) {
								var Fn = Go[Dt],
									ua = Fn.G,
									fa = Fn.H,
									oc = 0,
									Yo = 1,
									sc = 0;
								for (mt = 0; 5 > mt; ++mt) {
									(tr = Xl[mt]), (ua[mt] = Vo), (fa[mt] = dr), !mt && 0 < jt && (tr += 1 << jt);
									i: {
										var Xo,
											Qs = tr,
											Jo = Kr,
											$a = Qa,
											Qu = Vo,
											$u = dr,
											$s = 0,
											mi = Jo.m,
											ef = ue(mi, 1);
										if ((s($a, 0, 0, Qs), ef)) {
											var tf = ue(mi, 1) + 1,
												rf = ue(mi, 1),
												lc = ue(mi, rf == 0 ? 1 : 8);
											($a[lc] = 1), tf == 2 && ($a[(lc = ue(mi, 8))] = 1);
											var Ko = 1;
										} else {
											var cc = a(19),
												uc = ue(mi, 4) + 4;
											if (19 < uc) {
												Jo.a = 3;
												var Zo = 0;
												break i;
											}
											for (Xo = 0; Xo < uc; ++Xo) cc[Cu[Xo]] = ue(mi, 3);
											var el = void 0,
												eo = void 0,
												fc = Jo,
												nf = cc,
												Qo = Qs,
												hc = $a,
												tl = 0,
												bi = fc.m,
												dc = 8,
												pc = l(128, L);
											n: for (; C(pc, 0, 7, nf, 19); ) {
												if (ue(bi, 1)) {
													var af = 2 + 2 * ue(bi, 3);
													if ((el = 2 + ue(bi, af)) > Qo) break n;
												} else el = Qo;
												for (eo = 0; eo < Qo && el--; ) {
													V(bi);
													var gc = pc[0 + (127 & T(bi))];
													H(bi, bi.u + gc.g);
													var ha = gc.value;
													if (16 > ha) (hc[eo++] = ha), ha != 0 && (dc = ha);
													else {
														var of = ha == 16,
															vc = ha - 16,
															sf = ku[vc],
															mc = ue(bi, Nu[vc]) + sf;
														if (eo + mc > Qo) break n;
														for (var lf = of ? dc : 0; 0 < mc--; ) hc[eo++] = lf;
													}
												}
												tl = 1;
												break n;
											}
											tl || (fc.a = 3), (Ko = tl);
										}
										(Ko = Ko && !mi.h) && ($s = C(Qu, $u, 8, $a, Qs)),
											Ko && $s != 0 ? (Zo = $s) : ((Jo.a = 3), (Zo = 0));
									}
									if (Zo == 0) break r;
									if (
										(Yo && Pu[mt] == 1 && (Yo = Vo[dr].g == 0),
										(oc += Vo[dr].g),
										(dr += Zo),
										3 >= mt)
									) {
										var to,
											rl = Qa[0];
										for (to = 1; to < tr; ++to) Qa[to] > rl && (rl = Qa[to]);
										sc += rl;
									}
								}
								if (
									((Fn.nd = Yo),
									(Fn.Qb = 0),
									Yo &&
										((Fn.qb =
											((ua[3][fa[3] + 0].value << 24) |
												(ua[1][fa[1] + 0].value << 16) |
												ua[2][fa[2] + 0].value) >>>
											0),
										oc == 0 &&
											256 > ua[0][fa[0] + 0].value &&
											((Fn.Qb = 1), (Fn.qb += ua[0][fa[0] + 0].value << 8))),
									(Fn.jc = !Fn.Qb && 6 > sc),
									Fn.jc)
								) {
									var $o,
										ti = Fn;
									for ($o = 0; $o < Cr; ++$o) {
										var yi = $o,
											wi = ti.pd[yi],
											es = ti.G[0][ti.H[0] + yi];
										256 <= es.value
											? ((wi.g = es.g + 256), (wi.value = es.value))
											: ((wi.g = 0),
												(wi.value = 0),
												(yi >>= nr(es, 8, wi)),
												(yi >>= nr(ti.G[1][ti.H[1] + yi], 16, wi)),
												(yi >>= nr(ti.G[2][ti.H[2] + yi], 0, wi)),
												nr(ti.G[3][ti.H[3] + yi], 24, wi));
									}
								}
							}
							(Sr.vc = Ir), (Sr.Wb = Gr), (Sr.Ya = Go), (Sr.yc = Zs), (Ot = 1);
							break t;
						}
						Ot = 0;
					}
				if (!(A = Ot)) {
					g.a = 3;
					break e;
				}
				if (0 < fe) {
					if (((D.ua = 1 << fe), !Ue(D.Wa, fe))) {
						(g.a = 1), (A = 0);
						break e;
					}
				} else D.ua = 0;
				var nl = g,
					bc = S,
					cf = k,
					il = nl.s,
					al = il.xc;
				if (
					((nl.c = bc),
					(nl.i = cf),
					(il.md = He(bc, al)),
					(il.wc = al == 0 ? -1 : (1 << al) - 1),
					f)
				) {
					g.xb = Ru;
					break e;
				}
				if ((X = a(S * k)) == null) {
					(g.a = 1), (A = 0);
					break e;
				}
				A = (A = on(g, X, 0, S, k, k, null)) && !I.h;
				break e;
			}
			return A ? (w != null ? (w[0] = X) : (e(X == null), e(f)), (g.$ = 0), f || Kt(D)) : Kt(D), A;
		}
		function Tr(t, o) {
			var f = t.c * t.i,
				g = f + o + 16 * o;
			return (
				e(t.c <= o),
				(t.V = a(g)),
				t.V == null
					? ((t.Ta = null), (t.Ua = 0), (t.a = 1), 0)
					: ((t.Ta = t.V), (t.Ua = t.Ba + f + o), 1)
			);
		}
		function gn(t, o) {
			var f = t.C,
				g = o - f,
				w = t.V,
				A = t.Ba + t.c * f;
			for (e(o <= t.l.o); 0 < g; ) {
				var S = 16 < g ? 16 : g,
					k = t.l.ma,
					I = t.l.width,
					D = I * S,
					X = k.ca,
					fe = k.tb + I * f,
					he = t.Ta,
					ne = t.Ua;
				Lr(t, S, w, A),
					or(he, ne, X, fe, D),
					nn(k, f, f + S, X, fe, I),
					(g -= S),
					(w += S * t.c),
					(f += S);
			}
			e(f == o), (t.C = t.Ma = o);
		}
		function ai() {
			this.ub = this.yd = this.td = this.Rb = 0;
		}
		function vn() {
			this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
		}
		function oi() {
			(this.Fb = this.Bb = this.Cb = 0), (this.Zb = a(4)), (this.Lb = a(4));
		}
		function uo() {
			this.Yb = (function () {
				var t = [];
				return (
					(function o(f, g, w) {
						for (
							var A = w[g], S = 0;
							S < A && (f.push(w.length > g + 1 ? [] : 0), !(w.length < g + 1));
							S++
						)
							o(f[S], g + 1, w);
					})(t, 0, [3, 11]),
					t
				);
			})();
		}
		function bs() {
			(this.jb = a(3)), (this.Wc = u([4, 8], uo)), (this.Xc = u([4, 17], uo));
		}
		function ys() {
			(this.Pc = this.wb = this.Tb = this.zd = 0), (this.vd = new a(4)), (this.od = new a(4));
		}
		function Hi() {
			this.ld = this.La = this.dd = this.tc = 0;
		}
		function fo() {
			this.Na = this.la = 0;
		}
		function ws() {
			(this.Sc = [0, 0]), (this.Eb = [0, 0]), (this.Qc = [0, 0]), (this.ia = this.lc = 0);
		}
		function Na() {
			(this.ad = a(384)),
				(this.Za = 0),
				(this.Ob = a(16)),
				(this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0);
		}
		function xs() {
			(this.uc = this.M = this.Nb = 0),
				(this.wa = Array(new Hi())),
				(this.Y = 0),
				(this.ya = Array(new Na())),
				(this.aa = 0),
				(this.l = new Wi());
		}
		function ho() {
			(this.y = a(16)), (this.f = a(8)), (this.ea = a(8));
		}
		function _s() {
			(this.cb = this.a = 0),
				(this.sc = ''),
				(this.m = new Se()),
				(this.Od = new ai()),
				(this.Kc = new vn()),
				(this.ed = new ys()),
				(this.Qa = new oi()),
				(this.Ic = this.$c = this.Aa = 0),
				(this.D = new xs()),
				(this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0),
				(this.Jc = l(8, Se)),
				(this.ia = 0),
				(this.pb = l(4, ws)),
				(this.Pa = new bs()),
				(this.Bd = this.kc = 0),
				(this.Ac = []),
				(this.Bc = 0),
				(this.zc = [0, 0, 0, 0]),
				(this.Gd = Array(new ho())),
				(this.Hd = 0),
				(this.rb = Array(new fo())),
				(this.sb = 0),
				(this.wa = Array(new Hi())),
				(this.Y = 0),
				(this.oc = []),
				(this.pc = 0),
				(this.sa = []),
				(this.ta = 0),
				(this.qa = []),
				(this.ra = 0),
				(this.Ha = []),
				(this.B = this.R = this.Ia = 0),
				(this.Ec = []),
				(this.M = this.ja = this.Vb = this.Fc = 0),
				(this.ya = Array(new Na())),
				(this.L = this.aa = 0),
				(this.gd = u([4, 2], Hi)),
				(this.ga = null),
				(this.Fa = []),
				(this.Cc = this.qc = this.P = 0),
				(this.Gb = []),
				(this.Uc = 0),
				(this.mb = []),
				(this.nb = 0),
				(this.rc = []),
				(this.Ga = this.Vc = 0);
		}
		function Wi() {
			(this.T = this.U = this.ka = this.height = this.width = 0),
				(this.y = []),
				(this.f = []),
				(this.ea = []),
				(this.Rc = this.fa = this.W = this.N = this.O = 0),
				(this.ma = 'void'),
				(this.put = 'VP8IoPutHook'),
				(this.ac = 'VP8IoSetupHook'),
				(this.bc = 'VP8IoTeardownHook'),
				(this.ha = this.Kb = 0),
				(this.data = []),
				(this.hb =
					this.ib =
					this.da =
					this.o =
					this.j =
					this.va =
					this.v =
					this.Da =
					this.ob =
					this.w =
						0),
				(this.F = []),
				(this.J = 0);
		}
		function Ls() {
			var t = new _s();
			return t != null && ((t.a = 0), (t.sc = 'OK'), (t.cb = 0), (t.Xb = 0), Ka || (Ka = vo)), t;
		}
		function ir(t, o, f) {
			return t.a == 0 && ((t.a = o), (t.sc = f), (t.cb = 0)), 0;
		}
		function po(t, o, f) {
			return 3 <= f && t[o + 0] == 157 && t[o + 1] == 1 && t[o + 2] == 42;
		}
		function go(t, o) {
			if (t == null) return 0;
			if (((t.a = 0), (t.sc = 'OK'), o == null))
				return ir(t, 2, 'null VP8Io passed to VP8GetHeaders()');
			var f = o.data,
				g = o.w,
				w = o.ha;
			if (4 > w) return ir(t, 7, 'Truncated header.');
			var A = f[g + 0] | (f[g + 1] << 8) | (f[g + 2] << 16),
				S = t.Od;
			if (
				((S.Rb = !(1 & A)), (S.td = (A >> 1) & 7), (S.yd = (A >> 4) & 1), (S.ub = A >> 5), 3 < S.td)
			)
				return ir(t, 3, 'Incorrect keyframe parameters.');
			if (!S.yd) return ir(t, 4, 'Frame not displayable.');
			(g += 3), (w -= 3);
			var k = t.Kc;
			if (S.Rb) {
				if (7 > w) return ir(t, 7, 'cannot parse picture header');
				if (!po(f, g, w)) return ir(t, 3, 'Bad code word');
				(k.c = 16383 & ((f[g + 4] << 8) | f[g + 3])),
					(k.Td = f[g + 4] >> 6),
					(k.i = 16383 & ((f[g + 6] << 8) | f[g + 5])),
					(k.Ud = f[g + 6] >> 6),
					(g += 7),
					(w -= 7),
					(t.za = (k.c + 15) >> 4),
					(t.Ub = (k.i + 15) >> 4),
					(o.width = k.c),
					(o.height = k.i),
					(o.Da = 0),
					(o.j = 0),
					(o.v = 0),
					(o.va = o.width),
					(o.o = o.height),
					(o.da = 0),
					(o.ib = o.width),
					(o.hb = o.height),
					(o.U = o.width),
					(o.T = o.height),
					s((A = t.Pa).jb, 0, 255, A.jb.length),
					e((A = t.Qa) != null),
					(A.Cb = 0),
					(A.Bb = 0),
					(A.Fb = 1),
					s(A.Zb, 0, 0, A.Zb.length),
					s(A.Lb, 0, 0, A.Lb);
			}
			if (S.ub > w) return ir(t, 7, 'bad partition length');
			Z((A = t.m), f, g, S.ub),
				(g += S.ub),
				(w -= S.ub),
				S.Rb && ((k.Ld = se(A)), (k.Kd = se(A))),
				(k = t.Qa);
			var I,
				D = t.Pa;
			if ((e(A != null), e(k != null), (k.Cb = se(A)), k.Cb)) {
				if (((k.Bb = se(A)), se(A))) {
					for (k.Fb = se(A), I = 0; 4 > I; ++I) k.Zb[I] = se(A) ? ie(A, 7) : 0;
					for (I = 0; 4 > I; ++I) k.Lb[I] = se(A) ? ie(A, 6) : 0;
				}
				if (k.Bb) for (I = 0; 3 > I; ++I) D.jb[I] = se(A) ? Q(A, 8) : 255;
			} else k.Bb = 0;
			if (A.Ka) return ir(t, 3, 'cannot parse segment header');
			if (
				(((k = t.ed).zd = se(A)), (k.Tb = Q(A, 6)), (k.wb = Q(A, 3)), (k.Pc = se(A)), k.Pc && se(A))
			) {
				for (D = 0; 4 > D; ++D) se(A) && (k.vd[D] = ie(A, 6));
				for (D = 0; 4 > D; ++D) se(A) && (k.od[D] = ie(A, 6));
			}
			if (((t.L = k.Tb == 0 ? 0 : k.zd ? 1 : 2), A.Ka))
				return ir(t, 3, 'cannot parse filter header');
			var X = w;
			if (((w = I = g), (g = I + X), (k = X), (t.Xb = (1 << Q(t.m, 2)) - 1), X < 3 * (D = t.Xb)))
				f = 7;
			else {
				for (I += 3 * D, k -= 3 * D, X = 0; X < D; ++X) {
					var fe = f[w + 0] | (f[w + 1] << 8) | (f[w + 2] << 16);
					fe > k && (fe = k), Z(t.Jc[+X], f, I, fe), (I += fe), (k -= fe), (w += 3);
				}
				Z(t.Jc[+D], f, I, k), (f = I < g ? 0 : 5);
			}
			if (f != 0) return ir(t, f, 'cannot parse partitions');
			for (
				f = Q((I = t.m), 7),
					w = se(I) ? ie(I, 4) : 0,
					g = se(I) ? ie(I, 4) : 0,
					k = se(I) ? ie(I, 4) : 0,
					D = se(I) ? ie(I, 4) : 0,
					I = se(I) ? ie(I, 4) : 0,
					X = t.Qa,
					fe = 0;
				4 > fe;
				++fe
			) {
				if (X.Cb) {
					var he = X.Zb[fe];
					X.Fb || (he += f);
				} else {
					if (0 < fe) {
						t.pb[fe] = t.pb[0];
						continue;
					}
					he = f;
				}
				var ne = t.pb[fe];
				(ne.Sc[0] = Xs[sn(he + w, 127)]),
					(ne.Sc[1] = Js[sn(he + 0, 127)]),
					(ne.Eb[0] = 2 * Xs[sn(he + g, 127)]),
					(ne.Eb[1] = (101581 * Js[sn(he + k, 127)]) >> 16),
					8 > ne.Eb[1] && (ne.Eb[1] = 8),
					(ne.Qc[0] = Xs[sn(he + D, 117)]),
					(ne.Qc[1] = Js[sn(he + I, 127)]),
					(ne.lc = he + I);
			}
			if (!S.Rb) return ir(t, 4, 'Not a key frame.');
			for (se(A), S = t.Pa, f = 0; 4 > f; ++f) {
				for (w = 0; 8 > w; ++w)
					for (g = 0; 3 > g; ++g)
						for (k = 0; 11 > k; ++k)
							(D = ce(A, Du[f][w][g][k]) ? Q(A, 8) : Mu[f][w][g][k]), (S.Wc[f][w].Yb[g][k] = D);
				for (w = 0; 17 > w; ++w) S.Xc[f][w] = S.Wc[f][Ou[w]];
			}
			return (t.kc = se(A)), t.kc && (t.Bd = Q(A, 8)), (t.cb = 1);
		}
		function vo(t, o, f, g, w, A, S) {
			var k = o[w].Yb[f];
			for (f = 0; 16 > w; ++w) {
				if (!ce(t, k[f + 0])) return w;
				for (; !ce(t, k[f + 1]); ) if (((k = o[++w].Yb[0]), (f = 0), w == 16)) return 16;
				var I = o[w + 1].Yb;
				if (ce(t, k[f + 2])) {
					var D = t,
						X = 0;
					if (ce(D, (he = k)[(fe = f) + 3]))
						if (ce(D, he[fe + 6])) {
							for (
								k = 0,
									fe = 2 * (X = ce(D, he[fe + 8])) + (he = ce(D, he[fe + 9 + X])),
									X = 0,
									he = Tu[fe];
								he[k];
								++k
							)
								X += X + ce(D, he[k]);
							X += 3 + (8 << fe);
						} else
							ce(D, he[fe + 7])
								? ((X = 7 + 2 * ce(D, 165)), (X += ce(D, 145)))
								: (X = 5 + ce(D, 159));
					else X = ce(D, he[fe + 4]) ? 3 + ce(D, he[fe + 5]) : 2;
					k = I[2];
				} else (X = 1), (k = I[1]);
				(I = S + ju[w]), 0 > (D = t).b && te(D);
				var fe,
					he = D.b,
					ne = ((fe = D.Ca >> 1) - (D.I >> he)) >> 31;
				--D.b,
					(D.Ca += ne),
					(D.Ca |= 1),
					(D.I -= ((fe + 1) & ne) << he),
					(A[I] = ((X ^ ne) - ne) * g[(0 < w) + 0]);
			}
			return 16;
		}
		function ka(t) {
			var o = t.rb[t.sb - 1];
			(o.la = 0), (o.Na = 0), s(t.zc, 0, 0, t.zc.length), (t.ja = 0);
		}
		function As(t, o) {
			if (t == null) return 0;
			if (o == null) return ir(t, 2, 'NULL VP8Io parameter in VP8Decode().');
			if (!t.cb && !go(t, o)) return 0;
			if ((e(t.cb), o.ac == null || o.ac(o))) {
				o.ob && (t.L = 0);
				var f = Wo[t.L];
				if (
					(t.L == 2
						? ((t.yb = 0), (t.zb = 0))
						: ((t.yb = (o.v - f) >> 4),
							(t.zb = (o.j - f) >> 4),
							0 > t.yb && (t.yb = 0),
							0 > t.zb && (t.zb = 0)),
					(t.Va = (o.o + 15 + f) >> 4),
					(t.Hb = (o.va + 15 + f) >> 4),
					t.Hb > t.za && (t.Hb = t.za),
					t.Va > t.Ub && (t.Va = t.Ub),
					0 < t.L)
				) {
					var g = t.ed;
					for (f = 0; 4 > f; ++f) {
						var w;
						if (t.Qa.Cb) {
							var A = t.Qa.Lb[f];
							t.Qa.Fb || (A += g.Tb);
						} else A = g.Tb;
						for (w = 0; 1 >= w; ++w) {
							var S = t.gd[f][w],
								k = A;
							if (
								(g.Pc && ((k += g.vd[0]), w && (k += g.od[0])),
								0 < (k = 0 > k ? 0 : 63 < k ? 63 : k))
							) {
								var I = k;
								0 < g.wb && (I = 4 < g.wb ? I >> 2 : I >> 1) > 9 - g.wb && (I = 9 - g.wb),
									1 > I && (I = 1),
									(S.dd = I),
									(S.tc = 2 * k + I),
									(S.ld = 40 <= k ? 2 : 15 <= k ? 1 : 0);
							} else S.tc = 0;
							S.La = w;
						}
					}
				}
				f = 0;
			} else ir(t, 6, 'Frame setup failed'), (f = t.a);
			if ((f = f == 0)) {
				if (f) {
					(t.$c = 0), 0 < t.Aa || (t.Ic = Zu);
					e: {
						(f = t.Ic), (g = 4 * (I = t.za));
						var D = 32 * I,
							X = I + 1,
							fe = 0 < t.L ? I * (0 < t.Aa ? 2 : 1) : 0,
							he = (t.Aa == 2 ? 2 : 1) * I;
						if (
							(S =
								g +
								832 +
								(w = ((3 * (16 * f + Wo[t.L])) / 2) * D) +
								(A = t.Fa != null && 0 < t.Fa.length ? t.Kc.c * t.Kc.i : 0)) != S
						)
							f = 0;
						else {
							if (S > t.Vb) {
								if (((t.Vb = 0), (t.Ec = a(S)), (t.Fc = 0), t.Ec == null)) {
									f = ir(t, 1, 'no memory during frame initialization.');
									break e;
								}
								t.Vb = S;
							}
							(S = t.Ec),
								(k = t.Fc),
								(t.Ac = S),
								(t.Bc = k),
								(k += g),
								(t.Gd = l(D, ho)),
								(t.Hd = 0),
								(t.rb = l(X + 1, fo)),
								(t.sb = 1),
								(t.wa = fe ? l(fe, Hi) : null),
								(t.Y = 0),
								(t.D.Nb = 0),
								(t.D.wa = t.wa),
								(t.D.Y = t.Y),
								0 < t.Aa && (t.D.Y += I),
								e(!0),
								(t.oc = S),
								(t.pc = k),
								(k += 832),
								(t.ya = l(he, Na)),
								(t.aa = 0),
								(t.D.ya = t.ya),
								(t.D.aa = t.aa),
								t.Aa == 2 && (t.D.aa += I),
								(t.R = 16 * I),
								(t.B = 8 * I),
								(I = (D = Wo[t.L]) * t.R),
								(D = (D / 2) * t.B),
								(t.sa = S),
								(t.ta = k + I),
								(t.qa = t.sa),
								(t.ra = t.ta + 16 * f * t.R + D),
								(t.Ha = t.qa),
								(t.Ia = t.ra + 8 * f * t.B + D),
								(t.$c = 0),
								(k += w),
								(t.mb = A ? S : null),
								(t.nb = A ? k : null),
								e(k + A <= t.Fc + t.Vb),
								ka(t),
								s(t.Ac, t.Bc, 0, g),
								(f = 1);
						}
					}
					if (f) {
						if (
							((o.ka = 0),
							(o.y = t.sa),
							(o.O = t.ta),
							(o.f = t.qa),
							(o.N = t.ra),
							(o.ea = t.Ha),
							(o.Vd = t.Ia),
							(o.fa = t.R),
							(o.Rc = t.B),
							(o.F = null),
							(o.J = 0),
							!Mo)
						) {
							for (f = -255; 255 >= f; ++f) mr[255 + f] = 0 > f ? -f : f;
							for (f = -1020; 1020 >= f; ++f) Qn[1020 + f] = -128 > f ? -128 : 127 < f ? 127 : f;
							for (f = -112; 112 >= f; ++f) Ja[112 + f] = -16 > f ? -16 : 15 < f ? 15 : f;
							for (f = -255; 510 >= f; ++f) la[255 + f] = 0 > f ? 0 : 255 < f ? 255 : f;
							Mo = 1;
						}
						(aa = ks),
							(Zn = Ss),
							(Va = bo),
							(Wr = Ns),
							(bn = yo),
							(ar = mo),
							(oa = Ta),
							(jo = Ii),
							(Ya = qs),
							(Ti = ja),
							(ji = Rs),
							(hi = Ki),
							(Mi = Ma),
							(sa = Po),
							(Bi = ko),
							(di = On),
							(Xa = Xn),
							(yn = Os),
							(In[0] = Dn),
							(In[1] = Ps),
							(In[2] = Es),
							(In[3] = Ts),
							(In[4] = _o),
							(In[5] = Xi),
							(In[6] = Lo),
							(In[7] = Ia),
							(In[8] = Ms),
							(In[9] = js),
							(pi[0] = wo),
							(pi[1] = Is),
							(pi[2] = Yn),
							(pi[3] = Vi),
							(pi[4] = jr),
							(pi[5] = Fs),
							(pi[6] = xo),
							($n[0] = si),
							($n[1] = Cs),
							($n[2] = Bs),
							($n[3] = Fa),
							($n[4] = Ci),
							($n[5] = Ds),
							($n[6] = Ea),
							(f = 1);
					} else f = 0;
				}
				f &&
					(f = (function (ne, Ae) {
						for (ne.M = 0; ne.M < ne.Va; ++ne.M) {
							var ge,
								J = ne.Jc[ne.M & ne.Xb],
								$ = ne.m,
								_e = ne;
							for (ge = 0; ge < _e.za; ++ge) {
								var ke = $,
									Le = _e,
									ze = Le.Ac,
									De = Le.Bc + 4 * ge,
									it = Le.zc,
									Re = Le.ya[Le.aa + ge];
								if (
									(Le.Qa.Bb
										? (Re.$b = ce(ke, Le.Pa.jb[0]) ? 2 + ce(ke, Le.Pa.jb[2]) : ce(ke, Le.Pa.jb[1]))
										: (Re.$b = 0),
									Le.kc && (Re.Ad = ce(ke, Le.Bd)),
									(Re.Za = !ce(ke, 145) + 0),
									Re.Za)
								) {
									var Et = Re.Ob,
										Tt = 0;
									for (Le = 0; 4 > Le; ++Le) {
										var Ct,
											_t = it[0 + Le];
										for (Ct = 0; 4 > Ct; ++Ct) {
											_t = Bu[ze[De + Ct]][_t];
											for (var Ot = Jl[ce(ke, _t[0])]; 0 < Ot; ) Ot = Jl[2 * Ot + ce(ke, _t[Ot])];
											(_t = -Ot), (ze[De + Ct] = _t);
										}
										i(Et, Tt, ze, De, 4), (Tt += 4), (it[0 + Le] = _t);
									}
								} else
									(_t = ce(ke, 156) ? (ce(ke, 128) ? 1 : 3) : ce(ke, 163) ? 2 : 0),
										(Re.Ob[0] = _t),
										s(ze, De, _t, 4),
										s(it, 0, _t, 4);
								Re.Dd = ce(ke, 142) ? (ce(ke, 114) ? (ce(ke, 183) ? 1 : 3) : 2) : 0;
							}
							if (_e.m.Ka) return ir(ne, 7, 'Premature end-of-partition0 encountered.');
							for (; ne.ja < ne.za; ++ne.ja) {
								if (
									((_e = J),
									(ke = ($ = ne).rb[$.sb - 1]),
									(ze = $.rb[$.sb + $.ja]),
									(ge = $.ya[$.aa + $.ja]),
									(De = $.kc ? ge.Ad : 0))
								)
									(ke.la = ze.la = 0),
										ge.Za || (ke.Na = ze.Na = 0),
										(ge.Hc = 0),
										(ge.Gc = 0),
										(ge.ia = 0);
								else {
									var Dt, mt;
									if (
										((ke = ze),
										(ze = _e),
										(De = $.Pa.Xc),
										(it = $.ya[$.aa + $.ja]),
										(Re = $.pb[it.$b]),
										(Le = it.ad),
										(Et = 0),
										(Tt = $.rb[$.sb - 1]),
										(_t = Ct = 0),
										s(Le, Et, 0, 384),
										it.Za)
									)
										var dr = 0,
											Kr = De[3];
									else {
										Ot = a(16);
										var pr = ke.Na + Tt.Na;
										if (
											((pr = Ka(ze, De[1], pr, Re.Eb, 0, Ot, 0)),
											(ke.Na = Tt.Na = (0 < pr) + 0),
											1 < pr)
										)
											aa(Ot, 0, Le, Et);
										else {
											var Zr = (Ot[0] + 3) >> 3;
											for (Ot = 0; 256 > Ot; Ot += 16) Le[Et + Ot] = Zr;
										}
										(dr = 1), (Kr = De[0]);
									}
									var jt = 15 & ke.la,
										cn = 15 & Tt.la;
									for (Ot = 0; 4 > Ot; ++Ot) {
										var un = 1 & cn;
										for (Zr = mt = 0; 4 > Zr; ++Zr)
											(jt =
												(jt >> 1) |
												((un = (pr = Ka(ze, Kr, (pr = un + (1 & jt)), Re.Sc, dr, Le, Et)) > dr) <<
													7)),
												(mt = (mt << 2) | (3 < pr ? 3 : 1 < pr ? 2 : Le[Et + 0] != 0)),
												(Et += 16);
										(jt >>= 4), (cn = (cn >> 1) | (un << 7)), (Ct = ((Ct << 8) | mt) >>> 0);
									}
									for (Kr = jt, dr = cn >> 4, Dt = 0; 4 > Dt; Dt += 2) {
										for (
											mt = 0, jt = ke.la >> (4 + Dt), cn = Tt.la >> (4 + Dt), Ot = 0;
											2 > Ot;
											++Ot
										) {
											for (un = 1 & cn, Zr = 0; 2 > Zr; ++Zr)
												(pr = un + (1 & jt)),
													(jt =
														(jt >> 1) |
														((un = 0 < (pr = Ka(ze, De[2], pr, Re.Qc, 0, Le, Et))) << 3)),
													(mt = (mt << 2) | (3 < pr ? 3 : 1 < pr ? 2 : Le[Et + 0] != 0)),
													(Et += 16);
											(jt >>= 2), (cn = (cn >> 1) | (un << 5));
										}
										(_t |= mt << (4 * Dt)), (Kr |= (jt << 4) << Dt), (dr |= (240 & cn) << Dt);
									}
									(ke.la = Kr),
										(Tt.la = dr),
										(it.Hc = Ct),
										(it.Gc = _t),
										(it.ia = 43690 & _t ? 0 : Re.ia),
										(De = !(Ct | _t));
								}
								if (
									(0 < $.L &&
										(($.wa[$.Y + $.ja] = $.gd[ge.$b][ge.Za]), ($.wa[$.Y + $.ja].La |= !De)),
									_e.Ka)
								)
									return ir(ne, 7, 'Premature end-of-file encountered.');
							}
							if (
								(ka(ne),
								($ = Ae),
								(_e = 1),
								(ge = (J = ne).D),
								(ke = 0 < J.L && J.M >= J.zb && J.M <= J.Va),
								J.Aa == 0)
							)
								e: {
									if (
										((ge.M = J.M),
										(ge.uc = ke),
										za(J, ge),
										(_e = 1),
										(ge = (mt = J.D).Nb),
										(ke = (_t = Wo[J.L]) * J.R),
										(ze = (_t / 2) * J.B),
										(Ot = 16 * ge * J.R),
										(Zr = 8 * ge * J.B),
										(De = J.sa),
										(it = J.ta - ke + Ot),
										(Re = J.qa),
										(Le = J.ra - ze + Zr),
										(Et = J.Ha),
										(Tt = J.Ia - ze + Zr),
										(cn = (jt = mt.M) == 0),
										(Ct = jt >= J.Va - 1),
										J.Aa == 2 && za(J, mt),
										mt.uc)
									)
										for (un = (pr = J).D.M, e(pr.D.uc), mt = pr.yb; mt < pr.Hb; ++mt) {
											(dr = mt), (Kr = un);
											var Sr = (Ir = (tr = pr).D).Nb;
											Dt = tr.R;
											var Ir = Ir.wa[Ir.Y + dr],
												Gr = tr.sa,
												Ln = tr.ta + 16 * Sr * Dt + 16 * dr,
												qn = Ir.dd,
												Nr = Ir.tc;
											if (Nr != 0)
												if ((e(3 <= Nr), tr.L == 1))
													0 < dr && di(Gr, Ln, Dt, Nr + 4),
														Ir.La && yn(Gr, Ln, Dt, Nr),
														0 < Kr && Bi(Gr, Ln, Dt, Nr + 4),
														Ir.La && Xa(Gr, Ln, Dt, Nr);
												else {
													var ei = tr.B,
														Di = tr.qa,
														ca = tr.ra + 8 * Sr * ei + 8 * dr,
														vi = tr.Ha,
														tr = tr.Ia + 8 * Sr * ei + 8 * dr;
													(Sr = Ir.ld),
														0 < dr &&
															(jo(Gr, Ln, Dt, Nr + 4, qn, Sr),
															Ti(Di, ca, vi, tr, ei, Nr + 4, qn, Sr)),
														Ir.La &&
															(hi(Gr, Ln, Dt, Nr, qn, Sr), sa(Di, ca, vi, tr, ei, Nr, qn, Sr)),
														0 < Kr &&
															(oa(Gr, Ln, Dt, Nr + 4, qn, Sr),
															Ya(Di, ca, vi, tr, ei, Nr + 4, qn, Sr)),
														Ir.La &&
															(ji(Gr, Ln, Dt, Nr, qn, Sr), Mi(Di, ca, vi, tr, ei, Nr, qn, Sr));
												}
										}
									if ((J.ia && alert('todo:DitherRow'), $.put != null)) {
										if (
											((mt = 16 * jt),
											(jt = 16 * (jt + 1)),
											cn
												? (($.y = J.sa),
													($.O = J.ta + Ot),
													($.f = J.qa),
													($.N = J.ra + Zr),
													($.ea = J.Ha),
													($.W = J.Ia + Zr))
												: ((mt -= _t),
													($.y = De),
													($.O = it),
													($.f = Re),
													($.N = Le),
													($.ea = Et),
													($.W = Tt)),
											Ct || (jt -= _t),
											jt > $.o && (jt = $.o),
											($.F = null),
											($.J = null),
											J.Fa != null &&
												0 < J.Fa.length &&
												mt < jt &&
												(($.J = Ra(J, $, mt, jt - mt)),
												($.F = J.mb),
												$.F == null && $.F.length == 0))
										) {
											_e = ir(J, 3, 'Could not decode alpha data.');
											break e;
										}
										mt < $.j &&
											((_t = $.j - mt),
											(mt = $.j),
											e(!(1 & _t)),
											($.O += J.R * _t),
											($.N += J.B * (_t >> 1)),
											($.W += J.B * (_t >> 1)),
											$.F != null && ($.J += $.width * _t)),
											mt < jt &&
												(($.O += $.v),
												($.N += $.v >> 1),
												($.W += $.v >> 1),
												$.F != null && ($.J += $.v),
												($.ka = mt - $.j),
												($.U = $.va - $.v),
												($.T = jt - mt),
												(_e = $.put($)));
									}
									ge + 1 != J.Ic ||
										Ct ||
										(i(J.sa, J.ta - ke, De, it + 16 * J.R, ke),
										i(J.qa, J.ra - ze, Re, Le + 8 * J.B, ze),
										i(J.Ha, J.Ia - ze, Et, Tt + 8 * J.B, ze));
								}
							if (!_e) return ir(ne, 6, 'Output aborted.');
						}
						return 1;
					})(t, o)),
					o.bc != null && o.bc(o),
					(f &= 1);
			}
			return f ? ((t.cb = 0), f) : 0;
		}
		function kn(t, o, f, g, w) {
			(w = t[o + f + 32 * g] + (w >> 3)), (t[o + f + 32 * g] = -256 & w ? (0 > w ? 0 : 255) : w);
		}
		function Gi(t, o, f, g, w, A) {
			kn(t, o, 0, f, g + w), kn(t, o, 1, f, g + A), kn(t, o, 2, f, g - A), kn(t, o, 3, f, g - w);
		}
		function Yr(t) {
			return ((20091 * t) >> 16) + t;
		}
		function Pa(t, o, f, g) {
			var w,
				A = 0,
				S = a(16);
			for (w = 0; 4 > w; ++w) {
				var k = t[o + 0] + t[o + 8],
					I = t[o + 0] - t[o + 8],
					D = ((35468 * t[o + 4]) >> 16) - Yr(t[o + 12]),
					X = Yr(t[o + 4]) + ((35468 * t[o + 12]) >> 16);
				(S[A + 0] = k + X),
					(S[A + 1] = I + D),
					(S[A + 2] = I - D),
					(S[A + 3] = k - X),
					(A += 4),
					o++;
			}
			for (w = A = 0; 4 > w; ++w)
				(k = (t = S[A + 0] + 4) + S[A + 8]),
					(I = t - S[A + 8]),
					(D = ((35468 * S[A + 4]) >> 16) - Yr(S[A + 12])),
					kn(f, g, 0, 0, k + (X = Yr(S[A + 4]) + ((35468 * S[A + 12]) >> 16))),
					kn(f, g, 1, 0, I + D),
					kn(f, g, 2, 0, I - D),
					kn(f, g, 3, 0, k - X),
					A++,
					(g += 32);
		}
		function mo(t, o, f, g) {
			var w = t[o + 0] + 4,
				A = (35468 * t[o + 4]) >> 16,
				S = Yr(t[o + 4]),
				k = (35468 * t[o + 1]) >> 16;
			Gi(f, g, 0, w + S, (t = Yr(t[o + 1])), k),
				Gi(f, g, 1, w + A, t, k),
				Gi(f, g, 2, w - A, t, k),
				Gi(f, g, 3, w - S, t, k);
		}
		function Ss(t, o, f, g, w) {
			Pa(t, o, f, g), w && Pa(t, o + 16, f, g + 4);
		}
		function bo(t, o, f, g) {
			Zn(t, o + 0, f, g, 1), Zn(t, o + 32, f, g + 128, 1);
		}
		function Ns(t, o, f, g) {
			var w;
			for (t = t[o + 0] + 4, w = 0; 4 > w; ++w) for (o = 0; 4 > o; ++o) kn(f, g, o, w, t);
		}
		function yo(t, o, f, g) {
			t[o + 0] && Wr(t, o + 0, f, g),
				t[o + 16] && Wr(t, o + 16, f, g + 4),
				t[o + 32] && Wr(t, o + 32, f, g + 128),
				t[o + 48] && Wr(t, o + 48, f, g + 128 + 4);
		}
		function ks(t, o, f, g) {
			var w,
				A = a(16);
			for (w = 0; 4 > w; ++w) {
				var S = t[o + 0 + w] + t[o + 12 + w],
					k = t[o + 4 + w] + t[o + 8 + w],
					I = t[o + 4 + w] - t[o + 8 + w],
					D = t[o + 0 + w] - t[o + 12 + w];
				(A[0 + w] = S + k), (A[8 + w] = S - k), (A[4 + w] = D + I), (A[12 + w] = D - I);
			}
			for (w = 0; 4 > w; ++w)
				(S = (t = A[0 + 4 * w] + 3) + A[3 + 4 * w]),
					(k = A[1 + 4 * w] + A[2 + 4 * w]),
					(I = A[1 + 4 * w] - A[2 + 4 * w]),
					(D = t - A[3 + 4 * w]),
					(f[g + 0] = (S + k) >> 3),
					(f[g + 16] = (D + I) >> 3),
					(f[g + 32] = (S - k) >> 3),
					(f[g + 48] = (D - I) >> 3),
					(g += 64);
		}
		function Ca(t, o, f) {
			var g,
				w = o - 32,
				A = ln,
				S = 255 - t[w - 1];
			for (g = 0; g < f; ++g) {
				var k,
					I = A,
					D = S + t[o - 1];
				for (k = 0; k < f; ++k) t[o + k] = I[D + t[w + k]];
				o += 32;
			}
		}
		function Ps(t, o) {
			Ca(t, o, 4);
		}
		function Cs(t, o) {
			Ca(t, o, 8);
		}
		function Is(t, o) {
			Ca(t, o, 16);
		}
		function Yn(t, o) {
			var f;
			for (f = 0; 16 > f; ++f) i(t, o + 32 * f, t, o - 32, 16);
		}
		function Vi(t, o) {
			var f;
			for (f = 16; 0 < f; --f) s(t, o, t[o - 1], 16), (o += 32);
		}
		function Yi(t, o, f) {
			var g;
			for (g = 0; 16 > g; ++g) s(o, f + 32 * g, t, 16);
		}
		function wo(t, o) {
			var f,
				g = 16;
			for (f = 0; 16 > f; ++f) g += t[o - 1 + 32 * f] + t[o + f - 32];
			Yi(g >> 5, t, o);
		}
		function jr(t, o) {
			var f,
				g = 8;
			for (f = 0; 16 > f; ++f) g += t[o - 1 + 32 * f];
			Yi(g >> 4, t, o);
		}
		function Fs(t, o) {
			var f,
				g = 8;
			for (f = 0; 16 > f; ++f) g += t[o + f - 32];
			Yi(g >> 4, t, o);
		}
		function xo(t, o) {
			Yi(128, t, o);
		}
		function ct(t, o, f) {
			return (t + 2 * o + f + 2) >> 2;
		}
		function Es(t, o) {
			var f,
				g = o - 32;
			for (
				g = new Uint8Array([
					ct(t[g - 1], t[g + 0], t[g + 1]),
					ct(t[g + 0], t[g + 1], t[g + 2]),
					ct(t[g + 1], t[g + 2], t[g + 3]),
					ct(t[g + 2], t[g + 3], t[g + 4])
				]),
					f = 0;
				4 > f;
				++f
			)
				i(t, o + 32 * f, g, 0, g.length);
		}
		function Ts(t, o) {
			var f = t[o - 1],
				g = t[o - 1 + 32],
				w = t[o - 1 + 64],
				A = t[o - 1 + 96];
			Ce(t, o + 0, 16843009 * ct(t[o - 1 - 32], f, g)),
				Ce(t, o + 32, 16843009 * ct(f, g, w)),
				Ce(t, o + 64, 16843009 * ct(g, w, A)),
				Ce(t, o + 96, 16843009 * ct(w, A, A));
		}
		function Dn(t, o) {
			var f,
				g = 4;
			for (f = 0; 4 > f; ++f) g += t[o + f - 32] + t[o - 1 + 32 * f];
			for (g >>= 3, f = 0; 4 > f; ++f) s(t, o + 32 * f, g, 4);
		}
		function _o(t, o) {
			var f = t[o - 1 + 0],
				g = t[o - 1 + 32],
				w = t[o - 1 + 64],
				A = t[o - 1 - 32],
				S = t[o + 0 - 32],
				k = t[o + 1 - 32],
				I = t[o + 2 - 32],
				D = t[o + 3 - 32];
			(t[o + 0 + 96] = ct(g, w, t[o - 1 + 96])),
				(t[o + 1 + 96] = t[o + 0 + 64] = ct(f, g, w)),
				(t[o + 2 + 96] = t[o + 1 + 64] = t[o + 0 + 32] = ct(A, f, g)),
				(t[o + 3 + 96] = t[o + 2 + 64] = t[o + 1 + 32] = t[o + 0 + 0] = ct(S, A, f)),
				(t[o + 3 + 64] = t[o + 2 + 32] = t[o + 1 + 0] = ct(k, S, A)),
				(t[o + 3 + 32] = t[o + 2 + 0] = ct(I, k, S)),
				(t[o + 3 + 0] = ct(D, I, k));
		}
		function Lo(t, o) {
			var f = t[o + 1 - 32],
				g = t[o + 2 - 32],
				w = t[o + 3 - 32],
				A = t[o + 4 - 32],
				S = t[o + 5 - 32],
				k = t[o + 6 - 32],
				I = t[o + 7 - 32];
			(t[o + 0 + 0] = ct(t[o + 0 - 32], f, g)),
				(t[o + 1 + 0] = t[o + 0 + 32] = ct(f, g, w)),
				(t[o + 2 + 0] = t[o + 1 + 32] = t[o + 0 + 64] = ct(g, w, A)),
				(t[o + 3 + 0] = t[o + 2 + 32] = t[o + 1 + 64] = t[o + 0 + 96] = ct(w, A, S)),
				(t[o + 3 + 32] = t[o + 2 + 64] = t[o + 1 + 96] = ct(A, S, k)),
				(t[o + 3 + 64] = t[o + 2 + 96] = ct(S, k, I)),
				(t[o + 3 + 96] = ct(k, I, I));
		}
		function Xi(t, o) {
			var f = t[o - 1 + 0],
				g = t[o - 1 + 32],
				w = t[o - 1 + 64],
				A = t[o - 1 - 32],
				S = t[o + 0 - 32],
				k = t[o + 1 - 32],
				I = t[o + 2 - 32],
				D = t[o + 3 - 32];
			(t[o + 0 + 0] = t[o + 1 + 64] = (A + S + 1) >> 1),
				(t[o + 1 + 0] = t[o + 2 + 64] = (S + k + 1) >> 1),
				(t[o + 2 + 0] = t[o + 3 + 64] = (k + I + 1) >> 1),
				(t[o + 3 + 0] = (I + D + 1) >> 1),
				(t[o + 0 + 96] = ct(w, g, f)),
				(t[o + 0 + 64] = ct(g, f, A)),
				(t[o + 0 + 32] = t[o + 1 + 96] = ct(f, A, S)),
				(t[o + 1 + 32] = t[o + 2 + 96] = ct(A, S, k)),
				(t[o + 2 + 32] = t[o + 3 + 96] = ct(S, k, I)),
				(t[o + 3 + 32] = ct(k, I, D));
		}
		function Ia(t, o) {
			var f = t[o + 0 - 32],
				g = t[o + 1 - 32],
				w = t[o + 2 - 32],
				A = t[o + 3 - 32],
				S = t[o + 4 - 32],
				k = t[o + 5 - 32],
				I = t[o + 6 - 32],
				D = t[o + 7 - 32];
			(t[o + 0 + 0] = (f + g + 1) >> 1),
				(t[o + 1 + 0] = t[o + 0 + 64] = (g + w + 1) >> 1),
				(t[o + 2 + 0] = t[o + 1 + 64] = (w + A + 1) >> 1),
				(t[o + 3 + 0] = t[o + 2 + 64] = (A + S + 1) >> 1),
				(t[o + 0 + 32] = ct(f, g, w)),
				(t[o + 1 + 32] = t[o + 0 + 96] = ct(g, w, A)),
				(t[o + 2 + 32] = t[o + 1 + 96] = ct(w, A, S)),
				(t[o + 3 + 32] = t[o + 2 + 96] = ct(A, S, k)),
				(t[o + 3 + 64] = ct(S, k, I)),
				(t[o + 3 + 96] = ct(k, I, D));
		}
		function js(t, o) {
			var f = t[o - 1 + 0],
				g = t[o - 1 + 32],
				w = t[o - 1 + 64],
				A = t[o - 1 + 96];
			(t[o + 0 + 0] = (f + g + 1) >> 1),
				(t[o + 2 + 0] = t[o + 0 + 32] = (g + w + 1) >> 1),
				(t[o + 2 + 32] = t[o + 0 + 64] = (w + A + 1) >> 1),
				(t[o + 1 + 0] = ct(f, g, w)),
				(t[o + 3 + 0] = t[o + 1 + 32] = ct(g, w, A)),
				(t[o + 3 + 32] = t[o + 1 + 64] = ct(w, A, A)),
				(t[o + 3 + 64] =
					t[o + 2 + 64] =
					t[o + 0 + 96] =
					t[o + 1 + 96] =
					t[o + 2 + 96] =
					t[o + 3 + 96] =
						A);
		}
		function Ms(t, o) {
			var f = t[o - 1 + 0],
				g = t[o - 1 + 32],
				w = t[o - 1 + 64],
				A = t[o - 1 + 96],
				S = t[o - 1 - 32],
				k = t[o + 0 - 32],
				I = t[o + 1 - 32],
				D = t[o + 2 - 32];
			(t[o + 0 + 0] = t[o + 2 + 32] = (f + S + 1) >> 1),
				(t[o + 0 + 32] = t[o + 2 + 64] = (g + f + 1) >> 1),
				(t[o + 0 + 64] = t[o + 2 + 96] = (w + g + 1) >> 1),
				(t[o + 0 + 96] = (A + w + 1) >> 1),
				(t[o + 3 + 0] = ct(k, I, D)),
				(t[o + 2 + 0] = ct(S, k, I)),
				(t[o + 1 + 0] = t[o + 3 + 32] = ct(f, S, k)),
				(t[o + 1 + 32] = t[o + 3 + 64] = ct(g, f, S)),
				(t[o + 1 + 64] = t[o + 3 + 96] = ct(w, g, f)),
				(t[o + 1 + 96] = ct(A, w, g));
		}
		function Bs(t, o) {
			var f;
			for (f = 0; 8 > f; ++f) i(t, o + 32 * f, t, o - 32, 8);
		}
		function Fa(t, o) {
			var f;
			for (f = 0; 8 > f; ++f) s(t, o, t[o - 1], 8), (o += 32);
		}
		function Pi(t, o, f) {
			var g;
			for (g = 0; 8 > g; ++g) s(o, f + 32 * g, t, 8);
		}
		function si(t, o) {
			var f,
				g = 8;
			for (f = 0; 8 > f; ++f) g += t[o + f - 32] + t[o - 1 + 32 * f];
			Pi(g >> 4, t, o);
		}
		function Ds(t, o) {
			var f,
				g = 4;
			for (f = 0; 8 > f; ++f) g += t[o + f - 32];
			Pi(g >> 3, t, o);
		}
		function Ci(t, o) {
			var f,
				g = 4;
			for (f = 0; 8 > f; ++f) g += t[o - 1 + 32 * f];
			Pi(g >> 3, t, o);
		}
		function Ea(t, o) {
			Pi(128, t, o);
		}
		function Ji(t, o, f) {
			var g = t[o - f],
				w = t[o + 0],
				A = 3 * (w - g) + Hs[1020 + t[o - 2 * f] - t[o + f]],
				S = Bo[112 + ((A + 4) >> 3)];
			(t[o - f] = ln[255 + g + Bo[112 + ((A + 3) >> 3)]]), (t[o + 0] = ln[255 + w - S]);
		}
		function Ao(t, o, f, g) {
			var w = t[o + 0],
				A = t[o + f];
			return xn[255 + t[o - 2 * f] - t[o - f]] > g || xn[255 + A - w] > g;
		}
		function So(t, o, f, g) {
			return 4 * xn[255 + t[o - f] - t[o + 0]] + xn[255 + t[o - 2 * f] - t[o + f]] <= g;
		}
		function No(t, o, f, g, w) {
			var A = t[o - 3 * f],
				S = t[o - 2 * f],
				k = t[o - f],
				I = t[o + 0],
				D = t[o + f],
				X = t[o + 2 * f],
				fe = t[o + 3 * f];
			return 4 * xn[255 + k - I] + xn[255 + S - D] > g
				? 0
				: xn[255 + t[o - 4 * f] - A] <= w &&
						xn[255 + A - S] <= w &&
						xn[255 + S - k] <= w &&
						xn[255 + fe - X] <= w &&
						xn[255 + X - D] <= w &&
						xn[255 + D - I] <= w;
		}
		function ko(t, o, f, g) {
			var w = 2 * g + 1;
			for (g = 0; 16 > g; ++g) So(t, o + g, f, w) && Ji(t, o + g, f);
		}
		function On(t, o, f, g) {
			var w = 2 * g + 1;
			for (g = 0; 16 > g; ++g) So(t, o + g * f, 1, w) && Ji(t, o + g * f, 1);
		}
		function Xn(t, o, f, g) {
			var w;
			for (w = 3; 0 < w; --w) ko(t, (o += 4 * f), f, g);
		}
		function Os(t, o, f, g) {
			var w;
			for (w = 3; 0 < w; --w) On(t, (o += 4), f, g);
		}
		function li(t, o, f, g, w, A, S, k) {
			for (A = 2 * A + 1; 0 < w--; ) {
				if (No(t, o, f, A, S))
					if (Ao(t, o, f, k)) Ji(t, o, f);
					else {
						var I = t,
							D = o,
							X = f,
							fe = I[D - 2 * X],
							he = I[D - X],
							ne = I[D + 0],
							Ae = I[D + X],
							ge = I[D + 2 * X],
							J = (27 * (_e = Hs[1020 + 3 * (ne - he) + Hs[1020 + fe - Ae]]) + 63) >> 7,
							$ = (18 * _e + 63) >> 7,
							_e = (9 * _e + 63) >> 7;
						(I[D - 3 * X] = ln[255 + I[D - 3 * X] + _e]),
							(I[D - 2 * X] = ln[255 + fe + $]),
							(I[D - X] = ln[255 + he + J]),
							(I[D + 0] = ln[255 + ne - J]),
							(I[D + X] = ln[255 + Ae - $]),
							(I[D + 2 * X] = ln[255 + ge - _e]);
					}
				o += g;
			}
		}
		function Pn(t, o, f, g, w, A, S, k) {
			for (A = 2 * A + 1; 0 < w--; ) {
				if (No(t, o, f, A, S))
					if (Ao(t, o, f, k)) Ji(t, o, f);
					else {
						var I = t,
							D = o,
							X = f,
							fe = I[D - X],
							he = I[D + 0],
							ne = I[D + X],
							Ae = Bo[112 + (((ge = 3 * (he - fe)) + 4) >> 3)],
							ge = Bo[112 + ((ge + 3) >> 3)],
							J = (Ae + 1) >> 1;
						(I[D - 2 * X] = ln[255 + I[D - 2 * X] + J]),
							(I[D - X] = ln[255 + fe + ge]),
							(I[D + 0] = ln[255 + he - Ae]),
							(I[D + X] = ln[255 + ne - J]);
					}
				o += g;
			}
		}
		function Ta(t, o, f, g, w, A) {
			li(t, o, f, 1, 16, g, w, A);
		}
		function Ii(t, o, f, g, w, A) {
			li(t, o, 1, f, 16, g, w, A);
		}
		function Rs(t, o, f, g, w, A) {
			var S;
			for (S = 3; 0 < S; --S) Pn(t, (o += 4 * f), f, 1, 16, g, w, A);
		}
		function Ki(t, o, f, g, w, A) {
			var S;
			for (S = 3; 0 < S; --S) Pn(t, (o += 4), 1, f, 16, g, w, A);
		}
		function qs(t, o, f, g, w, A, S, k) {
			li(t, o, w, 1, 8, A, S, k), li(f, g, w, 1, 8, A, S, k);
		}
		function ja(t, o, f, g, w, A, S, k) {
			li(t, o, 1, w, 8, A, S, k), li(f, g, 1, w, 8, A, S, k);
		}
		function Ma(t, o, f, g, w, A, S, k) {
			Pn(t, o + 4 * w, w, 1, 8, A, S, k), Pn(f, g + 4 * w, w, 1, 8, A, S, k);
		}
		function Po(t, o, f, g, w, A, S, k) {
			Pn(t, o + 4, 1, w, 8, A, S, k), Pn(f, g + 4, 1, w, 8, A, S, k);
		}
		function Zi() {
			(this.ba = new nt()),
				(this.ec = []),
				(this.cc = []),
				(this.Mc = []),
				(this.Dc = this.Nc = this.dc = this.fc = 0),
				(this.Oa = new vt()),
				(this.memory = 0),
				(this.Ib = 'OutputFunc'),
				(this.Jb = 'OutputAlphaFunc'),
				(this.Nd = 'OutputRowFunc');
		}
		function Ba() {
			(this.data = []),
				(this.offset = this.kd = this.ha = this.w = 0),
				(this.na = []),
				(this.xa = this.gb = this.Ja = this.Sa = this.P = 0);
		}
		function Da() {
			(this.nc = this.Ea = this.b = this.hc = 0), (this.K = []), (this.w = 0);
		}
		function Co() {
			(this.ua = 0),
				(this.Wa = new U()),
				(this.vb = new U()),
				(this.md = this.xc = this.wc = 0),
				(this.vc = []),
				(this.Wb = 0),
				(this.Ya = new B()),
				(this.yc = new L());
		}
		function zs() {
			(this.xb = this.a = 0),
				(this.l = new Wi()),
				(this.ca = new nt()),
				(this.V = []),
				(this.Ba = 0),
				(this.Ta = []),
				(this.Ua = 0),
				(this.m = new b()),
				(this.Pb = 0),
				(this.wd = new b()),
				(this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0),
				(this.s = new Co()),
				(this.ab = 0),
				(this.gc = l(4, Da)),
				(this.Oc = 0);
		}
		function Qi() {
			(this.Lc = this.Z = this.$a = this.i = this.c = 0),
				(this.l = new Wi()),
				(this.ic = 0),
				(this.ca = []),
				(this.tb = 0),
				(this.qd = null),
				(this.rd = 0);
		}
		function Fi(t, o, f, g, w, A, S) {
			for (t = t == null ? 0 : t[o + 0], o = 0; o < S; ++o)
				(w[A + o] = (t + f[g + o]) & 255), (t = w[A + o]);
		}
		function Oa(t, o, f, g, w, A, S) {
			var k;
			if (t == null) Fi(null, null, f, g, w, A, S);
			else for (k = 0; k < S; ++k) w[A + k] = (t[o + k] + f[g + k]) & 255;
		}
		function ci(t, o, f, g, w, A, S) {
			if (t == null) Fi(null, null, f, g, w, A, S);
			else {
				var k,
					I = t[o + 0],
					D = I,
					X = I;
				for (k = 0; k < S; ++k)
					(D = X + (I = t[o + k]) - D),
						(X = (f[g + k] + (-256 & D ? (0 > D ? 0 : 255) : D)) & 255),
						(D = I),
						(w[A + k] = X);
			}
		}
		function Ra(t, o, f, g) {
			var w = o.width,
				A = o.o;
			if ((e(t != null && o != null), 0 > f || 0 >= g || f + g > A)) return null;
			if (!t.Cc) {
				if (t.ga == null) {
					var S;
					if (
						((t.ga = new Qi()),
						(S = t.ga == null) ||
							((S = o.width * o.o),
							e(t.Gb.length == 0),
							(t.Gb = a(S)),
							(t.Uc = 0),
							t.Gb == null ? (S = 0) : ((t.mb = t.Gb), (t.nb = t.Uc), (t.rc = null), (S = 1)),
							(S = !S)),
						!S)
					) {
						S = t.ga;
						var k = t.Fa,
							I = t.P,
							D = t.qc,
							X = t.mb,
							fe = t.nb,
							he = I + 1,
							ne = D - 1,
							Ae = S.l;
						if (
							(e(k != null && X != null && o != null),
							(gi[0] = null),
							(gi[1] = Fi),
							(gi[2] = Oa),
							(gi[3] = ci),
							(S.ca = X),
							(S.tb = fe),
							(S.c = o.width),
							(S.i = o.height),
							e(0 < S.c && 0 < S.i),
							1 >= D)
						)
							o = 0;
						else if (
							((S.$a = (k[I + 0] >> 0) & 3),
							(S.Z = (k[I + 0] >> 2) & 3),
							(S.Lc = (k[I + 0] >> 4) & 3),
							(I = (k[I + 0] >> 6) & 3),
							0 > S.$a || 1 < S.$a || 4 <= S.Z || 1 < S.Lc || I)
						)
							o = 0;
						else if (
							((Ae.put = Ur),
							(Ae.ac = Zt),
							(Ae.bc = _r),
							(Ae.ma = S),
							(Ae.width = o.width),
							(Ae.height = o.height),
							(Ae.Da = o.Da),
							(Ae.v = o.v),
							(Ae.va = o.va),
							(Ae.j = o.j),
							(Ae.o = o.o),
							S.$a)
						)
							e: {
								e(S.$a == 1), (o = fr());
								t: for (;;) {
									if (o == null) {
										o = 0;
										break e;
									}
									if (
										(e(S != null),
										(S.mc = o),
										(o.c = S.c),
										(o.i = S.i),
										(o.l = S.l),
										(o.l.ma = S),
										(o.l.width = S.c),
										(o.l.height = S.i),
										(o.a = 0),
										K(o.m, k, he, ne),
										!vr(S.c, S.i, 1, o, null) ||
											(o.ab == 1 && o.gc[0].hc == 3 && pn(o.s)
												? ((S.ic = 1),
													(k = o.c * o.i),
													(o.Ta = null),
													(o.Ua = 0),
													(o.V = a(k)),
													(o.Ba = 0),
													o.V == null ? ((o.a = 1), (o = 0)) : (o = 1))
												: ((S.ic = 0), (o = Tr(o, S.c))),
											!o))
									)
										break t;
									o = 1;
									break e;
								}
								(S.mc = null), (o = 0);
							}
						else o = ne >= S.c * S.i;
						S = !o;
					}
					if (S) return null;
					t.ga.Lc != 1 ? (t.Ga = 0) : (g = A - f);
				}
				e(t.ga != null), e(f + g <= A);
				e: {
					if (((o = (k = t.ga).c), (A = k.l.o), k.$a == 0)) {
						if (
							((he = t.rc),
							(ne = t.Vc),
							(Ae = t.Fa),
							(I = t.P + 1 + f * o),
							(D = t.mb),
							(X = t.nb + f * o),
							e(I <= t.P + t.qc),
							k.Z != 0)
						)
							for (e(gi[k.Z] != null), S = 0; S < g; ++S)
								gi[k.Z](he, ne, Ae, I, D, X, o), (he = D), (ne = X), (X += o), (I += o);
						else for (S = 0; S < g; ++S) i(D, X, Ae, I, o), (he = D), (ne = X), (X += o), (I += o);
						(t.rc = he), (t.Vc = ne);
					} else {
						if ((e(k.mc != null), (o = f + g), e((S = k.mc) != null), e(o <= S.i), S.C >= o)) o = 1;
						else if ((k.ic || ae(), k.ic)) {
							(k = S.V), (he = S.Ba), (ne = S.c);
							var ge = S.i,
								J = ((Ae = 1), (I = S.$ / ne), (D = S.$ % ne), (X = S.m), (fe = S.s), S.$),
								$ = ne * ge,
								_e = ne * o,
								ke = fe.wc,
								Le = J < _e ? Qt(fe, D, I) : null;
							e(J <= $), e(o <= ge), e(pn(fe));
							t: for (;;) {
								for (; !X.h && J < _e; ) {
									if (
										(D & ke || (Le = Qt(fe, D, I)),
										e(Le != null),
										V(X),
										256 > (ge = gr(Le.G[0], Le.H[0], X)))
									)
										(k[he + J] = ge),
											++J,
											++D >= ne && ((D = 0), ++I <= o && !(I % 16) && an(S, I));
									else {
										if (!(280 > ge)) {
											Ae = 0;
											break t;
										}
										ge = Pr(ge - 256, X);
										var ze,
											De = gr(Le.G[4], Le.H[4], X);
										if ((V(X), !(J >= (De = Er(ne, (De = Pr(De, X)))) && $ - J >= ge))) {
											Ae = 0;
											break t;
										}
										for (ze = 0; ze < ge; ++ze) k[he + J + ze] = k[he + J + ze - De];
										for (J += ge, D += ge; D >= ne; ) (D -= ne), ++I <= o && !(I % 16) && an(S, I);
										J < _e && D & ke && (Le = Qt(fe, D, I));
									}
									e(X.h == M(X));
								}
								an(S, I > o ? o : I);
								break t;
							}
							!Ae || (X.h && J < $) ? ((Ae = 0), (S.a = X.h ? 5 : 3)) : (S.$ = J), (o = Ae);
						} else o = on(S, S.V, S.Ba, S.c, S.i, o, gn);
						if (!o) {
							g = 0;
							break e;
						}
					}
					f + g >= A && (t.Cc = 1), (g = 1);
				}
				if (!g) return null;
				if (t.Cc && ((g = t.ga) != null && (g.mc = null), (t.ga = null), 0 < t.Ga))
					return alert('todo:WebPDequantizeLevels'), null;
			}
			return t.nb + f * w;
		}
		function c(t, o, f, g, w, A) {
			for (; 0 < w--; ) {
				var S,
					k = t,
					I = o + (f ? 1 : 0),
					D = t,
					X = o + (f ? 0 : 3);
				for (S = 0; S < g; ++S) {
					var fe = D[X + 4 * S];
					fe != 255 &&
						((fe *= 32897),
						(k[I + 4 * S + 0] = (k[I + 4 * S + 0] * fe) >> 23),
						(k[I + 4 * S + 1] = (k[I + 4 * S + 1] * fe) >> 23),
						(k[I + 4 * S + 2] = (k[I + 4 * S + 2] * fe) >> 23));
				}
				o += A;
			}
		}
		function x(t, o, f, g, w) {
			for (; 0 < g--; ) {
				var A;
				for (A = 0; A < f; ++A) {
					var S = t[o + 2 * A + 0],
						k = 15 & (D = t[o + 2 * A + 1]),
						I = 4369 * k,
						D = (((240 & D) | (D >> 4)) * I) >> 16;
					(t[o + 2 * A + 0] =
						(((((240 & S) | (S >> 4)) * I) >> 16) & 240) |
						((((((15 & S) | (S << 4)) * I) >> 16) >> 4) & 15)),
						(t[o + 2 * A + 1] = (240 & D) | k);
				}
				o += w;
			}
		}
		function R(t, o, f, g, w, A, S, k) {
			var I,
				D,
				X = 255;
			for (D = 0; D < w; ++D) {
				for (I = 0; I < g; ++I) {
					var fe = t[o + I];
					(A[S + 4 * I] = fe), (X &= fe);
				}
				(o += f), (S += k);
			}
			return X != 255;
		}
		function Y(t, o, f, g, w) {
			var A;
			for (A = 0; A < w; ++A) f[g + A] = t[o + A] >> 8;
		}
		function ae() {
			(wn = c), (zt = x), (Ut = R), (or = Y);
		}
		function me(t, o, f) {
			z[t] = function (g, w, A, S, k, I, D, X, fe, he, ne, Ae, ge, J, $, _e, ke) {
				var Le,
					ze = (ke - 1) >> 1,
					De = k[I + 0] | (D[X + 0] << 16),
					it = fe[he + 0] | (ne[Ae + 0] << 16);
				e(g != null);
				var Re = (3 * De + it + 131074) >> 2;
				for (
					o(g[w + 0], 255 & Re, Re >> 16, ge, J),
						A != null &&
							((Re = (3 * it + De + 131074) >> 2), o(A[S + 0], 255 & Re, Re >> 16, $, _e)),
						Le = 1;
					Le <= ze;
					++Le
				) {
					var Et = k[I + Le] | (D[X + Le] << 16),
						Tt = fe[he + Le] | (ne[Ae + Le] << 16),
						Ct = De + Et + it + Tt + 524296,
						_t = (Ct + 2 * (Et + it)) >> 3;
					(Re = (_t + De) >> 1),
						(De = ((Ct = (Ct + 2 * (De + Tt)) >> 3) + Et) >> 1),
						o(g[w + 2 * Le - 1], 255 & Re, Re >> 16, ge, J + (2 * Le - 1) * f),
						o(g[w + 2 * Le - 0], 255 & De, De >> 16, ge, J + (2 * Le - 0) * f),
						A != null &&
							((Re = (Ct + it) >> 1),
							(De = (_t + Tt) >> 1),
							o(A[S + 2 * Le - 1], 255 & Re, Re >> 16, $, _e + (2 * Le - 1) * f),
							o(A[S + 2 * Le + 0], 255 & De, De >> 16, $, _e + (2 * Le + 0) * f)),
						(De = Et),
						(it = Tt);
				}
				1 & ke ||
					((Re = (3 * De + it + 131074) >> 2),
					o(g[w + ke - 1], 255 & Re, Re >> 16, ge, J + (ke - 1) * f),
					A != null &&
						((Re = (3 * it + De + 131074) >> 2),
						o(A[S + ke - 1], 255 & Re, Re >> 16, $, _e + (ke - 1) * f)));
			};
		}
		function Ie() {
			(_n[Do] = qu),
				(_n[Oo] = Zl),
				(_n[Vl] = zu),
				(_n[Ro] = Ql),
				(_n[qo] = $l),
				(_n[Ws] = ec),
				(_n[Yl] = Uu),
				(_n[Gs] = Zl),
				(_n[Vs] = Ql),
				(_n[zo] = $l),
				(_n[Ys] = ec);
		}
		function qe(t) {
			return t & -16384 ? (0 > t ? 0 : 255) : t >> Hu;
		}
		function et(t, o) {
			return qe(((19077 * t) >> 8) + ((26149 * o) >> 8) - 14234);
		}
		function pt(t, o, f) {
			return qe(((19077 * t) >> 8) - ((6419 * o) >> 8) - ((13320 * f) >> 8) + 8708);
		}
		function ht(t, o) {
			return qe(((19077 * t) >> 8) + ((33050 * o) >> 8) - 17685);
		}
		function kt(t, o, f, g, w) {
			(g[w + 0] = et(t, f)), (g[w + 1] = pt(t, o, f)), (g[w + 2] = ht(t, o));
		}
		function $t(t, o, f, g, w) {
			(g[w + 0] = ht(t, o)), (g[w + 1] = pt(t, o, f)), (g[w + 2] = et(t, f));
		}
		function er(t, o, f, g, w) {
			var A = pt(t, o, f);
			(o = ((A << 3) & 224) | (ht(t, o) >> 3)),
				(g[w + 0] = (248 & et(t, f)) | (A >> 5)),
				(g[w + 1] = o);
		}
		function hr(t, o, f, g, w) {
			var A = (240 & ht(t, o)) | 15;
			(g[w + 0] = (240 & et(t, f)) | (pt(t, o, f) >> 4)), (g[w + 1] = A);
		}
		function Mr(t, o, f, g, w) {
			(g[w + 0] = 255), kt(t, o, f, g, w + 1);
		}
		function Ar(t, o, f, g, w) {
			$t(t, o, f, g, w), (g[w + 3] = 255);
		}
		function Cn(t, o, f, g, w) {
			kt(t, o, f, g, w), (g[w + 3] = 255);
		}
		function sn(t, o) {
			return 0 > t ? 0 : t > o ? o : t;
		}
		function Rn(t, o, f) {
			z[t] = function (g, w, A, S, k, I, D, X, fe) {
				for (var he = X + (-2 & fe) * f; X != he; )
					o(g[w + 0], A[S + 0], k[I + 0], D, X),
						o(g[w + 1], A[S + 0], k[I + 0], D, X + f),
						(w += 2),
						++S,
						++I,
						(X += 2 * f);
				1 & fe && o(g[w + 0], A[S + 0], k[I + 0], D, X);
			};
		}
		function Io(t, o, f) {
			return f == 0 ? (t == 0 ? (o == 0 ? 6 : 5) : o == 0 ? 4 : 0) : f;
		}
		function qa(t, o, f, g, w) {
			switch (t >>> 30) {
				case 3:
					Zn(o, f, g, w, 0);
					break;
				case 2:
					ar(o, f, g, w);
					break;
				case 1:
					Wr(o, f, g, w);
			}
		}
		function za(t, o) {
			var f,
				g,
				w = o.M,
				A = o.Nb,
				S = t.oc,
				k = t.pc + 40,
				I = t.oc,
				D = t.pc + 584,
				X = t.oc,
				fe = t.pc + 600;
			for (f = 0; 16 > f; ++f) S[k + 32 * f - 1] = 129;
			for (f = 0; 8 > f; ++f) (I[D + 32 * f - 1] = 129), (X[fe + 32 * f - 1] = 129);
			for (
				0 < w
					? (S[k - 1 - 32] = I[D - 1 - 32] = X[fe - 1 - 32] = 129)
					: (s(S, k - 32 - 1, 127, 21), s(I, D - 32 - 1, 127, 9), s(X, fe - 32 - 1, 127, 9)),
					g = 0;
				g < t.za;
				++g
			) {
				var he = o.ya[o.aa + g];
				if (0 < g) {
					for (f = -1; 16 > f; ++f) i(S, k + 32 * f - 4, S, k + 32 * f + 12, 4);
					for (f = -1; 8 > f; ++f)
						i(I, D + 32 * f - 4, I, D + 32 * f + 4, 4),
							i(X, fe + 32 * f - 4, X, fe + 32 * f + 4, 4);
				}
				var ne = t.Gd,
					Ae = t.Hd + g,
					ge = he.ad,
					J = he.Hc;
				if (
					(0 < w &&
						(i(S, k - 32, ne[Ae].y, 0, 16),
						i(I, D - 32, ne[Ae].f, 0, 8),
						i(X, fe - 32, ne[Ae].ea, 0, 8)),
					he.Za)
				) {
					var $ = S,
						_e = k - 32 + 16;
					for (
						0 < w && (g >= t.za - 1 ? s($, _e, ne[Ae].y[15], 4) : i($, _e, ne[Ae + 1].y, 0, 4)),
							f = 0;
						4 > f;
						f++
					)
						$[_e + 128 + f] = $[_e + 256 + f] = $[_e + 384 + f] = $[_e + 0 + f];
					for (f = 0; 16 > f; ++f, J <<= 2)
						($ = S), (_e = k + rc[f]), In[he.Ob[f]]($, _e), qa(J, ge, 16 * +f, $, _e);
				} else if ((($ = Io(g, w, he.Ob[0])), pi[$](S, k), J != 0))
					for (f = 0; 16 > f; ++f, J <<= 2) qa(J, ge, 16 * +f, S, k + rc[f]);
				for (
					f = he.Gc,
						$ = Io(g, w, he.Dd),
						$n[$](I, D),
						$n[$](X, fe),
						J = ge,
						$ = I,
						_e = D,
						255 & (he = f >> 0) && (170 & he ? Va(J, 256, $, _e) : bn(J, 256, $, _e)),
						he = X,
						J = fe,
						255 & (f >>= 8) && (170 & f ? Va(ge, 320, he, J) : bn(ge, 320, he, J)),
						w < t.Ub - 1 &&
							(i(ne[Ae].y, 0, S, k + 480, 16),
							i(ne[Ae].f, 0, I, D + 224, 8),
							i(ne[Ae].ea, 0, X, fe + 224, 8)),
						f = 8 * A * t.B,
						ne = t.sa,
						Ae = t.ta + 16 * g + 16 * A * t.R,
						ge = t.qa,
						he = t.ra + 8 * g + f,
						J = t.Ha,
						$ = t.Ia + 8 * g + f,
						f = 0;
					16 > f;
					++f
				)
					i(ne, Ae + f * t.R, S, k + 32 * f, 16);
				for (f = 0; 8 > f; ++f)
					i(ge, he + f * t.B, I, D + 32 * f, 8), i(J, $ + f * t.B, X, fe + 32 * f, 8);
			}
		}
		function $i(t, o, f, g, w, A, S, k, I) {
			var D = [0],
				X = [0],
				fe = 0,
				he = I != null ? I.kd : 0,
				ne = I ?? new Ba();
			if (t == null || 12 > f) return 7;
			(ne.data = t), (ne.w = o), (ne.ha = f), (o = [o]), (f = [f]), (ne.gb = [ne.gb]);
			e: {
				var Ae = o,
					ge = f,
					J = ne.gb;
				if (
					(e(t != null),
					e(ge != null),
					e(J != null),
					(J[0] = 0),
					12 <= ge[0] && !r(t, Ae[0], 'RIFF'))
				) {
					if (r(t, Ae[0] + 8, 'WEBP')) {
						J = 3;
						break e;
					}
					var $ = Fe(t, Ae[0] + 4);
					if (12 > $ || 4294967286 < $) {
						J = 3;
						break e;
					}
					if (he && $ > ge[0] - 8) {
						J = 7;
						break e;
					}
					(J[0] = $), (Ae[0] += 12), (ge[0] -= 12);
				}
				J = 0;
			}
			if (J != 0) return J;
			for ($ = 0 < ne.gb[0], f = f[0]; ; ) {
				e: {
					var _e = t;
					(ge = o), (J = f);
					var ke = D,
						Le = X,
						ze = (Ae = [0]);
					if ((((Re = fe = [fe])[0] = 0), 8 > J[0])) J = 7;
					else {
						if (!r(_e, ge[0], 'VP8X')) {
							if (Fe(_e, ge[0] + 4) != 10) {
								J = 3;
								break e;
							}
							if (18 > J[0]) {
								J = 7;
								break e;
							}
							var De = Fe(_e, ge[0] + 8),
								it = 1 + Te(_e, ge[0] + 12);
							if (2147483648 <= it * (_e = 1 + Te(_e, ge[0] + 15))) {
								J = 3;
								break e;
							}
							ze != null && (ze[0] = De),
								ke != null && (ke[0] = it),
								Le != null && (Le[0] = _e),
								(ge[0] += 18),
								(J[0] -= 18),
								(Re[0] = 1);
						}
						J = 0;
					}
				}
				if (((fe = fe[0]), (Ae = Ae[0]), J != 0)) return J;
				if (((ge = !!(2 & Ae)), !$ && fe)) return 3;
				if (
					(A != null && (A[0] = !!(16 & Ae)),
					S != null && (S[0] = ge),
					k != null && (k[0] = 0),
					(S = D[0]),
					(Ae = X[0]),
					fe && ge && I == null)
				) {
					J = 0;
					break;
				}
				if (4 > f) {
					J = 7;
					break;
				}
				if (($ && fe) || (!$ && !fe && !r(t, o[0], 'ALPH'))) {
					(f = [f]), (ne.na = [ne.na]), (ne.P = [ne.P]), (ne.Sa = [ne.Sa]);
					e: {
						(De = t), (J = o), ($ = f);
						var Re = ne.gb;
						(ke = ne.na),
							(Le = ne.P),
							(ze = ne.Sa),
							(it = 22),
							e(De != null),
							e($ != null),
							(_e = J[0]);
						var Et = $[0];
						for (e(ke != null), e(ze != null), ke[0] = null, Le[0] = null, ze[0] = 0; ; ) {
							if (((J[0] = _e), ($[0] = Et), 8 > Et)) {
								J = 7;
								break e;
							}
							var Tt = Fe(De, _e + 4);
							if (4294967286 < Tt) {
								J = 3;
								break e;
							}
							var Ct = (8 + Tt + 1) & -2;
							if (((it += Ct), 0 < Re && it > Re)) {
								J = 3;
								break e;
							}
							if (!r(De, _e, 'VP8 ') || !r(De, _e, 'VP8L')) {
								J = 0;
								break e;
							}
							if (Et[0] < Ct) {
								J = 7;
								break e;
							}
							r(De, _e, 'ALPH') || ((ke[0] = De), (Le[0] = _e + 8), (ze[0] = Tt)),
								(_e += Ct),
								(Et -= Ct);
						}
					}
					if (((f = f[0]), (ne.na = ne.na[0]), (ne.P = ne.P[0]), (ne.Sa = ne.Sa[0]), J != 0)) break;
				}
				(f = [f]), (ne.Ja = [ne.Ja]), (ne.xa = [ne.xa]);
				e: if (
					((Re = t),
					(J = o),
					($ = f),
					(ke = ne.gb[0]),
					(Le = ne.Ja),
					(ze = ne.xa),
					(De = J[0]),
					(_e = !r(Re, De, 'VP8 ')),
					(it = !r(Re, De, 'VP8L')),
					e(Re != null),
					e($ != null),
					e(Le != null),
					e(ze != null),
					8 > $[0])
				)
					J = 7;
				else {
					if (_e || it) {
						if (((Re = Fe(Re, De + 4)), 12 <= ke && Re > ke - 12)) {
							J = 3;
							break e;
						}
						if (he && Re > $[0] - 8) {
							J = 7;
							break e;
						}
						(Le[0] = Re), (J[0] += 8), ($[0] -= 8), (ze[0] = it);
					} else (ze[0] = 5 <= $[0] && Re[De + 0] == 47 && !(Re[De + 4] >> 5)), (Le[0] = $[0]);
					J = 0;
				}
				if (((f = f[0]), (ne.Ja = ne.Ja[0]), (ne.xa = ne.xa[0]), (o = o[0]), J != 0)) break;
				if (4294967286 < ne.Ja) return 3;
				if ((k == null || ge || (k[0] = ne.xa ? 2 : 1), (S = [S]), (Ae = [Ae]), ne.xa)) {
					if (5 > f) {
						J = 7;
						break;
					}
					(k = S),
						(he = Ae),
						(ge = A),
						t == null || 5 > f
							? (t = 0)
							: 5 <= f && t[o + 0] == 47 && !(t[o + 4] >> 5)
								? (($ = [0]),
									(Re = [0]),
									(ke = [0]),
									K((Le = new b()), t, o, f),
									Ke(Le, $, Re, ke)
										? (k != null && (k[0] = $[0]),
											he != null && (he[0] = Re[0]),
											ge != null && (ge[0] = ke[0]),
											(t = 1))
										: (t = 0))
								: (t = 0);
				} else {
					if (10 > f) {
						J = 7;
						break;
					}
					(k = Ae),
						t == null || 10 > f || !po(t, o + 3, f - 3)
							? (t = 0)
							: ((he = t[o + 0] | (t[o + 1] << 8) | (t[o + 2] << 16)),
								(ge = 16383 & ((t[o + 7] << 8) | t[o + 6])),
								(t = 16383 & ((t[o + 9] << 8) | t[o + 8])),
								1 & he || 3 < ((he >> 1) & 7) || !((he >> 4) & 1) || he >> 5 >= ne.Ja || !ge || !t
									? (t = 0)
									: (S && (S[0] = ge), k && (k[0] = t), (t = 1)));
				}
				if (!t || ((S = S[0]), (Ae = Ae[0]), fe && (D[0] != S || X[0] != Ae))) return 3;
				I != null &&
					((I[0] = ne), (I.offset = o - I.w), e(4294967286 > o - I.w), e(I.offset == I.ha - f));
				break;
			}
			return J == 0 || (J == 7 && fe && I == null)
				? (A != null && (A[0] |= ne.na != null && 0 < ne.na.length),
					g != null && (g[0] = S),
					w != null && (w[0] = Ae),
					0)
				: J;
		}
		function Ua(t, o, f) {
			var g = o.width,
				w = o.height,
				A = 0,
				S = 0,
				k = g,
				I = w;
			if (
				((o.Da = t != null && 0 < t.Da),
				o.Da &&
					((k = t.cd),
					(I = t.bd),
					(A = t.v),
					(S = t.j),
					11 > f || ((A &= -2), (S &= -2)),
					0 > A || 0 > S || 0 >= k || 0 >= I || A + k > g || S + I > w))
			)
				return 0;
			if (
				((o.v = A),
				(o.j = S),
				(o.va = A + k),
				(o.o = S + I),
				(o.U = k),
				(o.T = I),
				(o.da = t != null && 0 < t.da),
				o.da)
			) {
				if (!rt(k, I, (f = [t.ib]), (A = [t.hb]))) return 0;
				(o.ib = f[0]), (o.hb = A[0]);
			}
			return (
				(o.ob = t != null && t.ob),
				(o.Kb = t == null || !t.Sd),
				o.da && ((o.ob = o.ib < (3 * g) / 4 && o.hb < (3 * w) / 4), (o.Kb = 0)),
				1
			);
		}
		function Ha(t) {
			if (t == null) return 2;
			if (11 > t.S) {
				var o = t.f.RGBA;
				(o.fb += (t.height - 1) * o.A), (o.A = -o.A);
			} else
				(o = t.f.kb),
					(t = t.height),
					(o.O += (t - 1) * o.fa),
					(o.fa = -o.fa),
					(o.N += ((t - 1) >> 1) * o.Ab),
					(o.Ab = -o.Ab),
					(o.W += ((t - 1) >> 1) * o.Db),
					(o.Db = -o.Db),
					o.F != null && ((o.J += (t - 1) * o.lb), (o.lb = -o.lb));
			return 0;
		}
		function ea(t, o, f, g) {
			if (g == null || 0 >= t || 0 >= o) return 2;
			if (f != null) {
				if (f.Da) {
					var w = f.cd,
						A = f.bd,
						S = -2 & f.v,
						k = -2 & f.j;
					if (0 > S || 0 > k || 0 >= w || 0 >= A || S + w > t || k + A > o) return 2;
					(t = w), (o = A);
				}
				if (f.da) {
					if (!rt(t, o, (w = [f.ib]), (A = [f.hb]))) return 2;
					(t = w[0]), (o = A[0]);
				}
			}
			(g.width = t), (g.height = o);
			e: {
				var I = g.width,
					D = g.height;
				if (((t = g.S), 0 >= I || 0 >= D || !(t >= Do && 13 > t))) t = 2;
				else {
					if (0 >= g.Rd && g.sd == null) {
						S = A = w = o = 0;
						var X = (k = I * nc[t]) * D;
						if (
							(11 > t || ((A = ((D + 1) / 2) * (o = (I + 1) / 2)), t == 12 && (S = (w = I) * D)),
							(D = a(X + 2 * A + S)) == null)
						) {
							t = 1;
							break e;
						}
						(g.sd = D),
							11 > t
								? (((I = g.f.RGBA).eb = D), (I.fb = 0), (I.A = k), (I.size = X))
								: (((I = g.f.kb).y = D),
									(I.O = 0),
									(I.fa = k),
									(I.Fd = X),
									(I.f = D),
									(I.N = 0 + X),
									(I.Ab = o),
									(I.Cd = A),
									(I.ea = D),
									(I.W = 0 + X + A),
									(I.Db = o),
									(I.Ed = A),
									t == 12 && ((I.F = D), (I.J = 0 + X + 2 * A)),
									(I.Tc = S),
									(I.lb = w));
					}
					if (((o = 1), (w = g.S), (A = g.width), (S = g.height), w >= Do && 13 > w))
						if (11 > w)
							(t = g.f.RGBA),
								(o &= (k = Math.abs(t.A)) * (S - 1) + A <= t.size),
								(o &= k >= A * nc[w]),
								(o &= t.eb != null);
						else {
							(t = g.f.kb),
								(k = (A + 1) / 2),
								(X = (S + 1) / 2),
								(I = Math.abs(t.fa)),
								(D = Math.abs(t.Ab));
							var fe = Math.abs(t.Db),
								he = Math.abs(t.lb),
								ne = he * (S - 1) + A;
							(o &= I * (S - 1) + A <= t.Fd),
								(o &= D * (X - 1) + k <= t.Cd),
								(o = (o &= fe * (X - 1) + k <= t.Ed) & (I >= A) & (D >= k) & (fe >= k)),
								(o &= t.y != null),
								(o &= t.f != null),
								(o &= t.ea != null),
								w == 12 && ((o &= he >= A), (o &= ne <= t.Tc), (o &= t.F != null));
						}
					else o = 0;
					t = o ? 0 : 2;
				}
			}
			return t != 0 || (f != null && f.fd && (t = Ha(g))), t;
		}
		var Cr = 64,
			ta = [
				0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071,
				262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215
			],
			ra = 24,
			na = 32,
			Wa = 8,
			Xr = [
				0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
				4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
				5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
				6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
				6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
				7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
				7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
				7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
				7, 7, 7, 7, 7, 7, 7, 7
			];
		Ee('Predictor0', 'PredictorAdd0'),
			(z.Predictor0 = function () {
				return 4278190080;
			}),
			(z.Predictor1 = function (t) {
				return t;
			}),
			(z.Predictor2 = function (t, o, f) {
				return o[f + 0];
			}),
			(z.Predictor3 = function (t, o, f) {
				return o[f + 1];
			}),
			(z.Predictor4 = function (t, o, f) {
				return o[f - 1];
			}),
			(z.Predictor5 = function (t, o, f) {
				return je(je(t, o[f + 1]), o[f + 0]);
			}),
			(z.Predictor6 = function (t, o, f) {
				return je(t, o[f - 1]);
			}),
			(z.Predictor7 = function (t, o, f) {
				return je(t, o[f + 0]);
			}),
			(z.Predictor8 = function (t, o, f) {
				return je(o[f - 1], o[f + 0]);
			}),
			(z.Predictor9 = function (t, o, f) {
				return je(o[f + 0], o[f + 1]);
			}),
			(z.Predictor10 = function (t, o, f) {
				return je(je(t, o[f - 1]), je(o[f + 0], o[f + 1]));
			}),
			(z.Predictor11 = function (t, o, f) {
				var g = o[f + 0];
				return 0 >=
					at((g >> 24) & 255, (t >> 24) & 255, ((o = o[f - 1]) >> 24) & 255) +
						at((g >> 16) & 255, (t >> 16) & 255, (o >> 16) & 255) +
						at((g >> 8) & 255, (t >> 8) & 255, (o >> 8) & 255) +
						at(255 & g, 255 & t, 255 & o)
					? g
					: t;
			}),
			(z.Predictor12 = function (t, o, f) {
				var g = o[f + 0];
				return (
					((Ye(((t >> 24) & 255) + ((g >> 24) & 255) - (((o = o[f - 1]) >> 24) & 255)) << 24) |
						(Ye(((t >> 16) & 255) + ((g >> 16) & 255) - ((o >> 16) & 255)) << 16) |
						(Ye(((t >> 8) & 255) + ((g >> 8) & 255) - ((o >> 8) & 255)) << 8) |
						Ye((255 & t) + (255 & g) - (255 & o))) >>>
					0
				);
			}),
			(z.Predictor13 = function (t, o, f) {
				var g = o[f - 1];
				return (
					((Ze(((t = je(t, o[f + 0])) >> 24) & 255, (g >> 24) & 255) << 24) |
						(Ze((t >> 16) & 255, (g >> 16) & 255) << 16) |
						(Ze((t >> 8) & 255, (g >> 8) & 255) << 8) |
						Ze((t >> 0) & 255, (g >> 0) & 255)) >>>
					0
				);
			});
		var Us = z.PredictorAdd0;
		(z.PredictorAdd1 = lt),
			Ee('Predictor2', 'PredictorAdd2'),
			Ee('Predictor3', 'PredictorAdd3'),
			Ee('Predictor4', 'PredictorAdd4'),
			Ee('Predictor5', 'PredictorAdd5'),
			Ee('Predictor6', 'PredictorAdd6'),
			Ee('Predictor7', 'PredictorAdd7'),
			Ee('Predictor8', 'PredictorAdd8'),
			Ee('Predictor9', 'PredictorAdd9'),
			Ee('Predictor10', 'PredictorAdd10'),
			Ee('Predictor11', 'PredictorAdd11'),
			Ee('Predictor12', 'PredictorAdd12'),
			Ee('Predictor13', 'PredictorAdd13');
		var Ga = z.PredictorAdd2;
		Qe(
			'ColorIndexInverseTransform',
			'MapARGB',
			'32b',
			function (t) {
				return (t >> 8) & 255;
			},
			function (t) {
				return t;
			}
		),
			Qe(
				'VP8LColorIndexInverseTransformAlpha',
				'MapAlpha',
				'8b',
				function (t) {
					return t;
				},
				function (t) {
					return (t >> 8) & 255;
				}
			);
		var Fo,
			mn = z.ColorIndexInverseTransform,
			ia = z.MapARGB,
			Eo = z.VP8LColorIndexInverseTransformAlpha,
			To = z.MapAlpha,
			ui = (z.VP8LPredictorsAdd = []);
		(ui.length = 16),
			((z.VP8LPredictors = []).length = 16),
			((z.VP8LPredictorsAdd_C = []).length = 16),
			((z.VP8LPredictors_C = []).length = 16);
		var Ei,
			Jr,
			Hr,
			fi,
			Jn,
			Kn,
			aa,
			Zn,
			ar,
			Va,
			Wr,
			bn,
			oa,
			jo,
			Ya,
			Ti,
			ji,
			hi,
			Mi,
			sa,
			Bi,
			di,
			Xa,
			yn,
			wn,
			zt,
			Ut,
			or,
			mr = a(511),
			Qn = a(2041),
			Ja = a(225),
			la = a(767),
			Mo = 0,
			Hs = Qn,
			Bo = Ja,
			ln = la,
			xn = mr,
			Do = 0,
			Oo = 1,
			Vl = 2,
			Ro = 3,
			qo = 4,
			Ws = 5,
			Yl = 6,
			Gs = 7,
			Vs = 8,
			zo = 9,
			Ys = 10,
			Nu = [2, 3, 7],
			ku = [3, 3, 11],
			Xl = [280, 256, 256, 256, 40],
			Pu = [0, 1, 1, 1, 0],
			Cu = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
			Iu = [
				24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4,
				71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35,
				45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101,
				107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123,
				49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64,
				114, 126, 97, 111, 80, 113, 127, 96, 112
			],
			Fu = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004],
			Eu = 8,
			Xs = [
				4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22,
				23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42,
				43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64,
				65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86,
				87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122,
				124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157
			],
			Js = [
				4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
				28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
				51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88,
				90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131,
				134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189,
				193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269,
				274, 279, 284
			],
			Ka = null,
			Tu = [
				[173, 148, 140, 0],
				[176, 155, 140, 135, 0],
				[180, 157, 141, 134, 130, 0],
				[254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]
			],
			ju = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15],
			Jl = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9],
			Mu = [
				[
					[
						[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
						[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
						[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
					],
					[
						[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
						[189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128],
						[106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]
					],
					[
						[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
						[181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
						[78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]
					],
					[
						[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
						[184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
						[77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]
					],
					[
						[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
						[170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
						[37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]
					],
					[
						[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128],
						[207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
						[102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]
					],
					[
						[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
						[177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
						[80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]
					],
					[
						[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
						[246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
						[255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
					]
				],
				[
					[
						[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
						[131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
						[68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]
					],
					[
						[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
						[184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
						[81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]
					],
					[
						[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
						[99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
						[23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]
					],
					[
						[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
						[109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
						[44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]
					],
					[
						[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
						[94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
						[22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]
					],
					[
						[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
						[124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
						[35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]
					],
					[
						[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
						[121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
						[45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]
					],
					[
						[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
						[203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
						[137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]
					]
				],
				[
					[
						[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
						[175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128],
						[73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]
					],
					[
						[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
						[239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
						[155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]
					],
					[
						[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
						[201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
						[69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]
					],
					[
						[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
						[223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
						[141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]
					],
					[
						[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128],
						[190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
						[149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
					],
					[
						[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
						[247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
						[240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]
					],
					[
						[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
						[213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
						[55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]
					],
					[
						[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
						[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
						[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
					]
				],
				[
					[
						[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
						[126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
						[61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]
					],
					[
						[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
						[166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
						[39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]
					],
					[
						[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
						[124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
						[24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]
					],
					[
						[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
						[149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128],
						[28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]
					],
					[
						[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
						[123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
						[20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]
					],
					[
						[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
						[168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
						[47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]
					],
					[
						[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
						[141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
						[42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]
					],
					[
						[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
						[244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
						[238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
					]
				]
			],
			Bu = [
				[
					[231, 120, 48, 89, 115, 113, 120, 152, 112],
					[152, 179, 64, 126, 170, 118, 46, 70, 95],
					[175, 69, 143, 80, 85, 82, 72, 155, 103],
					[56, 58, 10, 171, 218, 189, 17, 13, 152],
					[114, 26, 17, 163, 44, 195, 21, 10, 173],
					[121, 24, 80, 195, 26, 62, 44, 64, 85],
					[144, 71, 10, 38, 171, 213, 144, 34, 26],
					[170, 46, 55, 19, 136, 160, 33, 206, 71],
					[63, 20, 8, 114, 114, 208, 12, 9, 226],
					[81, 40, 11, 96, 182, 84, 29, 16, 36]
				],
				[
					[134, 183, 89, 137, 98, 101, 106, 165, 148],
					[72, 187, 100, 130, 157, 111, 32, 75, 80],
					[66, 102, 167, 99, 74, 62, 40, 234, 128],
					[41, 53, 9, 178, 241, 141, 26, 8, 107],
					[74, 43, 26, 146, 73, 166, 49, 23, 157],
					[65, 38, 105, 160, 51, 52, 31, 115, 128],
					[104, 79, 12, 27, 217, 255, 87, 17, 7],
					[87, 68, 71, 44, 114, 51, 15, 186, 23],
					[47, 41, 14, 110, 182, 183, 21, 17, 194],
					[66, 45, 25, 102, 197, 189, 23, 18, 22]
				],
				[
					[88, 88, 147, 150, 42, 46, 45, 196, 205],
					[43, 97, 183, 117, 85, 38, 35, 179, 61],
					[39, 53, 200, 87, 26, 21, 43, 232, 171],
					[56, 34, 51, 104, 114, 102, 29, 93, 77],
					[39, 28, 85, 171, 58, 165, 90, 98, 64],
					[34, 22, 116, 206, 23, 34, 43, 166, 73],
					[107, 54, 32, 26, 51, 1, 81, 43, 31],
					[68, 25, 106, 22, 64, 171, 36, 225, 114],
					[34, 19, 21, 102, 132, 188, 16, 76, 124],
					[62, 18, 78, 95, 85, 57, 50, 48, 51]
				],
				[
					[193, 101, 35, 159, 215, 111, 89, 46, 111],
					[60, 148, 31, 172, 219, 228, 21, 18, 111],
					[112, 113, 77, 85, 179, 255, 38, 120, 114],
					[40, 42, 1, 196, 245, 209, 10, 25, 109],
					[88, 43, 29, 140, 166, 213, 37, 43, 154],
					[61, 63, 30, 155, 67, 45, 68, 1, 209],
					[100, 80, 8, 43, 154, 1, 51, 26, 71],
					[142, 78, 78, 16, 255, 128, 34, 197, 171],
					[41, 40, 5, 102, 211, 183, 4, 1, 221],
					[51, 50, 17, 168, 209, 192, 23, 25, 82]
				],
				[
					[138, 31, 36, 171, 27, 166, 38, 44, 229],
					[67, 87, 58, 169, 82, 115, 26, 59, 179],
					[63, 59, 90, 180, 59, 166, 93, 73, 154],
					[40, 40, 21, 116, 143, 209, 34, 39, 175],
					[47, 15, 16, 183, 34, 223, 49, 45, 183],
					[46, 17, 33, 183, 6, 98, 15, 32, 183],
					[57, 46, 22, 24, 128, 1, 54, 17, 37],
					[65, 32, 73, 115, 28, 128, 23, 128, 205],
					[40, 3, 9, 115, 51, 192, 18, 6, 223],
					[87, 37, 9, 115, 59, 77, 64, 21, 47]
				],
				[
					[104, 55, 44, 218, 9, 54, 53, 130, 226],
					[64, 90, 70, 205, 40, 41, 23, 26, 57],
					[54, 57, 112, 184, 5, 41, 38, 166, 213],
					[30, 34, 26, 133, 152, 116, 10, 32, 134],
					[39, 19, 53, 221, 26, 114, 32, 73, 255],
					[31, 9, 65, 234, 2, 15, 1, 118, 73],
					[75, 32, 12, 51, 192, 255, 160, 43, 51],
					[88, 31, 35, 67, 102, 85, 55, 186, 85],
					[56, 21, 23, 111, 59, 205, 45, 37, 192],
					[55, 38, 70, 124, 73, 102, 1, 34, 98]
				],
				[
					[125, 98, 42, 88, 104, 85, 117, 175, 82],
					[95, 84, 53, 89, 128, 100, 113, 101, 45],
					[75, 79, 123, 47, 51, 128, 81, 171, 1],
					[57, 17, 5, 71, 102, 57, 53, 41, 49],
					[38, 33, 13, 121, 57, 73, 26, 1, 85],
					[41, 10, 67, 138, 77, 110, 90, 47, 114],
					[115, 21, 2, 10, 102, 255, 166, 23, 6],
					[101, 29, 16, 10, 85, 128, 101, 196, 26],
					[57, 18, 10, 102, 102, 213, 34, 20, 43],
					[117, 20, 15, 36, 163, 128, 68, 1, 26]
				],
				[
					[102, 61, 71, 37, 34, 53, 31, 243, 192],
					[69, 60, 71, 38, 73, 119, 28, 222, 37],
					[68, 45, 128, 34, 1, 47, 11, 245, 171],
					[62, 17, 19, 70, 146, 85, 55, 62, 70],
					[37, 43, 37, 154, 100, 163, 85, 160, 1],
					[63, 9, 92, 136, 28, 64, 32, 201, 85],
					[75, 15, 9, 9, 64, 255, 184, 119, 16],
					[86, 6, 28, 5, 64, 255, 25, 248, 1],
					[56, 8, 17, 132, 137, 255, 55, 116, 128],
					[58, 15, 20, 82, 135, 57, 26, 121, 40]
				],
				[
					[164, 50, 31, 137, 154, 133, 25, 35, 218],
					[51, 103, 44, 131, 131, 123, 31, 6, 158],
					[86, 40, 64, 135, 148, 224, 45, 183, 128],
					[22, 26, 17, 131, 240, 154, 14, 1, 209],
					[45, 16, 21, 91, 64, 222, 7, 1, 197],
					[56, 21, 39, 155, 60, 138, 23, 102, 213],
					[83, 12, 13, 54, 192, 255, 68, 47, 28],
					[85, 26, 85, 85, 128, 128, 32, 146, 171],
					[18, 11, 7, 63, 144, 171, 4, 4, 246],
					[35, 27, 10, 146, 174, 171, 12, 26, 128]
				],
				[
					[190, 80, 35, 99, 180, 80, 126, 54, 45],
					[85, 126, 47, 87, 176, 51, 41, 20, 32],
					[101, 75, 128, 139, 118, 146, 116, 128, 85],
					[56, 41, 15, 176, 236, 85, 37, 9, 62],
					[71, 30, 17, 119, 118, 255, 17, 18, 138],
					[101, 38, 60, 138, 55, 70, 43, 26, 142],
					[146, 36, 19, 30, 171, 255, 97, 27, 20],
					[138, 45, 61, 62, 219, 1, 81, 188, 64],
					[32, 41, 20, 117, 151, 142, 20, 21, 163],
					[112, 19, 12, 61, 195, 128, 48, 4, 24]
				]
			],
			Du = [
				[
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255],
						[249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255],
						[234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255],
						[250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255],
						[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					]
				],
				[
					[
						[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255],
						[234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]
					],
					[
						[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
						[250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					]
				],
				[
					[
						[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255],
						[234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255],
						[251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]
					],
					[
						[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					]
				],
				[
					[
						[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255],
						[248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
						[246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
						[252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255],
						[248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
						[253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255],
						[252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255],
						[250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					],
					[
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
						[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
					]
				]
			],
			Ou = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0],
			pi = [],
			In = [],
			$n = [],
			Ru = 1,
			Kl = 2,
			gi = [],
			_n = [];
		me('UpsampleRgbLinePair', kt, 3),
			me('UpsampleBgrLinePair', $t, 3),
			me('UpsampleRgbaLinePair', Cn, 4),
			me('UpsampleBgraLinePair', Ar, 4),
			me('UpsampleArgbLinePair', Mr, 4),
			me('UpsampleRgba4444LinePair', hr, 2),
			me('UpsampleRgb565LinePair', er, 2);
		var qu = z.UpsampleRgbLinePair,
			zu = z.UpsampleBgrLinePair,
			Zl = z.UpsampleRgbaLinePair,
			Ql = z.UpsampleBgraLinePair,
			$l = z.UpsampleArgbLinePair,
			ec = z.UpsampleRgba4444LinePair,
			Uu = z.UpsampleRgb565LinePair,
			Uo = 16,
			Ho = 1 << (Uo - 1),
			Za = -227,
			Ks = 482,
			Hu = 6,
			tc = 0,
			Wu = a(256),
			Gu = a(256),
			Vu = a(256),
			Yu = a(256),
			Xu = a(Ks - Za),
			Ju = a(Ks - Za);
		Rn('YuvToRgbRow', kt, 3),
			Rn('YuvToBgrRow', $t, 3),
			Rn('YuvToRgbaRow', Cn, 4),
			Rn('YuvToBgraRow', Ar, 4),
			Rn('YuvToArgbRow', Mr, 4),
			Rn('YuvToRgba4444Row', hr, 2),
			Rn('YuvToRgb565Row', er, 2);
		var rc = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396],
			Wo = [0, 2, 8],
			Ku = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1],
			Zu = 1;
		this.WebPDecodeRGBA = function (t, o, f, g, w) {
			var A = Oo,
				S = new Zi(),
				k = new nt();
			(S.ba = k), (k.S = A), (k.width = [k.width]), (k.height = [k.height]);
			var I = k.width,
				D = k.height,
				X = new It();
			if (X == null || t == null) var fe = 2;
			else e(X != null), (fe = $i(t, o, f, X.width, X.height, X.Pd, X.Qd, X.format, null));
			if (
				(fe != 0
					? (I = 0)
					: (I != null && (I[0] = X.width[0]), D != null && (D[0] = X.height[0]), (I = 1)),
				I)
			) {
				(k.width = k.width[0]),
					(k.height = k.height[0]),
					g != null && (g[0] = k.width),
					w != null && (w[0] = k.height);
				e: {
					if (
						((g = new Wi()),
						((w = new Ba()).data = t),
						(w.w = o),
						(w.ha = f),
						(w.kd = 1),
						(o = [0]),
						e(w != null),
						((t = $i(w.data, w.w, w.ha, null, null, null, o, null, w)) == 0 || t == 7) &&
							o[0] &&
							(t = 4),
						(o = t) == 0)
					) {
						if (
							(e(S != null),
							(g.data = w.data),
							(g.w = w.w + w.offset),
							(g.ha = w.ha - w.offset),
							(g.put = Ur),
							(g.ac = Zt),
							(g.bc = _r),
							(g.ma = S),
							w.xa)
						) {
							if ((t = fr()) == null) {
								S = 1;
								break e;
							}
							if (
								(function (he, ne) {
									var Ae = [0],
										ge = [0],
										J = [0];
									t: for (;;) {
										if (he == null) return 0;
										if (ne == null) return (he.a = 2), 0;
										if (
											((he.l = ne), (he.a = 0), K(he.m, ne.data, ne.w, ne.ha), !Ke(he.m, Ae, ge, J))
										) {
											he.a = 3;
											break t;
										}
										if (
											((he.xb = Kl),
											(ne.width = Ae[0]),
											(ne.height = ge[0]),
											!vr(Ae[0], ge[0], 1, he, null))
										)
											break t;
										return 1;
									}
									return e(he.a != 0), 0;
								})(t, g)
							) {
								if ((g = (o = ea(g.width, g.height, S.Oa, S.ba)) == 0)) {
									t: {
										g = t;
										r: for (;;) {
											if (g == null) {
												g = 0;
												break t;
											}
											if (
												(e(g.s.yc != null),
												e(g.s.Ya != null),
												e(0 < g.s.Wb),
												e((f = g.l) != null),
												e((w = f.ma) != null),
												g.xb != 0)
											) {
												if (((g.ca = w.ba), (g.tb = w.tb), e(g.ca != null), !Ua(w.Oa, f, Ro))) {
													g.a = 2;
													break r;
												}
												if (!Tr(g, f.width) || f.da) break r;
												if (
													((f.da || we(g.ca.S)) && ae(),
													11 > g.ca.S ||
														(alert('todo:WebPInitConvertARGBToYUV'), g.ca.f.kb.F != null && ae()),
													g.Pb && 0 < g.s.ua && g.s.vb.X == null && !Ue(g.s.vb, g.s.Wa.Xa))
												) {
													g.a = 1;
													break r;
												}
												g.xb = 0;
											}
											if (!on(g, g.V, g.Ba, g.c, g.i, f.o, Vn)) break r;
											(w.Dc = g.Ma), (g = 1);
											break t;
										}
										e(g.a != 0), (g = 0);
									}
									g = !g;
								}
								g && (o = t.a);
							} else o = t.a;
						} else {
							if ((t = new Ls()) == null) {
								S = 1;
								break e;
							}
							if (((t.Fa = w.na), (t.P = w.P), (t.qc = w.Sa), go(t, g))) {
								if ((o = ea(g.width, g.height, S.Oa, S.ba)) == 0) {
									if (((t.Aa = 0), (f = S.Oa), e((w = t) != null), f != null)) {
										if (0 < (I = 0 > (I = f.Md) ? 0 : 100 < I ? 255 : (255 * I) / 100)) {
											for (D = X = 0; 4 > D; ++D)
												12 > (fe = w.pb[D]).lc && (fe.ia = (I * Ku[0 > fe.lc ? 0 : fe.lc]) >> 3),
													(X |= fe.ia);
											X && (alert('todo:VP8InitRandom'), (w.ia = 1));
										}
										(w.Ga = f.Id), 100 < w.Ga ? (w.Ga = 100) : 0 > w.Ga && (w.Ga = 0);
									}
									As(t, g) || (o = t.a);
								}
							} else o = t.a;
						}
						o == 0 && S.Oa != null && S.Oa.fd && (o = Ha(S.ba));
					}
					S = o;
				}
				A = S != 0 ? null : 11 > A ? k.f.RGBA.eb : k.f.kb.y;
			} else A = null;
			return A;
		};
		var nc = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
	};
	function p(z, re) {
		for (var de = '', C = 0; C < 4; C++) de += String.fromCharCode(z[re++]);
		return de;
	}
	function v(z, re) {
		return ((z[re + 0] << 0) | (z[re + 1] << 8) | (z[re + 2] << 16)) >>> 0;
	}
	function m(z, re) {
		return ((z[re + 0] << 0) | (z[re + 1] << 8) | (z[re + 2] << 16) | (z[re + 3] << 24)) >>> 0;
	}
	new h();
	var y = [0],
		d = [0],
		E = [],
		N = new h(),
		P = n,
		_ = (function (z, re) {
			var de = {},
				C = 0,
				L = !1,
				q = 0,
				B = 0;
			if (
				((de.frames = []),
				!(function (T, M, H, V) {
					for (var te = 0; te < V; te++) if (T[M + te] != H.charCodeAt(te)) return !0;
					return !1;
				})(z, re, 'RIFF', 4))
			) {
				for (m(z, (re += 4)), re += 8; re < z.length; ) {
					var Z = p(z, re),
						Q = m(z, (re += 4));
					re += 4;
					var ie = Q + (1 & Q);
					switch (Z) {
						case 'VP8 ':
						case 'VP8L':
							de.frames[C] === void 0 && (de.frames[C] = {}),
								((ue = de.frames[C]).src_off = L ? B : re - 8),
								(ue.src_size = q + Q + 8),
								C++,
								L && ((L = !1), (q = 0), (B = 0));
							break;
						case 'VP8X':
							(ue = de.header = {}).feature_flags = z[re];
							var K = re + 4;
							(ue.canvas_width = 1 + v(z, K)), (K += 3), (ue.canvas_height = 1 + v(z, K)), (K += 3);
							break;
						case 'ALPH':
							(L = !0), (q = ie + 8), (B = re - 8);
							break;
						case 'ANIM':
							((ue = de.header).bgcolor = m(z, re)),
								(K = re + 4),
								(ue.loop_count = ((Se = z)[(b = K) + 0] << 0) | (Se[b + 1] << 8)),
								(K += 2);
							break;
						case 'ANMF':
							var le, ue;
							((ue = de.frames[C] = {}).offset_x = 2 * v(z, re)),
								(re += 3),
								(ue.offset_y = 2 * v(z, re)),
								(re += 3),
								(ue.width = 1 + v(z, re)),
								(re += 3),
								(ue.height = 1 + v(z, re)),
								(re += 3),
								(ue.duration = v(z, re)),
								(re += 3),
								(le = z[re++]),
								(ue.dispose = 1 & le),
								(ue.blend = (le >> 1) & 1);
					}
					Z != 'ANMF' && (re += ie);
				}
				var Se, b;
				return de;
			}
		})(P, 0);
	(_.response = P), (_.rgbaoutput = !0), (_.dataurl = !1);
	var j = _.header ? _.header : null,
		O = _.frames ? _.frames : null;
	if (j) {
		(j.loop_counter = j.loop_count), (y = [j.canvas_height]), (d = [j.canvas_width]);
		for (var G = 0; G < O.length && O[G].blend != 0; G++);
	}
	var W = O[0],
		oe = N.WebPDecodeRGBA(P, W.src_off, W.src_size, d, y);
	(W.rgba = oe), (W.imgwidth = d[0]), (W.imgheight = y[0]);
	for (var ee = 0; ee < d[0] * y[0] * 4; ee++) E[ee] = oe[ee];
	return (this.width = d), (this.height = y), (this.data = E), this;
}
(function (n) {
	var e = function () {
			return typeof Cl == 'function';
		},
		r = function (y, d, E, N) {
			var P = 4,
				_ = l;
			switch (N) {
				case n.image_compression.FAST:
					(P = 1), (_ = a);
					break;
				case n.image_compression.MEDIUM:
					(P = 6), (_ = u);
					break;
				case n.image_compression.SLOW:
					(P = 9), (_ = h);
			}
			y = i(y, d, E, _);
			var j = Cl(y, { level: P });
			return n.__addimage__.arrayBufferToBinaryString(j);
		},
		i = function (y, d, E, N) {
			for (
				var P, _, j, O = y.length / d, G = new Uint8Array(y.length + O), W = v(), oe = 0;
				oe < O;
				oe += 1
			) {
				if (((j = oe * d), (P = y.subarray(j, j + d)), N)) G.set(N(P, E, _), j + oe);
				else {
					for (var ee, z = W.length, re = []; ee < z; ee += 1) re[ee] = W[ee](P, E, _);
					var de = m(re.concat());
					G.set(re[de], j + oe);
				}
				_ = P;
			}
			return G;
		},
		s = function (y) {
			var d = Array.apply([], y);
			return d.unshift(0), d;
		},
		a = function (y, d) {
			var E,
				N = [],
				P = y.length;
			N[0] = 1;
			for (var _ = 0; _ < P; _ += 1) (E = y[_ - d] || 0), (N[_ + 1] = (y[_] - E + 256) & 255);
			return N;
		},
		l = function (y, d, E) {
			var N,
				P = [],
				_ = y.length;
			P[0] = 2;
			for (var j = 0; j < _; j += 1) (N = (E && E[j]) || 0), (P[j + 1] = (y[j] - N + 256) & 255);
			return P;
		},
		u = function (y, d, E) {
			var N,
				P,
				_ = [],
				j = y.length;
			_[0] = 3;
			for (var O = 0; O < j; O += 1)
				(N = y[O - d] || 0),
					(P = (E && E[O]) || 0),
					(_[O + 1] = (y[O] + 256 - ((N + P) >>> 1)) & 255);
			return _;
		},
		h = function (y, d, E) {
			var N,
				P,
				_,
				j,
				O = [],
				G = y.length;
			O[0] = 4;
			for (var W = 0; W < G; W += 1)
				(N = y[W - d] || 0),
					(P = (E && E[W]) || 0),
					(_ = (E && E[W - d]) || 0),
					(j = p(N, P, _)),
					(O[W + 1] = (y[W] - j + 256) & 255);
			return O;
		},
		p = function (y, d, E) {
			if (y === d && d === E) return y;
			var N = Math.abs(d - E),
				P = Math.abs(y - E),
				_ = Math.abs(y + d - E - E);
			return N <= P && N <= _ ? y : P <= _ ? d : E;
		},
		v = function () {
			return [s, a, l, u, h];
		},
		m = function (y) {
			var d = y.map(function (E) {
				return E.reduce(function (N, P) {
					return N + Math.abs(P);
				}, 0);
			});
			return d.indexOf(Math.min.apply(null, d));
		};
	n.processPNG = function (y, d, E, N) {
		var P,
			_,
			j,
			O,
			G,
			W,
			oe,
			ee,
			z,
			re,
			de,
			C,
			L,
			q,
			B,
			Z = this.decode.FLATE_DECODE,
			Q = '';
		if (
			(this.__addimage__.isArrayBuffer(y) && (y = new Uint8Array(y)),
			this.__addimage__.isArrayBufferView(y))
		) {
			if (
				((y = (j = new h1(y)).imgData),
				(_ = j.bits),
				(P = j.colorSpace),
				(G = j.colors),
				[4, 6].indexOf(j.colorType) !== -1)
			) {
				if (j.bits === 8) {
					(z = (ee =
						j.pixelBitlength == 32
							? new Uint32Array(j.decodePixels().buffer)
							: j.pixelBitlength == 16
								? new Uint16Array(j.decodePixels().buffer)
								: new Uint8Array(j.decodePixels().buffer)).length),
						(de = new Uint8Array(z * j.colors)),
						(re = new Uint8Array(z));
					var ie,
						K = j.pixelBitlength - j.bits;
					for (q = 0, B = 0; q < z; q++) {
						for (L = ee[q], ie = 0; ie < K; ) (de[B++] = (L >>> ie) & 255), (ie += j.bits);
						re[q] = (L >>> ie) & 255;
					}
				}
				if (j.bits === 16) {
					(z = (ee = new Uint32Array(j.decodePixels().buffer)).length),
						(de = new Uint8Array(z * (32 / j.pixelBitlength) * j.colors)),
						(re = new Uint8Array(z * (32 / j.pixelBitlength))),
						(C = j.colors > 1),
						(q = 0),
						(B = 0);
					for (var le = 0; q < z; )
						(L = ee[q++]),
							(de[B++] = (L >>> 0) & 255),
							C && ((de[B++] = (L >>> 16) & 255), (L = ee[q++]), (de[B++] = (L >>> 0) & 255)),
							(re[le++] = (L >>> 16) & 255);
					_ = 8;
				}
				N !== n.image_compression.NONE && e()
					? ((y = r(de, j.width * j.colors, j.colors, N)), (oe = r(re, j.width, 1, N)))
					: ((y = de), (oe = re), (Z = void 0));
			}
			if (
				j.colorType === 3 &&
				((P = this.color_spaces.INDEXED), (W = j.palette), j.transparency.indexed)
			) {
				var ue = j.transparency.indexed,
					Se = 0;
				for (q = 0, z = ue.length; q < z; ++q) Se += ue[q];
				if ((Se /= 255) === z - 1 && ue.indexOf(0) !== -1) O = [ue.indexOf(0)];
				else if (Se !== z) {
					for (
						ee = j.decodePixels(), re = new Uint8Array(ee.length), q = 0, z = ee.length;
						q < z;
						q++
					)
						re[q] = ue[ee[q]];
					oe = r(re, j.width, 1);
				}
			}
			var b = (function (T) {
				var M;
				switch (T) {
					case n.image_compression.FAST:
						M = 11;
						break;
					case n.image_compression.MEDIUM:
						M = 13;
						break;
					case n.image_compression.SLOW:
						M = 14;
						break;
					default:
						M = 12;
				}
				return M;
			})(N);
			return (
				Z === this.decode.FLATE_DECODE && (Q = '/Predictor ' + b + ' '),
				(Q += '/Colors ' + G + ' /BitsPerComponent ' + _ + ' /Columns ' + j.width),
				(this.__addimage__.isArrayBuffer(y) || this.__addimage__.isArrayBufferView(y)) &&
					(y = this.__addimage__.arrayBufferToBinaryString(y)),
				((oe && this.__addimage__.isArrayBuffer(oe)) || this.__addimage__.isArrayBufferView(oe)) &&
					(oe = this.__addimage__.arrayBufferToBinaryString(oe)),
				{
					alias: E,
					data: y,
					index: d,
					filter: Z,
					decodeParameters: Q,
					transparency: O,
					palette: W,
					sMask: oe,
					predictor: b,
					width: j.width,
					height: j.height,
					bitsPerComponent: _,
					colorSpace: P
				}
			);
		}
	};
})(ot.API),
	(function (n) {
		(n.processGIF89A = function (e, r, i, s) {
			var a = new d1(e),
				l = a.width,
				u = a.height,
				h = [];
			a.decodeAndBlitFrameRGBA(0, h);
			var p = { data: h, width: l, height: u },
				v = new _l(100).encode(p, 100);
			return n.processJPEG.call(this, v, r, i, s);
		}),
			(n.processGIF87A = n.processGIF89A);
	})(ot.API),
	(Tn.prototype.parseHeader = function () {
		if (
			((this.fileSize = this.datav.getUint32(this.pos, !0)),
			(this.pos += 4),
			(this.reserved = this.datav.getUint32(this.pos, !0)),
			(this.pos += 4),
			(this.offset = this.datav.getUint32(this.pos, !0)),
			(this.pos += 4),
			(this.headerSize = this.datav.getUint32(this.pos, !0)),
			(this.pos += 4),
			(this.width = this.datav.getUint32(this.pos, !0)),
			(this.pos += 4),
			(this.height = this.datav.getInt32(this.pos, !0)),
			(this.pos += 4),
			(this.planes = this.datav.getUint16(this.pos, !0)),
			(this.pos += 2),
			(this.bitPP = this.datav.getUint16(this.pos, !0)),
			(this.pos += 2),
			(this.compress = this.datav.getUint32(this.pos, !0)),
			(this.pos += 4),
			(this.rawSize = this.datav.getUint32(this.pos, !0)),
			(this.pos += 4),
			(this.hr = this.datav.getUint32(this.pos, !0)),
			(this.pos += 4),
			(this.vr = this.datav.getUint32(this.pos, !0)),
			(this.pos += 4),
			(this.colors = this.datav.getUint32(this.pos, !0)),
			(this.pos += 4),
			(this.importantColors = this.datav.getUint32(this.pos, !0)),
			(this.pos += 4),
			this.bitPP === 16 && this.is_with_alpha && (this.bitPP = 15),
			this.bitPP < 15)
		) {
			var n = this.colors === 0 ? 1 << this.bitPP : this.colors;
			this.palette = new Array(n);
			for (var e = 0; e < n; e++) {
				var r = this.datav.getUint8(this.pos++, !0),
					i = this.datav.getUint8(this.pos++, !0),
					s = this.datav.getUint8(this.pos++, !0),
					a = this.datav.getUint8(this.pos++, !0);
				this.palette[e] = { red: s, green: i, blue: r, quad: a };
			}
		}
		this.height < 0 && ((this.height *= -1), (this.bottom_up = !1));
	}),
	(Tn.prototype.parseBGR = function () {
		this.pos = this.offset;
		try {
			var n = 'bit' + this.bitPP,
				e = this.width * this.height * 4;
			(this.data = new Uint8Array(e)), this[n]();
		} catch (r) {
			Rt.log('bit decode error:' + r);
		}
	}),
	(Tn.prototype.bit1 = function () {
		var n,
			e = Math.ceil(this.width / 8),
			r = e % 4;
		for (n = this.height - 1; n >= 0; n--) {
			for (var i = this.bottom_up ? n : this.height - 1 - n, s = 0; s < e; s++)
				for (
					var a = this.datav.getUint8(this.pos++, !0), l = i * this.width * 4 + 8 * s * 4, u = 0;
					u < 8 && 8 * s + u < this.width;
					u++
				) {
					var h = this.palette[(a >> (7 - u)) & 1];
					(this.data[l + 4 * u] = h.blue),
						(this.data[l + 4 * u + 1] = h.green),
						(this.data[l + 4 * u + 2] = h.red),
						(this.data[l + 4 * u + 3] = 255);
				}
			r !== 0 && (this.pos += 4 - r);
		}
	}),
	(Tn.prototype.bit4 = function () {
		for (var n = Math.ceil(this.width / 2), e = n % 4, r = this.height - 1; r >= 0; r--) {
			for (var i = this.bottom_up ? r : this.height - 1 - r, s = 0; s < n; s++) {
				var a = this.datav.getUint8(this.pos++, !0),
					l = i * this.width * 4 + 2 * s * 4,
					u = a >> 4,
					h = 15 & a,
					p = this.palette[u];
				if (
					((this.data[l] = p.blue),
					(this.data[l + 1] = p.green),
					(this.data[l + 2] = p.red),
					(this.data[l + 3] = 255),
					2 * s + 1 >= this.width)
				)
					break;
				(p = this.palette[h]),
					(this.data[l + 4] = p.blue),
					(this.data[l + 4 + 1] = p.green),
					(this.data[l + 4 + 2] = p.red),
					(this.data[l + 4 + 3] = 255);
			}
			e !== 0 && (this.pos += 4 - e);
		}
	}),
	(Tn.prototype.bit8 = function () {
		for (var n = this.width % 4, e = this.height - 1; e >= 0; e--) {
			for (var r = this.bottom_up ? e : this.height - 1 - e, i = 0; i < this.width; i++) {
				var s = this.datav.getUint8(this.pos++, !0),
					a = r * this.width * 4 + 4 * i;
				if (s < this.palette.length) {
					var l = this.palette[s];
					(this.data[a] = l.red),
						(this.data[a + 1] = l.green),
						(this.data[a + 2] = l.blue),
						(this.data[a + 3] = 255);
				} else
					(this.data[a] = 255),
						(this.data[a + 1] = 255),
						(this.data[a + 2] = 255),
						(this.data[a + 3] = 255);
			}
			n !== 0 && (this.pos += 4 - n);
		}
	}),
	(Tn.prototype.bit15 = function () {
		for (var n = this.width % 3, e = parseInt('11111', 2), r = this.height - 1; r >= 0; r--) {
			for (var i = this.bottom_up ? r : this.height - 1 - r, s = 0; s < this.width; s++) {
				var a = this.datav.getUint16(this.pos, !0);
				this.pos += 2;
				var l = (((a & e) / e) * 255) | 0,
					u = ((((a >> 5) & e) / e) * 255) | 0,
					h = ((((a >> 10) & e) / e) * 255) | 0,
					p = a >> 15 ? 255 : 0,
					v = i * this.width * 4 + 4 * s;
				(this.data[v] = h), (this.data[v + 1] = u), (this.data[v + 2] = l), (this.data[v + 3] = p);
			}
			this.pos += n;
		}
	}),
	(Tn.prototype.bit16 = function () {
		for (
			var n = this.width % 3,
				e = parseInt('11111', 2),
				r = parseInt('111111', 2),
				i = this.height - 1;
			i >= 0;
			i--
		) {
			for (var s = this.bottom_up ? i : this.height - 1 - i, a = 0; a < this.width; a++) {
				var l = this.datav.getUint16(this.pos, !0);
				this.pos += 2;
				var u = (((l & e) / e) * 255) | 0,
					h = ((((l >> 5) & r) / r) * 255) | 0,
					p = (((l >> 11) / e) * 255) | 0,
					v = s * this.width * 4 + 4 * a;
				(this.data[v] = p),
					(this.data[v + 1] = h),
					(this.data[v + 2] = u),
					(this.data[v + 3] = 255);
			}
			this.pos += n;
		}
	}),
	(Tn.prototype.bit24 = function () {
		for (var n = this.height - 1; n >= 0; n--) {
			for (var e = this.bottom_up ? n : this.height - 1 - n, r = 0; r < this.width; r++) {
				var i = this.datav.getUint8(this.pos++, !0),
					s = this.datav.getUint8(this.pos++, !0),
					a = this.datav.getUint8(this.pos++, !0),
					l = e * this.width * 4 + 4 * r;
				(this.data[l] = a),
					(this.data[l + 1] = s),
					(this.data[l + 2] = i),
					(this.data[l + 3] = 255);
			}
			this.pos += this.width % 4;
		}
	}),
	(Tn.prototype.bit32 = function () {
		for (var n = this.height - 1; n >= 0; n--)
			for (var e = this.bottom_up ? n : this.height - 1 - n, r = 0; r < this.width; r++) {
				var i = this.datav.getUint8(this.pos++, !0),
					s = this.datav.getUint8(this.pos++, !0),
					a = this.datav.getUint8(this.pos++, !0),
					l = this.datav.getUint8(this.pos++, !0),
					u = e * this.width * 4 + 4 * r;
				(this.data[u] = a), (this.data[u + 1] = s), (this.data[u + 2] = i), (this.data[u + 3] = l);
			}
	}),
	(Tn.prototype.getData = function () {
		return this.data;
	}),
	(function (n) {
		n.processBMP = function (e, r, i, s) {
			var a = new Tn(e, !1),
				l = a.width,
				u = a.height,
				h = { data: a.getData(), width: l, height: u },
				p = new _l(100).encode(h, 100);
			return n.processJPEG.call(this, p, r, i, s);
		};
	})(ot.API),
	(Wc.prototype.getData = function () {
		return this.data;
	}),
	(function (n) {
		n.processWEBP = function (e, r, i, s) {
			var a = new Wc(e),
				l = a.width,
				u = a.height,
				h = { data: a.getData(), width: l, height: u },
				p = new _l(100).encode(h, 100);
			return n.processJPEG.call(this, p, r, i, s);
		};
	})(ot.API),
	(ot.API.processRGBA = function (n, e, r) {
		for (
			var i = n.data,
				s = i.length,
				a = new Uint8Array((s / 4) * 3),
				l = new Uint8Array(s / 4),
				u = 0,
				h = 0,
				p = 0;
			p < s;
			p += 4
		) {
			var v = i[p],
				m = i[p + 1],
				y = i[p + 2],
				d = i[p + 3];
			(a[u++] = v), (a[u++] = m), (a[u++] = y), (l[h++] = d);
		}
		var E = this.__addimage__.arrayBufferToBinaryString(a);
		return {
			alpha: this.__addimage__.arrayBufferToBinaryString(l),
			data: E,
			index: e,
			alias: r,
			colorSpace: 'DeviceRGB',
			bitsPerComponent: 8,
			width: n.width,
			height: n.height
		};
	}),
	(ot.API.setLanguage = function (n) {
		return (
			this.internal.languageSettings === void 0 &&
				((this.internal.languageSettings = {}), (this.internal.languageSettings.isSubscribed = !1)),
			{
				af: 'Afrikaans',
				sq: 'Albanian',
				ar: 'Arabic (Standard)',
				'ar-DZ': 'Arabic (Algeria)',
				'ar-BH': 'Arabic (Bahrain)',
				'ar-EG': 'Arabic (Egypt)',
				'ar-IQ': 'Arabic (Iraq)',
				'ar-JO': 'Arabic (Jordan)',
				'ar-KW': 'Arabic (Kuwait)',
				'ar-LB': 'Arabic (Lebanon)',
				'ar-LY': 'Arabic (Libya)',
				'ar-MA': 'Arabic (Morocco)',
				'ar-OM': 'Arabic (Oman)',
				'ar-QA': 'Arabic (Qatar)',
				'ar-SA': 'Arabic (Saudi Arabia)',
				'ar-SY': 'Arabic (Syria)',
				'ar-TN': 'Arabic (Tunisia)',
				'ar-AE': 'Arabic (U.A.E.)',
				'ar-YE': 'Arabic (Yemen)',
				an: 'Aragonese',
				hy: 'Armenian',
				as: 'Assamese',
				ast: 'Asturian',
				az: 'Azerbaijani',
				eu: 'Basque',
				be: 'Belarusian',
				bn: 'Bengali',
				bs: 'Bosnian',
				br: 'Breton',
				bg: 'Bulgarian',
				my: 'Burmese',
				ca: 'Catalan',
				ch: 'Chamorro',
				ce: 'Chechen',
				zh: 'Chinese',
				'zh-HK': 'Chinese (Hong Kong)',
				'zh-CN': 'Chinese (PRC)',
				'zh-SG': 'Chinese (Singapore)',
				'zh-TW': 'Chinese (Taiwan)',
				cv: 'Chuvash',
				co: 'Corsican',
				cr: 'Cree',
				hr: 'Croatian',
				cs: 'Czech',
				da: 'Danish',
				nl: 'Dutch (Standard)',
				'nl-BE': 'Dutch (Belgian)',
				en: 'English',
				'en-AU': 'English (Australia)',
				'en-BZ': 'English (Belize)',
				'en-CA': 'English (Canada)',
				'en-IE': 'English (Ireland)',
				'en-JM': 'English (Jamaica)',
				'en-NZ': 'English (New Zealand)',
				'en-PH': 'English (Philippines)',
				'en-ZA': 'English (South Africa)',
				'en-TT': 'English (Trinidad & Tobago)',
				'en-GB': 'English (United Kingdom)',
				'en-US': 'English (United States)',
				'en-ZW': 'English (Zimbabwe)',
				eo: 'Esperanto',
				et: 'Estonian',
				fo: 'Faeroese',
				fj: 'Fijian',
				fi: 'Finnish',
				fr: 'French (Standard)',
				'fr-BE': 'French (Belgium)',
				'fr-CA': 'French (Canada)',
				'fr-FR': 'French (France)',
				'fr-LU': 'French (Luxembourg)',
				'fr-MC': 'French (Monaco)',
				'fr-CH': 'French (Switzerland)',
				fy: 'Frisian',
				fur: 'Friulian',
				gd: 'Gaelic (Scots)',
				'gd-IE': 'Gaelic (Irish)',
				gl: 'Galacian',
				ka: 'Georgian',
				de: 'German (Standard)',
				'de-AT': 'German (Austria)',
				'de-DE': 'German (Germany)',
				'de-LI': 'German (Liechtenstein)',
				'de-LU': 'German (Luxembourg)',
				'de-CH': 'German (Switzerland)',
				el: 'Greek',
				gu: 'Gujurati',
				ht: 'Haitian',
				he: 'Hebrew',
				hi: 'Hindi',
				hu: 'Hungarian',
				is: 'Icelandic',
				id: 'Indonesian',
				iu: 'Inuktitut',
				ga: 'Irish',
				it: 'Italian (Standard)',
				'it-CH': 'Italian (Switzerland)',
				ja: 'Japanese',
				kn: 'Kannada',
				ks: 'Kashmiri',
				kk: 'Kazakh',
				km: 'Khmer',
				ky: 'Kirghiz',
				tlh: 'Klingon',
				ko: 'Korean',
				'ko-KP': 'Korean (North Korea)',
				'ko-KR': 'Korean (South Korea)',
				la: 'Latin',
				lv: 'Latvian',
				lt: 'Lithuanian',
				lb: 'Luxembourgish',
				mk: 'North Macedonia',
				ms: 'Malay',
				ml: 'Malayalam',
				mt: 'Maltese',
				mi: 'Maori',
				mr: 'Marathi',
				mo: 'Moldavian',
				nv: 'Navajo',
				ng: 'Ndonga',
				ne: 'Nepali',
				no: 'Norwegian',
				nb: 'Norwegian (Bokmal)',
				nn: 'Norwegian (Nynorsk)',
				oc: 'Occitan',
				or: 'Oriya',
				om: 'Oromo',
				fa: 'Persian',
				'fa-IR': 'Persian/Iran',
				pl: 'Polish',
				pt: 'Portuguese',
				'pt-BR': 'Portuguese (Brazil)',
				pa: 'Punjabi',
				'pa-IN': 'Punjabi (India)',
				'pa-PK': 'Punjabi (Pakistan)',
				qu: 'Quechua',
				rm: 'Rhaeto-Romanic',
				ro: 'Romanian',
				'ro-MO': 'Romanian (Moldavia)',
				ru: 'Russian',
				'ru-MO': 'Russian (Moldavia)',
				sz: 'Sami (Lappish)',
				sg: 'Sango',
				sa: 'Sanskrit',
				sc: 'Sardinian',
				sd: 'Sindhi',
				si: 'Singhalese',
				sr: 'Serbian',
				sk: 'Slovak',
				sl: 'Slovenian',
				so: 'Somani',
				sb: 'Sorbian',
				es: 'Spanish',
				'es-AR': 'Spanish (Argentina)',
				'es-BO': 'Spanish (Bolivia)',
				'es-CL': 'Spanish (Chile)',
				'es-CO': 'Spanish (Colombia)',
				'es-CR': 'Spanish (Costa Rica)',
				'es-DO': 'Spanish (Dominican Republic)',
				'es-EC': 'Spanish (Ecuador)',
				'es-SV': 'Spanish (El Salvador)',
				'es-GT': 'Spanish (Guatemala)',
				'es-HN': 'Spanish (Honduras)',
				'es-MX': 'Spanish (Mexico)',
				'es-NI': 'Spanish (Nicaragua)',
				'es-PA': 'Spanish (Panama)',
				'es-PY': 'Spanish (Paraguay)',
				'es-PE': 'Spanish (Peru)',
				'es-PR': 'Spanish (Puerto Rico)',
				'es-ES': 'Spanish (Spain)',
				'es-UY': 'Spanish (Uruguay)',
				'es-VE': 'Spanish (Venezuela)',
				sx: 'Sutu',
				sw: 'Swahili',
				sv: 'Swedish',
				'sv-FI': 'Swedish (Finland)',
				'sv-SV': 'Swedish (Sweden)',
				ta: 'Tamil',
				tt: 'Tatar',
				te: 'Teluga',
				th: 'Thai',
				tig: 'Tigre',
				ts: 'Tsonga',
				tn: 'Tswana',
				tr: 'Turkish',
				tk: 'Turkmen',
				uk: 'Ukrainian',
				hsb: 'Upper Sorbian',
				ur: 'Urdu',
				ve: 'Venda',
				vi: 'Vietnamese',
				vo: 'Volapuk',
				wa: 'Walloon',
				cy: 'Welsh',
				xh: 'Xhosa',
				ji: 'Yiddish',
				zu: 'Zulu'
			}[n] !== void 0 &&
				((this.internal.languageSettings.languageCode = n),
				this.internal.languageSettings.isSubscribed === !1 &&
					(this.internal.events.subscribe('putCatalog', function () {
						this.internal.write('/Lang (' + this.internal.languageSettings.languageCode + ')');
					}),
					(this.internal.languageSettings.isSubscribed = !0))),
			this
		);
	}),
	(pa = ot.API),
	(os = pa.getCharWidthsArray =
		function (n, e) {
			var r,
				i,
				s = (e = e || {}).font || this.internal.getFont(),
				a = e.fontSize || this.internal.getFontSize(),
				l = e.charSpace || this.internal.getCharSpace(),
				u = e.widths ? e.widths : s.metadata.Unicode.widths,
				h = u.fof ? u.fof : 1,
				p = e.kerning ? e.kerning : s.metadata.Unicode.kerning,
				v = p.fof ? p.fof : 1,
				m = e.doKerning !== !1,
				y = 0,
				d = n.length,
				E = 0,
				N = u[0] || h,
				P = [];
			for (r = 0; r < d; r++)
				(i = n.charCodeAt(r)),
					typeof s.metadata.widthOfString == 'function'
						? P.push(
								(s.metadata.widthOfGlyph(s.metadata.characterToGlyph(i)) + l * (1e3 / a) || 0) / 1e3
							)
						: ((y = m && Bt(p[i]) === 'object' && !isNaN(parseInt(p[i][E], 10)) ? p[i][E] / v : 0),
							P.push((u[i] || N) / h + y)),
					(E = i);
			return P;
		}),
	(qc = pa.getStringUnitWidth =
		function (n, e) {
			var r = (e = e || {}).fontSize || this.internal.getFontSize(),
				i = e.font || this.internal.getFont(),
				s = e.charSpace || this.internal.getCharSpace();
			return (
				pa.processArabic && (n = pa.processArabic(n)),
				typeof i.metadata.widthOfString == 'function'
					? i.metadata.widthOfString(n, r, s) / r
					: os.apply(this, arguments).reduce(function (a, l) {
							return a + l;
						}, 0)
			);
		}),
	(zc = function (n, e, r, i) {
		for (var s = [], a = 0, l = n.length, u = 0; a !== l && u + e[a] < r; ) (u += e[a]), a++;
		s.push(n.slice(0, a));
		var h = a;
		for (u = 0; a !== l; )
			u + e[a] > i && (s.push(n.slice(h, a)), (u = 0), (h = a)), (u += e[a]), a++;
		return h !== a && s.push(n.slice(h, a)), s;
	}),
	(Uc = function (n, e, r) {
		r || (r = {});
		var i,
			s,
			a,
			l,
			u,
			h,
			p,
			v = [],
			m = [v],
			y = r.textIndent || 0,
			d = 0,
			E = 0,
			N = n.split(' '),
			P = os.apply(this, [' ', r])[0];
		if ((h = r.lineIndent === -1 ? N[0].length + 2 : r.lineIndent || 0)) {
			var _ = Array(h).join(' '),
				j = [];
			N.map(function (G) {
				(G = G.split(/\s*\n/)).length > 1
					? (j = j.concat(
							G.map(function (W, oe) {
								return (
									(oe && W.length
										? `
`
										: '') + W
								);
							})
						))
					: j.push(G[0]);
			}),
				(N = j),
				(h = qc.apply(this, [_, r]));
		}
		for (a = 0, l = N.length; a < l; a++) {
			var O = 0;
			if (
				((i = N[a]),
				h &&
					i[0] ==
						`
` &&
					((i = i.substr(1)), (O = 1)),
				y +
					d +
					(E = (s = os.apply(this, [i, r])).reduce(function (G, W) {
						return G + W;
					}, 0)) >
					e || O)
			) {
				if (E > e) {
					for (
						u = zc.apply(this, [i, s, e - (y + d), e]), v.push(u.shift()), v = [u.pop()];
						u.length;

					)
						m.push([u.shift()]);
					E = s.slice(i.length - (v[0] ? v[0].length : 0)).reduce(function (G, W) {
						return G + W;
					}, 0);
				} else v = [i];
				m.push(v), (y = E + h), (d = P);
			} else v.push(i), (y += d + E), (d = P);
		}
		return (
			(p = h
				? function (G, W) {
						return (W ? _ : '') + G.join(' ');
					}
				: function (G) {
						return G.join(' ');
					}),
			m.map(p)
		);
	}),
	(pa.splitTextToSize = function (n, e, r) {
		var i,
			s = (r = r || {}).fontSize || this.internal.getFontSize(),
			a = function (v) {
				if (v.widths && v.kerning) return { widths: v.widths, kerning: v.kerning };
				var m = this.internal.getFont(v.fontName, v.fontStyle);
				return m.metadata.Unicode
					? {
							widths: m.metadata.Unicode.widths || { 0: 1 },
							kerning: m.metadata.Unicode.kerning || {}
						}
					: {
							font: m.metadata,
							fontSize: this.internal.getFontSize(),
							charSpace: this.internal.getCharSpace()
						};
			}.call(this, r);
		i = Array.isArray(n) ? n : String(n).split(/\r?\n/);
		var l = (1 * this.internal.scaleFactor * e) / s;
		(a.textIndent = r.textIndent ? (1 * r.textIndent * this.internal.scaleFactor) / s : 0),
			(a.lineIndent = r.lineIndent);
		var u,
			h,
			p = [];
		for (u = 0, h = i.length; u < h; u++) p = p.concat(Uc.apply(this, [i[u], l, a]));
		return p;
	}),
	(function (n) {
		n.__fontmetrics__ = n.__fontmetrics__ || {};
		for (var e = 'klmnopqrstuvwxyz', r = {}, i = {}, s = 0; s < e.length; s++)
			(r[e[s]] = '0123456789abcdef'[s]), (i['0123456789abcdef'[s]] = e[s]);
		var a = function (m) {
				return '0x' + parseInt(m, 10).toString(16);
			},
			l = (n.__fontmetrics__.compress = function (m) {
				var y,
					d,
					E,
					N,
					P = ['{'];
				for (var _ in m) {
					if (
						((y = m[_]),
						isNaN(parseInt(_, 10))
							? (d = "'" + _ + "'")
							: ((_ = parseInt(_, 10)), (d = (d = a(_).slice(2)).slice(0, -1) + i[d.slice(-1)])),
						typeof y == 'number')
					)
						y < 0 ? ((E = a(y).slice(3)), (N = '-')) : ((E = a(y).slice(2)), (N = '')),
							(E = N + E.slice(0, -1) + i[E.slice(-1)]);
					else {
						if (Bt(y) !== 'object')
							throw new Error("Don't know what to do with value type " + Bt(y) + '.');
						E = l(y);
					}
					P.push(d + E);
				}
				return P.push('}'), P.join('');
			}),
			u = (n.__fontmetrics__.uncompress = function (m) {
				if (typeof m != 'string') throw new Error('Invalid argument passed to uncompress.');
				for (
					var y, d, E, N, P = {}, _ = 1, j = P, O = [], G = '', W = '', oe = m.length - 1, ee = 1;
					ee < oe;
					ee += 1
				)
					(N = m[ee]) == "'"
						? y
							? ((E = y.join('')), (y = void 0))
							: (y = [])
						: y
							? y.push(N)
							: N == '{'
								? (O.push([j, E]), (j = {}), (E = void 0))
								: N == '}'
									? (((d = O.pop())[0][d[1]] = j), (E = void 0), (j = d[0]))
									: N == '-'
										? (_ = -1)
										: E === void 0
											? r.hasOwnProperty(N)
												? ((G += r[N]), (E = parseInt(G, 16) * _), (_ = 1), (G = ''))
												: (G += N)
											: r.hasOwnProperty(N)
												? ((W += r[N]),
													(j[E] = parseInt(W, 16) * _),
													(_ = 1),
													(E = void 0),
													(W = ''))
												: (W += N);
				return P;
			}),
			h = {
				codePages: ['WinAnsiEncoding'],
				WinAnsiEncoding: u(
					'{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}'
				)
			},
			p = {
				Unicode: {
					Courier: h,
					'Courier-Bold': h,
					'Courier-BoldOblique': h,
					'Courier-Oblique': h,
					Helvetica: h,
					'Helvetica-Bold': h,
					'Helvetica-BoldOblique': h,
					'Helvetica-Oblique': h,
					'Times-Roman': h,
					'Times-Bold': h,
					'Times-BoldItalic': h,
					'Times-Italic': h
				}
			},
			v = {
				Unicode: {
					'Courier-Oblique': u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
					'Times-BoldItalic': u(
						"{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"
					),
					'Helvetica-Bold': u(
						"{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
					),
					Courier: u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
					'Courier-BoldOblique': u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
					'Times-Bold': u(
						"{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"
					),
					Symbol: u(
						"{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"
					),
					Helvetica: u(
						"{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
					),
					'Helvetica-BoldOblique': u(
						"{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"
					),
					ZapfDingbats: u("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
					'Courier-Bold': u("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
					'Times-Italic': u(
						"{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"
					),
					'Times-Roman': u(
						"{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"
					),
					'Helvetica-Oblique': u(
						"{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"
					)
				}
			};
		n.events.push([
			'addFont',
			function (m) {
				var y = m.font,
					d = v.Unicode[y.postScriptName];
				d &&
					((y.metadata.Unicode = {}),
					(y.metadata.Unicode.widths = d.widths),
					(y.metadata.Unicode.kerning = d.kerning));
				var E = p.Unicode[y.postScriptName];
				E && ((y.metadata.Unicode.encoding = E), (y.encoding = E.codePages[0]));
			}
		]);
	})(ot.API),
	(function (n) {
		var e = function (r) {
			for (var i = r.length, s = new Uint8Array(i), a = 0; a < i; a++) s[a] = r.charCodeAt(a);
			return s;
		};
		n.API.events.push([
			'addFont',
			function (r) {
				var i = void 0,
					s = r.font,
					a = r.instance;
				if (!s.isStandardFont) {
					if (a === void 0)
						throw new Error(
							"Font does not exist in vFS, import fonts or remove declaration doc.addFont('" +
								s.postScriptName +
								"')."
						);
					if (
						typeof (i =
							a.existsFileInVFS(s.postScriptName) === !1
								? a.loadFile(s.postScriptName)
								: a.getFileFromVFS(s.postScriptName)) != 'string'
					)
						throw new Error(
							"Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" +
								s.postScriptName +
								"')."
						);
					(function (l, u) {
						(u = /^\x00\x01\x00\x00/.test(u) ? e(u) : e(oo(u))),
							(l.metadata = n.API.TTFFont.open(u)),
							(l.metadata.Unicode = l.metadata.Unicode || {
								encoding: {},
								kerning: {},
								widths: []
							}),
							(l.metadata.glyIdsUsed = [0]);
					})(s, i);
				}
			}
		]);
	})(ot),
	(function (n) {
		function e() {
			return (
				st.canvg
					? Promise.resolve(st.canvg)
					: Ll(
							() => import('./B9BRqZ_u.js'),
							__vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
							import.meta.url
						)
			)
				.catch(function (r) {
					return Promise.reject(new Error('Could not load canvg: ' + r));
				})
				.then(function (r) {
					return r.default ? r.default : r;
				});
		}
		ot.API.addSvgAsImage = function (r, i, s, a, l, u, h, p) {
			if (isNaN(i) || isNaN(s))
				throw (
					(Rt.error('jsPDF.addSvgAsImage: Invalid coordinates', arguments),
					new Error('Invalid coordinates passed to jsPDF.addSvgAsImage'))
				);
			if (isNaN(a) || isNaN(l))
				throw (
					(Rt.error('jsPDF.addSvgAsImage: Invalid measurements', arguments),
					new Error('Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage'))
				);
			var v = document.createElement('canvas');
			(v.width = a), (v.height = l);
			var m = v.getContext('2d');
			(m.fillStyle = '#fff'), m.fillRect(0, 0, v.width, v.height);
			var y = { ignoreMouse: !0, ignoreAnimation: !0, ignoreDimensions: !0 },
				d = this;
			return e()
				.then(
					function (E) {
						return E.fromString(m, r, y);
					},
					function () {
						return Promise.reject(new Error('Could not load canvg.'));
					}
				)
				.then(function (E) {
					return E.render(y);
				})
				.then(function () {
					d.addImage(v.toDataURL('image/jpeg', 1), i, s, a, l, h, p);
				});
		};
	})(),
	(ot.API.putTotalPages = function (n) {
		var e,
			r = 0;
		parseInt(this.internal.getFont().id.substr(1), 10) < 15
			? ((e = new RegExp(n, 'g')), (r = this.internal.getNumberOfPages()))
			: ((e = new RegExp(this.pdfEscape16(n, this.internal.getFont()), 'g')),
				(r = this.pdfEscape16(this.internal.getNumberOfPages() + '', this.internal.getFont())));
		for (var i = 1; i <= this.internal.getNumberOfPages(); i++)
			for (var s = 0; s < this.internal.pages[i].length; s++)
				this.internal.pages[i][s] = this.internal.pages[i][s].replace(e, r);
		return this;
	}),
	(ot.API.viewerPreferences = function (n, e) {
		var r;
		(n = n || {}), (e = e || !1);
		var i,
			s,
			a,
			l = {
				HideToolbar: {
					defaultValue: !1,
					value: !1,
					type: 'boolean',
					explicitSet: !1,
					valueSet: [!0, !1],
					pdfVersion: 1.3
				},
				HideMenubar: {
					defaultValue: !1,
					value: !1,
					type: 'boolean',
					explicitSet: !1,
					valueSet: [!0, !1],
					pdfVersion: 1.3
				},
				HideWindowUI: {
					defaultValue: !1,
					value: !1,
					type: 'boolean',
					explicitSet: !1,
					valueSet: [!0, !1],
					pdfVersion: 1.3
				},
				FitWindow: {
					defaultValue: !1,
					value: !1,
					type: 'boolean',
					explicitSet: !1,
					valueSet: [!0, !1],
					pdfVersion: 1.3
				},
				CenterWindow: {
					defaultValue: !1,
					value: !1,
					type: 'boolean',
					explicitSet: !1,
					valueSet: [!0, !1],
					pdfVersion: 1.3
				},
				DisplayDocTitle: {
					defaultValue: !1,
					value: !1,
					type: 'boolean',
					explicitSet: !1,
					valueSet: [!0, !1],
					pdfVersion: 1.4
				},
				NonFullScreenPageMode: {
					defaultValue: 'UseNone',
					value: 'UseNone',
					type: 'name',
					explicitSet: !1,
					valueSet: ['UseNone', 'UseOutlines', 'UseThumbs', 'UseOC'],
					pdfVersion: 1.3
				},
				Direction: {
					defaultValue: 'L2R',
					value: 'L2R',
					type: 'name',
					explicitSet: !1,
					valueSet: ['L2R', 'R2L'],
					pdfVersion: 1.3
				},
				ViewArea: {
					defaultValue: 'CropBox',
					value: 'CropBox',
					type: 'name',
					explicitSet: !1,
					valueSet: ['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox'],
					pdfVersion: 1.4
				},
				ViewClip: {
					defaultValue: 'CropBox',
					value: 'CropBox',
					type: 'name',
					explicitSet: !1,
					valueSet: ['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox'],
					pdfVersion: 1.4
				},
				PrintArea: {
					defaultValue: 'CropBox',
					value: 'CropBox',
					type: 'name',
					explicitSet: !1,
					valueSet: ['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox'],
					pdfVersion: 1.4
				},
				PrintClip: {
					defaultValue: 'CropBox',
					value: 'CropBox',
					type: 'name',
					explicitSet: !1,
					valueSet: ['MediaBox', 'CropBox', 'TrimBox', 'BleedBox', 'ArtBox'],
					pdfVersion: 1.4
				},
				PrintScaling: {
					defaultValue: 'AppDefault',
					value: 'AppDefault',
					type: 'name',
					explicitSet: !1,
					valueSet: ['AppDefault', 'None'],
					pdfVersion: 1.6
				},
				Duplex: {
					defaultValue: '',
					value: 'none',
					type: 'name',
					explicitSet: !1,
					valueSet: ['Simplex', 'DuplexFlipShortEdge', 'DuplexFlipLongEdge', 'none'],
					pdfVersion: 1.7
				},
				PickTrayByPDFSize: {
					defaultValue: !1,
					value: !1,
					type: 'boolean',
					explicitSet: !1,
					valueSet: [!0, !1],
					pdfVersion: 1.7
				},
				PrintPageRange: {
					defaultValue: '',
					value: '',
					type: 'array',
					explicitSet: !1,
					valueSet: null,
					pdfVersion: 1.7
				},
				NumCopies: {
					defaultValue: 1,
					value: 1,
					type: 'integer',
					explicitSet: !1,
					valueSet: null,
					pdfVersion: 1.7
				}
			},
			u = Object.keys(l),
			h = [],
			p = 0,
			v = 0,
			m = 0;
		function y(E, N) {
			var P,
				_ = !1;
			for (P = 0; P < E.length; P += 1) E[P] === N && (_ = !0);
			return _;
		}
		if (
			(this.internal.viewerpreferences === void 0 &&
				((this.internal.viewerpreferences = {}),
				(this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(l))),
				(this.internal.viewerpreferences.isSubscribed = !1)),
			(r = this.internal.viewerpreferences.configuration),
			n === 'reset' || e === !0)
		) {
			var d = u.length;
			for (m = 0; m < d; m += 1) (r[u[m]].value = r[u[m]].defaultValue), (r[u[m]].explicitSet = !1);
		}
		if (Bt(n) === 'object') {
			for (s in n)
				if (((a = n[s]), y(u, s) && a !== void 0)) {
					if (r[s].type === 'boolean' && typeof a == 'boolean') r[s].value = a;
					else if (r[s].type === 'name' && y(r[s].valueSet, a)) r[s].value = a;
					else if (r[s].type === 'integer' && Number.isInteger(a)) r[s].value = a;
					else if (r[s].type === 'array') {
						for (p = 0; p < a.length; p += 1)
							if (((i = !0), a[p].length === 1 && typeof a[p][0] == 'number'))
								h.push(String(a[p] - 1));
							else if (a[p].length > 1) {
								for (v = 0; v < a[p].length; v += 1) typeof a[p][v] != 'number' && (i = !1);
								i === !0 && h.push([a[p][0] - 1, a[p][1] - 1].join(' '));
							}
						r[s].value = '[' + h.join(' ') + ']';
					} else r[s].value = r[s].defaultValue;
					r[s].explicitSet = !0;
				}
		}
		return (
			this.internal.viewerpreferences.isSubscribed === !1 &&
				(this.internal.events.subscribe('putCatalog', function () {
					var E,
						N = [];
					for (E in r)
						r[E].explicitSet === !0 &&
							(r[E].type === 'name'
								? N.push('/' + E + ' /' + r[E].value)
								: N.push('/' + E + ' ' + r[E].value));
					N.length !== 0 &&
						this.internal.write(
							`/ViewerPreferences
<<
` +
								N.join(`
`) +
								`
>>`
						);
				}),
				(this.internal.viewerpreferences.isSubscribed = !0)),
			(this.internal.viewerpreferences.configuration = r),
			this
		);
	}),
	(function (n) {
		var e = function () {
				var i =
						'<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' +
						this.internal.__metadata__.namespaceuri +
						'"><jspdf:metadata>',
					s = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),
					a = unescape(encodeURIComponent(i)),
					l = unescape(encodeURIComponent(this.internal.__metadata__.metadata)),
					u = unescape(encodeURIComponent('</jspdf:metadata></rdf:Description></rdf:RDF>')),
					h = unescape(encodeURIComponent('</x:xmpmeta>')),
					p = a.length + l.length + u.length + s.length + h.length;
				(this.internal.__metadata__.metadata_object_number = this.internal.newObject()),
					this.internal.write('<< /Type /Metadata /Subtype /XML /Length ' + p + ' >>'),
					this.internal.write('stream'),
					this.internal.write(s + a + l + u + h),
					this.internal.write('endstream'),
					this.internal.write('endobj');
			},
			r = function () {
				this.internal.__metadata__.metadata_object_number &&
					this.internal.write(
						'/Metadata ' + this.internal.__metadata__.metadata_object_number + ' 0 R'
					);
			};
		n.addMetadata = function (i, s) {
			return (
				this.internal.__metadata__ === void 0 &&
					((this.internal.__metadata__ = {
						metadata: i,
						namespaceuri: s || 'http://jspdf.default.namespaceuri/'
					}),
					this.internal.events.subscribe('putCatalog', r),
					this.internal.events.subscribe('postPutResources', e)),
				this
			);
		};
	})(ot.API),
	(function (n) {
		var e = n.API,
			r = (e.pdfEscape16 = function (a, l) {
				for (
					var u,
						h = l.metadata.Unicode.widths,
						p = ['', '0', '00', '000', '0000'],
						v = [''],
						m = 0,
						y = a.length;
					m < y;
					++m
				) {
					if (
						((u = l.metadata.characterToGlyph(a.charCodeAt(m))),
						l.metadata.glyIdsUsed.push(u),
						(l.metadata.toUnicode[u] = a.charCodeAt(m)),
						h.indexOf(u) == -1 && (h.push(u), h.push([parseInt(l.metadata.widthOfGlyph(u), 10)])),
						u == '0')
					)
						return v.join('');
					(u = u.toString(16)), v.push(p[4 - u.length], u);
				}
				return v.join('');
			}),
			i = function (a) {
				var l, u, h, p, v, m, y;
				for (
					v = `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`,
						h = [],
						m = 0,
						y = (u = Object.keys(a).sort(function (d, E) {
							return d - E;
						})).length;
					m < y;
					m++
				)
					(l = u[m]),
						h.length >= 100 &&
							((v +=
								`
` +
								h.length +
								` beginbfchar
` +
								h.join(`
`) +
								`
endbfchar`),
							(h = [])),
						a[l] !== void 0 &&
							a[l] !== null &&
							typeof a[l].toString == 'function' &&
							((p = ('0000' + a[l].toString(16)).slice(-4)),
							(l = ('0000' + (+l).toString(16)).slice(-4)),
							h.push('<' + l + '><' + p + '>'));
				return (
					h.length &&
						(v +=
							`
` +
							h.length +
							` beginbfchar
` +
							h.join(`
`) +
							`
endbfchar
`),
					(v += `endcmap
CMapName currentdict /CMap defineresource pop
end
end`)
				);
			};
		e.events.push([
			'putFont',
			function (a) {
				(function (l) {
					var u = l.font,
						h = l.out,
						p = l.newObject,
						v = l.putStream;
					if (u.metadata instanceof n.API.TTFFont && u.encoding === 'Identity-H') {
						for (
							var m = u.metadata.Unicode.widths,
								y = u.metadata.subset.encode(u.metadata.glyIdsUsed, 1),
								d = '',
								E = 0;
							E < y.length;
							E++
						)
							d += String.fromCharCode(y[E]);
						var N = p();
						v({ data: d, addLength1: !0, objectId: N }), h('endobj');
						var P = p();
						v({ data: i(u.metadata.toUnicode), addLength1: !0, objectId: P }), h('endobj');
						var _ = p();
						h('<<'),
							h('/Type /FontDescriptor'),
							h('/FontName /' + ba(u.fontName)),
							h('/FontFile2 ' + N + ' 0 R'),
							h('/FontBBox ' + n.API.PDFObject.convert(u.metadata.bbox)),
							h('/Flags ' + u.metadata.flags),
							h('/StemV ' + u.metadata.stemV),
							h('/ItalicAngle ' + u.metadata.italicAngle),
							h('/Ascent ' + u.metadata.ascender),
							h('/Descent ' + u.metadata.decender),
							h('/CapHeight ' + u.metadata.capHeight),
							h('>>'),
							h('endobj');
						var j = p();
						h('<<'),
							h('/Type /Font'),
							h('/BaseFont /' + ba(u.fontName)),
							h('/FontDescriptor ' + _ + ' 0 R'),
							h('/W ' + n.API.PDFObject.convert(m)),
							h('/CIDToGIDMap /Identity'),
							h('/DW 1000'),
							h('/Subtype /CIDFontType2'),
							h('/CIDSystemInfo'),
							h('<<'),
							h('/Supplement 0'),
							h('/Registry (Adobe)'),
							h('/Ordering (' + u.encoding + ')'),
							h('>>'),
							h('>>'),
							h('endobj'),
							(u.objectNumber = p()),
							h('<<'),
							h('/Type /Font'),
							h('/Subtype /Type0'),
							h('/ToUnicode ' + P + ' 0 R'),
							h('/BaseFont /' + ba(u.fontName)),
							h('/Encoding /' + u.encoding),
							h('/DescendantFonts [' + j + ' 0 R]'),
							h('>>'),
							h('endobj'),
							(u.isAlreadyPutted = !0);
					}
				})(a);
			}
		]),
			e.events.push([
				'putFont',
				function (a) {
					(function (l) {
						var u = l.font,
							h = l.out,
							p = l.newObject,
							v = l.putStream;
						if (u.metadata instanceof n.API.TTFFont && u.encoding === 'WinAnsiEncoding') {
							for (var m = u.metadata.rawData, y = '', d = 0; d < m.length; d++)
								y += String.fromCharCode(m[d]);
							var E = p();
							v({ data: y, addLength1: !0, objectId: E }), h('endobj');
							var N = p();
							v({ data: i(u.metadata.toUnicode), addLength1: !0, objectId: N }), h('endobj');
							var P = p();
							h('<<'),
								h('/Descent ' + u.metadata.decender),
								h('/CapHeight ' + u.metadata.capHeight),
								h('/StemV ' + u.metadata.stemV),
								h('/Type /FontDescriptor'),
								h('/FontFile2 ' + E + ' 0 R'),
								h('/Flags 96'),
								h('/FontBBox ' + n.API.PDFObject.convert(u.metadata.bbox)),
								h('/FontName /' + ba(u.fontName)),
								h('/ItalicAngle ' + u.metadata.italicAngle),
								h('/Ascent ' + u.metadata.ascender),
								h('>>'),
								h('endobj'),
								(u.objectNumber = p());
							for (var _ = 0; _ < u.metadata.hmtx.widths.length; _++)
								u.metadata.hmtx.widths[_] = parseInt(
									u.metadata.hmtx.widths[_] * (1e3 / u.metadata.head.unitsPerEm)
								);
							h(
								'<</Subtype/TrueType/Type/Font/ToUnicode ' +
									N +
									' 0 R/BaseFont/' +
									ba(u.fontName) +
									'/FontDescriptor ' +
									P +
									' 0 R/Encoding/' +
									u.encoding +
									' /FirstChar 29 /LastChar 255 /Widths ' +
									n.API.PDFObject.convert(u.metadata.hmtx.widths) +
									'>>'
							),
								h('endobj'),
								(u.isAlreadyPutted = !0);
						}
					})(a);
				}
			]);
		var s = function (a) {
			var l,
				u = a.text || '',
				h = a.x,
				p = a.y,
				v = a.options || {},
				m = a.mutex || {},
				y = m.pdfEscape,
				d = m.activeFontKey,
				E = m.fonts,
				N = d,
				P = '',
				_ = 0,
				j = '',
				O = E[N].encoding;
			if (E[N].encoding !== 'Identity-H') return { text: u, x: h, y: p, options: v, mutex: m };
			for (j = u, N = d, Array.isArray(u) && (j = u[0]), _ = 0; _ < j.length; _ += 1)
				E[N].metadata.hasOwnProperty('cmap') &&
					(l = E[N].metadata.cmap.unicode.codeMap[j[_].charCodeAt(0)]),
					l || (j[_].charCodeAt(0) < 256 && E[N].metadata.hasOwnProperty('Unicode'))
						? (P += j[_])
						: (P += '');
			var G = '';
			return (
				parseInt(N.slice(1)) < 14 || O === 'WinAnsiEncoding'
					? (G = y(P, N)
							.split('')
							.map(function (W) {
								return W.charCodeAt(0).toString(16);
							})
							.join(''))
					: O === 'Identity-H' && (G = r(P, E[N])),
				(m.isHex = !0),
				{ text: G, x: h, y: p, options: v, mutex: m }
			);
		};
		e.events.push([
			'postProcessText',
			function (a) {
				var l = a.text || '',
					u = [],
					h = { text: l, x: a.x, y: a.y, options: a.options, mutex: a.mutex };
				if (Array.isArray(l)) {
					var p = 0;
					for (p = 0; p < l.length; p += 1)
						Array.isArray(l[p]) && l[p].length === 3
							? u.push([s(Object.assign({}, h, { text: l[p][0] })).text, l[p][1], l[p][2]])
							: u.push(s(Object.assign({}, h, { text: l[p] })).text);
					a.text = u;
				} else a.text = s(Object.assign({}, h, { text: l })).text;
			}
		]);
	})(ot),
	(function (n) {
		var e = function () {
			return this.internal.vFS === void 0 && (this.internal.vFS = {}), !0;
		};
		(n.existsFileInVFS = function (r) {
			return e.call(this), this.internal.vFS[r] !== void 0;
		}),
			(n.addFileToVFS = function (r, i) {
				return e.call(this), (this.internal.vFS[r] = i), this;
			}),
			(n.getFileFromVFS = function (r) {
				return e.call(this), this.internal.vFS[r] !== void 0 ? this.internal.vFS[r] : null;
			});
	})(ot.API),
	(function (n) {
		n.__bidiEngine__ = n.prototype.__bidiEngine__ = function (i) {
			var s,
				a,
				l,
				u,
				h,
				p,
				v,
				m = e,
				y = [
					[0, 3, 0, 1, 0, 0, 0],
					[0, 3, 0, 1, 2, 2, 0],
					[0, 3, 0, 17, 2, 0, 1],
					[0, 3, 5, 5, 4, 1, 0],
					[0, 3, 21, 21, 4, 0, 1],
					[0, 3, 5, 5, 4, 2, 0]
				],
				d = [
					[2, 0, 1, 1, 0, 1, 0],
					[2, 0, 1, 1, 0, 2, 0],
					[2, 0, 2, 1, 3, 2, 0],
					[2, 0, 2, 33, 3, 1, 1]
				],
				E = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 },
				N = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 },
				P = [
					'(',
					')',
					'(',
					'<',
					'>',
					'<',
					'[',
					']',
					'[',
					'{',
					'}',
					'{',
					'«',
					'»',
					'«',
					'‹',
					'›',
					'‹',
					'⁅',
					'⁆',
					'⁅',
					'⁽',
					'⁾',
					'⁽',
					'₍',
					'₎',
					'₍',
					'≤',
					'≥',
					'≤',
					'〈',
					'〉',
					'〈',
					'﹙',
					'﹚',
					'﹙',
					'﹛',
					'﹜',
					'﹛',
					'﹝',
					'﹞',
					'﹝',
					'﹤',
					'﹥',
					'﹤'
				],
				_ = new RegExp(
					/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/
				),
				j = !1,
				O = 0;
			this.__bidiEngine__ = {};
			var G = function (C) {
					var L = C.charCodeAt(),
						q = L >> 8,
						B = N[q];
					return B !== void 0
						? m[256 * B + (255 & L)]
						: q === 252 || q === 253
							? 'AL'
							: _.test(q)
								? 'L'
								: q === 8
									? 'R'
									: 'N';
				},
				W = function (C) {
					for (var L, q = 0; q < C.length; q++) {
						if ((L = G(C.charAt(q))) === 'L') return !1;
						if (L === 'R') return !0;
					}
					return !1;
				},
				oe = function (C, L, q, B) {
					var Z,
						Q,
						ie,
						K,
						le = L[B];
					switch (le) {
						case 'L':
						case 'R':
							j = !1;
							break;
						case 'N':
						case 'AN':
							break;
						case 'EN':
							j && (le = 'AN');
							break;
						case 'AL':
							(j = !0), (le = 'R');
							break;
						case 'WS':
							le = 'N';
							break;
						case 'CS':
							B < 1 ||
							B + 1 >= L.length ||
							((Z = q[B - 1]) !== 'EN' && Z !== 'AN') ||
							((Q = L[B + 1]) !== 'EN' && Q !== 'AN')
								? (le = 'N')
								: j && (Q = 'AN'),
								(le = Q === Z ? Q : 'N');
							break;
						case 'ES':
							le =
								(Z = B > 0 ? q[B - 1] : 'B') === 'EN' && B + 1 < L.length && L[B + 1] === 'EN'
									? 'EN'
									: 'N';
							break;
						case 'ET':
							if (B > 0 && q[B - 1] === 'EN') {
								le = 'EN';
								break;
							}
							if (j) {
								le = 'N';
								break;
							}
							for (ie = B + 1, K = L.length; ie < K && L[ie] === 'ET'; ) ie++;
							le = ie < K && L[ie] === 'EN' ? 'EN' : 'N';
							break;
						case 'NSM':
							if (l && !u) {
								for (K = L.length, ie = B + 1; ie < K && L[ie] === 'NSM'; ) ie++;
								if (ie < K) {
									var ue = C[B],
										Se = (ue >= 1425 && ue <= 2303) || ue === 64286;
									if (((Z = L[ie]), Se && (Z === 'R' || Z === 'AL'))) {
										le = 'R';
										break;
									}
								}
							}
							le = B < 1 || (Z = L[B - 1]) === 'B' ? 'N' : q[B - 1];
							break;
						case 'B':
							(j = !1), (s = !0), (le = O);
							break;
						case 'S':
							(a = !0), (le = 'N');
							break;
						case 'LRE':
						case 'RLE':
						case 'LRO':
						case 'RLO':
						case 'PDF':
							j = !1;
							break;
						case 'BN':
							le = 'N';
					}
					return le;
				},
				ee = function (C, L, q) {
					var B = C.split('');
					return q && z(B, q, { hiLevel: O }), B.reverse(), L && L.reverse(), B.join('');
				},
				z = function (C, L, q) {
					var B,
						Z,
						Q,
						ie,
						K,
						le = -1,
						ue = C.length,
						Se = 0,
						b = [],
						T = O ? d : y,
						M = [];
					for (j = !1, s = !1, a = !1, Z = 0; Z < ue; Z++) M[Z] = G(C[Z]);
					for (Q = 0; Q < ue; Q++) {
						if (
							((K = Se),
							(b[Q] = oe(C, M, b, Q)),
							(B = 240 & (Se = T[K][E[b[Q]]])),
							(Se &= 15),
							(L[Q] = ie = T[Se][5]),
							B > 0)
						)
							if (B === 16) {
								for (Z = le; Z < Q; Z++) L[Z] = 1;
								le = -1;
							} else le = -1;
						if (T[Se][6]) le === -1 && (le = Q);
						else if (le > -1) {
							for (Z = le; Z < Q; Z++) L[Z] = ie;
							le = -1;
						}
						M[Q] === 'B' && (L[Q] = 0), (q.hiLevel |= ie);
					}
					a &&
						(function (H, V, te) {
							for (var se = 0; se < te; se++)
								if (H[se] === 'S') {
									V[se] = O;
									for (var ce = se - 1; ce >= 0 && H[ce] === 'WS'; ce--) V[ce] = O;
								}
						})(M, L, ue);
				},
				re = function (C, L, q, B, Z) {
					if (!(Z.hiLevel < C)) {
						if (C === 1 && O === 1 && !s) return L.reverse(), void (q && q.reverse());
						for (var Q, ie, K, le, ue = L.length, Se = 0; Se < ue; ) {
							if (B[Se] >= C) {
								for (K = Se + 1; K < ue && B[K] >= C; ) K++;
								for (le = Se, ie = K - 1; le < ie; le++, ie--)
									(Q = L[le]),
										(L[le] = L[ie]),
										(L[ie] = Q),
										q && ((Q = q[le]), (q[le] = q[ie]), (q[ie] = Q));
								Se = K;
							}
							Se++;
						}
					}
				},
				de = function (C, L, q) {
					var B = C.split(''),
						Z = { hiLevel: O };
					return (
						q || (q = []),
						z(B, q, Z),
						(function (Q, ie, K) {
							if (K.hiLevel !== 0 && v)
								for (var le, ue = 0; ue < Q.length; ue++)
									ie[ue] === 1 && (le = P.indexOf(Q[ue])) >= 0 && (Q[ue] = P[le + 1]);
						})(B, q, Z),
						re(2, B, L, q, Z),
						re(1, B, L, q, Z),
						B.join('')
					);
				};
			return (
				(this.__bidiEngine__.doBidiReorder = function (C, L, q) {
					if (
						((function (Z, Q) {
							if (Q) for (var ie = 0; ie < Z.length; ie++) Q[ie] = ie;
							u === void 0 && (u = W(Z)), p === void 0 && (p = W(Z));
						})(C, L),
						l || !h || p)
					)
						if (l && h && u ^ p) (O = u ? 1 : 0), (C = ee(C, L, q));
						else if (!l && h && p) (O = u ? 1 : 0), (C = de(C, L, q)), (C = ee(C, L));
						else if (!l || u || h || p) {
							if (l && !h && u ^ p)
								(C = ee(C, L)),
									u ? ((O = 0), (C = de(C, L, q))) : ((O = 1), (C = de(C, L, q)), (C = ee(C, L)));
							else if (l && u && !h && p) (O = 1), (C = de(C, L, q)), (C = ee(C, L));
							else if (!l && !h && u ^ p) {
								var B = v;
								u
									? ((O = 1), (C = de(C, L, q)), (O = 0), (v = !1), (C = de(C, L, q)), (v = B))
									: ((O = 0),
										(C = de(C, L, q)),
										(C = ee(C, L)),
										(O = 1),
										(v = !1),
										(C = de(C, L, q)),
										(v = B),
										(C = ee(C, L)));
							}
						} else (O = 0), (C = de(C, L, q));
					else (O = u ? 1 : 0), (C = de(C, L, q));
					return C;
				}),
				(this.__bidiEngine__.setOptions = function (C) {
					C &&
						((l = C.isInputVisual),
						(h = C.isOutputVisual),
						(u = C.isInputRtl),
						(p = C.isOutputRtl),
						(v = C.isSymmetricSwapping));
				}),
				this.__bidiEngine__.setOptions(i),
				this.__bidiEngine__
			);
		};
		var e = [
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'S',
				'B',
				'S',
				'WS',
				'B',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'B',
				'B',
				'B',
				'S',
				'WS',
				'N',
				'N',
				'ET',
				'ET',
				'ET',
				'N',
				'N',
				'N',
				'N',
				'N',
				'ES',
				'CS',
				'ES',
				'CS',
				'CS',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'CS',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'N',
				'N',
				'N',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'B',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'CS',
				'N',
				'ET',
				'ET',
				'ET',
				'ET',
				'N',
				'N',
				'N',
				'N',
				'L',
				'N',
				'N',
				'BN',
				'N',
				'N',
				'ET',
				'ET',
				'EN',
				'EN',
				'N',
				'L',
				'N',
				'N',
				'N',
				'EN',
				'L',
				'N',
				'N',
				'N',
				'N',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'L',
				'N',
				'N',
				'N',
				'N',
				'N',
				'ET',
				'N',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'R',
				'NSM',
				'R',
				'NSM',
				'NSM',
				'R',
				'NSM',
				'NSM',
				'R',
				'NSM',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'N',
				'N',
				'N',
				'N',
				'N',
				'R',
				'R',
				'R',
				'R',
				'R',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'AN',
				'AN',
				'AN',
				'AN',
				'AN',
				'AN',
				'N',
				'N',
				'AL',
				'ET',
				'ET',
				'AL',
				'CS',
				'AL',
				'N',
				'N',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'AL',
				'AL',
				'N',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'AN',
				'AN',
				'AN',
				'AN',
				'AN',
				'AN',
				'AN',
				'AN',
				'AN',
				'AN',
				'ET',
				'AN',
				'AN',
				'AL',
				'AL',
				'AL',
				'NSM',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'AN',
				'N',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'AL',
				'AL',
				'NSM',
				'NSM',
				'N',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'AL',
				'AL',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'N',
				'AL',
				'AL',
				'NSM',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'N',
				'N',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'AL',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'R',
				'R',
				'N',
				'N',
				'N',
				'N',
				'R',
				'N',
				'N',
				'N',
				'N',
				'N',
				'WS',
				'WS',
				'WS',
				'WS',
				'WS',
				'WS',
				'WS',
				'WS',
				'WS',
				'WS',
				'WS',
				'BN',
				'BN',
				'BN',
				'L',
				'R',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'WS',
				'B',
				'LRE',
				'RLE',
				'PDF',
				'LRO',
				'RLO',
				'CS',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'CS',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'WS',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'N',
				'LRI',
				'RLI',
				'FSI',
				'PDI',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'BN',
				'EN',
				'L',
				'N',
				'N',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'ES',
				'ES',
				'N',
				'N',
				'N',
				'L',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'ES',
				'ES',
				'N',
				'N',
				'N',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'N',
				'N',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'ET',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'N',
				'N',
				'N',
				'N',
				'R',
				'NSM',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'ES',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'N',
				'R',
				'R',
				'R',
				'R',
				'R',
				'N',
				'R',
				'N',
				'R',
				'R',
				'N',
				'R',
				'R',
				'N',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'R',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'NSM',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'CS',
				'N',
				'CS',
				'N',
				'N',
				'CS',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'ET',
				'N',
				'N',
				'ES',
				'ES',
				'N',
				'N',
				'N',
				'N',
				'N',
				'ET',
				'ET',
				'N',
				'N',
				'N',
				'N',
				'N',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'N',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'AL',
				'N',
				'N',
				'BN',
				'N',
				'N',
				'N',
				'ET',
				'ET',
				'ET',
				'N',
				'N',
				'N',
				'N',
				'N',
				'ES',
				'CS',
				'ES',
				'CS',
				'CS',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'EN',
				'CS',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'N',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'N',
				'L',
				'L',
				'L',
				'L',
				'L',
				'L',
				'N',
				'N',
				'L',
				'L',
				'L',
				'N',
				'N',
				'N',
				'ET',
				'ET',
				'N',
				'N',
				'N',
				'ET',
				'ET',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N',
				'N'
			],
			r = new n.__bidiEngine__({ isInputVisual: !0 });
		n.API.events.push([
			'postProcessText',
			function (i) {
				var s = i.text;
				i.x, i.y;
				var a = i.options || {};
				i.mutex, a.lang;
				var l = [];
				if (
					((a.isInputVisual = typeof a.isInputVisual != 'boolean' || a.isInputVisual),
					r.setOptions(a),
					Object.prototype.toString.call(s) === '[object Array]')
				) {
					var u = 0;
					for (l = [], u = 0; u < s.length; u += 1)
						Object.prototype.toString.call(s[u]) === '[object Array]'
							? l.push([r.doBidiReorder(s[u][0]), s[u][1], s[u][2]])
							: l.push([r.doBidiReorder(s[u])]);
					i.text = l;
				} else i.text = r.doBidiReorder(s);
				r.setOptions({ isInputVisual: !0 });
			}
		]);
	})(ot),
	(ot.API.TTFFont = (function () {
		function n(e) {
			var r;
			if (
				((this.rawData = e),
				(r = this.contents = new ki(e)),
				(this.contents.pos = 4),
				r.readString(4) === 'ttcf')
			)
				throw new Error('TTCF not supported.');
			(r.pos = 0), this.parse(), (this.subset = new P1(this)), this.registerTTF();
		}
		return (
			(n.open = function (e) {
				return new n(e);
			}),
			(n.prototype.parse = function () {
				return (
					(this.directory = new p1(this.contents)),
					(this.head = new v1(this)),
					(this.name = new x1(this)),
					(this.cmap = new _u(this)),
					(this.toUnicode = {}),
					(this.hhea = new m1(this)),
					(this.maxp = new _1(this)),
					(this.hmtx = new L1(this)),
					(this.post = new y1(this)),
					(this.os2 = new b1(this)),
					(this.loca = new k1(this)),
					(this.glyf = new A1(this)),
					(this.ascender = (this.os2.exists && this.os2.ascender) || this.hhea.ascender),
					(this.decender = (this.os2.exists && this.os2.decender) || this.hhea.decender),
					(this.lineGap = (this.os2.exists && this.os2.lineGap) || this.hhea.lineGap),
					(this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax])
				);
			}),
			(n.prototype.registerTTF = function () {
				var e, r, i, s, a;
				if (
					((this.scaleFactor = 1e3 / this.head.unitsPerEm),
					(this.bbox = function () {
						var l, u, h, p;
						for (p = [], l = 0, u = (h = this.bbox).length; l < u; l++)
							(e = h[l]), p.push(Math.round(e * this.scaleFactor));
						return p;
					}.call(this)),
					(this.stemV = 0),
					this.post.exists
						? ((i = 255 & (s = this.post.italic_angle)),
							(32768 & (r = s >> 16)) != 0 && (r = -(1 + (65535 ^ r))),
							(this.italicAngle = +(r + '.' + i)))
						: (this.italicAngle = 0),
					(this.ascender = Math.round(this.ascender * this.scaleFactor)),
					(this.decender = Math.round(this.decender * this.scaleFactor)),
					(this.lineGap = Math.round(this.lineGap * this.scaleFactor)),
					(this.capHeight = (this.os2.exists && this.os2.capHeight) || this.ascender),
					(this.xHeight = (this.os2.exists && this.os2.xHeight) || 0),
					(this.familyClass = ((this.os2.exists && this.os2.familyClass) || 0) >> 8),
					(this.isSerif =
						(a = this.familyClass) === 1 || a === 2 || a === 3 || a === 4 || a === 5 || a === 7),
					(this.isScript = this.familyClass === 10),
					(this.flags = 0),
					this.post.isFixedPitch && (this.flags |= 1),
					this.isSerif && (this.flags |= 2),
					this.isScript && (this.flags |= 8),
					this.italicAngle !== 0 && (this.flags |= 64),
					(this.flags |= 32),
					!this.cmap.unicode)
				)
					throw new Error('No unicode cmap for font');
			}),
			(n.prototype.characterToGlyph = function (e) {
				var r;
				return ((r = this.cmap.unicode) != null ? r.codeMap[e] : void 0) || 0;
			}),
			(n.prototype.widthOfGlyph = function (e) {
				var r;
				return (r = 1e3 / this.head.unitsPerEm), this.hmtx.forGlyph(e).advance * r;
			}),
			(n.prototype.widthOfString = function (e, r, i) {
				var s, a, l, u;
				for (l = 0, a = 0, u = (e = '' + e).length; 0 <= u ? a < u : a > u; a = 0 <= u ? ++a : --a)
					(s = e.charCodeAt(a)),
						(l += this.widthOfGlyph(this.characterToGlyph(s)) + i * (1e3 / r) || 0);
				return l * (r / 1e3);
			}),
			(n.prototype.lineHeight = function (e, r) {
				var i;
				return (
					r == null && (r = !1),
					(i = r ? this.lineGap : 0),
					((this.ascender + i - this.decender) / 1e3) * e
				);
			}),
			n
		);
	})());
var Bn,
	ki = (function () {
		function n(e) {
			(this.data = e ?? []), (this.pos = 0), (this.length = this.data.length);
		}
		return (
			(n.prototype.readByte = function () {
				return this.data[this.pos++];
			}),
			(n.prototype.writeByte = function (e) {
				return (this.data[this.pos++] = e);
			}),
			(n.prototype.readUInt32 = function () {
				return (
					16777216 * this.readByte() +
					(this.readByte() << 16) +
					(this.readByte() << 8) +
					this.readByte()
				);
			}),
			(n.prototype.writeUInt32 = function (e) {
				return (
					this.writeByte((e >>> 24) & 255),
					this.writeByte((e >> 16) & 255),
					this.writeByte((e >> 8) & 255),
					this.writeByte(255 & e)
				);
			}),
			(n.prototype.readInt32 = function () {
				var e;
				return (e = this.readUInt32()) >= 2147483648 ? e - 4294967296 : e;
			}),
			(n.prototype.writeInt32 = function (e) {
				return e < 0 && (e += 4294967296), this.writeUInt32(e);
			}),
			(n.prototype.readUInt16 = function () {
				return (this.readByte() << 8) | this.readByte();
			}),
			(n.prototype.writeUInt16 = function (e) {
				return this.writeByte((e >> 8) & 255), this.writeByte(255 & e);
			}),
			(n.prototype.readInt16 = function () {
				var e;
				return (e = this.readUInt16()) >= 32768 ? e - 65536 : e;
			}),
			(n.prototype.writeInt16 = function (e) {
				return e < 0 && (e += 65536), this.writeUInt16(e);
			}),
			(n.prototype.readString = function (e) {
				var r, i;
				for (i = [], r = 0; 0 <= e ? r < e : r > e; r = 0 <= e ? ++r : --r)
					i[r] = String.fromCharCode(this.readByte());
				return i.join('');
			}),
			(n.prototype.writeString = function (e) {
				var r, i, s;
				for (s = [], r = 0, i = e.length; 0 <= i ? r < i : r > i; r = 0 <= i ? ++r : --r)
					s.push(this.writeByte(e.charCodeAt(r)));
				return s;
			}),
			(n.prototype.readShort = function () {
				return this.readInt16();
			}),
			(n.prototype.writeShort = function (e) {
				return this.writeInt16(e);
			}),
			(n.prototype.readLongLong = function () {
				var e, r, i, s, a, l, u, h;
				return (
					(e = this.readByte()),
					(r = this.readByte()),
					(i = this.readByte()),
					(s = this.readByte()),
					(a = this.readByte()),
					(l = this.readByte()),
					(u = this.readByte()),
					(h = this.readByte()),
					128 & e
						? -1 *
							(72057594037927940 * (255 ^ e) +
								281474976710656 * (255 ^ r) +
								1099511627776 * (255 ^ i) +
								4294967296 * (255 ^ s) +
								16777216 * (255 ^ a) +
								65536 * (255 ^ l) +
								256 * (255 ^ u) +
								(255 ^ h) +
								1)
						: 72057594037927940 * e +
							281474976710656 * r +
							1099511627776 * i +
							4294967296 * s +
							16777216 * a +
							65536 * l +
							256 * u +
							h
				);
			}),
			(n.prototype.writeLongLong = function (e) {
				var r, i;
				return (
					(r = Math.floor(e / 4294967296)),
					(i = 4294967295 & e),
					this.writeByte((r >> 24) & 255),
					this.writeByte((r >> 16) & 255),
					this.writeByte((r >> 8) & 255),
					this.writeByte(255 & r),
					this.writeByte((i >> 24) & 255),
					this.writeByte((i >> 16) & 255),
					this.writeByte((i >> 8) & 255),
					this.writeByte(255 & i)
				);
			}),
			(n.prototype.readInt = function () {
				return this.readInt32();
			}),
			(n.prototype.writeInt = function (e) {
				return this.writeInt32(e);
			}),
			(n.prototype.read = function (e) {
				var r, i;
				for (r = [], i = 0; 0 <= e ? i < e : i > e; i = 0 <= e ? ++i : --i) r.push(this.readByte());
				return r;
			}),
			(n.prototype.write = function (e) {
				var r, i, s, a;
				for (a = [], i = 0, s = e.length; i < s; i++) (r = e[i]), a.push(this.writeByte(r));
				return a;
			}),
			n
		);
	})(),
	p1 = (function () {
		var n;
		function e(r) {
			var i, s, a;
			for (
				this.scalarType = r.readInt(),
					this.tableCount = r.readShort(),
					this.searchRange = r.readShort(),
					this.entrySelector = r.readShort(),
					this.rangeShift = r.readShort(),
					this.tables = {},
					s = 0,
					a = this.tableCount;
				0 <= a ? s < a : s > a;
				s = 0 <= a ? ++s : --s
			)
				(i = {
					tag: r.readString(4),
					checksum: r.readInt(),
					offset: r.readInt(),
					length: r.readInt()
				}),
					(this.tables[i.tag] = i);
		}
		return (
			(e.prototype.encode = function (r) {
				var i, s, a, l, u, h, p, v, m, y, d, E, N;
				for (N in ((d = Object.keys(r).length),
				(h = Math.log(2)),
				(m = 16 * Math.floor(Math.log(d) / h)),
				(l = Math.floor(m / h)),
				(v = 16 * d - m),
				(s = new ki()).writeInt(this.scalarType),
				s.writeShort(d),
				s.writeShort(m),
				s.writeShort(l),
				s.writeShort(v),
				(a = 16 * d),
				(p = s.pos + a),
				(u = null),
				(E = []),
				r))
					for (
						y = r[N],
							s.writeString(N),
							s.writeInt(n(y)),
							s.writeInt(p),
							s.writeInt(y.length),
							E = E.concat(y),
							N === 'head' && (u = p),
							p += y.length;
						p % 4;

					)
						E.push(0), p++;
				return s.write(E), (i = 2981146554 - n(s.data)), (s.pos = u + 8), s.writeUInt32(i), s.data;
			}),
			(n = function (r) {
				var i, s, a, l;
				for (r = Lu.call(r); r.length % 4; ) r.push(0);
				for (a = new ki(r), s = 0, i = 0, l = r.length; i < l; i = i += 4) s += a.readUInt32();
				return 4294967295 & s;
			}),
			e
		);
	})(),
	g1 = {}.hasOwnProperty,
	Gn = function (n, e) {
		for (var r in e) g1.call(e, r) && (n[r] = e[r]);
		function i() {
			this.constructor = n;
		}
		return (i.prototype = e.prototype), (n.prototype = new i()), (n.__super__ = e.prototype), n;
	};
Bn = (function () {
	function n(e) {
		var r;
		(this.file = e),
			(r = this.file.directory.tables[this.tag]),
			(this.exists = !!r),
			r && ((this.offset = r.offset), (this.length = r.length), this.parse(this.file.contents));
	}
	return (
		(n.prototype.parse = function () {}),
		(n.prototype.encode = function () {}),
		(n.prototype.raw = function () {
			return this.exists
				? ((this.file.contents.pos = this.offset), this.file.contents.read(this.length))
				: null;
		}),
		n
	);
})();
var v1 = (function (n) {
		function e() {
			return e.__super__.constructor.apply(this, arguments);
		}
		return (
			Gn(e, Bn),
			(e.prototype.tag = 'head'),
			(e.prototype.parse = function (r) {
				return (
					(r.pos = this.offset),
					(this.version = r.readInt()),
					(this.revision = r.readInt()),
					(this.checkSumAdjustment = r.readInt()),
					(this.magicNumber = r.readInt()),
					(this.flags = r.readShort()),
					(this.unitsPerEm = r.readShort()),
					(this.created = r.readLongLong()),
					(this.modified = r.readLongLong()),
					(this.xMin = r.readShort()),
					(this.yMin = r.readShort()),
					(this.xMax = r.readShort()),
					(this.yMax = r.readShort()),
					(this.macStyle = r.readShort()),
					(this.lowestRecPPEM = r.readShort()),
					(this.fontDirectionHint = r.readShort()),
					(this.indexToLocFormat = r.readShort()),
					(this.glyphDataFormat = r.readShort())
				);
			}),
			(e.prototype.encode = function (r) {
				var i;
				return (
					(i = new ki()).writeInt(this.version),
					i.writeInt(this.revision),
					i.writeInt(this.checkSumAdjustment),
					i.writeInt(this.magicNumber),
					i.writeShort(this.flags),
					i.writeShort(this.unitsPerEm),
					i.writeLongLong(this.created),
					i.writeLongLong(this.modified),
					i.writeShort(this.xMin),
					i.writeShort(this.yMin),
					i.writeShort(this.xMax),
					i.writeShort(this.yMax),
					i.writeShort(this.macStyle),
					i.writeShort(this.lowestRecPPEM),
					i.writeShort(this.fontDirectionHint),
					i.writeShort(r),
					i.writeShort(this.glyphDataFormat),
					i.data
				);
			}),
			e
		);
	})(),
	Gc = (function () {
		function n(e, r) {
			var i, s, a, l, u, h, p, v, m, y, d, E, N, P, _, j, O;
			switch (
				((this.platformID = e.readUInt16()),
				(this.encodingID = e.readShort()),
				(this.offset = r + e.readInt()),
				(m = e.pos),
				(e.pos = this.offset),
				(this.format = e.readUInt16()),
				(this.length = e.readUInt16()),
				(this.language = e.readUInt16()),
				(this.isUnicode =
					(this.platformID === 3 && this.encodingID === 1 && this.format === 4) ||
					(this.platformID === 0 && this.format === 4)),
				(this.codeMap = {}),
				this.format)
			) {
				case 0:
					for (h = 0; h < 256; ++h) this.codeMap[h] = e.readByte();
					break;
				case 4:
					for (
						d = e.readUInt16(),
							y = d / 2,
							e.pos += 6,
							a = (function () {
								var G, W;
								for (W = [], h = G = 0; 0 <= y ? G < y : G > y; h = 0 <= y ? ++G : --G)
									W.push(e.readUInt16());
								return W;
							})(),
							e.pos += 2,
							N = (function () {
								var G, W;
								for (W = [], h = G = 0; 0 <= y ? G < y : G > y; h = 0 <= y ? ++G : --G)
									W.push(e.readUInt16());
								return W;
							})(),
							p = (function () {
								var G, W;
								for (W = [], h = G = 0; 0 <= y ? G < y : G > y; h = 0 <= y ? ++G : --G)
									W.push(e.readUInt16());
								return W;
							})(),
							v = (function () {
								var G, W;
								for (W = [], h = G = 0; 0 <= y ? G < y : G > y; h = 0 <= y ? ++G : --G)
									W.push(e.readUInt16());
								return W;
							})(),
							s = (this.length - e.pos + this.offset) / 2,
							u = (function () {
								var G, W;
								for (W = [], h = G = 0; 0 <= s ? G < s : G > s; h = 0 <= s ? ++G : --G)
									W.push(e.readUInt16());
								return W;
							})(),
							h = _ = 0,
							O = a.length;
						_ < O;
						h = ++_
					)
						for (P = a[h], i = j = E = N[h]; E <= P ? j <= P : j >= P; i = E <= P ? ++j : --j)
							v[h] === 0
								? (l = i + p[h])
								: (l = u[v[h] / 2 + (i - E) - (y - h)] || 0) !== 0 && (l += p[h]),
								(this.codeMap[i] = 65535 & l);
			}
			e.pos = m;
		}
		return (
			(n.encode = function (e, r) {
				var i,
					s,
					a,
					l,
					u,
					h,
					p,
					v,
					m,
					y,
					d,
					E,
					N,
					P,
					_,
					j,
					O,
					G,
					W,
					oe,
					ee,
					z,
					re,
					de,
					C,
					L,
					q,
					B,
					Z,
					Q,
					ie,
					K,
					le,
					ue,
					Se,
					b,
					T,
					M,
					H,
					V,
					te,
					se,
					ce,
					Ce,
					ye,
					Te;
				switch (
					((B = new ki()),
					(l = Object.keys(e).sort(function (Fe, Ue) {
						return Fe - Ue;
					})),
					r)
				) {
					case 'macroman':
						for (
							N = 0,
								P = (function () {
									var Fe = [];
									for (E = 0; E < 256; ++E) Fe.push(0);
									return Fe;
								})(),
								j = { 0: 0 },
								a = {},
								Z = 0,
								le = l.length;
							Z < le;
							Z++
						)
							j[(ce = e[(s = l[Z])])] == null && (j[ce] = ++N),
								(a[s] = { old: e[s], new: j[e[s]] }),
								(P[s] = j[e[s]]);
						return (
							B.writeUInt16(1),
							B.writeUInt16(0),
							B.writeUInt32(12),
							B.writeUInt16(0),
							B.writeUInt16(262),
							B.writeUInt16(0),
							B.write(P),
							{ charMap: a, subtable: B.data, maxGlyphID: N + 1 }
						);
					case 'unicode':
						for (
							L = [], m = [], O = 0, j = {}, i = {}, _ = p = null, Q = 0, ue = l.length;
							Q < ue;
							Q++
						)
							j[(W = e[(s = l[Q])])] == null && (j[W] = ++O),
								(i[s] = { old: W, new: j[W] }),
								(u = j[W] - s),
								(_ != null && u === p) || (_ && m.push(_), L.push(s), (p = u)),
								(_ = s);
						for (
							_ && m.push(_),
								m.push(65535),
								L.push(65535),
								de = 2 * (re = L.length),
								z = 2 * Math.pow(Math.log(re) / Math.LN2, 2),
								y = Math.log(z / 2) / Math.LN2,
								ee = 2 * re - z,
								h = [],
								oe = [],
								d = [],
								E = ie = 0,
								Se = L.length;
							ie < Se;
							E = ++ie
						) {
							if (((C = L[E]), (v = m[E]), C === 65535)) {
								h.push(0), oe.push(0);
								break;
							}
							if (C - (q = i[C].new) >= 32768)
								for (
									h.push(0), oe.push(2 * (d.length + re - E)), s = K = C;
									C <= v ? K <= v : K >= v;
									s = C <= v ? ++K : --K
								)
									d.push(i[s].new);
							else h.push(q - C), oe.push(0);
						}
						for (
							B.writeUInt16(3),
								B.writeUInt16(1),
								B.writeUInt32(12),
								B.writeUInt16(4),
								B.writeUInt16(16 + 8 * re + 2 * d.length),
								B.writeUInt16(0),
								B.writeUInt16(de),
								B.writeUInt16(z),
								B.writeUInt16(y),
								B.writeUInt16(ee),
								te = 0,
								b = m.length;
							te < b;
							te++
						)
							(s = m[te]), B.writeUInt16(s);
						for (B.writeUInt16(0), se = 0, T = L.length; se < T; se++)
							(s = L[se]), B.writeUInt16(s);
						for (Ce = 0, M = h.length; Ce < M; Ce++) (u = h[Ce]), B.writeUInt16(u);
						for (ye = 0, H = oe.length; ye < H; ye++) (G = oe[ye]), B.writeUInt16(G);
						for (Te = 0, V = d.length; Te < V; Te++) (N = d[Te]), B.writeUInt16(N);
						return { charMap: i, subtable: B.data, maxGlyphID: O + 1 };
				}
			}),
			n
		);
	})(),
	_u = (function (n) {
		function e() {
			return e.__super__.constructor.apply(this, arguments);
		}
		return (
			Gn(e, Bn),
			(e.prototype.tag = 'cmap'),
			(e.prototype.parse = function (r) {
				var i, s, a;
				for (
					r.pos = this.offset,
						this.version = r.readUInt16(),
						a = r.readUInt16(),
						this.tables = [],
						this.unicode = null,
						s = 0;
					0 <= a ? s < a : s > a;
					s = 0 <= a ? ++s : --s
				)
					(i = new Gc(r, this.offset)),
						this.tables.push(i),
						i.isUnicode && this.unicode == null && (this.unicode = i);
				return !0;
			}),
			(e.encode = function (r, i) {
				var s, a;
				return (
					i == null && (i = 'macroman'),
					(s = Gc.encode(r, i)),
					(a = new ki()).writeUInt16(0),
					a.writeUInt16(1),
					(s.table = a.data.concat(s.subtable)),
					s
				);
			}),
			e
		);
	})(),
	m1 = (function (n) {
		function e() {
			return e.__super__.constructor.apply(this, arguments);
		}
		return (
			Gn(e, Bn),
			(e.prototype.tag = 'hhea'),
			(e.prototype.parse = function (r) {
				return (
					(r.pos = this.offset),
					(this.version = r.readInt()),
					(this.ascender = r.readShort()),
					(this.decender = r.readShort()),
					(this.lineGap = r.readShort()),
					(this.advanceWidthMax = r.readShort()),
					(this.minLeftSideBearing = r.readShort()),
					(this.minRightSideBearing = r.readShort()),
					(this.xMaxExtent = r.readShort()),
					(this.caretSlopeRise = r.readShort()),
					(this.caretSlopeRun = r.readShort()),
					(this.caretOffset = r.readShort()),
					(r.pos += 8),
					(this.metricDataFormat = r.readShort()),
					(this.numberOfMetrics = r.readUInt16())
				);
			}),
			e
		);
	})(),
	b1 = (function (n) {
		function e() {
			return e.__super__.constructor.apply(this, arguments);
		}
		return (
			Gn(e, Bn),
			(e.prototype.tag = 'OS/2'),
			(e.prototype.parse = function (r) {
				if (
					((r.pos = this.offset),
					(this.version = r.readUInt16()),
					(this.averageCharWidth = r.readShort()),
					(this.weightClass = r.readUInt16()),
					(this.widthClass = r.readUInt16()),
					(this.type = r.readShort()),
					(this.ySubscriptXSize = r.readShort()),
					(this.ySubscriptYSize = r.readShort()),
					(this.ySubscriptXOffset = r.readShort()),
					(this.ySubscriptYOffset = r.readShort()),
					(this.ySuperscriptXSize = r.readShort()),
					(this.ySuperscriptYSize = r.readShort()),
					(this.ySuperscriptXOffset = r.readShort()),
					(this.ySuperscriptYOffset = r.readShort()),
					(this.yStrikeoutSize = r.readShort()),
					(this.yStrikeoutPosition = r.readShort()),
					(this.familyClass = r.readShort()),
					(this.panose = (function () {
						var i, s;
						for (s = [], i = 0; i < 10; ++i) s.push(r.readByte());
						return s;
					})()),
					(this.charRange = (function () {
						var i, s;
						for (s = [], i = 0; i < 4; ++i) s.push(r.readInt());
						return s;
					})()),
					(this.vendorID = r.readString(4)),
					(this.selection = r.readShort()),
					(this.firstCharIndex = r.readShort()),
					(this.lastCharIndex = r.readShort()),
					this.version > 0 &&
						((this.ascent = r.readShort()),
						(this.descent = r.readShort()),
						(this.lineGap = r.readShort()),
						(this.winAscent = r.readShort()),
						(this.winDescent = r.readShort()),
						(this.codePageRange = (function () {
							var i, s;
							for (s = [], i = 0; i < 2; i = ++i) s.push(r.readInt());
							return s;
						})()),
						this.version > 1))
				)
					return (
						(this.xHeight = r.readShort()),
						(this.capHeight = r.readShort()),
						(this.defaultChar = r.readShort()),
						(this.breakChar = r.readShort()),
						(this.maxContext = r.readShort())
					);
			}),
			e
		);
	})(),
	y1 = (function (n) {
		function e() {
			return e.__super__.constructor.apply(this, arguments);
		}
		return (
			Gn(e, Bn),
			(e.prototype.tag = 'post'),
			(e.prototype.parse = function (r) {
				var i, s, a;
				switch (
					((r.pos = this.offset),
					(this.format = r.readInt()),
					(this.italicAngle = r.readInt()),
					(this.underlinePosition = r.readShort()),
					(this.underlineThickness = r.readShort()),
					(this.isFixedPitch = r.readInt()),
					(this.minMemType42 = r.readInt()),
					(this.maxMemType42 = r.readInt()),
					(this.minMemType1 = r.readInt()),
					(this.maxMemType1 = r.readInt()),
					this.format)
				) {
					case 65536:
						break;
					case 131072:
						var l;
						for (
							s = r.readUInt16(), this.glyphNameIndex = [], l = 0;
							0 <= s ? l < s : l > s;
							l = 0 <= s ? ++l : --l
						)
							this.glyphNameIndex.push(r.readUInt16());
						for (this.names = [], a = []; r.pos < this.offset + this.length; )
							(i = r.readByte()), a.push(this.names.push(r.readString(i)));
						return a;
					case 151552:
						return (s = r.readUInt16()), (this.offsets = r.read(s));
					case 196608:
						break;
					case 262144:
						return (this.map = function () {
							var u, h, p;
							for (
								p = [], l = u = 0, h = this.file.maxp.numGlyphs;
								0 <= h ? u < h : u > h;
								l = 0 <= h ? ++u : --u
							)
								p.push(r.readUInt32());
							return p;
						}.call(this));
				}
			}),
			e
		);
	})(),
	w1 = function (n, e) {
		(this.raw = n),
			(this.length = n.length),
			(this.platformID = e.platformID),
			(this.encodingID = e.encodingID),
			(this.languageID = e.languageID);
	},
	x1 = (function (n) {
		function e() {
			return e.__super__.constructor.apply(this, arguments);
		}
		return (
			Gn(e, Bn),
			(e.prototype.tag = 'name'),
			(e.prototype.parse = function (r) {
				var i, s, a, l, u, h, p, v, m, y, d;
				for (
					r.pos = this.offset, r.readShort(), i = r.readShort(), h = r.readShort(), s = [], l = 0;
					0 <= i ? l < i : l > i;
					l = 0 <= i ? ++l : --l
				)
					s.push({
						platformID: r.readShort(),
						encodingID: r.readShort(),
						languageID: r.readShort(),
						nameID: r.readShort(),
						length: r.readShort(),
						offset: this.offset + h + r.readShort()
					});
				for (p = {}, l = m = 0, y = s.length; m < y; l = ++m)
					(a = s[l]),
						(r.pos = a.offset),
						(v = r.readString(a.length)),
						(u = new w1(v, a)),
						p[(d = a.nameID)] == null && (p[d] = []),
						p[a.nameID].push(u);
				(this.strings = p),
					(this.copyright = p[0]),
					(this.fontFamily = p[1]),
					(this.fontSubfamily = p[2]),
					(this.uniqueSubfamily = p[3]),
					(this.fontName = p[4]),
					(this.version = p[5]);
				try {
					this.postscriptName = p[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, '');
				} catch {
					this.postscriptName = p[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, '');
				}
				return (
					(this.trademark = p[7]),
					(this.manufacturer = p[8]),
					(this.designer = p[9]),
					(this.description = p[10]),
					(this.vendorUrl = p[11]),
					(this.designerUrl = p[12]),
					(this.license = p[13]),
					(this.licenseUrl = p[14]),
					(this.preferredFamily = p[15]),
					(this.preferredSubfamily = p[17]),
					(this.compatibleFull = p[18]),
					(this.sampleText = p[19])
				);
			}),
			e
		);
	})(),
	_1 = (function (n) {
		function e() {
			return e.__super__.constructor.apply(this, arguments);
		}
		return (
			Gn(e, Bn),
			(e.prototype.tag = 'maxp'),
			(e.prototype.parse = function (r) {
				return (
					(r.pos = this.offset),
					(this.version = r.readInt()),
					(this.numGlyphs = r.readUInt16()),
					(this.maxPoints = r.readUInt16()),
					(this.maxContours = r.readUInt16()),
					(this.maxCompositePoints = r.readUInt16()),
					(this.maxComponentContours = r.readUInt16()),
					(this.maxZones = r.readUInt16()),
					(this.maxTwilightPoints = r.readUInt16()),
					(this.maxStorage = r.readUInt16()),
					(this.maxFunctionDefs = r.readUInt16()),
					(this.maxInstructionDefs = r.readUInt16()),
					(this.maxStackElements = r.readUInt16()),
					(this.maxSizeOfInstructions = r.readUInt16()),
					(this.maxComponentElements = r.readUInt16()),
					(this.maxComponentDepth = r.readUInt16())
				);
			}),
			e
		);
	})(),
	L1 = (function (n) {
		function e() {
			return e.__super__.constructor.apply(this, arguments);
		}
		return (
			Gn(e, Bn),
			(e.prototype.tag = 'hmtx'),
			(e.prototype.parse = function (r) {
				var i, s, a, l, u, h, p;
				for (
					r.pos = this.offset, this.metrics = [], i = 0, h = this.file.hhea.numberOfMetrics;
					0 <= h ? i < h : i > h;
					i = 0 <= h ? ++i : --i
				)
					this.metrics.push({ advance: r.readUInt16(), lsb: r.readInt16() });
				for (
					a = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics,
						this.leftSideBearings = (function () {
							var v, m;
							for (m = [], i = v = 0; 0 <= a ? v < a : v > a; i = 0 <= a ? ++v : --v)
								m.push(r.readInt16());
							return m;
						})(),
						this.widths = function () {
							var v, m, y, d;
							for (d = [], v = 0, m = (y = this.metrics).length; v < m; v++)
								(l = y[v]), d.push(l.advance);
							return d;
						}.call(this),
						s = this.widths[this.widths.length - 1],
						p = [],
						i = u = 0;
					0 <= a ? u < a : u > a;
					i = 0 <= a ? ++u : --u
				)
					p.push(this.widths.push(s));
				return p;
			}),
			(e.prototype.forGlyph = function (r) {
				return r in this.metrics
					? this.metrics[r]
					: {
							advance: this.metrics[this.metrics.length - 1].advance,
							lsb: this.leftSideBearings[r - this.metrics.length]
						};
			}),
			e
		);
	})(),
	Lu = [].slice,
	A1 = (function (n) {
		function e() {
			return e.__super__.constructor.apply(this, arguments);
		}
		return (
			Gn(e, Bn),
			(e.prototype.tag = 'glyf'),
			(e.prototype.parse = function () {
				return (this.cache = {});
			}),
			(e.prototype.glyphFor = function (r) {
				var i, s, a, l, u, h, p, v, m, y;
				return r in this.cache
					? this.cache[r]
					: ((l = this.file.loca),
						(i = this.file.contents),
						(s = l.indexOf(r)),
						(a = l.lengthOf(r)) === 0
							? (this.cache[r] = null)
							: ((i.pos = this.offset + s),
								(u = (h = new ki(i.read(a))).readShort()),
								(v = h.readShort()),
								(y = h.readShort()),
								(p = h.readShort()),
								(m = h.readShort()),
								(this.cache[r] = u === -1 ? new N1(h, v, y, p, m) : new S1(h, u, v, y, p, m)),
								this.cache[r]));
			}),
			(e.prototype.encode = function (r, i, s) {
				var a, l, u, h, p;
				for (u = [], l = [], h = 0, p = i.length; h < p; h++)
					(a = r[i[h]]), l.push(u.length), a && (u = u.concat(a.encode(s)));
				return l.push(u.length), { table: u, offsets: l };
			}),
			e
		);
	})(),
	S1 = (function () {
		function n(e, r, i, s, a, l) {
			(this.raw = e),
				(this.numberOfContours = r),
				(this.xMin = i),
				(this.yMin = s),
				(this.xMax = a),
				(this.yMax = l),
				(this.compound = !1);
		}
		return (
			(n.prototype.encode = function () {
				return this.raw.data;
			}),
			n
		);
	})(),
	N1 = (function () {
		function n(e, r, i, s, a) {
			var l, u;
			for (
				this.raw = e,
					this.xMin = r,
					this.yMin = i,
					this.xMax = s,
					this.yMax = a,
					this.compound = !0,
					this.glyphIDs = [],
					this.glyphOffsets = [],
					l = this.raw;
				(u = l.readShort()),
					this.glyphOffsets.push(l.pos),
					this.glyphIDs.push(l.readUInt16()),
					32 & u;

			)
				(l.pos += 1 & u ? 4 : 2),
					128 & u ? (l.pos += 8) : 64 & u ? (l.pos += 4) : 8 & u && (l.pos += 2);
		}
		return (
			(n.prototype.encode = function () {
				var e, r, i;
				for (r = new ki(Lu.call(this.raw.data)), e = 0, i = this.glyphIDs.length; e < i; ++e)
					r.pos = this.glyphOffsets[e];
				return r.data;
			}),
			n
		);
	})(),
	k1 = (function (n) {
		function e() {
			return e.__super__.constructor.apply(this, arguments);
		}
		return (
			Gn(e, Bn),
			(e.prototype.tag = 'loca'),
			(e.prototype.parse = function (r) {
				var i, s;
				return (
					(r.pos = this.offset),
					(i = this.file.head.indexToLocFormat),
					(this.offsets =
						i === 0
							? function () {
									var a, l;
									for (l = [], s = 0, a = this.length; s < a; s += 2) l.push(2 * r.readUInt16());
									return l;
								}.call(this)
							: function () {
									var a, l;
									for (l = [], s = 0, a = this.length; s < a; s += 4) l.push(r.readUInt32());
									return l;
								}.call(this))
				);
			}),
			(e.prototype.indexOf = function (r) {
				return this.offsets[r];
			}),
			(e.prototype.lengthOf = function (r) {
				return this.offsets[r + 1] - this.offsets[r];
			}),
			(e.prototype.encode = function (r, i) {
				for (var s = new Uint32Array(this.offsets.length), a = 0, l = 0, u = 0; u < s.length; ++u)
					if (((s[u] = a), l < i.length && i[l] == u)) {
						++l, (s[u] = a);
						var h = this.offsets[u],
							p = this.offsets[u + 1] - h;
						p > 0 && (a += p);
					}
				for (var v = new Array(4 * s.length), m = 0; m < s.length; ++m)
					(v[4 * m + 3] = 255 & s[m]),
						(v[4 * m + 2] = (65280 & s[m]) >> 8),
						(v[4 * m + 1] = (16711680 & s[m]) >> 16),
						(v[4 * m] = (4278190080 & s[m]) >> 24);
				return v;
			}),
			e
		);
	})(),
	P1 = (function () {
		function n(e) {
			(this.font = e), (this.subset = {}), (this.unicodes = {}), (this.next = 33);
		}
		return (
			(n.prototype.generateCmap = function () {
				var e, r, i, s, a;
				for (r in ((s = this.font.cmap.tables[0].codeMap), (e = {}), (a = this.subset)))
					(i = a[r]), (e[r] = s[i]);
				return e;
			}),
			(n.prototype.glyphsFor = function (e) {
				var r, i, s, a, l, u, h;
				for (s = {}, l = 0, u = e.length; l < u; l++) s[(a = e[l])] = this.font.glyf.glyphFor(a);
				for (a in ((r = []), s)) (i = s[a]) != null && i.compound && r.push.apply(r, i.glyphIDs);
				if (r.length > 0) for (a in (h = this.glyphsFor(r))) (i = h[a]), (s[a] = i);
				return s;
			}),
			(n.prototype.encode = function (e, r) {
				var i, s, a, l, u, h, p, v, m, y, d, E, N, P, _;
				for (s in ((i = _u.encode(this.generateCmap(), 'unicode')),
				(l = this.glyphsFor(e)),
				(d = { 0: 0 }),
				(_ = i.charMap)))
					d[(h = _[s]).old] = h.new;
				for (E in ((y = i.maxGlyphID), l)) E in d || (d[E] = y++);
				return (
					(v = (function (j) {
						var O, G;
						for (O in ((G = {}), j)) G[j[O]] = O;
						return G;
					})(d)),
					(m = Object.keys(v).sort(function (j, O) {
						return j - O;
					})),
					(N = (function () {
						var j, O, G;
						for (G = [], j = 0, O = m.length; j < O; j++) (u = m[j]), G.push(v[u]);
						return G;
					})()),
					(a = this.font.glyf.encode(l, N, d)),
					(p = this.font.loca.encode(a.offsets, N)),
					(P = {
						cmap: this.font.cmap.raw(),
						glyf: a.table,
						loca: p,
						hmtx: this.font.hmtx.raw(),
						hhea: this.font.hhea.raw(),
						maxp: this.font.maxp.raw(),
						post: this.font.post.raw(),
						name: this.font.name.raw(),
						head: this.font.head.encode(r)
					}),
					this.font.os2.exists && (P['OS/2'] = this.font.os2.raw()),
					this.font.directory.encode(P)
				);
			}),
			n
		);
	})();
ot.API.PDFObject = (function () {
	var n;
	function e() {}
	return (
		(n = function (r, i) {
			return (Array(i + 1).join('0') + r).slice(-i);
		}),
		(e.convert = function (r) {
			var i, s, a, l;
			if (Array.isArray(r))
				return (
					'[' +
					(function () {
						var u, h, p;
						for (p = [], u = 0, h = r.length; u < h; u++) (i = r[u]), p.push(e.convert(i));
						return p;
					})().join(' ') +
					']'
				);
			if (typeof r == 'string') return '/' + r;
			if (r != null && r.isString) return '(' + r + ')';
			if (r instanceof Date)
				return (
					'(D:' +
					n(r.getUTCFullYear(), 4) +
					n(r.getUTCMonth(), 2) +
					n(r.getUTCDate(), 2) +
					n(r.getUTCHours(), 2) +
					n(r.getUTCMinutes(), 2) +
					n(r.getUTCSeconds(), 2) +
					'Z)'
				);
			if ({}.toString.call(r) === '[object Object]') {
				for (s in ((a = ['<<']), r)) (l = r[s]), a.push('/' + s + ' ' + e.convert(l));
				return (
					a.push('>>'),
					a.join(`
`)
				);
			}
			return '' + r;
		}),
		e
	);
})();
function C1(n, e, r, i, s, a) {
	if (!e.stageRefs || e.stageRefs.length === 0) {
		console.log('❌ No stageRefs available');
		return;
	}
	try {
		F(r) === i.PDF ? s() : a(), e.onClose();
	} catch (l) {
		console.error('❌ Download failed:', l);
	}
}
var I1 = Xe(
		'<div class="mt-3 flex items-center gap-2"><label class="text-sm text-gray-600">From page:</label> <input type="number" min="1" class="w-16 px-2 py-1 border border-gray-300 rounded text-sm"/> <label class="text-sm text-gray-600">to page:</label> <input type="number" class="w-16 px-2 py-1 border border-gray-300 rounded text-sm"/></div>'
	),
	F1 = Xe('<option> </option>'),
	E1 = Xe(
		'<div class="mt-3"><label class="block text-sm text-gray-600 mb-1">Select page:</label> <select class="w-full px-3 py-2 border border-gray-300 rounded text-sm"></select></div>'
	),
	T1 = Xe(
		'<fieldset><legend class="block text-sm font-medium text-gray-700 mb-2">Pages to download</legend> <div class="space-y-2"><label class="flex items-center cursor-pointer"><input type="radio" name="downloadMode" class="mr-3 text-purple-600"/> <div><div class="font-medium">All pages</div> <div class="text-xs text-gray-500"> </div></div></label> <label class="flex items-center cursor-pointer"><input type="radio" name="downloadMode" class="mr-3 text-purple-600"/> <div><div class="font-medium">Current page only</div> <div class="text-xs text-gray-500"> </div></div></label> <label class="flex items-center cursor-pointer"><input type="radio" name="downloadMode" class="mr-3 text-purple-600"/> <div><div class="font-medium">Page range</div> <div class="text-xs text-gray-500">Choose specific pages to download</div></div></label></div> <!> <!></fieldset>'
	),
	j1 = Xe(
		'<div><label class="flex items-center"><input type="checkbox" class="mr-2 text-purple-600"/> <div><div class="font-medium text-sm">Transparent background</div> <div class="text-xs text-gray-500">Remove background for overlays</div></div></label></div>'
	),
	M1 = Xe(
		'<div><label class="flex items-center"><input type="checkbox" class="mr-2 text-purple-600"/> <div><div class="font-medium text-sm">Single PDF file</div> <div class="text-xs text-gray-500">Combine all pages into one PDF (unchecked = separate PDFs)</div></div></label></div>'
	),
	B1 = Xe(
		'<div class="fixed top-16 right-6 bottom-4 z-50"><div class="bg-white rounded-lg shadow-xl border border-gray-200 w-80 h-full flex flex-col"><div class="flex justify-between items-center p-6 pb-4 border-b border-gray-200 flex-shrink-0"><h3 class="text-lg font-semibold text-gray-900">Download Design</h3> <button class="text-gray-400 hover:text-gray-600" aria-label="Close download modal"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="flex-1 overflow-y-auto p-6 pt-4"><div class="space-y-4"><fieldset><legend class="block text-sm font-medium text-gray-700 mb-2">File type</legend> <div class="space-y-2"><label class="flex items-center cursor-pointer"><input type="radio" name="downloadFormat" class="mr-3 text-purple-600"/> <div><div class="font-medium">PNG</div> <div class="text-xs text-gray-500">Best for graphics with transparency</div></div></label> <label class="flex items-center cursor-pointer"><input type="radio" name="downloadFormat" class="mr-3 text-purple-600"/> <div><div class="font-medium">JPG</div> <div class="text-xs text-gray-500">Smaller file size, great for photos</div></div></label> <label class="flex items-center cursor-pointer"><input type="radio" name="downloadFormat" class="mr-3 text-purple-600"/> <div><div class="font-medium">SVG</div> <div class="text-xs text-gray-500">Vector format, scalable</div></div></label> <label class="flex items-center cursor-pointer"><input type="radio" name="downloadFormat" class="mr-3 text-purple-600"/> <div><div class="font-medium">PDF</div> <div class="text-xs text-gray-500">Perfect for printing and sharing</div></div></label></div></fieldset> <fieldset><legend class="block text-sm font-medium text-gray-700 mb-2">Size & quality</legend> <div class="space-y-2"><label class="flex items-center cursor-pointer"><input type="radio" name="downloadQuality" class="mr-3 text-purple-600"/> <div><div class="font-medium">Small</div> <div class="text-xs text-gray-500">250 × 200 px</div> <div class="text-xs text-gray-400">Quick sharing</div></div></label> <label class="flex items-center cursor-pointer"><input type="radio" name="downloadQuality" class="mr-3 text-purple-600"/> <div><div class="font-medium">Standard</div> <div class="text-xs text-gray-500">500 × 400 px</div> <div class="text-xs text-gray-400">Perfect for web</div></div></label> <label class="flex items-center cursor-pointer"><input type="radio" name="downloadQuality" class="mr-3 text-purple-600"/> <div><div class="font-medium">High quality</div> <div class="text-xs text-gray-500">1000 × 800 px</div> <div class="text-xs text-gray-400">Great for presentations</div></div></label> <label class="flex items-center cursor-pointer"><input type="radio" name="downloadQuality" class="mr-3 text-purple-600"/> <div><div class="font-medium">Ultra HD</div> <div class="text-xs text-gray-500">1500 × 1200 px</div> <div class="text-xs text-gray-400">High resolution</div></div></label> <label class="flex items-center cursor-pointer"><input type="radio" name="downloadQuality" class="mr-3 text-purple-600"/> <div><div class="font-medium">Print quality</div> <div class="text-xs text-gray-500">2000 × 1600 px</div> <div class="text-xs text-gray-400">Best for printing</div></div></label></div></fieldset> <!> <!> <!></div></div> <div class="border-t border-gray-200 p-6 pt-4 flex-shrink-0"><div class="flex space-x-3"><button class="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">Cancel</button> <button class="flex-1 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">Download</button></div></div></div></div>'
	);
function D1(n, e) {
	yr(e, !0);
	const r = [],
		i = [],
		s = [],
		a = { PNG: 'png', JPG: 'jpg', SVG: 'svg', PDF: 'pdf' },
		l = { SMALL: 'small', STANDARD: 'standard', HIGH: 'high', ULTRA: 'ultra', PRINT: 'print' },
		u = { JPEG: 'image/jpeg', PNG: 'image/png', SVG_XML: 'image/svg+xml' },
		h = {
			FILL_COLOR: '#000000',
			STROKE_NONE: 'none',
			FONT_FAMILY: 'Arial',
			FONT_SIZE: 16,
			FONT_WEIGHT: 'normal'
		},
		p = { ALL_PAGES: 'all_pages', CURRENT_PAGE: 'current_page', PAGE_RANGE: 'page_range' };
	let v = ut(ni(a.PNG)),
		m = ut(ni(l.STANDARD)),
		y = ut(!1),
		d = ut(ni(p.ALL_PAGES)),
		E = ut(0),
		N = ut(1),
		P = ut(1),
		_ = ut(!0);
	Yt(() => {
		Ne(P, e.pages.length, !0);
	});
	function j(L, q, B) {
		const Z = L.width(),
			Q = L.height();
		let ie = `<svg width="${Z}" height="${Q}" xmlns="http://www.w3.org/2000/svg">`;
		return (
			B && (ie += `<rect width="${Z}" height="${Q}" fill="${q}"/>`),
			L.children.forEach((le) => {
				if (!le.visible()) return;
				le.children.forEach((Se) => {
					if (!Se.visible() || Se.className === 'Transformer') return;
					const b = Se.attrs,
						T = b.x || 0,
						M = b.y || 0,
						H = b.fill || h.FILL_COLOR,
						V = b.stroke || h.STROKE_NONE,
						te = b.strokeWidth || 0,
						se = b.scaleX || 1,
						ce = b.scaleY || 1,
						Ce = b.rotation || 0;
					let ye = '';
					if (se !== 1 || ce !== 1 || Ce !== 0) {
						let Fe, Ue;
						b.radius
							? ((Fe = T + b.radius), (Ue = M + b.radius))
							: b.radiusX && b.radiusY
								? ((Fe = T + b.radiusX), (Ue = M + b.radiusY))
								: ((Fe = T + (b.width || 0) / 2), (Ue = M + (b.height || 0) / 2)),
							(ye = `transform="translate(${Fe},${Ue}) scale(${se},${ce}) rotate(${(Ce * 180) / Math.PI}) translate(${-Fe},${-Ue})"`);
					}
					const Te = b.subType || Se.className;
					switch (Te) {
						case Gt.Rectangle:
						case Gt.Square:
						case 'Rect':
							ie += `<rect x="${T}" y="${M}" width="${b.width}" height="${b.height}" fill="${H}" stroke="${V}" stroke-width="${te}" ${ye}/>`;
							break;
						case Gt.Circle:
						case 'Circle':
							const Fe = b.radius;
							ie += `<circle cx="${T + Fe}" cy="${M + Fe}" r="${Fe}" fill="${H}" stroke="${V}" stroke-width="${te}" ${ye}/>`;
							break;
						case Gt.Ellipse:
						case 'Ellipse':
							const Ue = b.radiusX || 50,
								pe = b.radiusY || 30;
							ie += `<ellipse cx="${T + Ue}" cy="${M + pe}" rx="${Ue}" ry="${pe}" fill="${H}" stroke="${V}" stroke-width="${te}" ${ye}/>`;
							break;
						case 'Text':
							ie += `<text x="${T}" y="${M + (b.fontSize || h.FONT_SIZE)}" font-family="${b.fontFamily || h.FONT_FAMILY}" font-size="${b.fontSize || h.FONT_SIZE}" font-weight="${b.fontWeight || h.FONT_WEIGHT}" fill="${H}" ${ye}>${b.text || ''}</text>`;
							break;
						case Gt.Triangle:
						case Gt.Pentagon:
						case Gt.Hexagon:
						case Gt.Diamond:
						case 'RegularPolygon':
							const U = b.sides || 3,
								rt = b.radius,
								He = T + rt,
								Pe = M + rt;
							let Ee = '';
							const Me = Te === Gt.Diamond ? Math.PI / 4 : 0;
							for (let we = 0; we < U; we++) {
								const xt = (we * 2 * Math.PI) / U - Math.PI / 2 + Me,
									Oe = He + rt * Math.cos(xt),
									nt = Pe + rt * Math.sin(xt);
								Ee += `${Oe},${nt} `;
							}
							ie += `<polygon points="${Ee.trim()}" fill="${H}" stroke="${V}" stroke-width="${te}" ${ye}/>`;
							break;
						case Gt.Star:
						case 'Star':
							const je = b.numPoints || 5,
								Ye = b.innerRadius,
								Ze = b.outerRadius,
								at = T + Ze,
								lt = M + Ze;
							let ft = '';
							for (let we = 0; we < je * 2; we++) {
								const xt = we % 2 === 0 ? Ze : Ye,
									Oe = (we * Math.PI) / je - Math.PI / 2,
									nt = at + xt * Math.cos(Oe),
									It = lt + xt * Math.sin(Oe);
								ft += `${nt},${It} `;
							}
							ie += `<polygon points="${ft.trim()}" fill="${H}" stroke="${V}" stroke-width="${te}" ${ye}/>`;
							break;
						case Gt.Arrow:
						case 'Arrow':
							const bt = b.points || [];
							if (bt.length >= 4) {
								const we = T + bt[0],
									xt = M + bt[1],
									Oe = T + bt[2],
									nt = M + bt[3],
									It = b.pointerLength || 15,
									vt = b.pointerWidth || 10,
									Je = Oe - we,
									wt = nt - xt,
									rn = Math.sqrt(Je * Je + wt * wt),
									Zt = Je / rn,
									Ur = wt / rn,
									_r = Oe - Zt * It,
									Ke = nt - Ur * It,
									Pr = -Ur * (vt / 2),
									Er = Zt * (vt / 2);
								ie += `<line x1="${we}" y1="${xt}" x2="${_r}" y2="${Ke}" stroke="${V}" stroke-width="${te}" stroke-linecap="round" ${ye}/>`;
								const gr = `${Oe},${nt} ${_r + Pr},${Ke + Er} ${_r - Pr},${Ke - Er}`;
								ie += `<polygon points="${gr}" fill="${H}" stroke="${V}" stroke-width="${te}" stroke-linejoin="round" ${ye}/>`;
							}
							break;
						case Gt.Heart:
							const Ge = b.width || 50,
								Qe = b.height || 45,
								Be = `M ${T + Ge / 2} ${M + Qe * 0.9} 
							C ${T + Ge / 2} ${M + Qe * 0.6}, ${T + Ge * 0.1} ${M + Qe * 0.6}, ${T + Ge * 0.1} ${M + Qe * 0.35}
							C ${T + Ge * 0.1} ${M + Qe * 0.15}, ${T + Ge * 0.3} ${M + Qe * 0.1}, ${T + Ge / 2} ${M + Qe * 0.25}
							C ${T + Ge * 0.7} ${M + Qe * 0.1}, ${T + Ge * 0.9} ${M + Qe * 0.15}, ${T + Ge * 0.9} ${M + Qe * 0.35}
							C ${T + Ge * 0.9} ${M + Qe * 0.6}, ${T + Ge / 2} ${M + Qe * 0.6}, ${T + Ge / 2} ${M + Qe * 0.9} Z`;
							ie += `<path d="${Be}" fill="${H}" stroke="${V}" stroke-width="${te}" ${ye}/>`;
							break;
						case Gt.Cross:
							const Jt = b.width || 100,
								yt = b.height || 100,
								ur = b.thickness || 20;
							(ie += `<rect x="${T + (Jt - ur) / 2}" y="${M}" width="${ur}" height="${yt}" fill="${H}" stroke="${V}" stroke-width="${te}" ${ye}/>`),
								(ie += `<rect x="${T}" y="${M + (yt - ur) / 2}" width="${Jt}" height="${ur}" fill="${H}" stroke="${V}" stroke-width="${te}" ${ye}/>`);
							break;
						case 'Image':
							const Pt = b.width || 100,
								Ft = b.height || 100,
								xr = b.src || '';
							xr &&
								(ie += `<image x="${T}" y="${M}" width="${Pt}" height="${Ft}" href="${xr}" opacity="${b.opacity || 1}" ${ye}/>`);
							break;
					}
				});
			}),
			(ie += '</svg>'),
			ie
		);
	}
	function O(L, q, B) {
		const Z = L.replace(/[^a-z0-9]/gi, '_').toLowerCase();
		return B === 1 ? `${Z}.${F(v)}` : `${Z}_page_${q}.${F(v)}`;
	}
	function G(L, q) {
		var b, T;
		console.log('🎨 exportStageAsDataURL called'),
			console.log('stage:', L),
			console.log('stage.toDataURL exists:', typeof L.toDataURL),
			console.log('stage.width():', (b = L.width) == null ? void 0 : b.call(L)),
			console.log('stage.height():', (T = L.height) == null ? void 0 : T.call(L)),
			console.log('canvasBackgroundColor:', q),
			console.log('downloadFormat:', F(v));
		const Z = {
			[l.SMALL]: { multiplier: 0.5 },
			[l.STANDARD]: { multiplier: 1 },
			[l.HIGH]: { multiplier: 2 },
			[l.ULTRA]: { multiplier: 3 },
			[l.PRINT]: { multiplier: 4 }
		}[F(m)];
		console.log('quality settings:', Z);
		const Q = L.find('Transformer'),
			ie = [];
		Q.forEach((M, H) => {
			(ie[H] = M.visible()), M.visible(!1);
		});
		let K = null;
		const le = F(v) === a.JPG || !F(y);
		if (le) {
			K = new Tf.Rect({ x: 0, y: 0, width: L.width(), height: L.height(), fill: q, listening: !1 });
			const M = L.children[0];
			M && (M.add(K), K.moveToBottom(), M.batchDraw());
		}
		let ue;
		F(v) === a.SVG
			? (ue = j(L, q, le))
			: (ue = L.toDataURL({
					mimeType: F(v) === a.JPG ? u.JPEG : u.PNG,
					quality: F(v) === a.JPG ? 0.9 : 1,
					pixelRatio: Z.multiplier
				})),
			Q.forEach((M, H) => {
				M.visible(ie[H]);
			}),
			K && K.destroy();
		const Se = L.children[0];
		return Se && Se.batchDraw(), ue;
	}
	function W(L, q) {
		const B = document.createElement('a');
		if (((B.download = q), F(v) === a.SVG)) {
			const Z = new Blob([L], { type: u.SVG_XML });
			B.href = URL.createObjectURL(Z);
		} else B.href = L;
		(B.style.display = 'none'),
			document.body.appendChild(B),
			B.click(),
			setTimeout(() => {
				document.body.contains(B) && document.body.removeChild(B);
			}, 100);
	}
	function oe(L, q) {
		var Se;
		const B = (b) => (b * 72) / 96,
			Z = (Se = L[0]) == null ? void 0 : Se.page;
		if (!Z) return;
		const Q = B(Z.canvasWidth),
			ie = B(Z.canvasHeight),
			K = new ot({ orientation: Q > ie ? 'landscape' : 'portrait', unit: 'pt', format: [Q, ie] });
		let le = !0;
		L.forEach(({ stageRef: b, page: T, pageNumber: M }) => {
			if (!(b != null && b.node)) return;
			le || K.addPage([Q, ie]), (le = !1);
			const H = G(b.node, T.canvasBackgroundColor);
			K.addImage(H, 'PNG', 0, 0, Q, ie);
		});
		const ue = F(_)
			? `${q}.pdf`
			: `${q}_pages_${L[0].pageNumber}-${L[L.length - 1].pageNumber}.pdf`;
		K.save(ue);
	}
	function ee() {
		const L = [];
		if (F(d) === p.CURRENT_PAGE) {
			const q = e.stageRefs[F(E)],
				B = e.pages[F(E)];
			q != null && q.node && L.push({ stageRef: q, page: B, pageNumber: F(E) + 1 });
		} else if (F(d) === p.ALL_PAGES)
			if (F(_)) {
				e.stageRefs.forEach((q, B) => {
					const Z = e.pages[B];
					q != null && q.node && L.push({ stageRef: q, page: Z, pageNumber: B + 1 });
				}),
					L.length > 0 && oe(L, e.designTitle);
				return;
			} else {
				e.stageRefs.forEach((q, B) => {
					const Z = e.pages[B];
					if (q != null && q.node) {
						const Q = [{ stageRef: q, page: Z, pageNumber: B + 1 }];
						oe(Q, `${e.designTitle}_page_${B + 1}`);
					}
				});
				return;
			}
		else if (F(d) === p.PAGE_RANGE) {
			const q = Math.max(0, F(N) - 1),
				B = Math.min(e.stageRefs.length, F(P));
			for (let Z = q; Z < B; Z++) {
				const Q = e.stageRefs[Z],
					ie = e.pages[Z];
				Q != null && Q.node && L.push({ stageRef: Q, page: ie, pageNumber: Z + 1 });
			}
		}
		L.length > 0 && oe(L, e.designTitle);
	}
	function z() {
		if (F(d) === p.CURRENT_PAGE) {
			const L = e.stageRefs[F(E)],
				q = e.pages[F(E)];
			if (L != null && L.node) {
				const B = G(L.node, q.canvasBackgroundColor),
					Z = O(e.designTitle, F(E) + 1, 1);
				W(B, Z);
			}
		} else if (F(d) === p.ALL_PAGES)
			e.stageRefs.forEach((L, q) => {
				const B = e.pages[q];
				if (L != null && L.node) {
					const Z = G(L.node, B.canvasBackgroundColor),
						Q = O(e.designTitle, q + 1, e.stageRefs.length);
					W(Z, Q);
				}
			});
		else if (F(d) === p.PAGE_RANGE) {
			const L = Math.max(0, F(N) - 1),
				q = Math.min(e.stageRefs.length, F(P));
			for (let B = L; B < q; B++) {
				const Z = e.stageRefs[B],
					Q = e.pages[B];
				if (Z != null && Z.node) {
					const ie = G(Z.node, Q.canvasBackgroundColor),
						K = O(e.designTitle, B + 1, q - L);
					W(ie, K);
				}
			}
		}
	}
	var re = wa(),
		de = Nn(re);
	{
		var C = (L) => {
			var q = B1(),
				B = be(q),
				Z = be(B),
				Q = xe(be(Z), 2);
			(Q.__click = function (...Oe) {
				var nt;
				(nt = e.onClose) == null || nt.apply(this, Oe);
			}),
				ve(Z);
			var ie = xe(Z, 2),
				K = be(ie),
				le = be(K),
				ue = xe(be(le), 2),
				Se = be(ue),
				b = be(Se);
			Wt(b);
			var T;
			Qr(2), ve(Se);
			var M = xe(Se, 2),
				H = be(M);
			Wt(H);
			var V;
			Qr(2), ve(M);
			var te = xe(M, 2),
				se = be(te);
			Wt(se);
			var ce;
			Qr(2), ve(te);
			var Ce = xe(te, 2),
				ye = be(Ce);
			Wt(ye);
			var Te;
			Qr(2), ve(Ce), ve(ue), ve(le);
			var Fe = xe(le, 2),
				Ue = xe(be(Fe), 2),
				pe = be(Ue),
				U = be(pe);
			Wt(U);
			var rt;
			Qr(2), ve(pe);
			var He = xe(pe, 2),
				Pe = be(He);
			Wt(Pe);
			var Ee;
			Qr(2), ve(He);
			var Me = xe(He, 2),
				je = be(Me);
			Wt(je);
			var Ye;
			Qr(2), ve(Me);
			var Ze = xe(Me, 2),
				at = be(Ze);
			Wt(at);
			var lt;
			Qr(2), ve(Ze);
			var ft = xe(Ze, 2),
				bt = be(ft);
			Wt(bt);
			var Ge;
			Qr(2), ve(ft), ve(Ue), ve(Fe);
			var Qe = xe(Fe, 2);
			{
				var Be = (Oe) => {
					var nt = T1(),
						It = xe(be(nt), 2),
						vt = be(It),
						Je = be(vt);
					Wt(Je);
					var wt,
						rn = xe(Je, 2),
						Zt = xe(be(rn), 2),
						Ur = be(Zt);
					ve(Zt), ve(rn), ve(vt);
					var _r = xe(vt, 2),
						Ke = be(_r);
					Wt(Ke);
					var Pr,
						Er = xe(Ke, 2),
						gr = xe(be(Er), 2),
						nr = be(gr);
					ve(gr), ve(Er), ve(_r);
					var Qt = xe(_r, 2),
						Lr = be(Qt);
					Wt(Lr);
					var Vn;
					Qr(2), ve(Qt), ve(It);
					var pn = xe(It, 2);
					{
						var nn = (Kt) => {
							var fr = I1(),
								vr = xe(be(fr), 2);
							Wt(vr);
							var Tr = xe(vr, 4);
							Wt(Tr),
								ve(fr),
								gt(() => {
									Ai(vr, 'max', e.pages.length), Ai(Tr, 'min', F(N)), Ai(Tr, 'max', e.pages.length);
								}),
								lo(
									vr,
									() => F(N),
									(gn) => Ne(N, gn)
								),
								lo(
									Tr,
									() => F(P),
									(gn) => Ne(P, gn)
								),
								We(Kt, fr);
						};
						Nt(pn, (Kt) => {
							F(d) === p.PAGE_RANGE && Kt(nn);
						});
					}
					var an = xe(pn, 2);
					{
						var on = (Kt) => {
							var fr = E1(),
								vr = xe(be(fr), 2);
							Wn(
								vr,
								21,
								() => e.pages,
								Si,
								(Tr, gn, ai) => {
									var vn = F1();
									vn.value = vn.__value = ai;
									var oi = be(vn);
									ve(vn), gt(() => Fr(oi, `Page ${F(gn).pageNumber ?? ''}`)), We(Tr, vn);
								}
							),
								ve(vr),
								ve(fr),
								jf(
									vr,
									() => F(E),
									(Tr) => Ne(E, Tr)
								),
								We(Kt, fr);
						};
						Nt(an, (Kt) => {
							F(d) === p.CURRENT_PAGE && Kt(on);
						});
					}
					ve(nt),
						gt(() => {
							wt !== (wt = p.ALL_PAGES) && (Je.value = (Je.__value = p.ALL_PAGES) ?? ''),
								Fr(Ur, `Downloads all ${e.pages.length ?? ''} pages as separate files`),
								Pr !== (Pr = p.CURRENT_PAGE) && (Ke.value = (Ke.__value = p.CURRENT_PAGE) ?? ''),
								Fr(nr, `Download page ${F(E) + 1}`),
								Vn !== (Vn = p.PAGE_RANGE) && (Lr.value = (Lr.__value = p.PAGE_RANGE) ?? '');
						}),
						An(
							s,
							[],
							Je,
							() => F(d),
							(Kt) => Ne(d, Kt)
						),
						An(
							s,
							[],
							Ke,
							() => F(d),
							(Kt) => Ne(d, Kt)
						),
						An(
							s,
							[],
							Lr,
							() => F(d),
							(Kt) => Ne(d, Kt)
						),
						We(Oe, nt);
				};
				Nt(Qe, (Oe) => {
					e.pages.length > 1 && Oe(Be);
				});
			}
			var Jt = xe(Qe, 2);
			{
				var yt = (Oe) => {
					var nt = j1(),
						It = be(nt),
						vt = be(It);
					Wt(vt),
						Qr(2),
						ve(It),
						ve(nt),
						Ac(
							vt,
							() => F(y),
							(Je) => Ne(y, Je)
						),
						We(Oe, nt);
				};
				Nt(Jt, (Oe) => {
					F(v) !== a.JPG && F(v) !== a.PDF && Oe(yt);
				});
			}
			var ur = xe(Jt, 2);
			{
				var Pt = (Oe) => {
					var nt = M1(),
						It = be(nt),
						vt = be(It);
					Wt(vt),
						Qr(2),
						ve(It),
						ve(nt),
						Ac(
							vt,
							() => F(_),
							(Je) => Ne(_, Je)
						),
						We(Oe, nt);
				};
				Nt(ur, (Oe) => {
					F(v) === a.PDF && F(d) === p.ALL_PAGES && Oe(Pt);
				});
			}
			ve(K), ve(ie);
			var Ft = xe(ie, 2),
				xr = be(Ft),
				we = be(xr);
			we.__click = function (...Oe) {
				var nt;
				(nt = e.onClose) == null || nt.apply(this, Oe);
			};
			var xt = xe(we, 2);
			(xt.__click = [C1, e, v, a, ee, z]),
				ve(xr),
				ve(Ft),
				ve(B),
				ve(q),
				gt(() => {
					T !== (T = a.PNG) && (b.value = (b.__value = a.PNG) ?? ''),
						V !== (V = a.JPG) && (H.value = (H.__value = a.JPG) ?? ''),
						ce !== (ce = a.SVG) && (se.value = (se.__value = a.SVG) ?? ''),
						Te !== (Te = a.PDF) && (ye.value = (ye.__value = a.PDF) ?? ''),
						rt !== (rt = l.SMALL) && (U.value = (U.__value = l.SMALL) ?? ''),
						Ee !== (Ee = l.STANDARD) && (Pe.value = (Pe.__value = l.STANDARD) ?? ''),
						Ye !== (Ye = l.HIGH) && (je.value = (je.__value = l.HIGH) ?? ''),
						lt !== (lt = l.ULTRA) && (at.value = (at.__value = l.ULTRA) ?? ''),
						Ge !== (Ge = l.PRINT) && (bt.value = (bt.__value = l.PRINT) ?? '');
				}),
				An(
					r,
					[],
					b,
					() => (a.PNG, F(v)),
					(Oe) => Ne(v, Oe)
				),
				An(
					r,
					[],
					H,
					() => (a.JPG, F(v)),
					(Oe) => Ne(v, Oe)
				),
				An(
					r,
					[],
					se,
					() => (a.SVG, F(v)),
					(Oe) => Ne(v, Oe)
				),
				An(
					r,
					[],
					ye,
					() => (a.PDF, F(v)),
					(Oe) => Ne(v, Oe)
				),
				An(
					i,
					[],
					U,
					() => F(m),
					(Oe) => Ne(m, Oe)
				),
				An(
					i,
					[],
					Pe,
					() => F(m),
					(Oe) => Ne(m, Oe)
				),
				An(
					i,
					[],
					je,
					() => F(m),
					(Oe) => Ne(m, Oe)
				),
				An(
					i,
					[],
					at,
					() => F(m),
					(Oe) => Ne(m, Oe)
				),
				An(
					i,
					[],
					bt,
					() => F(m),
					(Oe) => Ne(m, Oe)
				),
				We(L, q);
		};
		Nt(de, (L) => {
			e.isOpen && L(C);
		});
	}
	We(n, re), wr();
}
en(['click']);
var O1 = (n, e, r, i) => {
		(n.key === 'Enter' || n.key === 'Escape') && (Ne(e, !1), r.onTitleChange(i()));
	},
	R1 = Xe(
		'<input type="text" class="text-xl font-black text-white bg-transparent border-2 border-green-400 outline-none focus:bg-gray-900 px-2 py-1 font-industrial tracking-wide"/>'
	),
	q1 = (n, e) => Ne(e, !0),
	z1 = Xe(
		'<button class="text-xl font-black text-white cursor-pointer hover:bg-gray-800 px-2 py-1 transition-colors bg-transparent border-none font-industrial tracking-wide" aria-label="Edit design title"> </button>'
	),
	U1 = Xe('<div class="flex-1 flex items-center"><!></div>');
function H1(n, e) {
	yr(e, !0);
	let r = fn(e, 'title', 7),
		i = ut(!1);
	function s(p) {
		return p.focus(), { destroy() {} };
	}
	var a = U1(),
		l = be(a);
	{
		var u = (p) => {
				var v = R1();
				Wt(v),
					(v.__keydown = [O1, i, e, r]),
					Vc(() => lo(v, r)),
					Xf(v, (m) => (s == null ? void 0 : s(m))),
					Rl('blur', v, () => {
						Ne(i, !1), e.onTitleChange(r());
					}),
					We(p, v);
			},
			h = (p) => {
				var v = z1();
				v.__click = [q1, i];
				var m = be(v, !0);
				ve(v), gt(() => Fr(m, r())), We(p, v);
			};
		Nt(l, (p) => {
			F(i) ? p(u) : p(h, !1);
		});
	}
	ve(a), We(n, a), wr();
}
en(['keydown', 'click']);
var W1 = Xe('<div class="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>'),
	G1 = Xe('<div class="flex items-center gap-2"><div> </div> <!></div>'),
	V1 = Xe('<button title="Save (Ctrl+S)">SAVE</button>'),
	Y1 = Xe(
		'<div class="fixed left-0 right-0 z-40 flex items-center bg-gray-900 border-b-2 border-green-400" style="top: 64px; height: 48px;"><div class="flex w-20 items-center justify-center bg-gray-800 border-r-2 border-green-400" style="height: 48px;"><div class="text-green-400 font-black text-sm font-punk transform -skew-x-12">EDIT</div></div> <div class="flex-1 flex items-center justify-between px-6"><!> <div class="flex items-center space-x-4"><!> <div class="flex items-center gap-1"><button class="flex h-6 w-6 items-center justify-center border border-green-400 bg-transparent text-green-400 hover:bg-green-400 hover:text-black focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xs" title="Undo" aria-label="Undo last action"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7v6h6"></path><path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13"></path></svg></button> <button class="flex h-6 w-6 items-center justify-center border border-green-400 bg-transparent text-green-400 hover:bg-green-400 hover:text-black focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xs" title="Redo" aria-label="Redo last action"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 7v6h-6"></path><path d="M3 17a9 9 0 919-9 9 9 0 016 2.3l3 2.7"></path></svg></button></div> <!> <button> </button></div></div></div>'
	);
function X1(n, e) {
	yr(e, !0);
	let r = fn(e, 'saveStatus', 19, () => Ht.IDLE);
	var i = Y1(),
		s = xe(be(i), 2),
		a = be(s);
	H1(a, {
		get title() {
			return e.title;
		},
		get onTitleChange() {
			return e.onTitleChange;
		}
	});
	var l = xe(a, 2),
		u = be(l);
	{
		var h = (P) => {
			var _ = G1(),
				j = be(_),
				O = be(j, !0);
			ve(j);
			var G = xe(j, 2);
			{
				var W = (oe) => {
					var ee = W1();
					We(oe, ee);
				};
				Nt(G, (oe) => {
					r() === Ht.SAVING && oe(W);
				});
			}
			ve(_),
				gt(() => {
					tt(j, 1, `text-xs font-mono ${Bf[r()] ?? ''}`), Fr(O, Df[r()]);
				}),
				We(P, _);
		};
		Nt(u, (P) => {
			r() !== Ht.IDLE && P(h);
		});
	}
	var p = xe(u, 2),
		v = be(p);
	v.__click = function (...P) {
		var _;
		(_ = e.onUndo) == null || _.apply(this, P);
	};
	var m = xe(v, 2);
	(m.__click = function (...P) {
		var _;
		(_ = e.onRedo) == null || _.apply(this, P);
	}),
		ve(p);
	var y = xe(p, 2);
	{
		var d = (P) => {
			var _ = V1();
			(_.__click = function (...j) {
				var O;
				(O = e.onSave) == null || O.apply(this, j);
			}),
				gt(() => {
					(_.disabled = r() === Ht.SAVING),
						tt(_, 1, `${$e.SmallButton} px-3 py-1 disabled:opacity-50`);
				}),
				We(P, _);
		};
		Nt(y, (P) => {
			e.onSave && P(d);
		});
	}
	var E = xe(y, 2);
	E.__click = function (...P) {
		var _;
		(_ = e.onExportClick) == null || _.apply(this, P);
	};
	var N = be(E, !0);
	ve(E),
		ve(l),
		ve(s),
		ve(i),
		gt(() => {
			(v.disabled = !e.canUndo),
				(m.disabled = !e.canRedo),
				tt(E, 1, `${$e.SmallButton} px-3 py-1`),
				Fr(N, Mf.ExportButton);
		}),
		We(n, i),
		wr();
}
en(['click']);
function J1(n, e) {
	const r = n.target.value;
	ru.update((i) => i.map((s) => (s.id === e.editingTextId ? { ...s, text: r } : s)));
}
function K1(n, e) {
	(n.key === 'Enter' || n.key === 'Escape') && e.onClose();
}
var Z1 = Xe('<input type="text"/>');
function Q1(n, e) {
	yr(e, !0);
	let r = ut(null);
	const i = St(() => (e.editingTextId ? e.texts.find((p) => p.id === e.editingTextId) : null));
	function s() {
		e.onClose();
	}
	function a(p, v, m) {
		if (!v) return;
		const y = v.getNode ? v.getNode() : v.node || v._node;
		if (!y) return;
		const d = y.container().getBoundingClientRect(),
			E = m / 100;
		setTimeout(() => {
			F(r) &&
				((F(r).style.left = d.left + p.x * E + 'px'),
				(F(r).style.top = d.top + p.y * E + 'px'),
				(F(r).style.width = Math.max((p.width || 150) * E, 100) + 'px'),
				(F(r).style.fontSize = p.fontSize * E + 'px'),
				F(r).focus(),
				F(r).select());
		}, 10);
	}
	var l = wa(),
		u = Nn(l);
	{
		var h = (p) => {
			var v = Z1();
			Wt(v),
				(v.__input = [J1, e]),
				(v.__keydown = [K1, e]),
				Vr(
					v,
					(m) => Ne(r, m),
					() => F(r)
				),
				gt(() => {
					Sa(v, F(i).text),
						qr(
							v,
							`position: absolute; font-family: ${F(i).fontFamily ?? ''}; font-size: ${F(i).fontSize ?? ''}px; font-weight: ${F(i).fontWeight ?? ''}; color: ${F(i).fill ?? ''}; background: white; border: 2px solid #3b82f6; border-radius: 4px; padding: 4px; z-index: 1000; outline: none;`
						);
				}),
				Rl('blur', v, s),
				We(p, v);
		};
		Nt(u, (p) => {
			e.editingTextId && F(i) && p(h);
		});
	}
	return We(n, l), wr({ positionInput: a });
}
en(['input', 'keydown']);
function $1(n) {
	return function (r, i) {
		const s = i.target,
			a = n / 100;
		$c(r.id, s.x() / a, s.y() / a), $r.pushState();
	};
}
function ed(n, e) {
	return function (i) {
		if (!i.evt.ctrlKey && !i.evt.metaKey) return;
		i.evt.preventDefault(), i.evt.stopPropagation();
		const s = n();
		if (!s) {
			console.log('No stage ref available');
			return;
		}
		console.log('Canvas zoom triggered');
		const a = s.node;
		if (!a || !a.scaleX) {
			console.log('Konva stage not available or scaleX method not found');
			return;
		}
		const l = a.scaleX(),
			u = a.getPointerPosition();
		if (!u) return;
		const h = 1.1,
			p = i.evt.deltaY > 0 ? l / h : l * h,
			v = Math.max(0.25, Math.min(5, p)),
			m = { x: (u.x - a.x()) / l, y: (u.y - a.y()) / l },
			y = { x: u.x - m.x * v, y: u.y - m.y * v };
		a.scale({ x: v, y: v }), a.position(y), e(v * 100);
	};
}
function td() {
	let n = !1,
		e = { x: 0, y: 0 },
		r = null;
	return {
		handleMouseDown: (u) => {
			(u.evt.button === 1 || (u.evt.button === 0 && u.evt.altKey)) &&
				((n = !0), (e = { x: u.evt.clientX, y: u.evt.clientY }), u.evt.preventDefault());
		},
		handleMouseMove: (u) => {
			if (!n || !r) return;
			const h = u.evt.clientX - e.x,
				p = u.evt.clientY - e.y,
				v = r,
				m = v.position();
			v.position({ x: m.x + h, y: m.y + p }), (e = { x: u.evt.clientX, y: u.evt.clientY });
		},
		handleMouseUp: () => {
			n = !1;
		},
		setStageRef: (u) => {
			r = u;
		}
	};
}
const dn = {
	Fill: 'fill',
	Stroke: 'stroke',
	StrokeWidth: 'strokeWidth',
	Opacity: 'opacity',
	FontFamily: 'fontFamily',
	FontSize: 'fontSize',
	Brightness: 'brightness',
	Contrast: 'contrast'
};
function Au(n, e) {
	zl(n, {
		get value() {
			return e.value;
		},
		get onUpdate() {
			return e.onUpdate;
		}
	});
}
var rd = (n, e) => Ne(e, !F(e)),
	nd = (n, e, r) => e(F(r)),
	id = Xe(
		'<button type="button" class="w-full px-3 py-2 text-left hover:bg-primary hover:text-black rounded flex items-center justify-center"><div class="w-6 bg-primary"></div></button>'
	),
	ad = Xe(
		'<div class="fixed w-32 bg-background-panel border border-primary rounded-lg shadow-lg z-[999999]"></div>'
	),
	od = (n, e) => Ne(e, !1),
	sd = Xe('<div class="fixed inset-0 z-[999998]"></div>'),
	ld = Xe(
		'<div class="flex items-center gap-4"><!> <div class="relative"><button type="button" class="flex items-center gap-2 px-3 py-1.5 text-sm border border-primary rounded hover:bg-primary hover:text-black focus:outline-none focus:ring-2 focus:ring-purple-500"><div class="w-6 h-px bg-primary"></div> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 12,15 18,9"></polyline></svg></button> <!> <!></div></div>'
	);
function Su(n, e) {
	yr(e, !0);
	let r = ut(!1),
		i = ut(void 0);
	const s = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20];
	function a(P) {
		e.onUpdateWidth(P), Ne(r, !1);
	}
	var l = ld(),
		u = be(l);
	zl(u, {
		get value() {
			return e.color;
		},
		get onUpdate() {
			return e.onUpdateColor;
		},
		get type() {
			return va.Border;
		}
	});
	var h = xe(u, 2),
		p = be(h);
	p.__click = [rd, r];
	var v = be(p),
		m = xe(v, 2);
	ve(p),
		Vr(
			p,
			(P) => Ne(i, P),
			() => F(i)
		);
	var y = xe(p, 2);
	{
		var d = (P) => {
			var _ = ad();
			const j = St(() => {
				var O;
				return (O = F(i)) == null ? void 0 : O.getBoundingClientRect();
			});
			Wn(
				_,
				21,
				() => s,
				Si,
				(O, G) => {
					var W = id();
					W.__click = [nd, a, G];
					var oe = be(W);
					ve(W), gt(() => qr(oe, `height: ${F(G) ?? ''}px;`)), We(O, W);
				}
			),
				ve(_),
				gt(() =>
					qr(_, `top: ${F(j) ? F(j).bottom + 4 : 0}px; left: ${(F(j) ? F(j).left : 0) ?? ''}px;`)
				),
				We(P, _);
		};
		Nt(y, (P) => {
			F(r) && P(d);
		});
	}
	var E = xe(y, 2);
	{
		var N = (P) => {
			var _ = sd();
			(_.__click = [od, r]), We(P, _);
		};
		Nt(E, (P) => {
			F(r) && P(N);
		});
	}
	ve(h),
		ve(l),
		gt(() => {
			qr(v, `height: ${e.width ?? ''}px;`),
				tt(m, 0, `transition-transform ${F(r) ? 'rotate-180' : ''}`);
		}),
		We(n, l),
		wr();
}
en(['click']);
var cd = (n, e) => {
		const r = +n.target.value;
		e.onUpdate(r);
	},
	ud = Xe(
		'<div class="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary"><circle cx="12" cy="12" r="8" opacity="0.3"></circle><circle cx="12" cy="12" r="5" opacity="0.6"></circle><circle cx="12" cy="12" r="2" opacity="1"></circle></svg> <input id="opacity" type="range" min="0" max="1" step="0.01" class="w-20 focus:outline-none focus:ring-2 focus:ring-purple-500"/> <span class="text-sm text-text-muted w-8"> </span></div>'
	);
function Gl(n, e) {
	yr(e, !0);
	var r = ud(),
		i = xe(be(r), 2);
	Wt(i), (i.__input = [cd, e]);
	var s = xe(i, 2),
		a = be(s);
	ve(s),
		ve(r),
		gt(
			(l) => {
				Sa(i, e.value), Fr(a, `${l ?? ''}%`);
			},
			[() => Math.round(e.value * 100)]
		),
		We(n, r),
		wr();
}
en(['input']);
var fd = Xe(
	'<div class="flex items-center gap-4"><!> <div class="h-6 w-px bg-primary"></div> <!> <div class="h-6 w-px bg-primary"></div> <!></div>'
);
function Sn(n, e) {
	yr(e, !0);
	var r = fd(),
		i = be(r);
	Au(i, {
		get value() {
			return e.element.fill;
		},
		onUpdate: (u) => e.updateProperty(dn.Fill, u)
	});
	var s = xe(i, 4);
	Su(s, {
		get color() {
			return e.element.stroke;
		},
		get width() {
			return e.element.strokeWidth;
		},
		onUpdateColor: (u) => e.updateProperty(dn.Stroke, u),
		onUpdateWidth: (u) => e.updateProperty(dn.StrokeWidth, u)
	});
	var a = xe(s, 4);
	const l = St(() => e.element.opacity || 1);
	Gl(a, {
		get value() {
			return F(l);
		},
		onUpdate: (u) => e.updateProperty(dn.Opacity, u)
	}),
		ve(r),
		We(n, r),
		wr();
}
const Lt = {
	Circle: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<circle cx="12" cy="12" r="10" stroke-width="2"/>
	</svg>`,
	Rectangle: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke-width="2"/>
	</svg>`,
	Square: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<rect x="4" y="4" width="16" height="16" rx="2" ry="2" stroke-width="2"/>
	</svg>`,
	Triangle: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M12 2 L22 20 L2 20 Z" stroke-width="2"/>
	</svg>`,
	Pentagon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M12 2 L22 9 L18 20 L6 20 L2 9 Z" stroke-width="2"/>
	</svg>`,
	Hexagon: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M17 3 L21 9 L21 15 L17 21 L7 21 L3 15 L3 9 L7 3 Z" stroke-width="2"/>
	</svg>`,
	Star: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z" stroke-width="2"/>
	</svg>`,
	Diamond: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M6 3 H18 L22 9 L12 21 L2 9 Z" stroke-width="2"/>
	</svg>`,
	Arrow: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M5 12 L19 12" stroke-width="2"/>
		<path d="M12 5 L19 12 L12 19" stroke-width="2"/>
	</svg>`,
	Heart: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke-width="2"/>
	</svg>`,
	Cross: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M12 2 L12 22" stroke-width="2"/>
		<path d="M2 12 L22 12" stroke-width="2"/>
	</svg>`,
	Heading: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M6 4 L6 20" stroke-width="2"/>
		<path d="M18 4 L18 20" stroke-width="2"/>
		<path d="M6 12 L18 12" stroke-width="2"/>
	</svg>`,
	Paragraph: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M3 6 L21 6" stroke-width="2"/>
		<path d="M3 12 L21 12" stroke-width="2"/>
		<path d="M3 18 L15 18" stroke-width="2"/>
	</svg>`,
	Label: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" stroke-width="2"/>
		<circle cx="7" cy="7" r="1"/>
	</svg>`,
	SpeechBubble: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke-width="2"/>
	</svg>`,
	TextBanner: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<path d="M4 12 L2 10 L4 8 L20 8 L22 10 L20 12 L22 14 L20 16 L4 16 L2 14 Z" stroke-width="2"/>
		<path d="M8 10 L16 10" stroke-width="1"/>
		<path d="M8 14 L16 14" stroke-width="1"/>
	</svg>`,
	Image: `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
		<rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke-width="2"/>
		<circle cx="8.5" cy="8.5" r="1.5"/>
		<path d="M21 15 L16 10 L5 21" stroke-width="2"/>
	</svg>`
};
function hd() {
	qt.register({
		type: Mt.Shape,
		subType: Gt.Circle,
		name: 'Circle',
		icon: Lt.Circle,
		description: 'Perfect circle',
		category: Vt.Shapes,
		editPanel: { component: Sn, title: 'Circle Properties', icon: Lt.Circle },
		konvaComponent: Of,
		defaultProps: {
			radius: 30,
			fill: At.DefaultFill,
			stroke: At.DefaultStroke,
			strokeWidth: 2,
			draggable: !0
		}
	}),
		qt.register({
			type: Mt.Shape,
			subType: Gt.Rectangle,
			name: 'Rectangle',
			icon: Lt.Rectangle,
			description: 'Basic rectangle shape',
			category: Vt.Shapes,
			editPanel: { component: Sn, title: 'Rectangle Properties', icon: Lt.Rectangle },
			konvaComponent: Lc,
			defaultProps: {
				width: 60,
				height: 40,
				fill: At.DefaultFill,
				stroke: At.DefaultStroke,
				strokeWidth: 2,
				draggable: !0
			}
		}),
		qt.register({
			type: Mt.Shape,
			subType: Gt.Square,
			name: 'Square',
			icon: Lt.Square,
			description: 'Perfect square',
			category: Vt.Shapes,
			editPanel: { component: Sn, title: 'Square Properties', icon: Lt.Square },
			konvaComponent: Lc,
			defaultProps: {
				size: 50,
				fill: At.DefaultFill,
				stroke: At.DefaultStroke,
				strokeWidth: 2,
				draggable: !0
			}
		}),
		qt.register({
			type: Mt.Shape,
			subType: Gt.Triangle,
			name: 'Triangle',
			icon: Lt.Triangle,
			description: 'Triangle shape',
			category: Vt.Shapes,
			editPanel: { component: Sn, title: 'Triangle Properties', icon: Lt.Triangle },
			konvaComponent: ol,
			defaultProps: {
				sides: 3,
				radius: 35,
				fill: At.DefaultFill,
				stroke: At.DefaultStroke,
				strokeWidth: 2,
				draggable: !0
			}
		}),
		qt.register({
			type: Mt.Shape,
			subType: Gt.Pentagon,
			name: 'Pentagon',
			icon: Lt.Pentagon,
			description: '5-sided polygon',
			category: Vt.Shapes,
			editPanel: { component: Sn, title: 'Pentagon Properties', icon: Lt.Pentagon },
			konvaComponent: ol,
			defaultProps: {
				sides: 5,
				radius: 35,
				fill: At.DefaultFill,
				stroke: At.DefaultStroke,
				strokeWidth: 2,
				draggable: !0
			}
		}),
		qt.register({
			type: Mt.Shape,
			subType: Gt.Hexagon,
			name: 'Hexagon',
			icon: Lt.Hexagon,
			description: '6-sided polygon',
			category: Vt.Shapes,
			editPanel: { component: Sn, title: 'Hexagon Properties', icon: Lt.Hexagon },
			konvaComponent: ol,
			defaultProps: {
				sides: 6,
				radius: 35,
				fill: At.DefaultFill,
				stroke: At.DefaultStroke,
				strokeWidth: 2,
				draggable: !0
			}
		}),
		qt.register({
			type: Mt.Shape,
			subType: Gt.Star,
			name: 'Star',
			icon: Lt.Star,
			description: '5-point star',
			category: Vt.Shapes,
			editPanel: { component: Sn, title: 'Star Properties', icon: Lt.Star },
			konvaComponent: Rf,
			defaultProps: {
				numPoints: 5,
				innerRadius: 20,
				outerRadius: 40,
				fill: At.DefaultFill,
				stroke: At.DefaultStroke,
				strokeWidth: 2,
				draggable: !0
			}
		}),
		qt.register({
			type: Mt.Shape,
			subType: Gt.Diamond,
			name: 'Diamond',
			icon: Lt.Diamond,
			description: 'Diamond shape',
			category: Vt.Shapes,
			editPanel: { component: Sn, title: 'Diamond Properties', icon: Lt.Diamond },
			konvaComponent: sl,
			defaultProps: {
				width: 40,
				height: 60,
				fill: At.DefaultFill,
				stroke: At.DefaultStroke,
				strokeWidth: 2,
				draggable: !0
			}
		}),
		qt.register({
			type: Mt.Shape,
			subType: Gt.Ellipse,
			name: 'Ellipse',
			icon: Lt.Circle,
			description: 'Oval shape',
			category: Vt.Shapes,
			editPanel: { component: Sn, title: 'Ellipse Properties', icon: Lt.Circle },
			konvaComponent: qf,
			defaultProps: {
				radiusX: 50,
				radiusY: 30,
				fill: At.DefaultFill,
				stroke: At.DefaultStroke,
				strokeWidth: 2,
				draggable: !0
			}
		}),
		qt.register({
			type: Mt.Shape,
			subType: Gt.Arrow,
			name: 'Arrow',
			icon: Lt.Arrow,
			description: 'Arrow pointer',
			category: Vt.Shapes,
			editPanel: { component: Sn, title: 'Arrow Properties', icon: Lt.Arrow },
			konvaComponent: zf,
			defaultProps: {
				points: [0, 0, 60, 0],
				pointerLength: 15,
				pointerWidth: 10,
				fill: At.DefaultFill,
				stroke: At.DefaultStroke,
				strokeWidth: 2,
				draggable: !0
			}
		}),
		qt.register({
			type: Mt.Shape,
			subType: Gt.Heart,
			name: 'Heart',
			icon: Lt.Heart,
			description: 'Heart shape',
			category: Vt.Shapes,
			editPanel: { component: Sn, title: 'Heart Properties', icon: Lt.Heart },
			konvaComponent: sl,
			defaultProps: {
				width: 50,
				height: 45,
				fill: At.DefaultFill,
				stroke: At.DefaultStroke,
				strokeWidth: 2,
				draggable: !0
			}
		}),
		qt.register({
			type: Mt.Shape,
			subType: Gt.Cross,
			name: 'Cross',
			icon: Lt.Cross,
			description: 'Cross shape',
			category: Vt.Shapes,
			editPanel: { component: Sn, title: 'Cross Properties', icon: Lt.Cross },
			konvaComponent: sl,
			defaultProps: {
				width: 50,
				height: 50,
				thickness: 15,
				fill: At.DefaultFill,
				stroke: At.DefaultStroke,
				strokeWidth: 2,
				draggable: !0
			}
		});
}
var dd = (n, e) => e.updateProperty(dn.FontFamily, n.target.value),
	pd = (n, e) => e.updateProperty(dn.FontSize, +n.target.value),
	gd = Xe(
		'<div class="flex items-center gap-4"><div class="flex items-center gap-2"><label for="font-family-select" class="sr-only">Font family</label> <select id="font-family-select" class="rounded border border-primary px-2 py-1 text-sm" aria-label="Choose font family"><option>Arial</option><option>Helvetica</option><option>Times New Roman</option><option>Georgia</option><option>Courier New</option></select></div> <div class="flex items-center gap-2"><label for="font-size-input" class="sr-only">Font size</label> <input id="font-size-input" type="number" min="8" max="200" class="w-16 rounded border border-primary px-2 py-1 text-sm" aria-label="Font size in pixels"/></div> <div class="h-6 w-px bg-primary"></div> <!> <div class="h-6 w-px bg-primary"></div> <!> <div class="h-6 w-px bg-primary"></div> <!></div>'
	);
function ao(n, e) {
	yr(e, !0);
	var r = gd(),
		i = be(r),
		s = xe(be(i), 2);
	Jc(s, () => e.element.fontFamily);
	var a;
	s.__change = [dd, e];
	var l = be(s);
	l.value = l.__value = 'Arial';
	var u = xe(l);
	u.value = u.__value = 'Helvetica';
	var h = xe(u);
	h.value = h.__value = 'Times New Roman';
	var p = xe(h);
	p.value = p.__value = 'Georgia';
	var v = xe(p);
	(v.value = v.__value = 'Courier New'), ve(s), ve(i);
	var m = xe(i, 2),
		y = xe(be(m), 2);
	Wt(y), (y.__input = [pd, e]), ve(m);
	var d = xe(m, 4);
	Au(d, {
		get value() {
			return e.element.fill;
		},
		onUpdate: (O) => e.updateProperty(dn.Fill, O)
	});
	var E = xe(d, 4);
	const N = St(() => e.element.stroke || '#000000'),
		P = St(() => e.element.strokeWidth || 0);
	Su(E, {
		get color() {
			return F(N);
		},
		get width() {
			return F(P);
		},
		onUpdateColor: (O) => e.updateProperty(dn.Stroke, O),
		onUpdateWidth: (O) => e.updateProperty(dn.StrokeWidth, O)
	});
	var _ = xe(E, 4);
	const j = St(() => e.element.opacity || 1);
	Gl(_, {
		get value() {
			return F(j);
		},
		onUpdate: (O) => e.updateProperty(dn.Opacity, O)
	}),
		ve(r),
		gt(() => {
			a !== (a = e.element.fontFamily) &&
				((s.value = (s.__value = e.element.fontFamily) ?? ''), Kc(s, e.element.fontFamily)),
				Sa(y, e.element.fontSize);
		}),
		We(n, r),
		wr();
}
en(['change', 'input']);
function vd() {
	qt.register({
		type: Mt.Text,
		subType: ro.Heading,
		name: 'Heading',
		icon: Lt.Heading,
		description: 'Large heading text',
		category: Vt.Text,
		editPanel: { component: ao, title: 'Heading Properties', icon: Lt.Heading },
		konvaComponent: ga,
		defaultProps: {
			text: 'Heading',
			fontFamily: 'Arial',
			fontSize: 32,
			fontWeight: 'bold',
			textAlign: 'left',
			fill: At.Black,
			stroke: At.Transparent,
			strokeWidth: 0,
			draggable: !0,
			opacity: 1,
			padding: 8,
			width: 200,
			height: 50
		}
	}),
		qt.register({
			type: Mt.Text,
			subType: ro.Paragraph,
			name: 'Body',
			icon: Lt.Paragraph,
			description: 'Body text paragraph',
			category: Vt.Text,
			editPanel: { component: ao, title: 'Body Properties', icon: Lt.Paragraph },
			konvaComponent: ga,
			defaultProps: {
				text: 'Your text here',
				fontFamily: 'Arial',
				fontSize: 16,
				fontWeight: 'normal',
				textAlign: 'left',
				fill: At.Black,
				stroke: At.Transparent,
				strokeWidth: 0,
				draggable: !0,
				opacity: 1,
				padding: 6,
				width: 180,
				height: 30
			}
		}),
		qt.register({
			type: Mt.Text,
			subType: ro.Caption,
			name: 'Caption',
			icon: Lt.Label,
			description: 'Small caption text',
			category: Vt.Text,
			editPanel: { component: ao, title: 'Caption Properties', icon: Lt.Label },
			konvaComponent: ga,
			defaultProps: {
				text: 'Caption',
				fontFamily: 'Arial',
				fontSize: 12,
				fontWeight: 'normal',
				textAlign: 'left',
				fill: At.Gray,
				stroke: At.Transparent,
				strokeWidth: 0,
				draggable: !0,
				opacity: 1,
				padding: 4,
				width: 120,
				height: 20
			}
		}),
		qt.register({
			type: Mt.Text,
			subType: ro.SpeechBubble,
			name: 'Speech Bubble',
			icon: Lt.SpeechBubble,
			description: 'Text in a speech bubble',
			category: Vt.Text,
			editPanel: { component: ao, title: 'Speech Bubble Properties', icon: Lt.SpeechBubble },
			konvaComponent: ga,
			defaultProps: {
				text: 'Hello!',
				fontFamily: 'Arial',
				fontSize: 16,
				fontWeight: 'normal',
				textAlign: 'center',
				fill: At.Black,
				stroke: At.Black,
				strokeWidth: 2,
				draggable: !0,
				opacity: 1,
				padding: 16,
				width: 120,
				height: 60,
				bubbleStyle: 'round',
				tailDirection: 'bottom-left'
			}
		}),
		qt.register({
			type: Mt.Text,
			subType: ro.TextBanner,
			name: 'Text Banner',
			icon: Lt.TextBanner,
			description: 'Text in a decorative banner',
			category: Vt.Text,
			editPanel: { component: ao, title: 'Text Banner Properties', icon: Lt.TextBanner },
			konvaComponent: ga,
			defaultProps: {
				text: 'BANNER TEXT',
				fontFamily: 'Arial',
				fontSize: 18,
				fontWeight: 'bold',
				textAlign: 'center',
				fill: At.White,
				stroke: At.Black,
				strokeWidth: 1,
				draggable: !0,
				opacity: 1,
				padding: 12,
				width: 200,
				height: 50,
				bannerStyle: 'ribbon',
				curved: !1
			}
		});
}
var md = (n, e) => e.updateProperty(dn.Brightness, +n.target.value),
	bd = (n, e) => e.updateProperty(dn.Contrast, +n.target.value),
	yd = Xe(
		'<div class="flex items-center gap-4"><!> <div class="h-6 w-px bg-primary"></div> <div class="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg> <input type="range" min="-1" max="1" step="0.01" class="w-20"/> <span class="text-xs text-text-muted w-8"> </span></div> <div class="h-6 w-px bg-primary"></div> <div class="flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-primary"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a10 10 0 0 0 0 20v-20z" fill="currentColor"></path></svg> <input type="range" min="-1" max="1" step="0.01" class="w-20"/> <span class="text-xs text-text-muted w-8"> </span></div></div>'
	);
function wd(n, e) {
	yr(e, !0);
	var r = yd(),
		i = be(r);
	const s = St(() => e.element.opacity || 1);
	Gl(i, {
		get value() {
			return F(s);
		},
		onUpdate: (d) => e.updateProperty(dn.Opacity, d)
	});
	var a = xe(i, 4),
		l = xe(be(a), 2);
	Wt(l), (l.__input = [md, e]);
	var u = xe(l, 2),
		h = be(u, !0);
	ve(u), ve(a);
	var p = xe(a, 4),
		v = xe(be(p), 2);
	Wt(v), (v.__input = [bd, e]);
	var m = xe(v, 2),
		y = be(m, !0);
	ve(m),
		ve(p),
		ve(r),
		gt(
			(d, E) => {
				Sa(l, e.element.brightness || 0), Fr(h, d), Sa(v, e.element.contrast || 0), Fr(y, E);
			},
			[
				() => Math.round((e.element.brightness || 0) * 100),
				() => Math.round((e.element.contrast || 0) * 100)
			]
		),
		We(n, r),
		wr();
}
en(['input']);
function xd() {
	qt.register({
		type: Mt.Image,
		subType: tu.Upload,
		name: 'Upload Image',
		icon: Lt.Image,
		description: 'Upload and add an image',
		category: Vt.Images,
		editPanel: { component: wd, title: 'Image Properties', icon: Lt.Image },
		konvaComponent: Uf,
		defaultProps: {
			width: 100,
			height: 100,
			draggable: !0,
			opacity: 1,
			scaleX: 1,
			scaleY: 1,
			rotation: 0
		}
	});
}
function _d() {
	hd(), vd(), xd();
}
const Ld = () => {
		const n = Wf;
		return {
			page: { subscribe: n.page.subscribe },
			navigating: { subscribe: n.navigating.subscribe },
			updated: n.updated
		};
	},
	Ad = {
		subscribe(n) {
			return Ld().page.subscribe(n);
		}
	};
var Sd = Xe('<div><div class="flex h-full items-center gap-6 overflow-x-auto"><!></div></div>'),
	Nd = Xe(
		'<div><!> <!> <div class="fixed left-0 z-30" style="top: 112px; bottom: 0;"><!></div> <div class="flex h-full flex-col"><div class="fixed z-20"><!></div> <div class="pt-8 px-4 pb-4"><!></div></div> <!> <!></div>'
	);
function Bd(n, e) {
	yr(e, !0);
	const [r, i] = Xc(),
		s = () => Ri(ii, '$elements', r),
		a = () => Ri(Ad, '$page', r),
		l = () => Ri(br, '$zineStore', r),
		u = () => Ri(Yf, '$authStore', r),
		h = () => Ri($r, '$history', r);
	_d();
	let p = ut(!1),
		v = ut(null),
		m,
		y = ut(void 0),
		d = ut(ni([])),
		E = ut(void 0);
	function N(we) {
		Ne(y, we, !0);
	}
	let P = ut(null),
		_ = ut('Design Canvas'),
		j = ut(!1),
		O = ut(null),
		G = ut(ni(Ht.IDLE)),
		W = ut(!1),
		oe = null,
		ee = ut('#ffffff'),
		z = ut(!1),
		re = ut(100),
		de = ut(500),
		C = ut(400);
	const L = St(() => (F(v) && s().find((we) => we.id === F(v))) || null),
		q = St(() => !!F(L)),
		B = St(() => $1(F(re))),
		Z = ed(
			() => F(y),
			(we) => Ne(re, we, !0)
		),
		Q = td();
	Yt(() => {
		F(y) && Q.setStageRef(F(y));
	}),
		Yt(() => {
			F(v) && !F(L) && Ne(v, null);
		}),
		Yt(() => {
			const we = a().url.searchParams.get('id');
			we && we !== F(O)
				? (Ne(O, we, !0), Fe(we))
				: !we &&
					F(O) &&
					(Ne(O, null),
					Ne(_, 'Design Canvas'),
					br.reset(),
					Ne(v, null),
					$r.reset(),
					Ne(G, Ht.IDLE, !0));
		}),
		Yt(() => {
			const we = br.getCurrentPage(l());
			we &&
				(Ne(ee, we.canvasBackgroundColor, !0),
				Ne(de, we.canvasWidth, !0),
				Ne(C, we.canvasHeight, !0));
		}),
		Yt(() => {
			s(), F(ee), F(de), F(C), F(_), F(O) && !F(W) && F(G) !== Ht.SAVING && U();
		}),
		Yc(() => {
			Vf.checkAuth();
		}),
		Yt(() => {
			const we = u();
			!we.loading && !we.user && Gf('/');
		});
	const ie = St(() => dh(F(de), F(C))),
		K = ph(),
		le = gh((we) => Ne(v, we, !0)),
		ue = ih((we) => Ne(ee, we, !0)),
		Se = ah((we) => Ne(z, we, !0)),
		b = oh((we) => Ne(re, we, !0)),
		T = sh(
			(we) => Ne(de, we, !0),
			(we) => Ne(C, we, !0)
		),
		M = St(() => lh(F(de), F(C), (we) => Ne(re, we, !0))),
		H = ch((we) => Ne(v, we, !0)),
		V = uh((we) => Ne(_, we, !0)),
		te = St(() => vh(F(re)));
	let se = ut(void 0);
	function ce(we) {
		Ne(P, we.id, !0), F(se) && F(se).positionInput(we, F(y), F(re));
	}
	function Ce() {
		Ne(P, null);
	}
	function ye(we) {
		Ne(p, !0);
	}
	function Te() {
		Ne(p, !1);
	}
	async function Fe(we) {
		try {
			Ne(W, !0), Ne(G, Ht.IDLE, !0);
			const xt = ll(cl.DESIGNS.BY_ID(we)),
				Oe = await fetch(xt, ul.DEFAULT);
			if (!Oe.ok) {
				const It = await Oe.text();
				throw (
					(console.error('Load failed with response:', It),
					new Error(`Failed to load design: ${Oe.status} - ${It}`))
				);
			}
			const nt = await Oe.json();
			Ne(_, nt.title, !0),
				nt.pages && nt.pages.length > 0 ? br.importPages(nt.pages) : br.reset(),
				Ne(v, null),
				$r.reset(),
				Ne(G, Ht.SAVED, !0);
		} catch (xt) {
			console.error('Failed to load design:', xt), Ne(G, Ht.ERROR, !0);
		} finally {
			Ne(W, !1);
		}
	}
	async function Ue() {
		if (!u().user) {
			console.error('Cannot save: user not authenticated'), Ne(G, Ht.ERROR, !0);
			return;
		}
		if (!F(O)) return await pe();
		try {
			Ne(G, Ht.SAVING, !0);
			const xt = { title: F(_), pages: br.exportPages(l()) },
				Oe = ll(cl.DESIGNS.BY_ID(F(O))),
				nt = await fetch(Oe, { method: 'PUT', ...ul.WITH_JSON, body: JSON.stringify(xt) });
			if (!nt.ok) {
				const vt = await nt.text();
				throw (
					(console.error('Save failed with response:', vt),
					new Error(`Failed to save design: ${nt.status} - ${vt}`))
				);
			}
			const It = await nt.json();
			Ne(G, Ht.SAVED, !0),
				setTimeout(() => {
					F(G) === Ht.SAVED && Ne(G, Ht.IDLE, !0);
				}, 2e3);
		} catch (xt) {
			console.error('Failed to save design:', xt),
				Ne(G, Ht.ERROR, !0),
				setTimeout(() => {
					F(G) === Ht.ERROR && Ne(G, Ht.IDLE, !0);
				}, 5e3);
		}
	}
	async function pe() {
		if (!u().user) {
			console.error('Cannot create design: user not authenticated'), Ne(G, Ht.ERROR, !0);
			return;
		}
		try {
			Ne(G, Ht.SAVING, !0);
			const xt = { title: F(_), pages: br.exportPages(l()) },
				Oe = ll(cl.DESIGNS.BASE),
				nt = await fetch(Oe, { method: 'POST', ...ul.WITH_JSON, body: JSON.stringify(xt) });
			if (!nt.ok) {
				const Je = await nt.text();
				throw (
					(console.error('Create failed with response:', Je),
					new Error(`Failed to create design: ${nt.status} - ${Je}`))
				);
			}
			const It = await nt.json();
			console.log('New design created:', It), Ne(O, It.id, !0);
			const vt = new URL(window.location.href);
			vt.searchParams.set('id', It.id),
				window.history.replaceState({}, '', vt),
				console.log('URL updated to:', vt.toString()),
				Ne(G, Ht.SAVED, !0),
				setTimeout(() => {
					F(G) === Ht.SAVED && Ne(G, Ht.IDLE, !0);
				}, 2e3);
		} catch (xt) {
			console.error('Failed to create design:', xt),
				Ne(G, Ht.ERROR, !0),
				setTimeout(() => {
					F(G) === Ht.ERROR && Ne(G, Ht.IDLE, !0);
				}, 5e3);
		}
	}
	function U() {
		oe && clearTimeout(oe),
			(oe = setTimeout(() => {
				Ue();
			}, 2e3));
	}
	function rt() {
		oe && clearTimeout(oe), Ue();
	}
	function He(we) {
		(we.ctrlKey || we.metaKey) && we.key === 's' && (we.preventDefault(), rt());
	}
	var Pe = Nd();
	Rl('keydown', _f, He);
	var Ee = be(Pe);
	Hf(Ee, {});
	var Me = xe(Ee, 2);
	const je = St(() => $r.canUndo(h())),
		Ye = St(() => $r.canRedo(h()));
	X1(Me, {
		get title() {
			return F(_);
		},
		get onTitleChange() {
			return V;
		},
		onExportClick: () => Ne(j, !0),
		onUndo: () => $r.undo(),
		onRedo: () => $r.redo(),
		get canUndo() {
			return F(je);
		},
		get canRedo() {
			return F(Ye);
		},
		onSave: rt,
		get saveStatus() {
			return F(G);
		}
	});
	var Ze = xe(Me, 2),
		at = be(Ze);
	Th(at, {
		get isOpen() {
			return F(p);
		},
		get elementSelected() {
			return F(ie);
		},
		open: ye,
		close: Te,
		get clearCanvas() {
			return eu;
		}
	}),
		ve(Ze);
	var lt = xe(Ze, 2),
		ft = be(lt),
		bt = be(ft);
	{
		var Ge = (we) => {
				Bh(we, {
					get selectedElement() {
						return F(L);
					},
					get isVisible() {
						return F(q);
					},
					get onUpdateElement() {
						return K;
					},
					get onClose() {
						return le;
					}
				});
			},
			Qe = (we) => {
				var xt = Sd(),
					Oe = be(xt),
					nt = be(Oe);
				w2(nt, {
					get backgroundColor() {
						return F(ee);
					},
					get showGrid() {
						return F(z);
					},
					get zoom() {
						return F(re);
					},
					get canvasWidth() {
						return F(de);
					},
					get canvasHeight() {
						return F(C);
					},
					get onUpdateBackground() {
						return ue;
					},
					get onToggleGrid() {
						return Se;
					},
					get onUpdateZoom() {
						return b;
					},
					get onUpdateCanvasSize() {
						return T;
					},
					get onFitToWindow() {
						return F(M);
					},
					get onResetCanvas() {
						return H;
					}
				}),
					ve(Oe),
					ve(xt),
					gt(() => tt(xt, 1, `h-full ${$e.PanelBg} px-6 py-3 border-b border-border`)),
					We(we, xt);
			};
		Nt(bt, (we) => {
			F(L) ? we(Ge) : we(Qe, !1);
		});
	}
	ve(ft);
	var Be = xe(ft, 2),
		Jt = be(Be);
	Vr(
		F2(Jt, {
			onStageReady: N,
			get canvasZoom() {
				return F(re);
			},
			get showGrid() {
				return F(z);
			},
			get selectedId() {
				return F(v);
			},
			onStageClick: (we) => {
				we.target === we.target.getStage() && Ne(v, null);
			},
			get onWheel() {
				return Z;
			},
			get onMouseDown() {
				return Q.handleMouseDown;
			},
			get onMouseMove() {
				return Q.handleMouseMove;
			},
			get onMouseUp() {
				return Q.handleMouseUp;
			},
			get onElementDragEnd() {
				return F(B);
			},
			onElementClick: (we) => {
				Ne(v, we, !0), F(E) && F(E)();
			},
			onTextElementClick: (we) => {
				Ne(v, we, !0), F(E) && F(E)();
			},
			onTextElementDblClick: ce,
			get onTextElementDragEnd() {
				return F(te);
			},
			get updateTransformer() {
				return F(E);
			},
			set updateTransformer(we) {
				Ne(E, we, !0);
			},
			get stageRefs() {
				return F(d);
			},
			set stageRefs(we) {
				Ne(d, we, !0);
			}
		}),
		(we) => (m = we),
		() => m
	),
		ve(Be),
		ve(lt);
	var yt = xe(lt, 2);
	const ur = St(() => s().filter(Qc));
	Vr(
		Q1(yt, {
			get editingTextId() {
				return F(P);
			},
			get texts() {
				return F(ur);
			},
			onClose: Ce
		}),
		(we) => Ne(se, we, !0),
		() => F(se)
	);
	var Pt = xe(yt, 2);
	const Ft = St(() => F(d) || []),
		xr = St(() => l().pages || []);
	D1(Pt, {
		get isOpen() {
			return F(j);
		},
		get stageRefs() {
			return F(Ft);
		},
		get pages() {
			return F(xr);
		},
		get designTitle() {
			return F(_);
		},
		onClose: () => Ne(j, !1)
	}),
		ve(Pe),
		gt(() => {
			tt(Pe, 1, `fixed inset-0 ${$e.DarkBg}`),
				qr(lt, `margin-left: ${rs.SidebarClosedWidth}; margin-top: 112px;`),
				qr(
					ft,
					`top: 112px; left: ${rs.SidebarClosedWidth}; right: 0; height: ${rs.EditBarHeight};`
				),
				qr(Be, `margin-top: ${rs.EditBarHeight};`);
		}),
		We(n, Pe),
		wr(),
		i();
}
export { Bt as _, Bd as a };
