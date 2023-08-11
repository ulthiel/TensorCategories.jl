var documenterSearchIndex = {"docs":
[{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"using TensorCategories, Oscar","category":"page"},{"location":"Interface/Categories.html#Basics","page":"Categories","title":"Basics","text":"","category":"section"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"The Interface is naturally based on three abstract types which  have to be extended:","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"abstract type Category end\nabstract type Object end\nabstract type Morphism end","category":"page"},{"location":"Interface/Categories.html#Categories","page":"Categories","title":"Categories","text":"","category":"section"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"Categories without any additional structure do not need any  fields or methods. We follow the example of the category of finite sets.","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"struct FinSets <: Category end","category":"page"},{"location":"Interface/Categories.html#Objects","page":"Categories","title":"Objects","text":"","category":"section"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"Objects need at least one field parent for the parent category or a method parentreturning the respective category. Any other information needed to work with the objects is arbitrary.","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"struct FinSetObject <: Object\n    parent::FinSets\n    set::Set\nend","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"Here we wrap a set to an object.","category":"page"},{"location":"Interface/Categories.html#Morphisms","page":"Categories","title":"Morphisms","text":"","category":"section"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"Morphisms need to provide fields","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"domain\ncodomain","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"or methods","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"domain\ncodomain","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"For the category of sets we get","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"struct FinSetMorphism <: Morphism\n    domain::FinSetObject\n    codomain::FinSetObject\n    map\nend","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"Where one now can design any coding for a morphism of sets that fit the desired purpose.","category":"page"},{"location":"Interface/Categories.html#Required-Methods","page":"Categories","title":"Required Methods","text":"","category":"section"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"Necessary methods to implemented for morphisms, objects and categories are","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"compose(f::YourMorphism, g::YourMorphism)::YourMorphism returning the composition g circ f.\nid(X::YourObject)::YourMorphism returning the identity morphism on X.\nHom(X::YourObject, Y::YourObject)::AbstractHomSet constructing an object <:AbstractHomSet.","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"Here anything extending AbstractHomspace needs to provide the fields ","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"domain\ncodomain","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"or methods","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"domain\ncodomain.","category":"page"},{"location":"Interface/Categories.html#Additional-methods","page":"Categories","title":"Additional methods","text":"","category":"section"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"Your category might have more structure. For categories which are ","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"abelian\nmonoidal\ntensor","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"visit the corresponding chapter. The interface supports additionally the following constructions and operations.","category":"page"},{"location":"Interface/Categories.html#(Co)Products","page":"Categories","title":"(Co)Products","text":"","category":"section"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"For a list of objects X_1X_n methods for the product shall return an object representing the categorical product prod X_i together with the projection maps p_i colon prod X_i to X_i. ","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"product(X::YourObject...)::Tuple{YourObject, Vector{YourMorphism}}","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"You may only implement a binary version product(X,Y) in which case TensorCategories extends it automatically to a list-version. Keep in mind that this might be devastating to the runtime, since iteratively applying a binary product involves composing morphisms which most likely is expensive.","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"TensorCategories will also generate an infix operator ","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"×(X::YourObject, Y::YourObject)::YourObject","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"that only returns the object in question.","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"Dually the same applies for a coproduct  Xᵢ.","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"coproduct(X::YourObject...)::Tuple{YourObject, Vector{YourMorphism}}","category":"page"},{"location":"Interface/Categories.html#Initial-and-Terminal-Objects","page":"Categories","title":"Initial and Terminal Objects","text":"","category":"section"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"If a category has an initial and/or terminal object one can provide those.","category":"page"},{"location":"Interface/Categories.html","page":"Categories","title":"Categories","text":"initial_object(::Category)::Object\nterminal_object(::Category)::Object","category":"page"},{"location":"Interface/MonoidalCategories.html#Monoidal-Categories","page":"Monoidal Categories","title":"Monoidal Categories","text":"","category":"section"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"A monoidal category is a quintuplet (mathcal C otimes mathbb 1 a iota) where ","category":"page"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"mathcal C is a category\notimescolon mathcal C times mathcal C to mathcal Cis a bifunctor\na_XYZ colon (X otimes Y) otimes Z to X otimes (Y otimes Z) is a natural transformation\niota colon mathbb 1 otimes mathbb 1 to mathbb 1 is an isomorphism","category":"page"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"such that ","category":"page"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"<img src=\"https://i.upmath.me/svg/%5Cbegin%7Btikzcd%7D%0A%09%26%20%7B((W%20%5Cotimes%20X)%20%5Cotimes%20Y)%5Cotimes%20Z%7D%20%5C%5C%0A%09%7B(W%20%5Cotimes%20(X%20%5Cotimes%20Y))%20%5Cotimes%20Z%7D%20%26%26%20%7B(W%20%5Cotimes%20X)%20%5Cotimes%20(Y%5Cotimes%20Z)%7D%20%5C%5C%0A%09%7BW%20%5Cotimes%20((X%5Cotimes%20Y)%20%5Cotimes%20Z)%7D%20%26%26%20%7BW%20%5Cotimes%20(X%20%5Cotimes%20(Y%5Cotimes%20Z))%7D%0A%09%5Carrow%5B%22%7Ba_%7BW%2CX%2CY%7D%20%5Cotimes%20%5Cmathrm%7Bid%7D_Z%7D%22'%7Bpos%3D1%7D%2C%20shorten%20%3C%3D4pt%2C%20from%3D1-2%2C%20to%3D2-1%5D%0A%09%5Carrow%5B%22%7Ba_%7BW%2CX%5Cotimes%20Y%2CZ%7D%7D%22'%2C%20shift%20right%3D5%2C%20draw%3Dnone%2C%20from%3D2-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5Bfrom%3D2-1%2C%20to%3D3-1%5D%0A%09%5Carrow%5B%22%7B%5Cmathrm%7Bid%7D%5Cotimes%20a_%7BX%2CY%2CZ%7D%7D%22'%2C%20from%3D3-1%2C%20to%3D3-3%5D%0A%09%5Carrow%5B%22%7Ba_%7BW%5Cotimes%20X%2C%20Y%2CZ%7D%7D%22%7Bpos%3D0.8%7D%2C%20from%3D1-2%2C%20to%3D2-3%5D%0A%09%5Carrow%5B%22%7Ba_%7BW%2CX%2CY%5Cotimes%20Z%7D%7D%22%2C%20shift%20left%3D5%2C%20draw%3Dnone%2C%20from%3D2-3%2C%20to%3D3-3%5D%0A%09%5Carrow%5Bfrom%3D2-3%2C%20to%3D3-3%5D%0A%5Cend%7Btikzcd%7D\" alt=\"\\begin{tikzcd}\n\t&amp; {((W \\otimes X) \\otimes Y)\\otimes Z} \\\\\n\t{(W \\otimes (X \\otimes Y)) \\otimes Z} &amp;&amp; {(W \\otimes X) \\otimes (Y\\otimes Z)} \\\\\n\t{W \\otimes ((X\\otimes Y) \\otimes Z)} &amp;&amp; {W \\otimes (X \\otimes (Y\\otimes Z))}\n\t\\arrow[&quot;{a_{W,X,Y} \\otimes \\mathrm{id}_Z}&quot;'{pos=1}, shorten &lt;=4pt, from=1-2, to=2-1]\n\t\\arrow[&quot;{a_{W,X\\otimes Y,Z}}&quot;', shift right=5, draw=none, from=2-1, to=3-1]\n\t\\arrow[from=2-1, to=3-1]\n\t\\arrow[&quot;{\\mathrm{id}\\otimes a_{X,Y,Z}}&quot;', from=3-1, to=3-3]\n\t\\arrow[&quot;{a_{W\\otimes X, Y,Z}}&quot;{pos=0.8}, from=1-2, to=2-3]\n\t\\arrow[&quot;{a_{W,X,Y\\otimes Z}}&quot;, shift left=5, draw=none, from=2-3, to=3-3]\n\t\\arrow[from=2-3, to=3-3]\n\\end{tikzcd}\" />","category":"page"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"commutes for all objects WXYZ in mathcal C and","category":"page"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"beginalign*\n\tL_mathbb 1 colon  X to mathbb 1 otimes X \n\tR_mathbb 1 colon  X to X otimes mathbb 1\nendalign*","category":"page"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"are autoequivalences.","category":"page"},{"location":"Interface/MonoidalCategories.html#Conventions-and-Restrictions","page":"Monoidal Categories","title":"Conventions and Restrictions","text":"","category":"section"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"At the current state all monoidal categories are assumed to satisfy X otimes mathbb 1 cong X cong mathbb 1 otimes X and iota = mathrmid_mathbb 1","category":"page"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"But building non-strict monoidal categories is explicitly encouraged, as this support is a strength of our Package. ","category":"page"},{"location":"Interface/MonoidalCategories.html#Monoidal-Categories-2","page":"Monoidal Categories","title":"Monoidal Categories","text":"","category":"section"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"Following the definition we need the following methods.","category":"page"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"tensor_product(X::YourObject...)::YourObject returning the monoidal product. You can access your method by invoking the infix operate ⊗.\ntensor_product(f::YourMorphism...)::YourMorphism returning the the monoidal product of morphisms. You can access your method by invoking the infix operate ⊗.\none(C::YourCategory)::YourObject returning the monoidal unit.\nassociator(X::YourObject, Y::YourObject, Z::YourObject).","category":"page"},{"location":"Interface/MonoidalCategories.html#Rigidity","page":"Monoidal Categories","title":"Rigidity","text":"","category":"section"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"Whenever there are objects which admit duals it is feasible to acces them.","category":"page"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"left_dual(X::YourObject)::YourObject return the left dual X^ast.\nright_dual(X::YourObject)::YourObject return the right dual ^ast X.\nev(X::YourObject)::YourMorphism return the evaluation morphism mathrmev_Xcolon X^ast otimes X to mathbb 1.\ncoev(X::YourObject)::YourMorphism return the coevaluation morphism mathrmcoev_Xcolon mathbb 1 to Xotimes X^ast. ","category":"page"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"This allows to generically compute ","category":"page"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"left_dual(::Morphism)","category":"page"},{"location":"Interface/MonoidalCategories.html#TensorCategories.left_dual-Tuple{Morphism}","page":"Monoidal Categories","title":"TensorCategories.left_dual","text":"left_dual(f::Morphism)\n\nReturn the left dual of a morphism f.\n\n\n\n\n\n","category":"method"},{"location":"Interface/MonoidalCategories.html","page":"Monoidal Categories","title":"Monoidal Categories","text":"Note that dual will always call left_dual.","category":"page"},{"location":"Interface/AbelianCategories.html#Interface-for-Abelian-Categories","page":"Abelian Categories","title":"Interface for Abelian Categories","text":"","category":"section"},{"location":"Interface/AbelianCategories.html","page":"Abelian Categories","title":"Abelian Categories","text":"Abelian categories are all over the place and very important. Thus we provide an Interface for (pre)additive and abelian categories. First recall the definitions:","category":"page"},{"location":"Interface/AbelianCategories.html","page":"Abelian Categories","title":"Abelian Categories","text":"A preadditive category is a category mathcal C such that all Hom-spaces are abelian groups and composition is bilinear. As a consequence all finite products are biproducts, also called direct sums. ","category":"page"},{"location":"Interface/AbelianCategories.html","page":"Abelian Categories","title":"Abelian Categories","text":"Then mathcal C is called additive if it is preadditive and all finite products exist.","category":"page"},{"location":"Interface/AbelianCategories.html#Additivity","page":"Abelian Categories","title":"Additivity","text":"","category":"section"},{"location":"Interface/AbelianCategories.html","page":"Abelian Categories","title":"Abelian Categories","text":"To implement the preadditive structure you need the following methods","category":"page"},{"location":"Interface/AbelianCategories.html","page":"Abelian Categories","title":"Abelian Categories","text":"direct sum(X::YourObject...)::Tuple{YourObject, Vector{YourMorphism}, Yector{YourMorphism} returning the direct sum object, the inclusions and projections. You might only implement the binary operation while the package will compile a vector version. This might come with performance issues.\n+(f::YourMorphism, g::YourMorphism)::YourMorphism providing the addition on morphisms.\nzero_morphism(X::YourObject, Y::YourObject)::YourMorphism","category":"page"},{"location":"Interface/AbelianCategories.html","page":"Abelian Categories","title":"Abelian Categories","text":"To complete additivity there has to be a zero object.","category":"page"},{"location":"Interface/AbelianCategories.html","page":"Abelian Categories","title":"Abelian Categories","text":"zero(C::YourCategory)::YourObject","category":"page"},{"location":"Interface/AbelianCategories.html#Abelian-Categories","page":"Abelian Categories","title":"Abelian Categories","text":"","category":"section"},{"location":"Interface/AbelianCategories.html","page":"Abelian Categories","title":"Abelian Categories","text":"A category is called abelian if ","category":"page"},{"location":"Interface/AbelianCategories.html","page":"Abelian Categories","title":"Abelian Categories","text":"it is  additive,\nevery morphism has a kernel and cokernel,\nevery monomorphism and epimorphism is normal.","category":"page"},{"location":"Interface/AbelianCategories.html","page":"Abelian Categories","title":"Abelian Categories","text":"We need the following additional methods:","category":"page"},{"location":"Interface/AbelianCategories.html","page":"Abelian Categories","title":"Abelian Categories","text":"kernel(f::YourMorphism)::Tuple{YourObject, YourMorphism} providing the kernel tuple (kphi) for f colon X to Y where phi colon k hookrightarrow X is the embedding.\ncokernel(f::YourMorphism)::Tuple{YourObject, YourMorphism} providing the cokernel tuple (cpsi) for f colon X to Y where psi colon Y twoheadrightarrow c is the projection.","category":"page"},{"location":"Interface/AbelianCategories.html#Semisimple-Categories","page":"Abelian Categories","title":"Semisimple Categories","text":"","category":"section"},{"location":"Interface/AbelianCategories.html","page":"Abelian Categories","title":"Abelian Categories","text":"An abelian category is called semisimple if every object decomposes uniquely into a direct sum of simple objects. It might be useful to have the method","category":"page"},{"location":"Interface/AbelianCategories.html","page":"Abelian Categories","title":"Abelian Categories","text":"simples(C::YourCategory)::Vector{YourObject}","category":"page"},{"location":"Center.html#center","page":"The Center Construction","title":"The Center Construction","text":"","category":"section"},{"location":"References.html#References","page":"References","title":"References","text":"","category":"section"},{"location":"References.html","page":"References","title":"References","text":"","category":"page"},{"location":"Examples/TambaraYamagami.html#Tambara-Yamagami-Categories","page":"Tambara Yamagami Categories","title":"Tambara Yamagami Categories","text":"","category":"section"},{"location":"Examples/TambaraYamagami.html","page":"Tambara Yamagami Categories","title":"Tambara Yamagami Categories","text":"Tambara and Yamagami classified all near-group categories of multiplicity one over algebraically closed fields in Daisuke Tambara, Shigeru Yamagami (1998). ","category":"page"},{"location":"SixJCategories/SixJCategories.html#j_categories","page":"6j-Symbols","title":"Fusion Categories from 6j-Symbols","text":"","category":"section"},{"location":"Interface/TensorCategories.html#Tensor-Categories","page":"Tensor Categories","title":"Tensor Categories","text":"","category":"section"},{"location":"Interface/TensorCategories.html","page":"Tensor Categories","title":"Tensor Categories","text":"We call a category mathcal C k-linear for a commutative ring k if all Hom-spaces are k-modules and composition is k-bilinear. This implies need for a method ","category":"page"},{"location":"Interface/TensorCategories.html","page":"Tensor Categories","title":"Tensor Categories","text":"*(λ, f::YourMorphism)::YourMorphism returning the multiplication if a scalar λ.","category":"page"},{"location":"Interface/TensorCategories.html","page":"Tensor Categories","title":"Tensor Categories","text":"Now let k be a field. Then a multitensor category is a category mathcal C which is","category":"page"},{"location":"Interface/TensorCategories.html","page":"Tensor Categories","title":"Tensor Categories","text":"locally finite\nk-linear\nabelian\nrigid monoidal","category":"page"},{"location":"Interface/TensorCategories.html","page":"Tensor Categories","title":"Tensor Categories","text":"such that","category":"page"},{"location":"Interface/TensorCategories.html","page":"Tensor Categories","title":"Tensor Categories","text":"otimes\nis bilinear on morphisms.","category":"page"},{"location":"Interface/TensorCategories.html","page":"Tensor Categories","title":"Tensor Categories","text":"We call a multitensor category ","category":"page"},{"location":"Interface/TensorCategories.html","page":"Tensor Categories","title":"Tensor Categories","text":"tensor if additionally mathrmEnd(mathbb 1) = k,\nmultifusion if semisimple and finite and\nfusion if tensor, semisimple and finite.","category":"page"},{"location":"Interface/TensorCategories.html","page":"Tensor Categories","title":"Tensor Categories","text":"Thus to implement a one of the above one simply has to implement the interfaces which are part of the definition.","category":"page"},{"location":"Interface/TensorCategories.html#Multifusion-Categories","page":"Tensor Categories","title":"Multifusion Categories","text":"","category":"section"},{"location":"Interface/TensorCategories.html","page":"Tensor Categories","title":"Tensor Categories","text":"Semisimple k-linear abelian categories have such a structure that allows one to describe them up to equivalence by matrices. Let X_i mid i in mathcal I be the set of non-isomorphic simple objects in mathcal C. This we can establish an equivalence ","category":"page"},{"location":"Interface/TensorCategories.html","page":"Tensor Categories","title":"Tensor Categories","text":"$$ \\mathcal C \\cong \\bigoplus\\limits_{i ∈ \\mathcal I} \\mathrm{Vec}_k$$","category":"page"},{"location":"Interface/TensorCategories.html","page":"Tensor Categories","title":"Tensor Categories","text":"of abelian categories via X mapsto bigoplus mathrmHom(X_i X). For the detailed construction we refer to Daisuke Tambara, Shigeru Yamagami (1998).","category":"page"},{"location":"Interface/TensorCategories.html","page":"Tensor Categories","title":"Tensor Categories","text":"This basically implies that morphisms are merely matrices allowing us to efficiently compute thins like subobjects etc. Thus we want to choose any faithful functor ","category":"page"},{"location":"Interface/TensorCategories.html","page":"Tensor Categories","title":"Tensor Categories","text":"F colon mathcal C to mathrmVec_k\n\n\nto provide a method\n\n- matrix(fYourMorphism)MatElem\n\nThis will open acces to the following operations which are necessary for many computations with fusion categories like for example the computation of the categorical center(ref center)\n","category":"page"},{"location":"Interface/TensorCategories.html","page":"Tensor Categories","title":"Tensor Categories","text":"@docs eigenvalues simplesubobjects expressinbasis leftinverse right_inverse ``````","category":"page"},{"location":"index.html#TensorCategories.jl","page":"Home","title":"TensorCategories.jl","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"TensorCategories is a package under development with the intention to provide a framework as well a examples for computations in the realm of categories.","category":"page"},{"location":"index.html#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"You need to have Julia installed. For reliable results Julia version at least 1.6 is required. To use TensorCategories do the following:","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"julia> import Pkg\njulia> Pkg.add(url = \"https://github.com/FabianMaeurer/TensorCategories.jl\")","category":"page"},{"location":"index.html#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"To use TensorCategories the structures from the OSCAR-System are required. Here a minimal usage example.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"using TensorCategories, Oscar;\n\n# Define an Ising Fusion category\nI = Ising()\n\n# Define the categorical center\nC = Center(Ising())\n\n# Compute the S-matrix of the center\nS = smatrix(C)","category":"page"},{"location":"index.html#Acknowledgements","page":"Home","title":"Acknowledgements","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"This project was started under supervision of Prof. Ulrich Thiel  (University of Kaiserslautern). This work is a contribution to the SFB-TRR 195 'Symbolic Tools in Mathematics and their Application' of the German Research Foundation (DFG).","category":"page"},{"location":"Interface/Philosophy.html#The-Motivation","page":"Philosophy","title":"The Motivation","text":"","category":"section"},{"location":"Interface/Philosophy.html","page":"Philosophy","title":"Philosophy","text":"This package began its journey asking the question \"Can we play around  with explicit categorical entities in the computer?\".","category":"page"},{"location":"Interface/Philosophy.html","page":"Philosophy","title":"Philosophy","text":"By nature categorical operations and constructions are very generic and  can be applied as long as the objects (or morphisms) are fitting.  TensorCategories.jl provides an interface for categories with additional  structure, precisely additive, linear, abelian, monoidal, tensor and  fusion categories.","category":"page"},{"location":"Interface/Philosophy.html#Realizing-Categories-in-The-Computer","page":"Philosophy","title":"Realizing Categories in The Computer","text":"","category":"section"},{"location":"Interface/Philosophy.html","page":"Philosophy","title":"Philosophy","text":"Due to the nature of category theory the realization of certain categories  is very dependent on themselves. Thus the internal workings are generally  up to the developer. As long as the interface for the desired additional structures is implemented. ","category":"page"},{"location":"Interface/Philosophy.html","page":"Philosophy","title":"Philosophy","text":"Some kind of categories, i.e. fusion categories, are entirely described (up to equivalence) by discrete data known as 6j-symbols. Thus  for such categories we can provide a datatype SixJCategory  to quickly work with categories given by such data.","category":"page"},{"location":"Interface/Philosophy.html#Mathematical-Foundation","page":"Philosophy","title":"Mathematical Foundation","text":"","category":"section"},{"location":"Interface/Philosophy.html","page":"Philosophy","title":"Philosophy","text":"Throughout the package we will consider definitions and terminology as provided in Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, Victor Ostrik (2016).","category":"page"}]
}
