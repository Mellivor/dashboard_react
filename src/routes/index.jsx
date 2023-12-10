import stile from "./index.module.css"

export default function Index() {
    return (
        <div className={stile.content}>
            <h1>Цей додаток створений для колишніх і теперішніх працівників Prettl UA</h1>
            <p id="zero-state">
                Тут ви зможете поділитись думками або щось продати.
            </p>
        </div>
    );
}
