interface PropsI {
  view: string
}
export const HeadForm = ({ view }: PropsI) => {
  return (
    <div className="mb-10 flex flex-col items-center space-y-4 lg:items-start">
      <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted/50 shadow-inner">
        <img
          src="/LOGO.png"
          alt="Mwana Mbok'Art"
          className="h-full w-full object-cover p-2"
          onError={(e) => {
            e.currentTarget.style.display = "none"
          }}
        />
      </div>

      <div className="text-center lg:text-left">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground">
          {view === "login" && "Espace de connexion"}
          {view === "forgot" && "Mot de passe oublié"}
          {view === "reset" && "Réinitialisation"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {view === "login" &&
            "Saisissez vos identifiants pour accéder à votre compte."}
          {view === "forgot" &&
            "Entrez votre e-mail pour recevoir un lien de récupération."}
          {view === "reset" &&
            "Créez un nouveau mot de passe sécurisé pour votre compte."}
        </p>
      </div>
    </div>
  )
}
