
export default function cadastro() {
    return (

        <div className="App">
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-slate-900 lg:max-w-md">
                    <h1 className="text-3xl font-semibold text-center text-slate-900">FAÇA SEU CADASTRO</h1>

                    <form className="mt-6">
                        <div>
                            <label form="email" className="block text-sm text-gray-800">Seu Email</label>
                            <input type="email"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"></input>
                        </div>
                        <div className="mt-4">


                            <label form="password" className="block text-sm text-gray-800">Sua senha</label>
                            <input type="password"
                                className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"></input>
                        </div>
                        <div className="mt-4">


                            <label form="password" className="block text-sm text-gray-800">Seu telefone</label>
                            <input type="password"
                                className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"></input>
                        </div>

                        <div className="mt-6">
                            <button
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-slate-900 rounded-md hover:bg-slate-600 focus:outline-none focus:bg-purple-600">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>





    )
}