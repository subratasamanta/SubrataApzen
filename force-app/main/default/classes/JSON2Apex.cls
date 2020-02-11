public class JSON2Apex {

	public List<SObjects> sObjects;

	public class SObjects {
		public Integer count;
		public String name;
	}

	
	public static JSON2Apex parse(String json) {
		return (JSON2Apex) System.JSON.deserialize(json, JSON2Apex.class);
	}
}