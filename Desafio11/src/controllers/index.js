const inicioSesion = (req, res) =>{       
        res.render('index.ejs')
}

const registro = (req, res)=>{
    req.session.user_data = req.body
    res.redirect('/perfil') 
}

 const perfil = (req, res)=>{
    const user = req.session.user_data
    delete req.session.user_data    
    res.render('perfil.ejs', {
        user
    })
} 

const logout = (req, res) =>{
    console.log(req.session.user_data);
    let user = req.session.user_data
    console.log(user);
    req.session.destroy()
    res.render('logout.ejs', {
        user
    })
}

export const controller = {inicioSesion, registro, perfil, logout}