export abstract class Model {

	private id: string = "";

	public getId(): string {
		return this.id;
	}

	public setId(id): void {
		this.id = id;
	}
}
