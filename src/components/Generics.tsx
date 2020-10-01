import React from "react";
const makeArr = <T,>(x: T) => {
	return [x];
};
const v = makeArr(5);

// const v2 = makeArr("a", "b");
// const v3= makeArr<string | null, number>("a", 5);
const makeFullName = <T extends { firstName: string; lastName: string }>(
	obj: T
) => {
	return {
		...obj,
		fullName: obj.firstName + " " + obj.lastName,
	};
};

const v4 = makeFullName({ firstName: "bob", lastName: "junior", age: 15 });

type Props<DataItem> = {
	data: DataItem[];
	onRowClick: (item: DataItem) => void;
};

export const Table = <T,>({ data, onRowClick }: Props<T>) => {};

type Tab<T> = {
	id: string;
	position: number;
	data: T;
};

type NumberTab = Tab<number>;
